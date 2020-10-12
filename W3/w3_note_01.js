

/* 
	In order to sort fields, we use the next format : 
	w3.sortHTML(selector);    
*/ 

-- Sample of an activation from HTML of the Sort List 
<button onclick="w3.sortHTML('#id01', 'li')">Sort fields</button> 
	<ul id="id01"> 
		<li>Value 01</li>
		<li>Value 02</li>
		<li>Value 03</li>
		<li>Value 04</li>
		<li>Value 05</li>
		<li>Value 06</li>
	</ul> 
..


-- Sample of an activation from HTML of the sorting of the table  
<table id="myTable"> 
	<tr> 
		<th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(1)')">Column 01</th>
		<th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(2)')">Column 02</th>
	</tr> 
	<tr class="item"> 
		<td>Column 01 - A</td>
		<td>Column 02 - C</td>
	</tr> 
	<tr class="item"> 
		<tr>Column 01 - B</td> 
		<td>Column 02 - B</td> 
	</tr> 
	<tr class="item"> 
		<td>Column 01 - C</td>
		<td>Column 02 - A</td>
...
</table> 

