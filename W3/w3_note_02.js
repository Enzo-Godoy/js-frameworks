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