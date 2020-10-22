
-- Sample of an externally declared query aside from the parameters of find method 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	var query = { address : "Park Lane 38" }; 
	dbo.collection("customers").find(query).toArray(function (err, result) {
		if(err) throw err; 
			console.log(result); 
			db.close();
	});
});


-- Sample of an externally query declared with a REGEX expression 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	var query = { address: /^S/ };
	dbo.collection("customers").find(query).toArray(function (err, result) {
		if(err)throw err; 
			console.log(result); 
			db.close();
	});
});


-- Sample of sorting a dataset returned by an empty query using the name in ASC order. 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	var mysort = { name : 1}; 
	dbo.collection("customers").find().sort(mysort).toArray(function (err, result) {
		if(err) throw err; 
			console.log(result); 
			db.close();
	});
});


-- Sample of sorting a dataset returned by an empty query using the name in DESC order. 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	var mysort = { name : -1 }; 
	dbo.collection("customers").find(). sort(mysort).toArray(function (err, result) {
		if(err) throw err; 
			console.log(result); 
			db.close();
	});
});
