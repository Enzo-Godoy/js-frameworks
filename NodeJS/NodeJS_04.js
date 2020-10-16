
-- Sample of getting the id of the row insert after being generated it's value by default 
var mysql = require('mysql'); 
var con   = mysql.createConnection({
	host: "localhost", 
	user: "yourusername", 
	password: "yourpassword", 
	database: "mydb"
});
con.connect(function(err) {
	if(err) throw err; 
	var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')"; 
	con.query(sql, function (err, result) {
		if(err) throw err; 
		console.log("1 record inserted, ID: " result.insertId);
	});
});

/* 
To mention >> Result Object 
From the query statement executed we obtain a result object. 
This object is an array containing each row as an object. 
	To refer to the  'x' record, we just refere to the 'x' array object's prop required.

The third parameter of the callback function from 'con.query()' it's an array containing information about each field in the result. 
Also for this an object representation it's made.

In order to restrict some set we use set as SQL standart.Also we can apply within the query wildcards. 
When query values are variables provided by the user, we should escape the values. "Sanitize your inputs" 
	To escape and add values to the query we use from the 'mysql' module the method 'mysql.escape()' , also we can use '?' as a placeholder 
	for the values we want to escape. If we have multiple placeholders, the array of 'con.query()' contains multiple values.. 
	
	
*/ 


-- Executing a SELECT statement from the table 
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host: "localhost", 
	user: "yourusername", 
	password: "yourpassword", 
	database: "mydb"
});
con.connect(function(err) {
	if(err) throw err; 
	con.query("SELECT * FROM customers", function(err, result, fields) {
		if(err) throw err; 
		console.log(result);
	});
});

-- Executing a SELECT statement multiple columns from the table 
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host: "localhost", 
	user: "yourusername", 
	password: "yourpassword", 
	database: "mydb"
});
con.connect(function(err){
	if(err) throw err; 
	con.query("SELECT name, address FROM customers", function(err, result, fields) {
		if(err) throw err; 
		console.log(result);
	});
});

-- Sample of the fields consulted being printed after the query being executed 
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host: "localhost", 
	user: "yourusername", 
	password: "yourpassword", 
	database: "mydb"
});
con.connect(function (err) {
	if(err) throw err; 
	con.query("SELECT name, address FROM customers", function (err, result, fields) {
		if(err) throw err; 
		console.log(fields); 
	});
});


-- Sample of SELECT statement with restrictions to the result set. 
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host: "locahost", 
	user: "yourusername", 
	password: "yourpassword", 
	database: "mydb"
});
con.connect(function(err) {
	if(err) throw err; 
	con.query("SELECT * FROM customers WHERE address = 'Some value' ", function(err, result) {
		if(err) throw err; 
		console.log(result);
	});
});

-- Sample of SELECT statement with restrictions using Wildcards 
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host: "localhost", 
	user: "yourusername", 
	password: "yourpassword", 
	database: "mydb"
});
con.connect(function(err) {
	if(err) throw err; 
	con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
		if(err) throw err; 
		console.log(result); 
	});
});

-- Sample of escaping values by using method from the 'mysql' module 
var adr = 'Mountain 21'; 
var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr); 
con.query(sql, function(err, result) {
	if(err) throw err; 
	console.log(result);
});


-- Sample of escaping values by using '?' symbol from the 'mysql' module 
var adr = 'Mountain 21'; 
var sql = 'SELECT ¨FROM customers WHERE address = ?'; 
con.query(sql, [adr], function (err, result) {
	if(err) throw erR; 
	console.log(result);
});


-- Sample of escaping values by using multiple '?' symbol from the 'mysql' module 
var name = 'Amy'; 
var adr  = 'Mountain 21'; 
var sql  = 'SELECT * FROM customers WHERE name = ? OR address = ? '; 
con.query(sql, [name, adr], function (err, result) {
	if(err)throw err; 
	console.log(result);
});


-- Sample of sorting the values returned by using Order By from the sql standart (ASC default)
var mysql = require('mysql'); 
var con 0 mysql.createConnection({
	host: "localhost", 
	user: "yourusername", 
	password: "yourpassword", 
	database: "mydb"
});
con.connect(function(err) {
	if(err) throw err; 
	con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
		console.log(result);
	});
});



-- Sample of sorting the values returned by using Order By from the sql standart (DESC)
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host: "localhost", 
	user: "yourusername", 
	password: "yourpassword", 
	database: "mydb"
});
con.connect(function(err) {
	if(err) throw err; 
	con.query("SELECT * FROM customers ORDER  BY name DESC", function (err, result) {
		if(err) throw err; 
		console.log(result);
	});
});

-- Sample of deleting fields using MySQL module(WHERE clause always) 
var mysql = require('mysql'); 
var con = mysql.createConnection({
	host: "localhosg", 
	user: "yourusername", 
	password: "yourpassword", 
	database: "mydb"
});
con.connect(function(err) {
	if(err) throw err; 
	var sql = "DELETE FROM customers WHERE address = 'Mountain 21' "; 
	con.query(sql, function (err, result) {
		if(err) throw err; 
			console.log("Rows affected" + result.affectedRows); 
	});
});