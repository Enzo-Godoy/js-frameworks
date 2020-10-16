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













