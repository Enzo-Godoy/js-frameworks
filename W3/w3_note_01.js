

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

/* 

Slideshow functionality >>> With this we are able to make a transition of different images selected 

generic syntax : 
w3.slideshow(selector, interval(miliseconds)) 

By default the slide has turned on the action to present images. 
	In order to prevent the slideshow from starting automatically, we need to set the interval parameters to 0 : 
	w3.slideshow(".nature", 0); 

	When initiated the slideshow the function returns an object representing the slideshow. 
	This objects, contains properties and methods, such as next() and previous(). 
	Any elements can be included in a slideshow. We define it, by using CSS selectors.
*/

-- Sample of list of images selected for a slideshow 
.. 
	<img class="nature" src="img_snowtops.jps"> 
	<img class="nature" src="img_mountains.jpg"> 
	<img class="nature" src="img_nature.jpg"> 
	<script> 
		w3.slodeshow(".nature");
	</script> 
.. 


-- Sample of turning on the functionality slideshow 
var myShow = w3.slideshow(".nature", 0); 

.. 
	<button onclick="myShow.previous()">previous</button> 
	<button onclick="myShow.next()">Next</button> 
	
	
-- Sample of a list being included by using a slideshow 
<h1 class="city">London</h1> 
<h1 class="city">Paris</h1> 
<h1 class="city">Tokyo</h1> 

<script> 
	w3.slideshow(".city"); 
</script> 

/* 
Include functionality >> We are able to include slices of our code as kind of "components" by creating them apart
and including them in our first page. 

Generic sample : 
	w3.includeHTML() 
	
When we include HTML snippets in a web page, we must secure that other functions that depends on the included HTML 
do not execute before the HTML is properly included. In order to do this we use a callback function as a parameter within the 
w3.includeHTML call. 
 E.G 
	w3.includeHTML(myCallback); 

*/ 

-- Sample of importing multiple-files into one by using HTML syntax. 
<a href="https://www.w3schools.com/html/">HTML</a><br> 
<a href="https://w3schools.com/css/">CSS</a><br> 
<a href="https://w3schools.com/bootstrap/">Bootstrap</a><br> 
<a href="https://w3schools.com/js/">JavaScript</a><br> 
<a href="https://w3schools.com/sql/">SQL</a><br> 
<a href="https://w3schools.com/php/">PHP</a><br> 
<a href="https://w3schools.comw3css/">W3.CSS</a><br>

-- Sample of including files by using W3 library
<div w3-include-html="content.html"></div> 
..
	<script> 
		w3.includeHTML(); 
	</script> 

-- Sample of including files by using w3 library. 
<!DOCTYPE html> 
<html> 
	<script src="/lib/w3.hs"></script> 
<body> 
	<div w3-include-html="content.html"></div> 
	<script> 
		w3.includeHTML(); 
	</script> 
</body> 
</html> 

-- Sample of including multiple-files by using w3 library. 
<!DOCTYPE html> 
<html> 
	<script src="/lib/w3.js"></script> 
</body> 
	<div w3-include-HTML="h1.html"></div> 
	<div w3-include-HTML="content.html"></div> 
<script> 
	w3.includeHTML(); 
</script> 
</body> 
</html> 

-- Sample of adding dependent functions as a callback function 
<script> 
	w3.includeHTML(myCallback); 
	function myCallback() {
		//Some logic
	}
</script> 






























































































































































