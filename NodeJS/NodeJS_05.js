/* 
DROP only if EXISTS >> This statement let us verified if the table exist before we try to delete
*/

-- Sample of DELETING a table using mysql module 
var mysql = require('mysql'); 
var con   = mysql.createConnection({
	host: "localhost", 
	user: "yourusername", 
	password: "yourpassword", 
	database: "mydb"
});
con.connect(function(err) {
	if(err) throw err; 
	var sql = "DROP TABLE customers"; 
	con.query(sql, function(err, result) {
		if(err) throw err; 
			console.log("Table Deleted");
	});
});


-- Sample of DELETING a table using mysql module verifying with IF Exists 
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host: "localhost", 
	user: "yourusername", 
	password: "yourpassword", 
	database: "mydb"
});
con.connect(function(err) {
	if(err) throw err; 
	var sql = "DROP TABLE IF EXISTS customers"; 
	con.query(sql, function(err, result) {
		if(err) throw err; 
			console.log(result);
	});
});

-- Sample of statement UPDATE with mysql module (Remember 'where') 
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host: "localhost", 
	user: "yourusername", 
	password: "yourpassword", 
	database: "mydb"
});
con.connect(function(err) {
	if (err) throw err; 
	var sql = "UPDATE customers SET address = 'Some addres' WHERE address = 'Actual addres' "; 
	con.query(sql, function (err, result) {
		if(err) throw err; 
			console.log(result.affectedRows + "Record(s) updated");
	});
});

/*
Extracting from range within the result set . 
First in order to constraint the quantity of values we want from our result set we use the keyword 'LIMIT' 
and for obtain ranges from the last extraction (after the LIMIT keyword) we use the keyword 'OFFSET' 

E.G Visually: 
	Result Set |---------------------------------> (Whole range). 
	Result Set |------------------------> LIMIT 
	Result Set |xxxxxxxxxxxxxxx OFFSET----------->LIMIT

Other way to write the same sentences but in a shortcut way it's  'LIMIT Xo, Xf ' 
E.G Visually: 
	Result Set |---------------------------------> (Whole Range). 
	Result Set |xxxxxxxxxxx Xo---------> Xf    (LIMIT Xo, Xf)


*/ 

-- Sample of using the keyword LIMIT using the mysql module 
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host: "localhost", 
	user: "yourusername", 
	password: "yourpassword", 
	database: "mydb"
});
con.connect(function(err) {
	if(err) throw err; 
	var sql = "SELECT * FROM customers LIMIT 5"; 
	con.query(sql, function (err, result){
		if(err) throw err; 
		console.log(result);
	});
});


 
-- Sample of using the keyword LIMIT with OFSSET using the mysql module 
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host: "localhost", 
	user: "yourusername", 
	password: "yourpassword", 
	database: "mydb"
});
con.connect(function(err) {
	if(err) throw err; 
	var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2"; 
	con.query(sql, function(err, result) {
		if(err) throw err; 
		console.log(result);
	});
});


-- Sample of using the keyword 'LIMIT Xo, Xf' (LIMIT with OFSSET) using the mysql module 
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host: "localhost", 
	user: "yourusername", 
	password: "yourpassword", 
	databse: "mydb"
});
con.connect(function(err) {
	if(err) throw err; 
	var sql = "SELECT * FROM customers LIMIT 4,8"; 
	con.query(sql, function(err, result){
		if(err) throw err; 
			console.log(result);
	});
});


/* 
JOIN >> Combination of two or more tables based on a field on common usually, recorgnized as 'PK' in the source table(s) and 'PK' on the Target table(s).
*/

-- Sample of a JOIN Table using mysql module 
var mysql = require('mysql); 
var con = mysql.createConnection({
	host: "localhost", 
	user: "yourusername", 
	password: "yourpassword", 
	database: "mydb"
});
con.connect(function (err) {
	if (err) throw err; 
	var sql = "SELECT us.naem AS user, prod.name AS favorite FROM users us JOIN products prod ON us.favorite_product = prod.id"; 
	con.query(sql, function (err, result){
		if(err) throw err; 
			console.log(result);
	});
});

/* 
One of  the most popular NoSQL database is MongoDB.  To install it 
 ´´
	npm install mongodb 
 ´´ 
 
 And for making it available in our code 
 var mongo = require('mongodb'); 
 To create a database in MongoDB, we start by creating a MongoClient object, the specify a connection URL with the correct ip address 
 and the name of the databse we want to create. MDB will create the database if it does not exist, and make a connection to it. 

 Note : In MDB,  a database is not created until it gets content!. 
 MongoDB waits util we have created a collection(table), with at least one document (record) before it actually creates the database (and collection). 
*/ 

-- Sample of creating a connection to a mongodb db 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/mydb"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err;
	console.log("Database Created!"); 
	db.close();
});


-- Sample of creating a collection using a MongoClient from the module 'mongodb' 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
	var dbo = db.db("mydb"); 
	dbo.createCollection("customers", function(err, res) {
		if(err) throw err; 
		console.log("Collection Created!"); 
		db.close();
	});
});

/* 
To insert a record, or  document as it called in MongoDB, into a collection, we use the insertOne(9 method. 
 document(MongoDB) <<< Same >> Record(MySQL) 
 
 The first parameter of the insertOne() method is an object containing the name, and value of each field in the document we want to insert. 
 In order to insert multiple documents into a colletion in MDB, we use the insertMany() method. 
	The first parameter of the insertMany() method is an array of objects, containing the data we want to insert. 
	
	When executing the insertMany() method, a result object is returned. This object contains information abouthow the insertien affected the DB. 
	If we do not specify an _id field, then MongoDB will add one for us and assign a unique id for each document. 
*/
