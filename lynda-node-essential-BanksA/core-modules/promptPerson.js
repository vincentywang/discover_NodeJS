/*
|--------------------------------------------------------------------------
| node readline core module
|--------------------------------------------------------------------------
|
| 1. readline.createInterface
| 2. interface.question
| 3. interface.setPrompt
| 4. interface.prompt
| 5. interface.on
|
*/

var readline = require('readline'),
	rl = readline.createInterface(process.stdin, process.stdout),
	realPerson = {
		name : '',
		sayings : []
	};

rl.question("what is the name of a real person? ", function(answer){
	realPerson.name = answer;
	rl.setPrompt(`what would ${realPerson.name} say? `);
	rl.prompt();

	// event: input new line
	rl.on('line', function(saying){
		if (saying.toLowerCase().trim() === 'exit') {
			rl.close();
		} else {
			realPerson.sayings.push(saying);
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
			rl.prompt();
		}
	});

	// event: input 'close'
	rl.on('close', function(){
		console.log("%s is a real person that say %i", realPerson.name, realPerson.sayings);
		// process is global object
		process.exit();
	});
});
