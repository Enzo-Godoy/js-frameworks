/* 
AngularJS monitors the state of the form and input fields 
(input, textarea, selet) and lest ous notify the user about the current state 

We can use standard HTML5 attributes to validate inpute, or we can make our own 
validation functions 


 	##Client-side validation must be followed by a server side validation.##
 */

 -- Sample using 'required' keyword from HTML5 
 <form name="myForm">
 	<input name="myInput" ng-model="myInput" required> 
 </form> 
 <p>The Input's valid state is: </ip>
 <h1>{{myForm.myInput,$valid}}</h1> 


 -- Sample using 'email' keyword from HTML5 
<form name="myForm"> 
	<input name="myInput" ng-model="myInput" type="email"> 
</form> 
<p>The input's valid state is:</p> 
<h1>{{myForm.myInput.$valid}}</h1> 

/* 
	AJS update the state state of form/input fields. 

	Input fields have the following states : 
	$untouched 
	$touched 
	$pristina 
	$diry 
	$invalid 
	$valid 

	Form's state :
	$pristine 
	$dirty 
	$invalid 
	$valid 
	$submitted 

	We can use these state to show meaningful messages to the user. 
*/ 

-- Sample message with status $touched 
<input name="myName" ng-model="myName" required> 
<span ng-show="myForm.myName.$touched && myForm.myName.$invalid">The name is required.</span> 

/* Also a series of classes can be used to update 
fields status by using css classes added by AJS 

ng-untouched. 
ng-touched 
ng-pristine 
ng-dirty 
ng-valid 
ng-invalid 
ng-valid-key 
ng-invalid-key 

Following classes being added : 
ng-pristine 
ng-dirty 
ng-valid 
ng-invalid 
ng-valid-key 
ng-invalid-key 

Sample of a css class from AJS 

##invalid 
<style>
	input.ng-invalid { 
		background-color : pink; 
	}
	input.ng-valid {
		background-color : lightgreen;
	}
</style> 

##pristine 
<style> 
	form.ng-pristine { 
		background-color: lightblue;
	}
	form.ng-dirty {
		background-color: pink;
	}
</style>
*/ 



//Sample of a custom validation 
<form name="myForm"> 
    <input name="myInput" ng-model="myInput" required my-directive> 
</form>
<script> 
	var app = angular.module('myApp', []); 
	app.directive('myDirective', function() { 
		return {
			require: 'ngModel', 
			link: function(scope, element, attr, mCtrl) {
				function myValidation(value) {
					if(value.indexOf("e") > -1) {
						mCtrl.$setValidity('charE', true); 
					} else { 
						mCtrl.$setValidity('charE', false);
					}
					return value;
				}
				mCtrl.$parsers.push(myValidation);
			}
		};
	});
</script>


/* 
When naming a directive we use camelCase but to referred to them we use hungarian .

myDirective >> my-directive
*/ 

-- Sample validation 
<!DOCTYPE html> 
<html> 
	<script scr="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script> 
<body> 
	<h2>Validation Example</h2> 
	<form ng-app="myApp" ng-controller="validateCtrl" name="myForm" novalidate> 
	<p>Username:<br> 
		<input type="text" name="user" ng-model="user" required> 
		<span style="color:red" ng-show="myForm.user.$dirty && myForm.user.$invalid"> 
		<span style="color:red" ng-show="myForm.user.$dirty && myForm.user.$invalid"> 
		<span ng-show="myForm.user.$error.required">Username is required.</span> 
	</p> 
	<p>Email:<br> 
		<input type="email" name="email" ng-model="email" required> 
		<span style="color:red" ng-show="myForm.email.$dirty && myForm.email.$invalid"> 
		<span ng-show="myForm.email.$error.required">Email is required.</span> 
		<span ng-show="myForm.email.$error.email">Invalid email address.</span> 
	</p> 
	<p>
		<input type="submit" ng-disabled="myForm.user.$dirty && myForm.user.$invalid || myForm.email.$dirty 
		&& myForm.email.$invalid"> 
	</p> 
</form> 
<script> 
	var app = angular.module('myApp', []); 
	app.controller('validateCtrl', function($scope) {
		$scope.user  = 'John Doe'; 
		$scope.email = 'john.doe@gmail.com'; 
	}); 
</script> 
</body> 
</html> 



/* 
AJS has an api set of functions js predefined, performing some task as : 
Comparing objects. 
Iterating objects. 
Converting data. 

Some : 
angular.lowercase() 
angular.uppercase() 
angular.isString() 
angular.isNumber() 

*/ 

-- Sample using angular.lowercase()
<div ng-app="myApp" ng-controller="myCtrl"> 
	<p>{{ x1 }}</p> 
	<p>{{ x2 }}</p> 
</div> 
<script> 
	var app = angular.module('myApp', []); 
	app.controller('myCtrl', function($scope) {
		$scope.x1 = 'John'; 
		$scope.x2 = angular.lowercase($scope.x1);
	});
</script> 

-- Sample using angular.uppercase()
<div ng-app="myApp" ng-controller="myCtrl"> 
	<p>{{ x1 }}</p> 
	<p>{{ x2 }}</p> 
</div> 
<script> 
	var app = angular.module('myApp', []); 
	app.controller('myCtrl', function($scope) {
		$scope.x1 = "John"; 
		$scope.x2 = angular.uppercase($scope.x1); 
	}); 
</script> 

-- Sample using angular.isString()
<div ng-app="myApp" ng-controller="myCtrl"> 
	<p>{{ x1 }}</p> 
	<p>{{ x2 }}</p> 
</div> 
<script> 
	var app = angular.module('myApp', []); 
	app.controller('myCtrl', function($scope) {
		$scope.x1 = "John"; 
		$scope.x2 = angular.isString($scope.x1);
	}); 
</script> 


-- Sample using angular.isNumber()
<div ng-app="myApp" ng-controller="myCtrl"> 
	<p>{{ x1 }}</p> 
	<p>{{ x2 }}</p> 
</div>
<script> 
	var app = angular.module('myApp', []); 
	app.controller('myCtrl', function($scope) {
		$scope.x1 = "John"; 
		$scope.x2 = angular.isNumber($scope.x1);
	}); 
</script> 

