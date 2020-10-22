
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

/* 
Drop Collection >> We use the drop method in order to deleter a collection(table) in mongo db. It takes a callback function containing the error object
and the result parameer wich returns true if the collection was dropped successfully, otherwise it returns false. 

We can use 'db.dropCollection' 'db.collection().drop()' to achieve the same purpose, delete a collection. 

Update records >> To perform an update of a record, or  document by using the 'updateOne()' method. If more than one record is found only the first one ends updated. 
The second parameter is an object defining the nre values of the document. 

 When using the $set operator, only the specified field are updated. 
 In order to update multiple records the 'updateMany()' method is used.
*/ 

-- Sample of dropping the 'customers' collection by using 'drop' method.
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	dbo.collection("customers").drop(function (err, delOK) {
		if(err) throw err; 
		if(delOK) console.log("Collection deleted"); 
		db.close();
	});
});

-- Sample of dropping the 'customers' collection by using 'dropCollection' method. 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	ir(err) throw err; 
	var dbo = db.db("mydb"); 
	dbo.dropCollection("customers", function(err, delOK) {
		if(err) throw err; 
		if(delOK) console.log("Collection deleted");
		db.close();
	});
});

-- Sample  of updating a record by using updateOne method 
var MongoCleint = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	var myquery = {	address : "Valley 345" };
	var newvalues = { $set: { name: "Mickey", address : "Canyon 123" } }; 
	dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
		if(err) throw err; 
		console.log("1 document updated"); 
		db.close();
	});
});


-- Sample of using the $set operator 
.. 
 var myqyery = { address : "valley 345"};
 var newvalues = { $set : { address : "Canyon 123" } } ;
 dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {}
.. 


-- Sample of using a regex expression to update multiple records and the "updateMany" method 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	var myquery = { address : /^S/ }; 
	var newvalues = { $set: {name: "Minnie"} }; 
	dbo.collection("customers").updateMany(myquery, newvalues,function(err, res) {
		if(err) throw err; 
		console.log(res.result.nModified + "document(s) updated");
		db.close();
	});
});