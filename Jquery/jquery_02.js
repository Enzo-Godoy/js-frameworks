Concpts : Jquery notes 
source: https://www.w3schools.com/jquery

/* 
stop()  is used to stop an animation or effect before it is finished 

stop() >> Can affect effect functions, sliding, fading and custom animations 

syntax : 
$(selector).stop(stopAll, goToEnd); 

stopAll >> specify if all the animations that follows should be queue and cleared or not. 
goToEnd >> If the animation should finished or it's aborted.

default values for both are false.
 
 */ 

 -- Sample with stop afectin an element with id "panel" 
 $("#stop").click(function(){
 	$("#panel").stop();
 }); 


/* 
Ok, so effects seems to be executed asynchrnously JS statementa s we know are executed line by line. 
But these execution line by line not necesarlly means wait for the execution of the "effects" 


A callback can be passed as second parameter to represent the ending of the effect 

syntax as previous showed before :
$(select).hide(speed, callback); 
*/

-- Sample with a callback function 
$("button").click(function(){ 
	$("p").hide("slow", function(){ 
		alert("The paragraph is now hidden");
	});
}); 

-- Sample without a calback synchronous 
$("button").click(function(){ 
	$("p").hide(1000); 
	alert("The paragraph is now hidden");
}); 



/* 
Chaining of effects can be performed  this way multiple eefect can be chained one after other 
More performant(?) due to an avoided necesity of find the element affected
*/ 
-- Sample with chaining 
$("#p").css("color", "red").slideUp(2000).slideDown(2000); 

-- Same example but with another identation 
$("#p").css("color", "red")
	.slideUp(2000) 
	.slideDown(2000); 

/* 
JQuery has many DOM related methods to access and manipulate elements 
and attributes 

DOM = Document Object Model 

DOM = Is a platform and lenguage-neutral interface that allows programs and scripts 
to dynamically access and update the content, sctructure, and style of a document 

Three mothods useful : 

text() - Manipulate text from a selected element 
html() - Manipulat elements from an HTML doc 
val()  - Manipulate values from forms 
attr() - Manipulate attributes values

*/ 

-- Sample with text()  methods 
$("#btn1").click(function() {
	alert("Text: " + $("#test").text());
});

-- Sample with html()  methods  
$("#btn2").click(function(){ 
	alert("HTML: " + $("#test").html());
}); 

-- Sample with val() methods 
$("#btn1").click(function(){ 
	alert("Value: " + $("#test").val());
}); 

-- Sample with attr() 
$("button").click(function(){ 
	alert($("#w3s").attr("href"));
});


<! ================================================= !>

-- Sample setting by using text() 
$("#btn1").click(function(){ 
	$("#test1").text("Hello World!");
});

-- Sample setting by using html() 
$("#btn2").click(function(){ 
	$("#btn2").html("<b>Hello World!</b>");
}); 

-- Sample settign by using val() 
$("#btn3").click(function() {
	$("#test3").val("Dolly Duck");
}); 


/* 
All of the threes methods 
text(), html(), val(), attr() has a calback function with two parameters 
The index of the current element in the list of elements and the original (old) value. 
*/ 

-- Sample of text() with parameters for its callback 
$("#btn1").click(function(){ 
	$("#test1").text(function(i, origText) {
		return "Old text:" + origText + "New text: Hello World! (index: " + i + ")"; 
	}); 
}); 

-- Sample of html() with parameters for its callback 
$("#btn2").click(function(){ 
	$("#test2").html(function(i, origText){
		return "Old html:" + origText + " New html: Hello <b>World!</b> (index: " + i + ")";
	});
}); 


-- Sample setting the attribute in a link : 
$("button").click(function(){ 
	$("#w3s").attr("href", "https://www.w3schools.com/jquery/");
}); 

-- Sample settings multiple attributes in a link 
$("button").click(function(){ 
	$("#w3s").attr({
		"href": "https://www.w3schools.com/jquery/", 
		"title": "W3Schools JQuery Tutorial"
	});
});


-- Sample of Callback function for attr method 
$("button").click(function(){ 
	$("#w3s").attr("href", function(i, origValue){
		return origValue + "/jquery/";
	});
}); 

/* 
JQuery has four methods to implements an added functionality 
append(), preppend(), after(), before(). 

Boths append(), prepend() hast the ability to receive multiple arguments as elements 
to be added. 

E.G : 
 
 ..
 	$("div").append("<p>Some text</p>", "<p>Some text 02</p>", "<p>Some text n </p>");
 	$("div").prepend("<p>Some text</p>", "<p>Some text 02</p>", "<p>Some text n </p>");

*/ 

-- Sample with append() (Insertion at the end)
.. 
	$("p").append("Some appended text"); 

-- Sample with prepend() (Insertion at the beginning) 
.. 
	$("p").prepend("Some prepended text"); 

/* 
	## We can do the multiple insertion by mixing html, js, jquery as follow 
*/
function appendText(){ 
	var txt1 = "<p>Text.</p>";
	var txt2 = $("<p></p>").text("Text.");
	var txt3 = document.createElement("p");
	txt3.innerHTML = "Text."; 
	$("body").append(txt1, txt2, txt3); 
}

// Also some operation of adding content can be done by using after(), before() function 

-- Sample with after() & before()
$("img").after("Some text after"); 
$("img").before("Some text before");


// Same as well, these functions can take many parameters as multiple elements to be used. 
-- Sample with after() multiple Elements 
function afterText(){ 
	var txt1 = "<b>I </b>"; 
	var txt2 = $("<i></i>").text("love"); 
	var txt3 = document.createElement("b"); 
	txt3.innerHTML = "JQuery!"; 
	$("img").after(txt1, txt2, txt3);
}

-- Sample with before() multiple elements 
function beforeText(){ 
	var txt1 = "<>Some other text</b>"; 
	var txt2 = $("<i></i>").text("Content random"); 
	var txt3 = document.createElement("p"); 
	txt3.innerHTML = "I´m a paragraph"; 
	$("#picture").before(txt1, txt2, txt3);
}


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

