/* 
NodeJS can be used with db applications. 

To access a MySQL databases with NodeJS, we need a MySQL driver. An the "MySQL" module as well. 
	In order to download this module we use : 
		>> npm install mysql 
		
		We imported it with : 
		var mysql = require('mysql'); 
		
		
		We use SQL statements to perform CRUD operations on the MySQL database. 
		For this we use the connection objected, who has a method for querying the database. 		
		
		When creating a table, we should also create a column with a unique key for each record. 
		This can be done by defining a column as "INT AUTO_INCREMENT PRIMARY KEY" wich will insert a unique number for each record. Starting at 1, 
		and increased by one for each record. 
		
		To insert more than one record, we make an array containing the values, and insert a question mark in the sql, 
		wich will be replaced by the value array passed as arg into the 'con.query()' call.
		
*/ 

-- Sample of creating a connection through the 'mysql' module. 
var mysql = require('mysql'); 

var con = mysql.createConnection({
	host : "localhost", 
	user:  "yourusername", 
	password: "yourpassword"
});

con.connect(function (err) {
	if(err) throw err; 
	console.log("Connected!");
});

-- Sample of creating a connection through the 'mysql' module 
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host: "localhost", 
	user: "yourusername", 
	password : "yourpassword"
});
con.connect(function (err) {
	if(err) throw err; 
	console.log("Connected!"); 
	con.query(sql, function(err, result) {
		if(err) throw err; 
		console.log("Result: " + result);
	});
});


-- Sample of creating a Database using MySQL module
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host : "localhost", 
	user : "yourusername", 
	password : "yourpassword"
});
con.connect(function(err) {
	if(err) throw err; 
	console.log("Connected!"); 
	con.query("CREATE DATABASE mydb", function(err, result) {
		if(
	});
});



-- Sample of creating a table within a database using MySQL module
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host : "localhost", 
	user : "yourusername", 
	password : "yourpassword", 
	database: "mydb"
});

con.connect(function(err) {
	if(err) throw err; 
	console.log("Connected!"); 
	var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR8255))"; 
	con.query(sql, function (err, result) {
		if(err) throw err; 
		console.log("Table created"); 
	});
});

-- Sample of creating a table with PK autoincremented within a database using MySQL module
var mysql = require('mysql'); 

var con = mysql.createConnection({
	host : "localhost", 
	user : "yourusername", 
	password: "yourpassword", 
	database : "mydb"
});

con.connect(function (err) {
	if(err) throw err; 
	console.log("Connected!"); 
	var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))"; 
	con.query(sql, function(err, result) {
		if(err) throw err; 
		console.log("Table created"); 
	});
});

-- Sample of altering a table adding PK autoincremented within a database using MySQL module
var musql = require('mysql'); 
var con = mysql.createdConnection({
	host: "localhost", 
	user: "yourusername", 
	password : "yourpassword", 
	database : "mydb"
});
con.connect(function(err) {
	if(err) throw err; 
	console.log("Connected!"); 
	var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY"; 
	con.query(sql, function(err, result) {
		if(err) throw err; 
		console.log("Table altered");
	});
});

-- Sample of inserting records in a table 
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host : "localhost", 
	user : "yourusername", 
	password : "yourpassword", 
	database : "mydb"
});
con.connect(function(err) {
	if(err) throw err; 
	console.log("Connected!""); 
	var sql = "INSERT INTO customers (name, address) VALUES ('Comapny Inc', 'Highway 37')"; 
	con.query(sql, function (err, result) {
		if(err) throw err; 
		console.log("1 Record inserted");
	});
});


-- Passing multiple values for an insertion into the query consult using mysql module 
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host: "localhost", 
	user: "yourusername", 
	password: "yourpassword", 
	database: "mydb"
});
con.connect(function (err) {
	if(err) throw err; 
	console.log("Connected!"); 
	var sql = "INSERT INTO customers (name, address) VALUES ?"; 
	var values = [
		['John', 'Highway 71'],
		['Peter', 'Lowstreet 4'],
		['Amy', 'Apple st 652'],
		['Hanna', 'Mountain 21'],
		['Michael', 'Valley 345'],
		['Sandy', 'Ocean blvd 345'],
		['Betty', 'Green Grass 1'],
		['Richard', 'Sky st 331],
	];
	con.query(sql, [values], function(err, result) {
		if(err) throw err; 
		console.log("Number of records inserted: " + result.affectedRows);
	});
});


/* 
When executing a query, a result object is returned. 
The result object contains information about how thw query affected the table. 
An example of the same object : 
{
	fieldCount: 0, 
	affectedRows: 14,
	insertId: 0, 
	serverStatus: 2, 
	warningCount: 0, 
	message: '\'Records:14 Duplicated: 0 Warnings: 0', 
	protocol41: true, 
	changedRows: 0
}

 For tables with an auto-increment id field, we can get the id of the row we just inserted by asking the resul object. 
	(Only when one row it's inserted)

*/