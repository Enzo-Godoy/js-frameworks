 #ng-disabled 

 -- Sample 01 'ng-disabled' directive 
<div ng-app="" ng-init="mySwitch=true"> 
	<p><button ng-disabled="mySwitch">Click Me!</button></p> 
	<p><input type="checkbox" ng-model="mySwitch">Button</input></p> 
	<p> 
		{{ mySwitch }}
	</p> 
</div> 


/* If the value of mySwitch evaluetes to true the element it will be disabled, 
by default in the directive 'ng-init' a value of true it's given 
being this modified by the checkbox event */ 


-- Sample of button disabled (html) 
<p><button disabled>Click Here!</button></p> 

-- Sample of button not disabled (html)
<p><button>Click Here!</button></p> 


-- Samples of the ng-show directive 
<div ng-app=""> 
	<p ng-show="true">Click Here!</p> 
	<p ng-show="false">Click Here!</p> 
</div> 

/* It\´s valid to use any expression that evaluates to true, 
truthy values, conditional and so on */ 

-- Sample with value truthy 
<div ng-app="" ng-init="hour=13"> 
	<p ng-show="hour > 12">I'm here</p> 
</div> 


/* 
'ng-hide' directive makes the same functionality, i´m not sure but It seems
that only works with boolean values 
*/

-- Sample with 'ng-hide' directive 
<div ng-app=""> 
	<p ng-hide="true">I´m here</p> 
	<p ng-hide="false">I´m not here</p> 
</div> 



===============>>>> Events in Angular JS >>>============================

Source : https://www.w3schools.com/angular/angular_events.asp 

/* Most of the next directives are just events 
that executes some kind of behaviour about the component being affected */ 
ng-blur, bg-change, ng-click, ng-copy, ng-cut, ng-dblclick, ng-focus,ng-keypress, 
ng-keydown, ng-keyup, ng-mousedown, ng-mouseenter, ng-mouseleave, ng-mousemove, ng-mousemove 
ng-mouseover, ng-mouseup, ng-paste 


//This events will not overwrite HTML events

/* 
Mouse events : 
ng-mouseover
ng-mouseenter
ng-mousemove 
ng-mouseleave 

#When a mouse interacts more directly with the element 
ng-mousedown 
ng-mouseup 
ng-click 
*/ 

-- Sample with one 'over' event 
<div ng-app="myApp" ng-controller="myCtrl"> 
	<h1 ng-mousemove="count += 1">Mouse over Me!</h1> 
	<h1>{{ count }}</h2> 
</div> 
<script> 
	var app = angular.module('myApp', []); 
	app.controller('myCtrl', function($scope) {
		$scope.count = 0; 
	}); 
</script> 


-- Sample with a 'click' event
<div ng-app="myApp" ng-controller="myCtrl"> 
	<button ng-click="count += 1">Click Me!</button> 
	<p>{{ count }}</p> 
</div> 
<script 
	var app = angular.module('myApp', []); 
	app.controller('myCtrl', function($scope) { 
			$scope.count = 0;
    });
</script> 


 
-- Sample with a function call event from  a ng-click directive
<div ng-app="myApp" ng-controller="myCtrl"> 
	<button ng-click"="myFunction()">Click me!</button> 
	<p>{{ count }}</p> 
</div>
<sript 
	var app = angular.module('myApp', []); 
	app.controller('myCtrl', function($scope) {
		$scope.count = 0; 
		$scope.myFunction = function() {
			$scope.count++;
		}
	}); 
</script> 


-- Sample with a toggle functionality, like a drowdown 
<div ng-app="myApp" ng-controller="myCtrl"> 
	<button ng-click="myFunc()">Click Me!</button> 
	<div ng-show="showMe"> 
		<h1>Menu:</h1> 
		<div>Pizza</div>
		<div>Pasta</div>
		<div>Pesce</div>
	</div>

	<div ng-show="Drinks">
		<h2>Drinks:</h1> 
		<div>Soda</div>
		<div>RedWine</div>
		<div>Lemonade</div>
	</div> 
