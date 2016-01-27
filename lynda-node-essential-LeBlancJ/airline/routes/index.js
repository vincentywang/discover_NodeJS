var express = require('express');
var flight = require('../flight');
var flights = require('../data');

for (var number in flights) {
	flights[number] = flight.create(flights[number]);
}

exports.flight = function (req, res) {
	var number = req.param('number');

	if (typeof flights[number] === 'undefined') {
		res.status(404).json({status : 'error'});
	} else {
		res.json(flights[number].getInformation());
	}
};

exports.arrive = function (req, res) {
	var number = req.param('number');
	console.log('call arrive function');

	if (typeof flights[number] === 'undefined') {
		res.status(404).json({status : 'error'});
	} else {
		flights[number].triggerArrive();
		res.json({'status' : 'down'});
	}
};



