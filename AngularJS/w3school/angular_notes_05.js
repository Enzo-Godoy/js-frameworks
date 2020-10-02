##Filters 
source :  https://www.w3schools.com/angular/angular_services.asp 


A service is a function, or object available for our App. 
e.g : 

$location service. 
-- Returns info of the location of the current web page 

var app = angular.module('myApp', []); 
app.controller('customerCtrl', function($scope, $location) { 
	$scope.myUrl = location.absUrl();
});

//In order to use a service in the controller it must be passed as a dependency. 

/* 
Some objects in the DOM object has the same functionality but
with some limitations. 

AJS supervises changes >> events propery I guess must be related with the implementation of the framework
this preference. 

$http 
This service makes a request to the server and lets our application handle the response 
*/ 

var app = angular.module('mmyApp', []); 
app.controller('myCtrl', function($scope, $http) {
	$http.get("welcome.html").then(function(response) {
		$scope.myWelcome = response.data; 
	});
}); 


-- $timeout service version of  window.setTimeout function 
var app = angular.module('myApp', []); 
app.controller('myCtrl', function($scope, $timeout){ 
	$scope.myHeader = "Hello World!"; 
	$temout(function () {
		$scope.myHeader = "How are you today";
	}, 2000);
}); 

-- $interval service version of  window.setInterval function 
var app = angular.module('myApp', []); 
app.controller('myCtrl', function($scope, $interval) {
	$scope.theTime = new Data().toLocaleTimeString(); 
	$interval(function () { 
		$scope.theTime = new Date().toLocaleTimeString();
	}, 1000);
});



-- Creating customer service and using it. 
app.service('hexafy', function() {
	this.myFunc = function(x) { 
		return c.toString(16); 
	}
}); 

app.controller('myCtrl', function($scope, heaxafy) { 
	$scope.hex = hexafy.myFunc(255); 
}); 

--Using a custom servie inside a filter 
app.filter('myFormat', ['hexafy', function(hexafy) { 
	return function(x) ;
		return hexafy.myFunc(x);
}]);

<ul> 
	<li ng-repeat="x in counts">{{ x | myFormat }}</li>
</ul>

-- $HTTP service sample , get method simplified
<div ng-app="myApp" ng-controller="myCtrl"> 
	<p> Today´s welcome message is: </p> 
	<h1>{{myWelcome}}</h1>
</div> 

<script> 
	var app = angular.module('myApp', []); 
	app.controller('myCtrl', function($scope, $http) { 
		$http.get("welcome.html")
		.then(function(response) {
			$scope.myWelcome = response.data;
		});
	});
</script>

/* 
Others methods of the $http service : 
	.delete() 
	.get() 
	.head() 
	.jsonp() 
	.patch() 
	.post() 
	.put() 
*/ 

-- $HTTP service sample , 'GET' method 
var app = angular.module('myApp', []); 
app.controller('myCtrl', function($scope, $http){ 
	app.controller('myCtrl', function($scope, $http){ 
		$http({
			method: "GET", 
			url: "welcome.html"
		}).then(function mySuccess(response) { 
			$scope.myWelcome = response.data;
		}, function myError(response) {
			$scope.myWelcome = response.statusText;
		});
}); 



/* 
Others methods of the response object service : 
	.config() 
	.data() 
	.headers() 
	.status() 
	.statusText()
*/ 

var app = angular.module('myApp', []); 
app.controller('myCtrl', function($scope, $http) {
	$http.get("welcome.html") 
	.then(function(response) {
		$scope.content = response.data;
		$scope.statusCode = response.status; 
		$scope.statustext = response.statusText;
	});
}); 


-- Sample 02 handling sucess and erro without implementation 
var app = angular.module('myApp', []); 
app.controller('myCtrl', function($scope, $htpp) { 
	$http.get("wrongfilename.html")
	.then(function(response) {
		//Some logic for sucess
	}, function(response){ 
		//Some logic for failure
		$scope.content = "Something went wrong";
	});
}); 

-- Sample iterating the response of customers.php in json format received.
<div ng-app="myApp" ng-controller="customersCtrl"> 
<ul>
	<li ng-repeat="x in myData"> 
		{{ x.Name + ', ' + x.Country }}
	</li> 
</ul>
<script>
	var app = angular.module('myApp', []); 
	app.controller('customersCtrl', function($scope, $http) {
		$http.get("customers.php").then(function(response){
			$scope.myData = response.data.records;
		});
	}); 
</script> 

-- Displaying data in a table format 
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
		$http.get("customers.php")
		.then(function (response) { $scope.names = response.data.records; });
	}); 
</script> 

##Some styling for the table 
<style> 
	table, th, td {
		border: 1px solid grey; 
		border-collapse: collapse; 
		padding: 5px; 
	}

	table tr:nth-child(odd) {
		background-color : #f1f1f1; 
	}

	table tr:nth-child(even) {
		background-color: #ffffff;
	}
</style>

##Display with filter orderBy 
<table> 
	<tr ng-repeat="x in names | orderBy : 'Country'"> 
		<td>{{ x.Name }}</td>
		<td>{{ x.Country }}</td> 
	</tr>
</table>

##Display with filter upperCase 
<table> 
	<tr ng-repeat="x in names"> 
		<td>{{ x.Name }}</td>
		<td>{{ x.Country | uppercase }}</td>
	</tr>
</table> 

##Display with index >> $index 
<table> 
	<tr ng-repeat="x in names"> 
		<td>{{ $iindex + 1}}</td>
		<td>{{ x.Name }}</td>
		<td>{{ x.Country }}</td> 
	</tr>
</table> 


##Display with restriction $even/$odd
<table> 
	<tr ng-repeat="x in names"> 
		<td ng-if="$odd" style="background-color:#f1f1f1">{{ x.Name }}</td> 
		<td ng-if="$even">{{ x.Name }}</td>
		<td ng-if="$odd" style="background-color:#f1f1f1">{{ x.Country }}</td> 
	</tr>
</table> 

 /* 
 $http is an XMLHttpRequest object for requesting external data. 
 $http.get() it's just a property of that object, it seams more clear now
 */