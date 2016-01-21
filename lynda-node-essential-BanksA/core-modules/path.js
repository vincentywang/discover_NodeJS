var path = require('path');

console.log(path.basename(__filename));

var dirUpload = path.join(__dirname, 'www', 'files', 'uploads');

console.log(dirUpload);
