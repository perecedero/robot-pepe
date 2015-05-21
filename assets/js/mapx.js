var mapx = (function ($, mpac) {

	var drawGear, drawGears;

	/**
		Insert grid to canvas
	 */
	$('#canvas').drawImage({
		layer: true,
		name: 'map',
		source: $('#mapx').get(0),
		x: 0, y:0, fromCenter: false
	});

	/**
		draw a simple gear on the grid
	 */
	drawGear = function (file, row, name) {
		var b = mapc.sizes.block;

		$('#canvas').drawImage({
			layer: true,
			name: name,
			source: $('#gearx').get(0),
			y: (file +1) * b , x: (row + 1) * b,
		});
	};

	drawGears =  function () {
		var i, j,
		files= mpac.sizes.files,
		rows = mpac.sizes.rows;

		for (i=0; i < files; i++) {
			for (j=0; j < rows; j++) {
				name = mpac.gearsmap((i *15) + j);
				if ( name != 'false'){
					drawGear(i, j, name);
				}
			}
		}
	};

	drawGears();

	return {

		populateGears: function(){
			mapc.populateGears();
			drawGears();
			pepex.ontop();
		}

	}

})($, mapc);

