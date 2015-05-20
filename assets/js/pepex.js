var pepex = (function ($, pepe, mapc) {

	$('#canvas').drawImage({
		layer: true,
		name: 'pepex',
		groups: ['pepexall'],
		source: $('#pepex').get(0),

		x: pepe.pos.x,
		y: pepe.pos.y,

		//check if pass thru a gear
		animate: function (a) {
			var name = mapc.isGearIn(a.y, a.x);
			if (name != 'false'){
				pepe.engranajes ++;
				$('canvas').setLayer(name, {visible: false});
			}
		}
	});


	$('#canvas').drawImage({
		layer: true,
		groups: ['pepexall'],
		name: 'wayx',
		source: $('#wayx').get(0),

		x: pepe.pos.x,
		y: pepe.pos.y,
	});

	return {

		animateMove: function (x) {
			// move pape and way indicator
			$('#canvas').animateLayerGroup('pepexall', {
				x: pepe.pos.x, y: pepe.pos.y
			}, x * 70, 'easeOutBounce');
		},

		animateMoveFail: function () {
			// rotate pape and way indicator to indicate an error
			$('#canvas').animateLayerGroup('pepexall', {
				rotate: 360
			}, 1000, 'easeInOutBack');
		},

		animateWay: function (d) {
			// rotate the way indicator
			$('#canvas').animateLayer('wayx', {
				rotate: d
			}, 200, 'easeOutBounce').delayLayer('pepex', 200);
		}

	}

})($, pepe, mapc);

