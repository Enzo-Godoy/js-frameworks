
<!-- 
The ng-model diretive binds the value of
HTML controls( input, select, textarea) to application data. 
--> 

<div ng-app="myApp" ng-controller="myCtrl"> 
	Name: <input ng-model="name"> 
</div> 
<script> 
	var app = angular.module('myApp', []); 
	app.controller('myCtrl', function($scope) { 
		$scope.name = "John Doe"; 
	}); 
</script> 

<!-- 
	Two ways binding . 
	When the user changes the value inside the input field. 
	The AJS property will also change its value : 
--> 

<div ng-app="myApp" ng-controller="myCtrl"> 
	Name: <input ng-model="name">
	<h1>You entered: {{ name }}</h1> 
</div> 

<!-- 
	ng-model : Can provide type validation for application data 
	(number, e-mail, etc). 
	The span ti will be display only if the expression
	in the ng-show attribute returns (true). 
	
	So.., we could say it's a kind of conditional validation render.
	
	#Application Status 
	ng-model directive can provide status for data : 
	* Valid. 
	* Dirty. 
	* Touched. 
	* Error. 
-->


<form ng-app="" name="myForm"> 
	Email: 
		<input type="email" name="myAddress" ng-model="text"> 
		<span ng-show="myForm.myAddress.$error.email">Not a valid e-mail address</span> 
</form>


<!-- Sample 02 --> 

<form ng-app="" name="myForm" ng-init="myText = 'post@myweb.com'"> 
	Email: 
	<input type="email" name="myAddress" ng-model="myText" required> 
	<h1>Status</h1> 
	{{ myForm.myAddress.$valid }}
	{{ myForm.myAddress.$dirty }} 
	{{ myForm.myAddress.$touched }} 
</form> 

<!-- 
	ng-model provides css clases for html elements 
	depending on their status 
-->

<style> 
	input.ng-invalid { 	
		background-color: lightblue; 
	} 
</style> 
	<body> 
		<form ng-app="" name="myForm"> 
			Enter your name: 
			<input name="myName" ng-model="myText" required> 
		</form> 
	</body> 
..
</html> 



<!-- 
ng-model directive adds/remove the following classes 
according to the status of the form field : 
* ng-empty 
* ng-not-empty 
* ng-touched 
* ng-untouched 
* ng-valid 
* ng-invalid 
* ng-dirty 
* ng-pending 
* ng-pristine 

Data Binding in AJS is the synchronization between the model and the view. 

Data Model : Is a collection of data available for the application. 
--> 

<script> 
	var app = angular.module('myApp', []); 
	app.controller('myCtrl', function($scope) { 
		$scope.firstname = "John" ; 
		$scope.lastname  = "Doe"; 
	}); 
</script>


<!-- 
HTML container where AJS application is displayed, is called the view. 
The view has acces to the model, several ways of displaying model data in the view, 
as we have seen until now. 

ng-bind (directive) : bind the innerHTML of the element to the specified model property. 

<p ng-bind="firstname"></p> 
	or 
<p>First Name: {{ firstname }}</p> 

We use 'ng-model' directive to bind data from the model to the view on HTML controls(input, select, textarea) 
<input ng-model="firstname"> 
 
 When the data in the model changes, the view reflects the change, and when data in the view changes, the model
 is updated as well. 

--> 

<html> 
..
<div ng-app="myApp" ng-controller="myCtrl">
	Name: <input ng-model="firstname"> 
	<h1>{{ firstname }}</h1> 
</div> 
<script> 
	var app = angular.module('myApp', []); 
	app.controller('myCtrl', function($scope) {
		$scope.firstname = "John"; 
		$scope.lastname =  "Doe"; 
	}); 
</script> 
..
</html>


<!-- 
Applications inAJS are controlled by controllers. 

Due to the binding betweent model-view, the controller is separated from the view, 
and simply contrate on the model data. 
	The view still will reflect any changes made in it. 
--> 

<html> 
..
	<div ng-app="myApp" ng-controller="myCtrl"> 
		<h1 ng-click="changeName()">{{ firstname }}</h1> 
	</div> 
	<script> 
	var app = angular.module('myApp', []); 
		$scope.firstname = "John";
		$scope.changeName = function() { 
			$scope.firstname = "Nelly";
		}
	}); 
</script>
..
</html> 