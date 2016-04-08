
/**
 * run node app --user Vincent --greeting "hello hello haha"
 * process argv help insert information into the app
 */
function grab (flag) {
	var index = process.argv.indexOf(flag);
	// if find --greeting, next argument is "hello hello haha", that's why return index + 1 argument
	return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if (!user || !greeting) {
	console.log("You Blew it!");
} else {
	console.log(`Welcome ${user}, ${greeting}`);
}
