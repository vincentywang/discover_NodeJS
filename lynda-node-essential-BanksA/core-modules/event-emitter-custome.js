/*
// How events emitter event register

var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('customeEvent', function(message, status) {
	console.log(`${status} : ${message}`);
});

emitter.emit( 'customeEvent', "Hello World", 200);
*/


var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name){
	this.name = name;
};

util.inherits(Person, EventEmitter); //add all EventEmitter's function to Person's prototype object 

var ben  = new Person("Ben Huang");

ben.on('speak', function(said, secondParam, thirdParam) {
	console.log(`${this.name} : ${said}`);
	console.log(secondParam); // param is passed in call back by order
	console.log(thirdParam);
});


ben.emit('speak', "You may delay, but time will not", "haha", "special news");


