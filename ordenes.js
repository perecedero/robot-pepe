
	repetir( 6, function(i) {

		pepe.mover(14);
		si (es_distinto( i, 5 ), function () {

			si( es_par(i), function() {
				pepe.girar('derecha');
				pepe.mover(1);
				pepe.girar('derecha');
			});

			si( es_impar(i), function() {
				pepe.girar('izquierda');
				pepe.mover(1);
				pepe.girar('izquierda');
			});

		});

		si ( es_igual(i,5), function () {

			pepe.girar('derecha');
			pepe.mover(5);
			pepe.girar('derecha');

		});

	});

