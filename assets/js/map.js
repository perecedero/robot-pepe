var mapc = (function ($) {

	var sizes = {
		block: 64,
		y:{ min:65, max: 430},
		x:{ min:65, max: 1000},
		files: 6,
		rows: 15
	};

	var gearsmap = [];

	var populateGearsmap =  function () {
		var i, j, b = sizes.block;
		for (i=0; i < 6; i++) {
			for (j=0; j < 15; j++) {
				if ( Math.floor((Math.random() * 100) + 1) < 10  ) {
					gearsmap[(i * 15) + j] = 'gear' + i + j;
				} else {
					gearsmap[(i * 15) + j] = false;
				}
			}
		}
	}

	populateGearsmap();

	return {
		sizes:  sizes,

		gearsmap: function(x, y) {

			if(typeof x === 'undefined') {
				return gearsmap;
			} else if(typeof y === 'undefined') {
				return gearsmap[x];
			} else {
				gearsmap[x] = y
			}
		},

		isGearIn: function (y, x) {
			b = sizes.block;
			i = parseInt((y / b) -1);
			j = parseInt((x / b) -1);

			name = gearsmap[(i * 15) + j];

			if ( name != false){
				gearsmap[(i * 15) + j] = false;
			}

			return name;
		}
	}

})($);

