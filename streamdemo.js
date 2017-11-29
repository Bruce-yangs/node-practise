var fs = require('fs');
var http = require('http');
var request = require('request');

http
	.createServer(function(req,res){
		/*fs.readFile('she.jpeg',function(err,data) {
			if(err) {
				res.end('file not exist!')
			}else{
				res.writeHeader(200,{'Context-Type': 'text/plain;charset:utf-8'})
				res.end(data);
			}
		})*/

	/*小水管*/
	// fs.createReadStream('she.jpeg').pipe(res);
	request('http://img.blog.csdn.net/20160726170312284')
		.pipe(res)
	})
	.listen(8080)