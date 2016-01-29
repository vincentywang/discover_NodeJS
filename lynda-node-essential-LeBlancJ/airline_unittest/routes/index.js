
/*
 * GET home page.
 */

module.exports = function (flights) {

	var flight = require('../flight');

	for(var number in flights) {
		flights[number] = flight(flights[number]);
	}

	var oFun = {};

	oFun.flight = function(req, res){
		var number = req.param('number');

		if (typeof flights[number] === 'undefined') {
			res.status(404).json({status: 'error'});
		} else {
			res.json(flights[number].getInformation());
		}
	};

	oFun.arrived = function (req, res) {
		var number = req.param('number');

		if (typeof flights[number] === 'undefined') {
			res.status(404).json({status: 'error'});
		} else {
			flights[number].triggerArrive();
			res.json({status: 'done'});
		}
	};

	oFun.list = function (req, res) {
		res.render('list', {
			title: 'All Flights', 
			flights: flights});
	};

	return oFun;

};

