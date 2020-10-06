/* 
Some useful function to travers sideways the dom tree 
	siblings() 
	next() 
	nextAll() 
	nextUntil() 
	prev() 
	prevAll() 
	prevUntil() 

next(), nextAll(), nextUntil() >> Retrieves going forward 
prev(), prevAll(), prevUntil()  >> Retrieves going backwards

Some others methos to filtrate 
first(), last(), eq() :  
Allow us to select a specific element based on its position in a group of elements 

 filter() and not() :
Allow us to select elements by filtering by certain criteria. 

*/ 

-- Sample of retrieving all the siblings from an element 
$(document).ready(function(){ 
	$("div").siblings();
}); 

-- Sample of retrieving all the siblings with identified "p" from a div
$(document).ready(function(){ 
	$("div").siblings("p"); 
}); 

-- Sample returning all the siblings elements from an "h2" element 
$(document).ready(function(){
	$("h2").nextAll();
}); 


-- Sample returining element up to <h6> element 
$(document).ready(function(){ 
	$("h2").nextUntil("h6");
}); 



-- Sample of retrieving the first element
$(document).ready(function(){ 
	$("div").first();
}); 

-- Sample of retrieving the last element 
$(document).ready(function(){ 
	$("div").last();
});

-- Sample of retrieves with same index in element tracing 
$(document).ready(function(){ 
	$("p").eq(1);
}); 

-- Sample of retrieving with a class "intro" element 
$(document).ready(function(){ 
	$("p").filter(".intro");
});

-- Sample of retrieving elements those whose doesn´t have "intro" class 
$(document).ready(function(){ 
	$("p").not(".intro");
}); 

/* 
JQuery Topics 
	Selectors. 
	Events 
	Effects 
	HTML/CSS 
	Traversing 
	AJAC 
	Misc 
	Properties 
*/


/* 
AJAX notes, in brief it´s a technology that allow us to make more interactive our page through an updating 
of some areas specified being handled by function from JS. 

AJAX >> Loading data in the background and display in on the webpage, without reloading the whole page. 

With JQuery AJAX methods, we can request text, html ,json from a remote server using HTTP GET and HTTP Post. 

As different browsers have different syntax for AJAX implementation. We will have to write extra 
code to test for different browsers. 

load() >> Puts the data from a request into an element 

sample syntax : 
$(selector).load(URL, data, callback); 

all it's possible to ad a select after the URL paramter as a select of the file in the same arg. 
$(selector).load("URL .selectorClass");

*/ 

-- Sample of an element HTML to be used as request from a load function 
.. 
	<h2>JQuery and AJAX is fun</h2> 
	<p id="p1">This is some text in a paragraph</p> 
..
$("#div1").load("demo_test.txt");

-- Sample with a selector after the URL 
$("#div1").load("demo_test.txt #p1"); 


/* 
The option callback of .load() has some parameter as : 
responseTxt - Containts the resulting content if the call succeeds. 
statusTxt- Containes the status of the call 
xhr - Containes the XMLHttpRequest Object 

*/ 

 -- Sample of function load() taking callback by default with its args(3) 
 $("button").click(function(){ 
 	$("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr) {
 		if(statusTxt == "success"){
 			alert("External content loaded successfully!");
 		}
 		if(statusTxt === "error"){
 			alert("Error: " + xhr.status+ " : " + xhr.statusText);
 		}
 	});
 }); 

 /* 

 $.get() >> retrieves data by HTTP GET method 
 $.post() >> Send data by HTTP POST 

 */ 

 -- Sample with get request || ASP file request 
 .. 
 <% 
 	response.write("Some content in a file"); 
 %>
 ..
 $("button").click(function(){ 
 	$.get("demo_test.asp", function(data,status) {
 		alert("Data: " + data +"\nStatus: " + status);
 	});
 });

 -- Sample with post request || ASP file request 
..
<% 
	dim fname, city 
	fname = Request.Form("name"); 
	city =  Request.Form("city");
	Response.Write("Dear " & fname & ". "); 
	Response.Write("Hope you live well in " & city & ".");
%> 
.. 
$("button").click(function(){ 
	$.post("demo_test_post.asp", 
	{
		name : "Donald Duck"; 
		city : "Duckdurg"
	},
	function(data, status){ 
		alert("Data: " + data + "\nStatus: " + status);
	});
}); 


/* 
If two JS Frameworks use the same symbol as a shortcut one of them might stop working. 
To avoid this the JQuery team develop the (noConflict()) function to avoid collition of symbols and release it 

Sample in JQuery using '$' as a shortcut for JQuery.. 
Also by saving the release value return we can implement a shortcut of our own 
 var jq = $.noConflict();

Also we can block the symbol within a method ready() some related to scope thing. And making it 
blocked for used of jQuery only within the function

*/ 

-- Sample with release of '$' with noConflict() 
$.noConflict(); 
	jQuery(document).ready(function(){ 
		jQuery("button").click(function(){
			jQuery("p").text("jQuery is still working!");
		}); 
	}); 

-- Sample with relasing the symbol '$' and replacing it 
var jq = $.noConflict(); 
 jq(document).ready(function(){ 
 	jq("button").click(function(){ 
 		jq("p").text("jQuery is still working!");
 	});
 }); 

-- Sample with the symbol being blocked 
$.noConflict(); 
 jQuery(document).ready(function($){
 	$("button").click(function(){
 		$("p").text("jQuery still in here!");
 	});
 }); 


-- Sample implementing filtering on a table with id "myTable" 
<script> 
$(document).ready(function(){ 
	$("#myInput").on("keyup", function(){ 
		var value = $(this).val().toLowerCase(); 
		$("#myTable tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -! );
		});
	}); 
}); 

