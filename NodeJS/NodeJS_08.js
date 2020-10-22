/* 
Limit records >> we use the limit method to restrict the quantitie of documents to obtain. 

We can perform 'left join' by using the $lookup state. Wich let us specify wich collection we want to join 
with the current collection, and wich fields that should match. 
*/ 

-- Sample of using LIMIT to restrict documents 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	dbo.collection("customers").find().limit(5).toArray(function (err, result) {
		if(err) throw err; 
		console.log(result); 
		db.close();
	});
});

-- Sample og using $lookupp to perform a left join between documents.
var MongoClient  = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	dbo.collection('orders').aggregate({
		{	$lookup: 
			{
					from: 'products', 
					localdField: 'product_id', 
					foreignFields : '_id', 
					as : 'orderdetails'
			}
		}
	}).toArray(function(err, res) {
		if(err) throw err; 
		console.log(JSON.stringify(res)); 
		db.close();
	});
});

/* 
Node JS has a set of built-in module wich we can use without installation, some of them : 

assert >> 	Provides a set of assertion tests. 
buffer >> 	To handle binary data. 
child_process >> To run a child process. 
cluster >> To split a single Node process into multiple processes. 
crypto  >> To hanfle OpenSSL cryptographic functions. 
dgram   >> Provides implemenetation of UDP datagram sockets. 
dns     >> To do DNS lookups and name resolution functions. 
domain  >> To handle unhandled errors. 
events  >> To handle events. 
fs >> To handle the file syste,. 
http  >> To make Node.js act as an HTTP server. 
https >> To make Node.js as an HTTPS Server. 
net   >> To create servers and clients. 
os    >> Provides information about the operation system. 
path  >> To handle file paths. 
punycode >> A character encoding scheme. 
querystring >> To hanfle URL query strings. 
readline >> To hanfle readable streams one line at the time. 
stream   >> To handle streaming data. 
string decode >> To decode buffer objects into strings. 
timers >> To execute a function after a given numbers of miliseconds. 
tls  >> To implement TLS and SSL protocols. 
tty  >> Provides classes used by a text terminal. 
url  >> To parse URL strings. 
util >> To access utility functions. 
v8   >> To access information about v8 (The JS engine) 
vm   >> To compile JS code in a virtual machine. 
zlib >> To compress or decompress files.
*/
