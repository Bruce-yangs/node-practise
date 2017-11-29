var fs = require('fs');
var readStream = fs.createReadStream('copy.js');
var writeStream = fs.createWriteStream('copy-1.js');

readStream
	.on('data',function(chunk){
		/*当边读取  边写入的时候 如果写的慢  就先暂停读取 */
		if(writeStream.write(chunk) === false) {
			console.log('still cached')
			readStream.pause();//暂停
		}
		console.log('data emits');
		console.log(Buffer.isBuffer(chunk));
		console.log(chunk.toString('utf8'));
	})
	.on('readable',function(){
		console.log('data readable')
	}) 
	.on('end',function(){
		writeStream.end();
		console.log('data end')
	}) 
	.on('close',function(){
		console.log('data close')
	}) 
	.on('error',function(e){
		console.log('data read error'+e)
	}) 
	/*当写完了  就继续 读取*/
	writeStream.on('drain',function(){
		console.log('data drains');
		readStream.resume();
	})