var readline = require('readline'),
	rl = readline.createInterface(process.stdin, process.stdout),
	realPerson = {
		name : '',
		sayings : []
	};

rl.question("what is the name of a real person? ", function(answer){
	realPerson.name = answer;

	var stream = fs.createWriteStram(realPerson.name + ".md");

	stream.write(`${realPerson.name}\n=================\n\n`);

	rl.setPrompt(`what would ${realPerson.name} say? `);
	rl.prompt();

	rl.on('line', function(saying){

		realPerson.sayings.push(saying.trim());
		stream.write(realPerson.name + ".md", `* ${saying.trim()} \n`);

		if (saying.toLowerCase().trim() === 'exit') {

			stream.close();
			rl.close();
		} else {
			realPerson.sayings.push(saying.trim());
			stream.write(realPerson.name + ".md", `* ${saying.trim()} \n`);
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
			rl.prompt();
		}
	});

	rl.on('close', function(){
		console.log("%s is a real person that say %i", realPerson.name, realPerson.sayings);
		process.exit();
	});
});