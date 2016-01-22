var express = require('express');
var flight = require('../flight');
var flights = require('../data');
var router = express.Router();

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



