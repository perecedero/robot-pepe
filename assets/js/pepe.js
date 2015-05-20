var pepe = (function ($, mapc) {

	var direction = 'oeste',
	pos = {
		x: mapc.sizes.x.min,
		y: mapc.sizes.y.min
	};

	return {

		pos: pos,

		engranajes: 0,

		mover: function (blocks){

			var steps = blocks * mapc.sizes.block;
			var oldpos = $.extend({},pos);

			switch (direction)
			{
				case 'norte':
					if( pos.y - steps >= mapc.sizes.x.min ) { pos.y -= steps; }
				break;
				case 'sur':
					if( pos.y + steps <= mapc.sizes.y.max ) { pos.y += steps; }
				break;
				case 'este':
					if( pos.x - steps >= mapc.sizes.x.min ) { pos.x -= steps; }
				break;
				case 'oeste':
					if( pos.x + steps <= mapc.sizes.x.max ) { pos.x += steps; }
				break;
			}

			if( JSON.stringify(oldpos) === JSON.stringify(pos)) {
				pepex.animateMoveFail();
			} else {
				pepex.animateMove(blocks);
			}
		},

		girar: function (to) {
			var d;

			if(to == 'derecha') {
				switch (direction) {
					case 'norte': direction = 'oeste'; break;
					case 'oeste': direction = 'sur'; break;
					case 'sur': direction = 'este'; break;
					case 'este': direction = 'norte'; break;
				}
				d = '+=90';
			} else {
				switch (direction) {
					case 'norte': direction = 'este'; break;
					case 'este': direction = 'sur'; break;
					case 'sur': direction = 'oeste'; break;
					case 'oeste': direction = 'norte'; break;
				}
				d = '-=90';
			}
			pepex.animateWay(d);
		}
	}

})($, mapc);

