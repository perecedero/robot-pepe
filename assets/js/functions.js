$(function(){

	$('#commands').change( function(event) {
		var file = event.target.files[0],
		reader = new FileReader();

		reader.onload = function() {
			eval (reader.result)
		};
		reader.readAsText(file);
	});

	$('#run').click( function() {
		mapx.populateGears();
		$('#commands').change(); return false;
	});

	$('#populate-and-run').click( function() {
		mapx.populateGears();
		$('#commands').change(); return false;
	});

});


es_igual = function (x,y) {
	return x == y;
}

es_distinto = function (x,y) {
	return x != y;
}

es_par = function (x) {
	return x%2 == 0;
}

es_impar = function (x) {
	return x%2 != 0;
}

si = function(cond, f) {
	if (cond) {
		f();
	}
}

repetir = function (x, f) {
	var i;
	for(i=0; i < x; i++) {
		f(i);
	 }
}
