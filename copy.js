var fs = require('fs');
var source = fs.readFileSync('app.js',source);
fs.writeFileSync('app-1.js',source)