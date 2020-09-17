Page : W3Schools
Site : https://www.w3schools.com/angular/angular_modules.asp 

/*
Modules : Are a container for the different parts of an application. 
and at the same time are a container for th application controllers. 

An AJS module >> An application 
*/ 

<div ng-app="myApp">...</div> 
<script> 
	var app = angular.module("myApp", []); 
</script> 

<!-- 
we refere to controllers as 'ng-controller 
--> 

<div ng-app="myApp" ng-controller="myCtrl"> 
	{{ firstName + " " + lastName }} 
</div>
<script> 
	var app = angular.module("myApp", []); 
	
	app.controller("myCtrl", function ($scope) {
		$scope.firstName = "John"; 
		$scope.lastName  = "Doe"; 
}); 
</script> 

<!-- 
	We can use a module to add our own directives
	to our own applications 
--> 
<div ng-app="myApp" w3-test-directive></ddiv> 

<script> 
	var app = anular.module("myApp", []); 
	app.directive("w3TestDirective", function() { 
		return { 
			template : "I was made in a directive constructor!"
		}; 
});
</script>

<div ng-app="myStore" ng-awesome-directive></div> 

<script> 
		var app = angular.module="myStore", function() { 
			return { 
				template : "The best way to learn it it's through doing it"
			}; 
		}); 
</script> 

<!-- 
Usual to put modules and controllers in JS files apart it seems. 
sample : 
myApp.js  >> Contains an application module definition.  
myCtrl.js >> Contains the controller. 
-->

<!DOCTYPE html> 
<html> 
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script> 
<body> 
	<div ng-app="myApp" ng-controller="myCtrl"> 
		{{ firstName + " " + lastName }} 
	</div> 
	
	<script src="myApp.js"></script>
	<script src="myCtrl.js"></script> 
</body> 
</html> 

<!-- 
Information about modules : 
var app = angular.module("myApp", []); 

[] >> Stands for the dependent modules definition. 
Without '[]' we are not creating a new module but retrieving an exisiting one. 

app.controller("myCtrl", function($scope) { 
	$scope.firstName = "Jhon"; 
	$scope.lastName  = "Doe"; 
}); 


Global functions should be avoid, they can be overwritten or destroyed by other scripts. 
AJS >> Keeps all functions local to the module. 

To load the library at first, angular.module can only be compiled after the library has been loaded. 
--> 

<!DOCTYPE html> 
<html> 
<body> 
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script> 
	<div ng-app="myApp" ng-controller="myCtrl">
		{{ firstName + " " + lastName }} 
	</div> 
	
	<script> 
		var app = angular.module("myApp", []); 
		app.controller("myCtrl", function($scope) {
			$scope.firstName = "John";
			$scope.lastName  = "Doe"; 
		}); 
	</script> 
</body> 
</html> 

<!-- 
Directed are extended HTML attributes with the prefix  'ng-' 
ng-ap   >> Initialize AJS application.
ng-init >> Initialize application data.
ng-model >> Bind the value of HTML controls (input, select, textarea) to application data.
-->

<div ng-app="" ng-init="firstName='John'"> 
	<p>Name: <input type="text" ng-moel="firstName"></p> 
	<p>You wrote: {{ firstName }}</p> 
</div> 

<!-- 

{{ someData }} >> data binding expression. 

ng-model="firstName" >> bounded with {{ firstName }} 
--> 

<div ng-app="" ng-init="quantity=1;price5"> 

	Quantity: <input type="number" ng-model="quantity"> 
	Costs:    <input type="number" ng-model="price"> 
	
	Total in Dollar: {{ quantity * price }} 
</div> 

<!--
Using ng-init is not common usually this task it's performed by controllers ? 
ng-repeat >> directive that repeats an HTML element. 
	|>> It clones HTML elements once for each item in a collection.
--> 
<div ng-app="" ng-init="names=['Jani','Hege','Kai']"> 
	<ul>
		<li ng-repeat="x in names"> 
			{{ x }}
		</li> 
	</ul>
</div> 

<div ng-app="" ng-init="names=[ 
{name: 'Jani', country:'Norway'}, 
{name: 'Hege', country:'Sweden'}, 
{name: 'Kai', country:'Denmark'}]">  

	<ul> 
		<li ng-repeat="x in names"> 
		{{ x.name + ', ' + x.country }} 
	</ul> 
</div>


<!-- 
The ng-app directive defines the root element og an AJS application.
 Auto-bootstrap (initialize) the application when a web page is loaded. 
 
 ng-init : Defines an initiali value for an AngularJS application. 
  Most common to use a controller or module instead. 
  
 ng-model : Binds the value of HTML controls(input, select, textarea) to application data.
 
	It can provide :
		* Validation for application data. 
		* Status for application data. 
		* CSS classes for HTML elements. 
		* Binding HTML elements to HTML forms. 
		
New directives are created by using the .directive function. 

To invoke new directive, we make an HTML element with the same name as 
the new directive. 

camelCaseDirective >> (To) >> camel-case-directive 
"camelCaseDirective" >> <camel-case-directive> 
--> 

<body ng-app="myApp"> 
<w3-test-directive></w3-test-directive> 
<script> 
	var app = angular.module("myApp", []) ; 
	app.directive("w3TestDirective", function() {
		return { 
			template : "<h1>Made by a directive!</h1> 
		};
	}); 
</script> 
</body> 

<!-- 
We can invoke directives by (ECMA) : 
(E)* Element Name.  
(C)* Class. 
(M)* Comment 
(A)* Attribute.
  //Just i've changed by because it seems a better mnemotechnic phrase.

e.g : 
  ## Element Name
<w3-test-diretive></w3-test-directive> 

  ## Class 
<div class="w3-test-directive"></div> 

  ## Comment 
\<\!-- directive : w3-test-directive --\> 

  ## Attribute
<div w3-test-directive></div> 


We can restrict wich method our directives uses 
--> 

<script> 
	var app = angular.module("myApp", []); 
	app.directive("w3TestDirective", function() { 
		return { 
			restrict { 
			//Default restriction EA >> Element names, attributes can invoke directives.
				restrict : "A", 
				template : "<h1>Made by a directive!</h1>"
			}; 
	});
</script> 
