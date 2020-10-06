Concepts : Jquery notes 
source: https://www.w3schools.com/jquery

/* 
In order to remove existing HTML elements we use 
remove() >> Remove the node and its childrens 
empty()  >> Removes the child node from the element selected 

 Also we can add one parameters indicating the elements to be deleted from remove(); 

*/ 

-- Sample with remove() 
.. 
	$("#div1").remove(); 

-- Sample with empty 
.. 
	$("#notice-day").empty();

-- Sample of remove an element by class identifier 
$("p").remove(".className"); 

-- Sample of remove multiple elements by class identifiers
$("p").remove(".test, .demo"); 


/* 
CSS has  multiple manipulation function from JQuery to be used  
Some of them 

addClass()    >> Add classes to an element 
removeClass() >> Removes classes from an element
toggleClass() >> Toggles between adding/removing classes from an element
css()  >> Sets or Returns the style props fron an element
*/

-- Sample of a class existent to be added by AddClass 
.. 
	.important{font-weight:bold;font-size:xx-large}
	.blue{color:blue}
.. 
	$("button").click(function(){ 
		$("h1, h2, p").addClass("blue"); 
		$("div").addClass("important");
});


-- Sample as before but adding multiple classes 
.. 
	.important{font-weight:bold;font-size:xx-large}
	.blue{color:blue}
.. 
	$("button").click(function(){  
		$("#div1").addClass("important blue");
});

-- Sample of removeClass() function 
$("button").click(function(){ 
	$("h1, h2, p").removeClass("blue");
}); 

-- Sample of toggleClass() function
$("button").click(function(){ 
	$("h1, h2, p").toggleClass("blue");
});



-- Sample of value returned from a prop CSS (Just pass one parameter)
.. 
	$("p").css("background-color");

-- Sample of a value being setted for props CSS (Two args are required) 
..
	$("p").css("background-color", "yellow"); 

-- Sample with setting multiple values to css props 
.. 
	$("p").css({"background-color": "yellow", "font-size": "200%"}); 


/* 
In order to manipulate dimensions from a browser window (padding, margin, space fill in and s) 
We use the Dimension methods : 

- width()  >> Returns or set the width of an element
- height() >> Returns or set the height of an element
- innerWidth() 
- outerWidth()
- innerHeight() 
- outerHeight() 

Boths  (width(), height() ) excludes padding, border and margin.
innerWidth(), innerHeight() >> includes padding
outerWidth(), outerHeight() >> includes padding & border 
outerWidth(true), outerHeight(true) >> includes padding & border & margin

*/ 
-- Sample of getting values of 'width' and 'height' from elements 
$("button").click(function(){ 
	var txt = ""; 
	txt += "Width: " + $("#div1").width() +"</br>"; 
	txt += "Height: " + $("#div1").height();
	$("#div1").html(txt);
}); 


-- Sample of getting values of outerWidth(), outerHeight() from elements 
$("button").click(function(){ 
	var txt = ""; 
	txt += "Outer width:  " + $("#div1").outerWidth() + "</br>"; 
	txt += "Outer height: " + $("#div1").outerHeight(); 
	$("#div1").html(txt);
}); 

-- Sample of getting values from outerWidth(true)/outerHeight(true) 
$("button").click(function(){ 
	var txt = ""; 
	txt += "Outer width: with margin" + $("#div1").outerWidth(true) + "</br>"; 
	txt += "Outer heigth: with margin" + $("#div1").outerHeigth(true) + "</br>"; 
	$("#div1").html(txt);
}); 

-- Sample of getting the values width/height from the document and window (browser viewport) 
$("button").click(function(){ 
	var dimensionDocument = ""; 
	var dimensionWindow   = ""; 
	dimensionDocument += "Document width/height: " + $(document).width() + "x" + $(document).height() + "\n"; 
	dimensionWindow   += "Window width/height: " + $(window).width() + "x" + $(window).height(); 
	alert(dimensionDocument); 
	alert(dimensionWindow);
}); 

-- Sample of setting the width/height to an element
$("button").click(function(){ 
	$("#div1").width(500).height(500);
}); 

/* 
Traversing : Means "move through", it's a concept involving hoe to move from different nodes in  a set of nodes
Select some of them, avoid others by using properties from the node selected. 

Sample in html the most usual relation also used in CSS are : 
parent, ancestor, child, sibling, descendant. 

Through this we make a "concept" of three with all their nodes being represantation of these nodes
(parent, ancestor, child, sibling, descendante) tracing a route from one node to the other and so on. 

For this in JQuery the there are some methods calls tree-traversal. 

Also in JQuery, Xpath, XML, HTML, Json the same concept it's used, also on groovy for make a selection of specific
node in unit test by some tools. 

Some function to traverse the DOM tree 
parent() 
parents() 
parentsUntil() 

parent >> Retrieve just the direct parent
parents >> Retrieves all the parents from the element selected to the root (html)
parentsUntil >> Can retrieve all the parents up to an element 

Descendant it´s a representation for (children, grandchild, grandchild, great-granchild, etc)

children() >> Returns all direct children of the selected element 
find() >> Return all the descendant element from the selected 

*/ 

-- Sample returning the direct parent from a "span" element 
$(document).ready(function(){ 
	$("span").parent();
}); 

-- Sample returning all the parents up to the root (html) from a "span" element 
$(document).ready(function(){ 
	$("span").parents();
}); 


-- Sample returning 'ul' elements parents from an "span" element 
$(document).ready(function(){ 
	$("span").parents("ul");
}); 

-- Sample returning all the parents up to  the first "div" element 
$(document).ready(function(){ 
	$("span").parentsUntil("div");
});


-- Sample returning all the children element from a "div" 
$(document).ready(function(){
	$("div").children();
}); 

//Interesting we can add special selector to the function children() as a filter 
-- Sample returning element children from a filtered element 
$(document).(function(){ 
	$("div").children("p.someSelector"); 
}); 

//Find support special characters also 
-- Sample of retrieving all the element of type "span" from a div 
$(document).(function(){ 
	$("div").children("span");
}); 

-- Sample of retrieving all the descendent from  a div 
$(document).ready(function(){ 
	$("div").find("*");
}); 

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
*/ 