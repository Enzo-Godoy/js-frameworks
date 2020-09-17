
<!-- 
AJS controllers control the data og AJS applications 
 Controllers are regular JS Objects. 
 
ng-controller : Directive defines the application controller. 
 controller > is a  JS Object , created by a standard JS object constructor. 
 
 --> 
 
 <hmtl> 
 ..
	<div ng-app="myApp" ng-controller="myCtrl"> 
		First Name: <input type="text" ng-model="firstName"><br> 
		Last  Name: <input type="text" ng-model="lastName"> <br> 
			<br> 
		Full Name: {{ firstName + " " + lastName }} 
	</div>
	<script> 
	var app = angular.module('myApp', []); 
		app.controller('myCtrl', function($scope) {
			$scope.firstname = "Jhon";
			$scope.lastName  = "Doe"; 
		}); 
	</script> 
..
</html> 

<!-- 
I'm just writing a lot rigth now due to an over-quantity of information being processing
from others sources out of this page, it will be resumed soon. 

The ng-controller="myCtrl" attribute in an AJS diective. It defines a controller. 
The 'myCtrl' function is a Js function. 
AJS >> invoke the controller with a $scope object. 
In AJS, $scope is the application object(The owner of application variables and functions). 
The controller creates two properties (variables) in the scope (firstName and lastName). 
The ng-model bind the input fields to the controller properties (firstName and last Name). 

--> 


<html> 
.. 
	<div ng-app="myApp" ng-controller="personCtrl"> 
		First Name: <input type="text" ng-model="firstName"><br> 
		Last  Name: <input type="text" ng-model="lastName"> <br> 
			<br> 
		Full Name : {{ fullName() }} 
	</div> 
	<script> 
		var app = angular.module('myApp', []); 
		app.controller('personCtrl', function($scope) {
			$scope.firstName = "John"; 
			$scope.lastName  = "Doe"; 
			$scope.fullName  = function() { 
				return $scope.firstName + " " + $scope.lastName; 
			}; 
		}); 
	</script> 
..
</html> 

<!-- 
In larger applications, it's common to store controllers in extrnal files. 

Sample importing controller from external source
--> 

<html> 
.. 
	<div ng-app="myApp" ng-controller="personCtrl">
		First Name: <input type="text" ng-model="firstName"><br> 
		Last  Name: <input type="text" ng-model="lastName"> <br> 
			<br> 
		Full Name: {{ fullName() }} 
	</div> 
	<script src="personController.js"></script> 
--
</html>


<!-- Controller in external file as personController.js --> 
<script> 
	var app = angular.module('myApp', []); 
	app.controller('personCtrl', function($scope) { 
		$scope.firstName = "John"; 
		$scope.lastName  = "Doe"; 
		$scope.fullName  = function() {
			return $scope.firstName + " " + $scope.lastName; 
		}; 
	}); 
</script> 

<!-- Sample with external controllers_02 -->  


<!-- external controller namesController.js --> 

<html>
..
	<div ng-app="myApp" ng-controller="namesCtrl">
		<ul> 
			<li ng-repeat="x in names"> 
			{{ x.name + ', ' + x.country }} 
			</li>
		</ul>
	</div>
	<script src="namesController.js"></script> 
..
</html> 


<script> 
	angular.module('myApp', []).controller('namesCtrl, function($scope) { 
		$scope.names = [ 
			{ name: 'Jani', country:'Norway'}, 
			{ name: 'Hege', country:'Sweden'}, 
			{ name: 'Kai' , country:'Denmark'} 
		]; 
	}); 
</script> 


<!-- 
Scope is an object with the available properties and methods. 
 It's available for both the view and the controller. 
 
 When we make a controller in AJS, we pass the $scope object as an argument. 
 This way properites made in the controller, can be referenced in the view. 
 
 In the controller side we use the object as  $scope.props 
 but the same properties are refered in the view without the '$scope' prefix. 
 
 AJS Applicarion : 
	* View : Is the HTML. 
	* Model: Is the data available for the view. 
	* Controller : Is the interactive part, function that makes changes/removes/controls the data. 
	
This way we can say that $scope object came from the Model part. and it's use by all the parts involved. 
	
 
--> 

<html> 
..
	<div ng-app="myApp" ng-controller="myCtrl">
		<h1>{{ carname }} </h1> 
	</div> 
	<script> 
		var app = angular.module('myApp', []); 
		app.controller('myCtrl', function($scope) {
			$scope.carname = "Volvo";
		}); 
	</script>
.. 
</html> 



<html> 
.. 
	<div ng-app="myApp" ng-controller="myCtrl"> 
		<input ng-model="name">
		<h1>My name is {{ name }} </h1> 
	</div> 
	<script> 
		var app = angular.module('myApp', []); 
		app.controller('myCtrl, function($scope) {
			$scope.name = "Jhon Doe";
		}); 
	</script> 
..
</html> 


<html> 
.. 
	<div ng-app="myApp" ng-controller="myCtrl">
		<ul> 
			<li ng-repeat="x in names">{{ x }}</li> 
		</ul> 
	</div> 
	<script> 
		var app = angular.module('myApp', []); 
		app.controller('myCtrl', funtion($scope) { 
			$scope.names = ["Emil", "Tobias", "Linus"]; 
		}); 
	</script>
..
</html>


<!-- 
 Root Scope : All applications have a $rootScope wich is the scope created on the HTML element 
 that contains the ng-app directive. 
 
 If a variable has the same name in both the current scope and in the rootScope, the application
 uses the on in the current scope. 
 --> 
 
 <html> 
..
	<body ng-app="myApp"> 
		<p>The rootScope's favorite color:</p> 
		<h1>{{ color }}</h1> 
		
		<div ng-controller="myCtrl">
			<p>The scope of the controller favorite color:</p> 
			<h1>{{ color }}</h1> 
		</div> 
		<p> The rootScope's favorite color is still:</p>
		<h1>{{ color }}</h1> 
		<script> 
			var app = angular.module('myApp', []); 
			app.run(function($rootScope) { 
				$rootScope.color = 'blue'; 
			}); 
			app.controller('myCtrl', function($scope){
					$scope.color = "red"; 
			}); 
			</script>
	</body> 
..
</html> 


