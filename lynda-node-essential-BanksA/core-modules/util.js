var util = require('util');
var path = require('path');

util.log(path.basename(__filename));

var dirUpload = path.join(__dirname, 'www', 'files', 'uploads');

util.log(dirUpload);