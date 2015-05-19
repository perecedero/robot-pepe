var MapX = (function ($) {

	$('#canvas').drawImage({
		layer: true,
		name: 'map',
		source: $('#mapx').get(0),
		x: 0, y:0, fromCenter: false
	});

	var gearsmap = [];

	var llenar =  function () {
		var i, j, b = size.block;
		for (i=0; i < 6; i++) {
			for (j=0; j < 15; j++) {

				if ( Math.floor((Math.random() * 100) + 1) < 10  ) {

					gearsmap[(i * 15) + j] = 'gear' + i + j;

					$('#canvas').drawImage({
						layer: true,
						name: 'gear' + i + j,
						source: $('#gearx').get(0),
						x: (j +1) * b , y: (i + 1) * b,


					});


				} else {
					gearsmap[(i * 15) + j] = false;
				}
			}
		}
	}

	var size = {
		block: 64,
		y:{ min:65, max: 430},
		x:{ min:65, max: 1000},
	};

	llenar();

	return {
		size:  size,
		gearsmap: function(x, y) {

			if(typeof x === 'undefined') {
				return gearsmap;
			} else if(typeof y === 'undefined') {
				return gearsmap[x];
			} else {
				gearsmap[x] = y
			}
		},
		llenar: function () { llenar(); }
	}

})($);

