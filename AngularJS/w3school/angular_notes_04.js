Page : Filtes 
site : https://www.w3schools.com/angular/angular_filters.asp 

<!-- 
AJS Filters  
Filters are added to format data (Usually restrict some subset or make some appeareance manipulation in values)
 Some usual filters: (currency, data, json, lowerCase, number, uppercase || filter, limitTo, orderBy ) 
	I prefer to see it as a two vector of funcitonality whereas the first it's pointing to the idea
	of restrict sets, the second to manipulation of format. 
	
	---------(Format-Filters)---------> : (currency, date, json, number) 
	---------(Restriction-Filters)----> : (filter, limitTo, orderBy) 
	
Explanation of each one : 
currency : Format a number to a currency format. 
date : 	Format a date to a specified format. 
filter: Select a subset of items to an array. 
json : Format an objet to a JSON string. 
limitTo : Limits an array/string, into a specified number of elements. 
lowerCase : To lowercase. 
number : Cast to number. 
orderBy : Orders values by some expression. 
uppercase : to uppercase. 

Usually they are added by using the '|' character, follow by a filter selected. 

--> 

<html> 
.. 
	<div ng-app="myApp" ng-controller="personCtrl" 
		<p>The name is {{ lastName | uppercase }}</p> 
	</div>
.. 
</html> 


<html> 
.. 
	<div ng-app="myApp" ng-controller="personCtrl" 
		<p>The name is {{ lastName | lowercase }}</p> 
	</div>
.. 
</html> 

<!-- using filters with directives --> 
<html> 
.. 
	<div ng-app="myApp" ng-controller="namesCtrl">
		<ul> 
			<li ng-repeat="x in names | orderBy: 'country'"> 
				{{ x.name + ', ' + x.country }}
			</li>
		</ul> 
	</div> 
..
</div> 

<html> 
..
	<div ng-app="myApp" ng-controller="costCtrl"> 
		<h1>Price: {{ price | currency }}</h1> 
	</div> 
..
</div> 

<!-- 
 The filter >> 'filter' can only be used on arrays, restrict set of items. 
--> 

<html> 
..
	<div ng-app="myApp" ng-controller="namesCtrl">
		<ul>
			<li ng-repeat="x in names | filter : 'i'"> 
				{{ x }} 
			</li>
		</ul> 
	</div>
..
</html> 

<!-- 
By setting the ng-model direction on an input field, we can use the value of the input field as an expression in a filter. 
--> 

<html> 
.. 
	<div ng-app="myApp" ng-controller="namesCtrl"> 
		<p><input type="text" ng-model="test"></p> 
		<ul> 
			<li ng-repeat="x in names | filter : test"> 
				{{ x }}
			</li> 
		</ul> 
	</div> 
..
</html> 

<!-- 
By adding the ng-click directive on the table headers, we can run a function that 
changes the sorting order of the array. 
--> 

<html> 
..
	<div ng-app="myApp" ng-controller="namesCtrl"> 
	<table border="1" width="100%"> 
		<tr>
			<th ng-click="orderByMe('name')">Name</th> 
			<th ng-click="orderByMe('country')">Country</th> 
		</tr> 
		<tr ng-repeat="x in names | orderBy:myOrderBy"> 
			<td>{{ x.name }}</td> 
			<td>{{ x.country }}</td> 
		</tr> 
	</table>
	<script> 
		angular.module('myApp', []).controller('namesCtrl', function($scope) {
			$scope.names = [ 
				{ name = 'Jani', country: 'Norway' }, 
				{ name = 'Carl', country: 'Sweden' }, 
				{ name = 'Margareth', country: 'England' }, 
				{ name = 'Hege', country: 'Norway' }, 
				{ name = 'Joe', country: 'Denmark' }, 
				{ name = 'Gustav', country: 'Sweden' }, 
				{ name = 'Birgit', country: 'Denmark' }, 
				{ name = 'Mary', country: 'England' }, 
				{ name = 'Kai', country: 'Norway' }
			];
			$scope.orderByMe = function(x) { 
				$scope.myOrderBy = x; 
			}
		}); 
	</script> 
..
</html> 

<!-- 
Also we can create custom filters 
by registering a new filter fatory function with our  module : 
--> 

<html> 
..	
	<ul ng-app="myApp" ng-controller="namesCtrl">
		<li ng-repeat="x in names"> 
			{{ x | myFormat }} 
		</li>
	</ul> 
	<script> 
	var app = angular.module('myApp', []); 
	app.filter('myFormat', function() { 
		return function(x) { 
			var i, c, txt = ""; 
			for(i = 0; i < x.length; i++) {
				c = x[i]; 
				if(i % 2 == 0) {
					c = c.toUpperCase(); 
				}
				txt += c; 
			}
			return txt; 
		}; 
	}); 
	app.controller('namesCtrl', function($scope) {
		$scopes.names = ['Jani', 'Carl', 'Margareth', 'Hege', 'Joe', 'Gustav', 'Birgit', 'Mary', 'Kai']; 
	}); 
</script> 
..
</html>
			



















