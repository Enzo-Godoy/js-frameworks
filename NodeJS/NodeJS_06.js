
-- Sample of insertOne record by using MongoDB db. 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	var myobj = { name; "Company Inc", address: "Highway 37" };
	dbo.collection("customers").insertOne(myobj, function(err, res) {
		if(err) throw err; 
		console.log("1 document inserted");
		db.close();
	});
});

-- Sample of insert multiple records in a document using a MongoDB db. 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodn://localhost:27107/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	var myobj = [
	{ name: 'John' , address : 'Highway 71'     },
	{ name: 'Peter', address : 'Lowstreet 4'    },
	{ name: 'Amy'  , address : 'Apple st 652'   },
	{ name: 'Hannah'  , address : 'Mountain 21' },
	{ name: 'Michael'  , address :  'Valley 345'    },
	{ name: 'Sandy'  , address :  'Ocean blvd 2'  },
	{ name: 'Betty'  , address :  'Green Grass 1' },
	{ name: 'Richard'  , address :  'Sky st 331' },
	{ name: 'Susan'  , address :  'One way 98' },
	{ name: 'Vicky'  , address :  'Yellow Garden 2'},
	{ name: 'Ben'  , address :  'Park Lane 38'   },
	{ name: 'William'  , address :  'Central st 945' },
	{ name: 'Chuck'  , address :  'Main Road 989'  },
	{ name: 'Viola', address :  ' Sideway 1633'  }
	];
	dbo.collection("customers").insertMany(myobj, function(err, res) {
		if(err) throw err; 
			console.log("Number of documents inserted: " + res.insertedCount);
			db.close();
	});
});


-- Sample of insert records with require '_id' fields : 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb/localhost:27017/"; 

MongoClient.connect(url ,function(err, db) {
	if(err) throw err;
	var dbo = db.db("mydb"); 
	var myobj =[
	{ _id: 154, name: 'Chocolate Heaven'},
	{ _id: 155, name: 'Sample01 Heaven'},
	{ _id: 156, name: 'Sample02 Heaven'},
	];
	dbo.collection("products").insertMany(myobj, function(err, res) {
		if(err) throw err; 
			console.log(res);
			db.close();
	});
});


/*
We use find(), findOne() to find data in a collection. As a SELECT statement (SQL standart) 

findOne >> Returns the first occurrence in the sleection. The first parameter is a query, with an empty query all records are returned but only the first one 
			is choosed.  
			
find  >> Returns all occurrences in the selection. 	with an empty query all records are returned. The second parameter is the 'projection' object wich describes 
		 wich fields to include in the result. 
		 In order to show the values obtained the 'projection' object uses binary values. (0,1) wich once setted especifies with '0' the value to not be shown. and
		 with 1 the other to be shown after the execution. 
		 
We can't use (0,1) pair of values in the description of values choosed in the 'projection' object. 
*/ 

-- Sample of findOne method used with mongoDB db 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	dbo.collection("customers").findOne({
		if(err) throw err; 
		console.log(result.name); 
		db.close();
	});
});


-- Sample of findAll method with mongoDB db 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	dbo.collection("customers").find({}).toArray(function (err, result) {
		if(err) throw err; 
		console.log(result); 
		db.close();
	});
});


-- Sample with using the 'projection' object to restrict values choosed 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	dbo.collection("customers").find({}, {projection: {_id: 0, name: 1, address : 1 } }).toArray(function(err, result) {
		if(err) throw err; 
			console.log(result); 
			db.close();
	});
});

-- Sample with using the 'projection' object to restrict address from dataset 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	dbo.collection("customers").find({}, { projection: {address: 0} }).toArray(function(err, result) {
		if(err) throw err; 
			console.log(result); 
			db.close();
	});
});


-- Sample with using the 'projection' object to restrict _id from dataset and returning name of those selected 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	dbo.collection("customers").find({}, {prjection: { _id: 0, name:1 } }).toArray(function(err, result) {
		if(err) throw err; 
			console.log(result); 
			db.close();
	});
});

-- Sample with using the 'projection' object to restrict _id from dataset 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	dbo.collection("customers").find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
		if(err) throw err; 
			console.log(result); 
			db.close();
	});
});


-- Sample with using both values to restrict in the 'projection' object wich it will lead to an error.
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	dbo.collection("customers").find({}, { projection: { name: 1, address : 0} }).toArray(function(err, result) {
		if(err) throw err; 
			console.log(result); 
			db.close();
	});
});

/* 
MongoDB Query >> in order to restrict dataset from values of our collections we use a  query wich could be composed by a Regex expression 
In order to sort the result from the Mongo Queries we use the sort method.  (Descending/Ascending order) , and we use the value 1 for 'ascending' order and 
-1 for 'descending' order. 

 

*/ 