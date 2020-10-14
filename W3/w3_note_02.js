-- Sample of combininb displayOBject function with includeHTML taking as DS:DS_OBJ
.. 
<div w3-include.html="list.html"></div> 
<script> 
	w3.includeHTML(myCallback); 
	function myCallback() {
		w3.displayObject("id01", myObject);
	}
</script> 

-- Sample of filling Check Boxes with DS_OBJ 
.. 
<table id="id01"> 
	<tr w3-repeat="customers"> 
		<td>{{CustomerName}}</td> 
		<td><input type="checkbox" {{checked}}"></td> 
	</tr> 
</table> 
<script> 
	w3.displayObject("id01", myObject); 
</script> 

-- Sample of filling an element by uing as select a Class 
.. 
	<table id="id01"> 
		<tr w3-repeat="customers" class="{{Color}}"> 
			<td>{{CustomerName}}</td> 
		</tr>
	</table> 
	<script> 
		w3.displayObject("id01", myObject); 
	</script> 


-- Sample of filling a table with DS_OBJ 
..
	<table id="id01"> 
		<tr> 
			<th>Customer</th> 
			<th>City</th> 
			<th>Country</th> 
		</tr> 
			<tr w3-repeat="customers"> 
			<td>{{CustomerName}}</td>
			<td>{{City}}</td> 
			<td>{{Country}}</td>
		</tr> 
	</table> 
	<script> 
		w3.displayObject("id01", myObject); 
	</script> 
	
-- Sample of  a <select> element being fill up.
.. 
<select id="id01"> 
	<option w3-repeat="x in cars">{{x}}</option> 
</select> 
<script> 
	w3.displayObject("id01", {"cars" : ["Volvo", "Ford", "BMW", "Mercedes"]}); 
</script> 

/* 
Sample of an Http Request using the w3 library 
 Generic  :
 w3.getHttpObject(file.js, function); 
 Some details : We use this function as an extraction of information. 
*/

-- Sample of requesting info from a DropDown id01 Obj
.. 
	<select id="id01"> 
		<option w3-repeat="customers">{{CustomerName}}</option> 
	</select> 
<script> 
	w3.getHttpObject("customers.js", myFunction); 
	
	function myFunction(myObject) {
		w3.displayObject("id01", myObject);
	}
</script> 
	

-- Sample of filling a list requesting info id01 Obj
.. 
<ul id="id01"> 
	<li w3-repeat="customers">>{{CustomerName}}</li> 
</ul> 
<script> 
	w3.getHTTPObject("customers.js", myFunction); 
	
	function myFunction(myObject) {
		w3.displayObject("id01", myObject);
	}
</script> 

-- Sample of filling a table requesting info from a Table 
.. 
<table id="id01"> 
	<tr> 
		<th>Customer</th> 
		<th>City</th> 
		<th>Country</th> 
	</tr> 
	<tr w3-repeat="customers"> 
		<td>{{CustomerName}}</td> 
		<td>{{City}}</td> 
		<td>{{Country}}</td> 
	</tr> 
<script> 
	w3.getHttpObject("customers.js", myFunction); 
	
	function myFunction(myObject) {
		w3.displayObject("id01", myObject);
	}
</script>


-- Sample of filling a table with info from id01 Obj
.. 
<table id="id01"> 
	<tr> 
		<th>Title</th> 
		<th>Artist</th> 
		<th>Price</th> 
	</tr> 
	<tr w3-repeat="cd"> 
		<td>{{title}}</td>
		<td>{{artist}}</td> 
		<td>{{price}}</td> 
	</tr> 
</table> 
<script> 
	w3.getHttpObject("cd_catalog.js", myFunction); 
	
	function myFunction(myObject) {
		w3.displayOBject("id01", myObject);
	}
</script> 















































































































































