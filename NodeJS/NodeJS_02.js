-- Sample of files being Read with 'fs' module, extract from URL parsed with 'url' module 
.. ## Sample 01 
<!DOCTYPE html> 
<html> 
	<body> 
	<h1>Summer</h1> 
	<p>Some example02</p> 
	</body> 
</html> 
.. ## Sample 02 
<!DOCTYPE html> 
<body> 
	<h1>Winter</h1> 
	<p>Some example03</p> 
</nody> 
</html> 

var http = require('http'); 
var url  = require('url'); 
var fs   = require('fs'); 

http.createServer(function (req, res) {
	var q = url.parse(req.url, true); 
	var filename = "." + q.pathname; 
	fs.readFile(filename, function(err, data) {
		if(err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data); 
		return res.end(); 
	});
}).listen(8080);


/* 
About NPM 
NPM  >> A Package manager(modules). 
www.npmjs.com hsots thousands of free packages to download and use. 
  The NPM program is installed on our computer when we install Node.JS

 A package in Node.js contains all the files we need for a module. 
	Modules are JS libraries we can include in our project. 
	
	In order to download & install packages we follow the next syntax : 
	´´
		npm install upper-case 
	´´
	
	All our packages installed will be installed in the folder named "node_modules"
	To use our package installed we use the "require('moduleName');" >> statements . 
	
	Every action on a computer can be interpreted as an "event", Object in NodeJS can fire events. 
	NodeJS has a built-in module, called "Events", where we can create, fire , and listen for our own events. 
	
	All event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods,
	create an EventEmitter object: 

*/ 
 
 -- Sample of using the module 'upper-case' in conjuction with the 'http' module 
 var http = require('http'); 
 var uc   = require('upper-case'); 
 http.createServer(function (req, res) {
	 res.writeHead(200, {'Content-Type': 'text/html'});
	 res.write(uc.upperCase("Hello World!"));
	 res.end();
 }).listen(8080);

-- Sample with EventEmitter Object  firing it and handling it 
var events = require('events'); 
var eventEmitter = new events.EventEmitter(); 

var myEventHandler = function() {
	console.log('Some text');
}

eventEmitter.on('eventName', myEventHanfler); 
eventEmitter.emit('eventName'); 


/* 
Formidable module >> A module for working with uploads . 
	## Adding the module by using require : 
	var formidable = require('formidable');
	
*/ 

-- Sample of creating an upload Form  without uploading the file 
var http = require('http'); 

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	res.write('<for action="fileupload" method="post" enctype="multipart/form-data">'); 
	res.write('<input type="file" name="filetoupload"><br>'); 
	res.write('</form>'); 
	return res.end();
}).listen(8080);
 
 
-- Sample of creating, parsing and uploading file 
var http = require('http'); 
var formidable = require('formidable'); 

http.createServer(function (req, res) {
	if(req.url == '/fileupload') {
		var form = new formidable.IncomingForm(); 
		form.parse(req, function(err, fields, files) {
			res.write('File uploaded'); 
			res.end();
		});
	} else {
		res.writeHead(200, {'Content-Type: 'text/html'});
		res.write('<form action="fileupload" method="post" enctype="multipart/form-data">'); 
		res.write('<input type="file" name="filetoupload"><br>'); 
		res.write('<input type="submit">'); 
		res.write('</form>'); 
		return res.end();
	}
}).listen(8080);
 
-- Sample of creating, parsing  and uploading file , saving it to some directory
var http = require('http'); 
var formidable = require('formidable'); 
var fs = require('fs'); 

http.createServer(function (req, res) {
	if(req.url == '/fileupload') {
		var form = new formidable.IncomingForm(); 
		form.parse(req, function(err, fields, files){
			var oldpath = files.filetoupload.path; 
			var newpath = 'C:/Users/USerName/' + files.filetoupload.name; 
			fs.rename(oldpath, newpath, function (err) {
				if (err) throw err; 
				res.write('File uploaded and moved!'); 
				res.end();
			});
		});
	} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<form action="fileupload" method="post" enctype="multipart/form-data">'); 
		res.write('<input type="file" name="filetoupload"><br>'); 
		res.write('<input type="submit">'); 
		res.write('</form>'); 
		return res.end();
	}
}).listen(8080);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