</div> 
<script> 
	var app = angular.module('myApp', []); 
	app.controller('myCtrl', funcion($scope) { 
		$scope.showMe = false; 
		$scope.myFunc = function() {
			$scope.showMe = !$scope.showMe;
		}; 
		$scope.myDrinks = function() {
			$scope.Drinks = !$scope.Drinks; 
		}; 
	}); 
</script> 

/* 
We can pass and use the $event object as argument to the called function, 
this it will allows us to use the object event with his values and properties from the 
browser. 
*/ 


-- Sample with a transfer of the $event object to the controller 
<div ng-app="myApp" ng-controller="myCtrl"> 
	<h1 ng-mousemove="myFunc($event)">Mouse Over Me!</h1> 
	<p>Coordinates: {{ x + ', ' + y }}</p> 
</div> 
<script> 
	var app = angular.module('myApp', []); 
	app.controller('myCtrl', function($scope) { 
		$scope.myFunc = function(myEventObj) {
			$scope.x = myEventObj.clientX; 
			$scope.y = myEventObj.clientY;
		}
	});
</script> 


/* 
Validation and data-binding for input elements 
 Controls availables to interact : 
 input elements 
 select elements 
 button elements 
 textarea elements 

the data-binding it's used by the 'ng-model' directive
	e.g : 
	<input type="text" ng-model="firstname"> 
*/ 

-- Sample of control with reference from the controller 'firstname' 
.. 
	<input type="text" ng-model="firstname"> 
..
<script> 
	var app = angular.module('myApp', []); 
	app.controller('formCtrl', function($scope) {
		$scope.firstname = "John";
	}); 
</script> 




-- Sample of control with reference from other side withint the html document (databinding)
<form> 
	First Name: <input type="text" ng-model="firstname"> 
</form> 
<h1>You entered: {{ firstname }}</h1> 


/* 
checkbox has values true or false so through linking an 'ng-model' reference
to a 'ng-show' directive we can hide or show an element with the 'ng-model'> value 
*/ 

-- Sample of 'ng-model' being refered from a 'ng-show' directive 
<form> 
	Check to show a header: 
	<input type="checkbox" ng-model="myVar"> 
</form> 
<h1 ng-show="myVar">My Header</h1> 


/* 
	## radio buttons retains the value from the selection only
*/

-- Sample of list with radio button controls (html)
<form> 
	<Pick a topic: 
	<input type="radio" ng-model="myVar" value="dogs">Dogs 
	<input type="radio" ng-model="myVar" value="tuts">Tutorials
	<input type="radio" ng-model="myVar" value="cars">Cars
</form> 

-- Sample of list with radio button controls (html)
<form> 
	Select a topic: 
	<select ng-model="myVar"> 
		<option value=""> 
		<option value="dogs">Dogs
		<option value="tuts">Tutorials
		<option value="cars">Car
	</select> 
</form> 


--  Sample of list with radio button controls (html)
<div ng-app="myApp" ng-controller="formCtrl"> 
	<form novalidate> 
		First Name:<br> 
		<input type="text" ng-model="user.firstName"><br> 
		Last Name:<br> 
		<input type="text" ng-model="user.lastName"> 
		<br><br> 
		<button ng-click="reset()">RESET</button> 
	</form> 
	<p>form   = {{user}}</p> 
	<p>master = {{master}}</p> 
</div> 
<script> 
	var app = angular.module('myApp', []); 
	app.controller('formCtrl', function($scope) {
		$scope.master = {firstName: "John", lastName: "Doe"}; 
		$scope.reset  = function(){ 
			$scope.user = angular.copy($scope.master);
		};
		$scope.rest();
	}); 
</script> 

// novalidate attribute new in HTML and disables by defaul browser validation



