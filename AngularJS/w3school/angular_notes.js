AngularJS : 
Site : https://www.w3schools.com/angular/default.asp 

Useful for Single Page Application (SPAs). 


Basic of AngularJS : Directives, expressions, filters, modules and controllers. 

Others : Events, DOM, Forms, Input, Validation, Http and more. 

<!DOCTYPE html> 
<html lang="en-US"> 
<script src="https://ajax.ggogleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script> 
<body> 
	<div ng-app=""> 
		<p>Name : <input type="text" ng-model="name"></p> 
		<h1>Hello {{name}}</h1> 
	</div>
</body>
</html> 

<!-- ## Created by Misko Hevery a Google Employee 2009 --> 
<!-- 
 AngularJS a js Framework . 
  Extends HTML attributes with directives, and binds data to HTML with Expressions. 
  script Addition sample : 
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js""></script> 
  
  
directives are references as ng-directives. 
ng-app : Defines an AngularJS application. 
ng-model : binds the values of HTML (input, select, textarea) to application data. 
ng-bind: binds application data to the HTML view. 
-->

<!DOCTYPE html> 
	<html> 
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
	<body>
	
	<div ng-app="">
		<p>Name: <input type="text" ng-model="nodel"></p> 
		<p ng-bind="name"></p> 
	</div>
</body>
</html>

<!-- 
Where an application it's related to a tag specificly. 
ng-model : links variables to that element. 
ng-bind : links values from  the back to the view through using reference names of vars. 


ng-init : initializes AngularJS application variables 
--> 
<div ng-app="" ng-init="ffirstName="'John'"> 
	<p>The name is <span  ng-bind="firstName"></span></p>
</div> 

<div data-ng-app="" data-ng-init="firstName='John'"> 
	<p>The name is <span data-ng-bind="firsName"></span></p> 
</div> 

<!-- 
use data-ng-directive 
	instead of ng- 
	to make our HTML valid 
	
	expressions are written inside double braces : {{ expression }} 
	render at the same place.
--> 

<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script> 
<body> 
	<div ng-app="">
		<p>My first expression: {{ 5 + 5 }}</p> 
	</div> 
</body>
</html> 

<!DOCTYPE html> 
<html> 
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
	<body>	
	<div ng-app=""> 
		<p>Name: <input type="text" ng-model="name"></p>
		<p>{{name}}</p> 
	</div> 
	</body>
</html>

<!-- 
AngularJS modules defines AngularJS applications. (ng-app)
AJS - Controllers AJS applications.  (ng-controller)

<div ng-app="myApp" ng-controller="myCtrl"> 
	First Name: <input type="text" ng-model="firstName"><br> 
	Last Name: <input type="text" ng-model="lastName"><br> 
	<br> 
	Full Name: {{ firstName + " " + lastName}} 
</div> 
 <script> 
   <!-- module that deine application -->
	var app = angular.module('myApp' , [] );

	<!-- controller for the application --> 
	app.controller('myCtrl', function($scope) {
		$scope.firstName = "Jhon"; 
		$scope.lastName  = "Doe"; 
	}); 
</script> 

<!DOCTYPE html> 
<html> 
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script> 
	<body> 
	<div ng-app=""> 
		<p>Product: <input type="text" ng-model="productName></p> 
		<p>Price:   <input type="text" ng-model="productPrice></p> 
		<p>Code:    <input type="text" ng-model="productCode></p> 
		<p>Produt choice : {{productName}}</p>
	    <p>The price of your product choice it's : $ {{productPrice}}</p>
		<p>Code of your product for purchase : {{productCode}}</p> 
	</div> 
	</body> 
</html> 


<!-- Another random sample created for fun -->
<html> 
...
	<--! Sample with app and controller include in a script withint the same page --> 
	<div ng-App="myStore" ng-controller="myStoreController"> 
		Product Name : <input type="text" ng-model="productName">  <br> 
		Product Price: <input type="text" ng-model="productPrice"> <br>
		Product Code : <input type="text" ng-model="productCode">  <br> 
			<br> 
		Product Details: {{ productName + " price : " + productPrice }} 
		Product Code : {{ productCode }} 
		<button>Purchase</button> 
	</div> 
	<script>   
		<!-- Definition of the application --> 
		var app = angular.module('myStore', [] ); 
		
		<!-- I like comments, another controller definition --> 
		app.controller('myStoreController',  function($scope) { 
			$scope.productName  = "Fruit A"; 
			$scope.productPrice = 2.55;
			$scope.productCode  = "AD3234234DS"; 
		}); 
	</script>
... 
</html>




































































