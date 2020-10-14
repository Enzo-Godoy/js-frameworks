/* 
Fetching dynamic data from the server. 

Cross-Site HTTP Requests : 
Request from a different server(other than the requesting page), are called 'cross-site' HTTP requests. 

By defaults this rquest are blocked for security reasons. 
In order to allow for testing purpose to execute some request, we need to add 
the header values : 
	header("Access-Control-Allow-Origin; *"); 
	
*/ 

-- Sample of server Running Node.js and MySQL 
var express = require('express'); 
var app = express(); 

app.get('/', function(req, res) {
	var sql = require("mssql"); 
	var config = {user:'user', password: 'pass', server:'myServer', database: 'myDB'};
	sql.connect(config, function(err) {
		if(err) console.log(err); 
		var request = new sql.Request(); 
		request.query('SELECT company_name, city, country FROM customers', function(err,recordset) {
			if(err) console.log(err)
				res.send(recordset);
		});
	});
});

var server = app.listen(5000, function() {
	console.log('Server is running..');
});


-- Sample of server running with ASP.NET, Razor and SQL Lite 
@{
	Response.AppendHeader("Access-Control-Allow-Origin", "*")
	Response.AppendHeader("Content-type", "application/json") 
	var db = Database.Open("myDB"); 
	var query = db.Query("SELECT company_name, city, country FROM customers"); 
	var outp = ""; 
	var c = chr(34); 
}

	@foreach(var row in query) {
		if outp <> "" then outp = outp + "," 
	outpt = outp + "{" + c + "Name"    + c + ":" + c + @row.CompanyName + c + ","
	outpt = outp +       c + "City"    + c + ":" + c + @row.City        + c + ","
	outpt = outp +       c + "Country" + c + ":" + c + @row.Country     + c + "}"
	}
	outp = "{" + c + "customers" + c + ":[" outp + "]}"
@outp 

-- Sample of a Server running PHP and MS Access 
<?php 
	header("Access-Control-Allow-Origin: *"); 
	header("Content-Type: application/json; charset=ISO-8859-1"); 
	
	$conn = new COM("ADODB.Connection"); 
	$conn -> open("PROVIDER=Microsfot.Jet.OLEDB.4.0; Data Source=myDB.mdb"); 
	$rs   = $conn-> execute("SELECT company_name, city, country FROM customers"); 
	
	$outp = ""; 
	while (!$rs->EOF) {
		if($outp != "") {$outp .= ",";}
		$outp .= '{"Name":"'     	. $rs["company_name"] . '",';
		$outp .= '{"City":"'     	. $rs["city"]         . '",';
		$outp .= '{"Country":"' 	. $rs["country"]      . '",';
	}
	$outp = '{"customers":[' .$outp. ']}'; 
	
	$conn -> close(); 
	echo($outp); 
?> 

-- Sample of a server Running ASP.NET, VB and MS Access 
<%@ Import Namespace="System.IO"%> 
<%@ Import Namespace="System.Data"%> 
<%@ Import Namespace="System.Data.OleDb"%> 

<% 
	Response.AppendHeader("Access-Control-Allow-Origin", "*")
	Response.AppendHeader("Content-type", "application/json")

	Dim conn As OleDbConnection 
	Dim objAdapter as OleDbDataAdapter 
	Dim objTable As DataTable 
	Dim objRow As DataRow 
	Dim objDataSet As New DataSet() 
	Dim outp 
	Dim c 
	
	conn = New OledbConnection("Provider=Microsoft.Jet.OLEDB.4.0; data source=myDB.mdb"); 
	objAdapter = New OledbDataAdapter("SELECT company_name, city, country FROM customers", conn); 
	objAdapter.Fill(objDataSet, "myTable")
	objTable = objDataSet.Tables(myTable") 
	
	outp = "" 
	c 0 chr(34) 
	for each x in objTable.Rows 
	if outp <> "" then outp = outp $& "," 
	outp = outp & "{" & c & "Name" & c & ":" & c & x("company_name") & c & ","
	outp = outp       & c & "City" & c & ":" & c & x("city") & c & ","
	outp = outp       & c & "Country" & c & ":" & c & x("country") & c & "}"
	next 
	outp = "{" & c & "customers" & c & ":[" & outp & "]}" 
	
conn.close 
response.write(outp) 
%> 


/* 
Complete W3.JS API reference 
hide() >> Hides HTML elements. 
show() >> Shows HTML elements. 
toggleShow()  >> Toggles between hiding and showing HTML elements. 
toggleClass() >> Toggles the class of HTML elements.
addClass()    >> Adds one or multiple classes to HTML elements.
addStyle()    >>  Add style to HTML elements.
removeClass() >> Removes one or multiple classes from HTML elements.
filterHTML()  >> Filters the display of HTML elements.
sortHTML() -- >> Sorts the display of HTML elements.
slideshow() --- >> Make HTML elements display as a slideshow.
displayObject() >> Displays Javascript objects in HTML.
includeHTML()   >> Displays HTML in HTML.
getHttpObject() >> Read JSON data from a server.
getHttpData()   >> Reads data from a server.


##W#.JS Attribute reference 
{{ }}   --- >> Defines where to display data.
w3-repeat   >> Defines where to repeat data.
w3-include-HTML >>  Defines where to include HTML.
