-- Displaying data in a table 
<div ng-app="myApp" ng-controller="customersCtrl"> 
<table> 
	<tr ng-repeat="x in names"> 
		<td>{{ x.Name }}</td> 
		<td>{{ x.Country }}</td> 
	</tr> 
</table> 
<script>
	var app = angular.module('myApp', []); 
	app.controller('customersCtrl', function($scope, $http) {
		$http.get("customers.php") 
		.then(function (response) { $scope.names = response.data.records; }); 
	}); 
</script> 

#Some styling for the table 
<style> 
	table, th, td {
		border: 1px solid grey; 
		bolder-collapse: collapse; 
		padding: 5px; 
	}
	table tr:nth-child(odd) { 
		background-color: #f1f1f1; 
	}
	table tr:nth:child(even) {
		background-color: #ffffff;
	}
</style>

-- Sorting the table by orderBy 
<table> 
	<tr ng-repeat="x in names | orderBy: 'Country'"> 
		<td>{{ x.Name }}</td> 
		<td>{{ x.Country }}</td> 
	</tr> 
</table> 

-- Sorting the table using upperCase filter 
<table> 
	<tr ng-repeat="x in names"> 
		<td>{{ x.Name }}</td> 
		<td>{{ x.Country | uppercase }}</td>
	</tr>
</table> 

-- Displaying table suing index >> $index 
<table> 
	<tr ng-repeat="x in names"> 
		<td>{{ $index + 1 }}</td> 
		<td>{{ x.Name }}</td> 
		<td>{{ x.Country }}</td> 
	</tr> 
</table> 

-- Displaying $even and $odd 
<table> 
	<tr ng-repeat="x in names"> 
		<td ng-if="$odd" style="background-color:#f1f1f1">{{ x.Name }}</td> 
		<td ng-if="$even">{{ x.Name }}</td> 
		<td ng-if="$odd" style="background-color:#f1f1f1">{{ x.Country }}</td>
		<td ng-if="$even">{{ x.Country }}</td> 
	</tr> 
</table> 

<div ng-app="myApp" ng-controller="myCtrl"> 
	<select ng-model="selectName" ng-options="x for x in names"> 
	</select> 
</div> 
<script> 
	var app = angular.module('myApp', []); 
	app.controller('myCtrl', function($scope) {
		$scope.names = ["Emil", "Tobias", "Linus"];
	}); 
</script> 


<!--
Generating a list drop-down from a select consult external. 
We can make this with directives 'ng-repeat', 'ng-options'
-->

-- Sample dropdown ng-repeat 
<select> 
	<option ng-repeat="x in names">{{ x }}</option>
</select> 

-- dataSet, array of objects cars 
$scope.cars = [ 
	{model : "Ford Mustang", color: "red"},
	{model : "Fiat 500", color: "white"},
	{model : "Volvo XC90", color: "black"},
];

<select ng.model="selectedCar"> 
	<option ng-repeat="x in cars" value="{{ x.model }}">{{ x.model }}</option> 
</select>
<h1>You selected: {{ selectedCar }}</h1>

/* If we use as a dataset of objects from an array 
we should use 'ng-value' instead of value
*/ 
<select ng-model="selectedCar"> 
	<option ng-repeat="x in cars" ng-value="{{ x }}">{{ x.model }}</option> 
</select> 
<h1>You sleected a {{ selectedCar.color }} {{ selectedCar.model }}</h1> 

--using ng-options same functionalty 
<select ng-model="selectedCar" ng-options="x.model for x in cars"> 
</select> 

<h1>You selected: {{ selectedCar.model }}</h1> 
<p>Its color is: {{ selectedCar.color }}</p> 

##Datasource as an object 
$scope.cars = { 
	car01: "Ford",
	car02: "Fiat",
	card03: "Volvo"
}; 

<select ng-model="selectedCar" ng-options="x for (x, y) in cars">
</select>
<h1>You selected: {{ selectedCar }}</h1> 

/* 
Selected value will always be the value in a  key-value pair
*/

$scope.cars = { 
	car01: { brand: "Ford",  model : "Mustang", color : "red" }, 
	car02: { brand: "Fiat",  model : "500", color  : "white"}, 
	car03: { brand: "Volvo", model : "XC90", color: "Black"}
}; 

<select ng-model="selectedCar" ng-options="y.brand for (x, y) in cars"> 
</select> 


/* 
	##  Using Angular JS for retrieving data from a db
and after that being parse into JSON , 
The code remains almost the same from the view perspective a reference it's change only. 
	$http.get("file_sql.extension")

*/ 

-- From a PHP Server running mysql 
<div ng-app="myApp" ng-controller="customersCtrl"> 
	<table> 
		<tr ng-repeat="x in names"> 
			<td>{{ x.Name }}</td> 
			<td>{{ x.Country }}</td> 
		</tr> 
	</table> 
</div> 
<script> 
	var app = angular.module('myApp', []); 
	app.controller('customersCtrl', function($scope, $http) {
		$http.get("customers_mysql.php") 
		.then(function (response) {$scope.names = response.data.records; });
	});
</script>


