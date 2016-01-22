var count = 0,
	allDes = [];

var Flight = function () {
	this.data = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};


	this.fill = function (info) {
		for(var prop in this.data) {
			if(this.data[prop] !== 'undefined') {
				this.data[prop] = info[prop];
			}
		}
		this.data.count = count;
		this.data.allDes = allDes;
	};

	this.triggerDepart = function () {
		this.data.actualDepart = Date.now();
	};

	this.triggerArrive = function () {
		this.data.actualArrive = Date.now();
	};

	this.getInformation = function () {
		return this.data;
	};
};

/**
 * Here exports can interchangeable with module.exports
 */
exports.create = function (info) { 
	var instance = new Flight();

	instance.fill(info);
	// console.log("what is allDes");
	// console.log(allDes);

	count ++ ;
	if (allDes.indexOf(info['destination']) < 0) {
		allDes.push(info['destination']);
	}
	return instance;
};

/**
 * Here exports can interchangeable with module.exports
 */
exports.getCount = function () {
	return count;
};

/**
 * Here exports can interchangeable with module.exports
 */
exports.getDesinations = function () {
	return allDes;
};