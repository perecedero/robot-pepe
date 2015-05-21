$(function(){

	for (i=0; i < 6; i++) {
		pepe.mover(14);

		if( i != 5 ) {
			if(i%2 == 0) {
				pepe.girar('derecha');
				pepe.mover(1);
				pepe.girar('derecha');
			} else {
				pepe.girar('izquierda');
				pepe.mover(1);
				pepe.girar('izquierda');
			}
		} else {
			pepe.girar('derecha');
			pepe.mover(5);
			pepe.girar('derecha');
		}
	}

});