-- From a ASP.NET Server running SQL
<div ng-app="myApp" ng-controller="customersCtrl">
	<table>
		<tr ng-repeat="x in names"> 
			<td>{{ x.Name }}</td> 
			<td>{{ x.Country }}</td> 
		</tr> 
	</table>
</div>
<script> 
	var app = angular.module('myApp', []); 
	app.controller('customersCtrl', function($scope, $http) {
		$http.get("customers_sql.aspx");
		.then(function (response {$scope.names} = response.data.records; });
	});
</script>

/* 
Interesting some sample with different stacks :
PHP-MySQL				, Return : json ;
PHP-MS Access			, Return : json ;
ASP.NET/VB MS Access	, Return : json ;
ASP.NET RAZOR - SQL Lite, Return : json ;

/* 
Cross-Site HTTP Requests 
Al request for from a different server than the requester same. 
Cross-Site HTTP request from scripts are restricted in moder web Browsers .

This shouldn't be used but let use skip that restriction 

## PHP 
header("Access-Control-Allow-Origin");  -->> Just a Header prop

-- Sample Server Code PHP and MySQL 
<?php 
	header("Access-Control-Allow-Origin: *"); 
	header("Content-Type: application/json; charset=UTF-8"); 

	$conn = new mysqli("myServer", "myUser", "myPassword", "Northwind"); 
	$result = $conn ->query("SELECT CompanyName, City, Country FROM Customers"); 

	$outp = ""; 
	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
		if ($outp != "") { $outp .= ",";} 
		$outp .= '{"Name":"'   . $rs["CompanyName"] . '",';
		$outp .= '"City":"'    . $rs[$"City"]       . '",'; 
		$outp .= '"Country":"' . $rs["Country"]     . '"}';
	}
	$outp ='{"records:"[' .$outp. ']}'; 
	$conn->close(); 
	echo($outp); 
?> 

-- Sample Server Code PHP and MS Access 
<?php 
	header("Access-Control-Allow-Origin: *"); 
	header("Content-Type: application/json; charset=ISO-8859-1"); 

	$conn = new COM("ADODB.Connection"); 
	$conn->opwn("PROVIDER=Microsoft.Jet.OLEDB.4.0;Data Source=Northwind.mdb"); 

	$rs = $conn->execute("SELECT CompanyName, City, Country FROM Customers"); 

	$outp = ""; 
	while (!$rs->EOF){
		if($outp != "") {$outp .= ",";}
		$outp .= '{"Name":"'   . $rs["CompanyName"] . '",'; 
		$outp .= '"City":"'    . $rs["City"]        . '",'; 
		$outp .= '"Country":"' . $rs["Country"]     . '"}'; 
		$rs->MoveNext();
	}
	$outp = '{"records":['$outp.]}'; 
	$conn->close(); 
	echo ($outp); 
?>


-- Sample Server Code ASP.NET, VB and MS Access 
<%@ Import Namespace="SYstem.IO"%> 
<%@ Import Namespace="System.Data"%> 
<%@ Import Namespace="System.Data.OleDb"%>
<%@ 
	Response.AppendHeader("Access-Control-Allow-Origin", "*") 
	Response.AppendHeader("Content-Type", "application/json") 
	Dim conn As OleDbDataAdapter 
	Dim objAdapter As OleDbDataAdapter 
	Dim objTable As DataTable 
	Dim objRow As DataRow 
	Dim objDataSet As New DataSet() 
	Dim outp 
	Dim c 
	conn = New OledbConnection("Provider=Microsdoft.Jet.OLEDB.4.0;data source=Northwind.mdb") 
	objAdapter = New OldbDataAdapter("SELECT CompanyName, City, Country FROM Customers", conn) 
	objAdapter.Fill(objDataSEt, "myTable") 
	objTable = objDataSet.Tables("myTable) 

	outp = "" 
	c = chr(34) 
		for each x in objTable.Rows 
			if outp <> "" then outp = outp & ","
			outp = outp & "{" & c & "Name"    & c & x("CompanyName") & c & "," 
			outp = outp &       c & "{" & c & "City"    & c & x("City) & c & "," 
			outp = outp &     & c & "{" & c & "Country" & c & x("Country") & c & "}" 
		next 
	outp = "{" & c & "records" & c & ":[" & outp & "]}" 
	response.write(outp) 
	conn.close 
%> 


-- Sample Server Code ASP.NET/Razor, C# and SQL Lite (I like more this than the before)
@{
	Response.AppendHeader("Access-Control-Allow-Origin", "*") 
	Response.AppendHeader("Content-type", "application/json") 
	var db = Database.Open("Northwind"); 
	var query = db.Query("SELECT CompanyName, City, Country FROM Customers"); 
	var outp = "" 
	var c = chr(34)
}
	@foreach(var row in query){ 
		if(outp != "") {outp = outp + ","}
			outp = outp + "{" + c + "Name"	  + c + ":" + c + @row.CompanyName + c + ","
			outp = outp + 		c + "City" 	  + c + ":" + c + @row.City		   + c + ","
			outp = outp +       c + "Country" + c + ":" + c + @row.Country     + c + "}"
}
outp = "{" + c + "records" + c + ":[" + outp + "]}" 
@outp 

