// runner for async                                   // #
const run = function(generator) {	
	let gi;                                     
  console.log('starting the runner');                 // 1
	const util = function(asyncFun) {
		console.log('use the util in async.');            // 4
		asyncFun(gi);
	}

  console.log('get instance of generator');           // 2
	gi = generator(util);                       
	gi.next(); 				// kick/start the generator
}

// main program
run(function *(util) {
  console.log('entering the generator')               // 3
	util(function(genInstance) {     
    console.log('schedule async code')                // 5
		setTimeout(function () {
			console.log('first async completed.');          // 7
			genInstance.next(3_000);
		}, 1000);
	});

  console.log ('now exit the generator ');            // 6
	let timeout = yield;     
	console.log('received back something: ' + timeout); // 8
	/* do some more shit */

	yield util(function(main) { 
		setTimeout(function () {
			console.log('second async completed.');
			main.next();
		}, timeout);
	});

	console.log('do something after first async');
	/* do some more shit */
});
