
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


/* In order to delete a record or document we use the 'deleteOne' method. 
The first parameter of the deleteOne() method is a query object defining wich document to delete 
	If the query finds more than one document, only the first occurrence is deleted. 
	
To delete more than one document we use 'deletedMany', and using a query to restrict to whom applies. 
*/ 

-- Sample of deleting a record using a query externally declared from deletedOne method 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err;
	var dbo = db.db("mydb"); 
	var myquery = { address : 'Mountain 21' };
	dbo.collection("customers").deleteOne(myquery, function(err, obj) {
		if(err) throw err; 
			console.log("1 document deleted"); 
			db.close();
	});
});

-- Sample of a record deleted using a query externally Declared 
var MongoClient =  requre('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	var myquery = { address : 'Mountain 21'}; 
	dbo.collection("customers").deleteOne(myquery, function(err, obj) {
		if(err) throw err; 
		console.log("1 document deleted"); 
		db.close();
	});
});

-- Sample of document deleted by using 'deletedMany' object 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	var myquery = { address : /^O/ }; 
	dbo.collection("customers").deleteMany(myquery, function(err, obj) {
		if(err) throw err; 
		console.log(obj.result.n + " document(s) deleted"); 
		db.close();
	});
});



































































































































