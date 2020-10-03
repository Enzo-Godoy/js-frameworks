/*
Include directive kind of source for HTML files 
to be include from external files. 
*/
<body ng-app=""> 
	<div ng-include="myFile.html"></div> 
</div> 


-- Code from myFile.html 
<table> 
	<tr ng-repeat="x in names"> 
		<td>{{ x.Name }}</td> 
		<td>{{ x.Country }}</td> 
	</tr> 
</table> 

-- Sample of complete code 
<body> 
	<div ng-app="myApp" ng-controller="customersCtrl"> 
		<div ng-include="'myTable.html'"></div> 
	</div> 
	<script> 
		var app = angular.module('myApp', []); 
		app.controller('customersCtrl', function($scope, $http) {
			$http.get("customers.php").then(function(response) {
				$scope.names= response.data.records;
			});
		}); 
	</scripy> 
</body> 
 

 -- Sample with cross Domain (File from another server where the resource it´s allocated) 
 <nody ng-app="myApp"> 
 	<div ng-include="'https:/tryit.w3schools.com/angular_include.php'"></div> 
 	<script> 
 		var app = angular.module('myApp', []); 
 		app.config(function($sceDelegateProvider) {
 			$sceDelegatedProvider.resourceUrlWhitelist([ 
 				'https:/tryit.w3schools.com/**'
 			]);
 		}); 
 	</script> 
 </body> 


 /* AJS with animations. 
 Animations : Refered as transformation of an HTML element that gives an illusion of motion. 
 Same can be made with some CSS3 or CSS/JS 

 In fact what this module does, it's react certain events  and adding some pre-defined classed used 
 to make the animations. 


 Directives who add/remove classes : 
 ng-show , ng-hide, ng-class, ng-view, ng-include, ng-repeat, ng-if, ng-switch 

 So during the animation, the HTML element will have a set of class value, wich will be removed when the animations has finished. 

 */

 -- Sample that hide a div 
 <body ng-app="ngAnimate"> 
 	Hide the DIV: <input type="checkbox" ng-model="myCheck"> 
	<div ng-hide="myCheck"></div> 
</body> 

-- It requires the AJS animate library 
<script scr="https:"https:/ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.animate.js"></script> 

-- In order to aply it we use the 'ngAnimate' module, (Or as a dependency in our App) 
<body ng-app="ngAnimate"> 

-- Sample with module 'ngAnimate' as a dependency
<body ng-app="myApp"> 
	<h1>Hide the DIV: <input type="checkbox" ng-model="myCheck"></h1> 
	<div ng-hide="myCheck"></div> 
	<script> 
		var app = angular.module('myApp', ['ngAnimate']); 
	</script> 



-- Sample of animation in CSS 
<style> 
	div { 
		transtion: all linear 0.5s; 
		background-color: lightblue; 
		height: 100px; 
	}
	.ng-hide {
		height: 0;
	}
</style 


-- Sample of animation in CSS with media-Query is it?
<style> 
	@keyframes myChange { 
		from { 
			height: 100px; 
		} to { 
			height: 0;
		}
	}

	div {
		height: 100pc; 
		background-color: lightblue;
	}
	div.ng-hide {
		animation: 0.5s myChange;
	}
</style> 


/* 
ngRout it´s a module that routes our application to different pages without 
reloading the entire aplication , Hi ajax :) 
*/ 

-- Sample with Route 
<body ng-app="myApp"> 
	<p><a href="#/!">Main</a></p> 
	<p><a href="#/red">Red</a></p> 
	<p><a href="#/green">Green</a></p> 
	<p><a href="#/blue">Blue</a></p> 
	<div ng-view></div> 
<script> 
	var app = angular.module("myApp", ["ngRoute"]); 
	app.config(function($routeProvider){
		$routeProvider 
			.when("/", {
				templateUrl : "main.html"
			}) 
			.when("/red", {
				templateUrl : "red.html"
			}) 
			.when("/green", {
				templateUrl : "green.html"
			}) 
			.when("/blue", {
				templateUrl : "blue.html"
			});
	}); 
</script> 
</body> 

/* As alway we need the route module in this case 
<script scr="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route-js"></script> 

with this and adding the 'ngRout' module we have acces to the object $routeProvider 
wich allows us to do the redirect in each call

var app = angular.module("myApp", ["ngRoute"]); 
app.config(function($routeProvider) {
	$routeProvider 
		.when("/", {
			templateUrl: "some.html"
		})
		.when("/red", {
			templateUrl: "red.html"
		})
		.when("/green", {
			templateUrl: "green.html"
		})
		.when("/blue", {
			templateUrl: "blue.html"
		})
});


For this call we're going to use the ng-view directive as placeholder 
and this one can be include in different ways : 

-- Sample of the ways
<div ng-view></div>
<ng-view></ng-view> 
<div class="ng-view"></div>


*/ 

-- Sample of a defininition of a $routeProvide by adding the dependency 'ngRoute' module 
var app = angular.module("myApp", ["ngRoute"]); 
app.config(function($routeProvider){ 
	$routeProvider 
		.when("/", {
			templateUrl: "main.html"
		})
		.when("/london", {
			templateUrl: "london.html"
		})
		.when("/paris", {
			templateUrl: "paris.html"
		});
}); 


/* 
Interesting the same $routeProvider allows us to define 
a controller per each route 
*/ 

-- Sample of $routeProvide by adding a controller per each reference 
var app = angular.module("myApp", ["ngRoute"]); 
app.config(function($routeProvider){ 
	$routeProvider 
		.when("/",{
			templateUrl : "main.html"
		})
		.when("/london", {
			templateUrl : "london.html",
			controller: "londonCtrl"
		})
		.when("/paris", {
			templateUrl: "paris.html",
			controller: "paristCtrl"
		});
}); 
app.controller("londonCtrl", function($scope){
	$scope.msg = "I love London"; 
}); 
app.controller("parisCtrl", function($scope) {
	$scope.msg ="I love paris";
});

