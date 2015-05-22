$(function(){

	$('#commands').change( function() {
		var file = this.files[0],
		reader = new FileReader();

		reader.onload = function() {
			txt =  reader.result.replace(/\n/g, '').replace(/\t/g, ' ').replace(/  /g, ' ');
			validator.validate(txt);
		};
		reader.readAsText(file);
	});

	$('#run').click( function() {
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
