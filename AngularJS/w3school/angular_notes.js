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
--> 

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


<!-- 
Expression ways of write them : 
	expression way one : written in double braces : {{ expression }} 
	expression way two : written inside a directive : ng-bind="expression" 
This expression are renderized(?. not sure if the word applies. and result it's returned as output. 

Expressions can contains literals, operators, and  variables. 
e.g : 
	{{ 5 + 5 }} 
		or 
	{{ firstName + "" + lastName }} 
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

<!-- 
If we remove the ng-app directive the expression it won't be resolved. 
Just as to now, by my current understanding, the ng-app it's linking the default application
module from the api imported through 'script src' without the directive ng-app="" 
no module it's linked and this way it doesn't understand how to manipulate any syntax like a ng-directives 
 #Check-mate
 
 e.g : 
--> 

<!DOCTYPE html> 
<html> 
<script src="scr://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body> 
	<div> 
		<p>My first expression: {{ 5 + 5 }}</p> 
	</div> 
</body>
</html> 

<!-- 
	## It can be applied to styles, awesome!! 
--> 



<div ng-app="" ng-init="myCol='lightblue'"> 
<input style="background-color:{{myCol}}" ng-model="myCol"> 

<!-- Order Details, render two ways-->
<div ng-app="" ng-init="quantity=1;cost=5"> 
	<p>Total in dollar: {{ quantity * cost }}</p> 
</div> 
<div ng-app="" ng-init="quantity=1;cost=5"> 
	<p>Total in dollar: <span ng-bind="quantity * cost"></span></p> 
</div> 

<!-- Product Details, render two ways --> 
<div ng-app="" ng-init=productQuantity=3;productPrice=23"> 
	<p>Your purchase it's about : {{ "$" + ( productQuantity * productPrice) }} 
</div> 
<div ng-app="" ng-init="productQuantity=3;productPrice=23">
	<p>Your purchae it's about : <span ng-bind="productQuantity * productPrice"></span></p> 
</div> 
 
<!-- Person details, render two ways --> 
<div ng-app="" ng-init="firstName='Jhon';lastName='Doe'"> 
	<p>The name is {{ firstName + " " + last Name }}</p> 
</div 
<div ng-app="" ng-init="firstName='John';lastName='Doe'"> 
	<p>The name is <span ng-bind="firstName + '' + lastName"></span></p> 
</div> 

<!-- Person details, render two ways using an object as initialized value--> 
<div ng-app="" ng-init="person={firstName: 'John', lastName:'Doe'}">
	<p>The name is {{ person.lastName }}</p> 
</div> 

<div ng-app="" ng-init="person={firstName: 'John', lastName: 'Doe' }">
	<p>The name is <pan ng-bind="person.lastName"></span></p>
</div> 

<!-- Tools details, render two ways using an object as initialized value --> 
<div ng-app="" ng-init="toolsSet={firstTool : 'Skewdriver', secondTool : 'Hammer'">
	<p>Your set of tools are : {{ toolsSet.firstTool }}, {{ toolsSet.secondTool }}</p> 
</div> 
<div ng-app="" ng-init="toolsSet={firstTool : 'Skedriver', secondTool : 'Hammer'"> 
	<p>Your set of tools are : <span ng-bind="toolsSet.firstTool + ', ' + toolsSet.secondTool"></span></p> 
</div> 

<!-- arrays details, render two ways-->
<div ng-app="" ng-init="points=[1,15,19,2,40]"> 
	<p>The third result is {{ points[2] }}</p> 
</div> 
<div ng-app="" ng-init="points="[1,15,19,2,40"> 
	<p>The third result is <span ng-bind="points[2]"></span></p> 
</div> 

<!-- Sample of arrays with animals --> 
<div ng-app="" ng-init="animals=['Snake', 'Bear', 'Cocodrile' , 'Zebra']"> 
	<p>The second animal it's : {{ animals[1] }}</p> 
</div>
<div ng-app="" ng-init="animals=['Snake', 'Bear', 'Cocodrile' , 'Zebra']">
	<p>The second animal it's : <span ng-bind="animals[1]"</span></p>
</div>	


<!-- 
 AJS can be written inside HTML, 
 AJS doesn't suppoert conditionals, loops, and exceptions. 
 Also AJS support filters. 
 ## End of angular expression - Page. 
--> 

