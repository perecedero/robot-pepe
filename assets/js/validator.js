var validator = (function ($) {

	var verbotenWords, allowedTime, _eval, validateCode;

	verbotenWords = [
		'eval', '.call', 'call(', 'apply', 'bind', // prevents arbitrary code execution
		'prototype', // prevents messing with prototypes
		'setTimeout', 'setInterval', // requires players to use map.startTimer() instead
		'requestAnimationFrame', 'mozRequestAnimationFrame', // (more timeout-like methods)
		'webkitRequestAnimationFrame', 'setImmediate', // (more timeout-like methods)
		'prompt', 'confirm', // prevents dialogs asking for user input
		'debugger', // prevents pausing execution
		'delete', // prevents removing items
		'atob(','btoa(',//prevent bypassing checks using Base64
		'Function(', //prevent constructing arbitrary function
		'constructor', // prevents retrieval of Function using an instance of it
		'window', // prevents setting "window.[...] = map", etc.
		'document', // in particular, document.write is dangerous
		'self.', 'self[', 'top.', 'top[', 'frames',  // self === top === frames === window
		'parent', 'content', // parent === content === window in most of cases
		'validate', 'onExit', 'objective', // don't let players rewrite these methods
		'this[' // prevents this['win'+'dow'], etc.
	];

	allowedTime = 2000; // for infinite loop prevention


	_eval = function ( code) {
		eval(code);
	};

	validate = function(code) {

		try {
			for (var i = 0; i < verbotenWords.length; i++) {
				var badWord = verbotenWords[i];
				if (code.indexOf(badWord) > -1) {
					throw "You are not allowed to use '" + badWord + "'!";
				}
			}

			// modify the code to always check time to prevent infinite loops
			code = code.replace(/\)\s*{/g, ") {"); // converts Allman indentation -> K&R
			code = code.replace(/\n\s*while\s*\((.*)\)/g, "\nfor (dummy=0;$1;)"); // while -> for
			code = $.map(code.split('\n'), function (line, i) {
				return line.replace(/for\s*\((.*);(.*);(.*)\)\s*{/g,
					"for ($1, startTime = Date.now();$2;$3){" +
						"if (Date.now() - startTime > " + allowedTime + ") {" +
							"throw '[Line " + (i+1) + "] TimeOutException: Maximum loop execution time of " + allowedTime + " ms exceeded.';" +
						"}");
			}).join('\n');

			console.log(code);

			_eval(code);

		} catch (e) {}
	};

	return {
		validate:  validate,
	}

})($);

