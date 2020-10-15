/* 
NodeJS >> Open source environent that allow us to execute JS code on the server side. 

NodeJS uses asynchronous programming. 
	
	NodeJS runs single-threaded, non-blocking, asychronously programming. 
	
	What it can do' 
		* Generate dynamic page content. 
		* Create, open, read, write, delete and close files on the server. 
		* Can collect form data. 
		* Can add, delete, modify data in the database. 
		
	NodeJS Files >> Contain task that will be executed on certain events. 
					They must be initiated on the server before having any effect. 
					
*/ 

-- Sample of a basic request in NodeJS 
var http = require('http'); 

http.createServer(function (req, res) { 
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World!');
}).listen(8080);

-- Sample of calling a file containing task to be interpreted by NodeJS 
node fileName.js 


/* 
Module in NodeJS >> A set of functions that we want to include in our application compacted in a single file. 
					NodeJS has a set of built-in modules wich we can use without any further installation. 
					To use a module we need to declare its usage by calling the module's name in [require('module-name')]
					
	Also we can create our own modules, and easily include them in our applications. 
	For make methods and properties available outside the module file we use the 'exports' keyword. 

*/ 

-- Sample of a module being called and declared 
var http = require('http'); 
http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Type: 'Text/html'});
}).listen(8080);


-- Sample of a module created by ourselves being imported. 
.. ## module of functions 
	exports.myDateTime = function() { return Date(); };
..

var http = requre('http'); 
var time = require('./myfirstmodule'); 

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write("The date and time are : " + time.myDataTime();
	res.end();
	
}).listen(8080);


-- Sample of a node Server reading parameters from the url 
var http = require('http'); 
http.createServer(function (req, res) { 
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello World!'); 
	res.end();
}).listen(8080);


-- Sample of the module returning an object of the URL 
var http = require('http'); 
var url  = require('url'); 

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query; 
	var txt 0 q.year + " " + q.month; 
	res.end(txt);
}).listen(8080);


/* 
One of the most used modules in NodeJS is 'fs' represeting >> File server. 
	Common uses for the FS Module : 	
		* Read Files. 
		* Create Files. 
		* Update Files. 
		* Delete Files. 
		* Rename Files. 
		
If we read any type of file, this must we specified at the time of being written. After that rf.readFile was added to the call stack. 

Some functions of the fs module : 

fs.appendFile();  >> Append content to a file.
fs.open();        >> Open a file for make some operation on it, it takes a flag 'w' to detect if the file exist or create it.
fs.writeFile();   >> Write content to a file. 

The methods (appendFile, writeFile) are used to update the file. 
To delete a file we use 'fs.unlink()' method 
To rename a file we use 'fs.rename()' 

*/ 

-- Sample of a File HTML at the same level being read and written in the browser. 
.. ## File >> demofile1.html 
<html> 
	<body> 
		<h1>Some values </h1> 
		<p>Some values 02 </p> 
	</body> 
</html> 
..
var http = require('http'); 
var fs = require('fs'); 
http.createServer(function (req, res) {
	fs.readFile('demofile1.html', function(err, data) {
		res.writeHead(200, {'Cotent-Type': 'text/html'});
		res.write(data); 
		return res.end();
	});
}).listen(8080);


-- Sample of content being added  to the fille 'mynewfile1'
var fs = require('fs'); 
fs.appendFile('mynewfile1.txt', 'Hello Content!', function(err) {
	if(err) throw err;
	console.log('Saved!');
});


-- Sample of a file being open and created if necessary with 'fs' module 
var fs = require('fs'); 
fs.open('mynewfile2.txt', 'w', function(err, file) {
	if(err) throw err; 
	console.log('Saved');
});


-- Sample of a file being written by using 'fs' module 
var fs = require('fs'); 
fs.writeFile('mynewfule3.txt', 'Hello content!', function(err) {
	if(err) throw err; 
	console.log('Saved!');
});


-- Sample of updating myFile002 by using appendFile from the module 'fs'
var fs = require('fs'); 

fs.appendFile('myFile002.txt', 'Some text to be added', function(err) {
	if(err) throw err; 
	console.log('Updated!');
});

-- Sample of updating myFile002 by using writeFile from the module 'fs'
var fs = require('fs'); 

fs.writeFile('myFile002.txt', 'Some text to be added 02', function(err) {
	if(err) throw err; 
	console.log('Replaced!');
});


-- Sample of a file being deleted 
var fs = require('fs'); 

fs.unlink('someFile.txt', function (err) {
	if(err) throw err; 
	console.log('File to be deleted');
});

-- Sample of a file bein renamed 
var fs = require('fs'); 
fs.rename('someFile00.txt', 'newNameForFile.txt', function(err) {
	if(err) throw err; 
	console.log('File renamed!');
});


/* 
URL module >> Splits up a web address into readable parts. If we parse and address with the url.parse() method, it will return a URL object with each part
			  of the address as properties. 
			  
		## Sample importing the module 'url' 
		var url = require('url'); 
*/ 

-- Sample of an address being split up to be read 
var url = require('url'); 
var adr = 'http://localhost:8080/default.htm?year=2017&month=february'; 
var q ? url.parse(adr, true); 

console.log(q.host); 
console.log(q.pathname); 
console.log(q.search); 

var qdata = q.query; 
console.log(qdata.month); 
