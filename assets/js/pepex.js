var PepeX = (function ($, MapX, window) {

	var pos = {x: MapX.size.x.min, y:MapX.size.y.min};
	var direction = 'oeste';

	$('#canvas').drawImage({
		layer: true,
		name: 'pepex',
		groups: ['pepexall'],
		source: $('#pepex').get(0),
		x: pos.x, y: pos.y,
		animate: function (a) {
			b = MapX.size.block;
			i = parseInt((a.y / b) -1);
			j = parseInt((a.x / b) -1);
			name = MapX.gearsmap((i *15) + j);
			if ( name != 'false'){
				MapX.gearsmap((i *15) + j,   false);
				PepeX.engranajes ++;
				$('canvas').setLayer(name, {visible: false});
			}
		}
	}).drawImage({
		layer: true,
		groups: ['pepexall'],
		name: 'wayx',
		source: $('#wayx').get(0),
		x: pos.x, y: pos.y,
	});

	animate  =  function (x) {
		// Animate layer properties
		$('#canvas').animateLayerGroup('pepexall', {
			x: pos.x, y: pos.y
		}, x * 70, 'easeOutBounce').delayLayer('pepex', 200);
	}

	animateFail  =  function () {
		// Animate layer properties
		$('#canvas').animateLayerGroup('pepexall', {
			rotate: 360
		}, 1000, 'easeInOutBack');
	}

	return {

		engranajes: 0,


		mover: function (blocks){

			var steps = blocks * MapX.size.block;
			var oldpos = $.extend({},pos);

			switch (direction)
			{
				case 'norte':
					if( pos.y - steps >= MapX.size.x.min ) { pos.y -= steps; }
				break;
				case 'sur':
					if( pos.y + steps <= MapX.size.y.max ) { pos.y += steps; }
				break;
				case 'este':
					if( pos.x - steps >= MapX.size.x.min ) { pos.x -= steps; }
				break;
				case 'oeste':
					if( pos.x + steps <= MapX.size.x.max ) { pos.x += steps; }
				break;
			}
			if( JSON.stringify(oldpos) === JSON.stringify(pos)) {
				animateFail();
			} else {
				animate(blocks);
			}
		},

		girar: function (to) {
			var d;

			if(to == 'derecha') {
				switch (direction) {
					case 'norte': direction = 'oeste';  d =  0;break;
					case 'oeste': direction = 'sur';   d =  90; break;
					case 'sur': direction = 'este';   d =  180; break;
					case 'este': direction = 'norte';   d =  270; break;
				}
			} else {
				switch (direction) {
					case 'norte': direction = 'este';  d =  -180;break;
					case 'este': direction = 'sur';  d =  -270;break;
					case 'sur': direction = 'oeste';  d =  -0;break;
					case 'oeste': direction = 'norte';  d =  -90;break;
				}
			}

			$('#canvas').animateLayer('wayx', {
				rotate: d
			}, 200, 'easeOutBounce');
		}
	}




})($, MapX, window);

