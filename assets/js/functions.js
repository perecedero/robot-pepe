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

