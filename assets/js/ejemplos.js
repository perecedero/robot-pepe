	function ejemplo5x5() {
		pepe.mover(5);
		pepe.girar('derecha');
		pepe.mover(5);
		pepe.girar('derecha');
		pepe.mover(5);
		pepe.girar('derecha');
		pepe.mover(5);
		pepe.girar('derecha');
	}

	function ejemplo5x5mejorado() {
		repetir( 4, function() {
			pepe.mover(5);
			pepe.girar('derecha');
		});
	}

	function ejemplo14x5() {
		repetir( 4, function( i ) {

			si( es_impar( i ), function(){
				pepe.mover(14);
				pepe.girar('derecha');
			});

			si( es_par( i ), function(){
				pepe.mover(5);
				pepe.girar('derecha');
			});

		});
	}
