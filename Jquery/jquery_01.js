-- Basic sample of JQuery 
$(document).ready(function() {
	$("p").click(function(){ 
		$(this).hide();
	});
});


/* 
Functionality that can be performed by JQuery: 
HTML/DOM manipulation 
CSS manipulation 
HTML event methods 
Effects and animations
AJAX 
Utilities

Prduction Version >> minified 
Development Version >> for testing/development(uncompressed) 


It can be include from a file in the same directory 
<head> 
	<script src="jquery-3.5.1.min.js"></script>
</head> 

or from a Google's CDN (Content Delivery Network) 
<head>
	<script scr="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

CDN >> Allows caching and deliver by proximity, meaning this the nearest server with the code accesible it will be use!.

Usually JQuery select an HTML element and performs some action on the element 
$(select).action()

$(this).hide() 
$("p").hide()   - action in an element selected by paragraph
$(".test").test()   - action to an element selected by class 
$("#test").hide()   - action to an element selected by id 


The reason why the code from jquery it's within the $(document).ready(function)({}); 
it's to prevent the code from being executed before the document has finished of being loaded

The shortest version : 
$(function(){ 
	//some code
});

All selectors start with >> $() 

And can be used based on name, id, classes, types, attributes, values. Etc. 

*/

-- Sample selecting a paragraph 
.. 
$(document).ready(function(){ 
	$("button").click(function(){
		$("p").hide();
	});
}); 

..
<p>Element selected</p>


-- Sample by using selector id 
$(document).ready(function(){
	$("button").click(function(){
		$("#test").hide();
	});
});
.. 
<div id="test">Some text here</div>
<button>Click here to hide text</button>

--Sample by using select class 
$(document).ready(function(){ 
	$("button").click(function(){
		$(".test").hide();
	});
});
..
<div class="test">Some text div class here</div> 
<button>Click here to hide text 2</button>


/* 
Sample of JQuery Selector 

$(*) 		- Selects all elements 
$(this) 	- Select the current HTML element 
$("p.intro") - Select element <p> with class="intro" 
$("p:first") - Select the first <p> element 
$("ul li:first") 	   - Select the first element <li> from an <ul> 
$("ul li:first-child") - Select the first element <li> of every <ul> 
$("[href]") 	- Selects all element with an href attribute 
$("a[target='_blanck']")  - Selects all <a> element with a target attribute equal to "_blanck"
$("a[target!='_blanck']") - Selects all <a> element with a target attribute not equal to "_blanck"
$(":button") - Select all <button> elements and <input> of type 'button' 
$("tr:even") - Select all even <tr> elements 
$("tr:odd")  - Select all odd <tr> elements

When the quantity of JQuery to apply are quite a lot we should create a file aparte 
bein this reference in the header of our html file 

<head> 
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script scr="_my_query_some_functions.js"></script> 
</head> 


JQuery it's primarily made to responde to events 
Sample of events : 
moving a mouse over an element 
selecting a radio button 
clicking on an element 

Some common DOM events : 
	## Mouse Events 
	click, dblclick, mouseenter, mouseleave 

	##Keyboad events 
	keypress, keydown, keyup. 

	##Form events 
	submit, change, focus, blur. 

	##Document/Window Events 
	load, resize, scroll, unload 

Most DOM events have an equivalent JQuery method , so by this an event determines the structure of the selector in the JQuery 

sample . Taking as a example a 'Click Event' 
.. 
	$("p").click(function() {
		//some logic;
	});

This way an event handler it´s added to the '<p>' element , when the use click on it, the event it´s triggered 
and the logic within the function from the handler it´s executed


*/ 


-- Sample with double click on an element, reference to '<p>' elements 
..
$("p").dblclick(function(){
	$(this).hide();
});


-- Sample when a mouse enter to an element identified by 'id=p1'
.. 
$("#p1").mouseenter(function(){ 
	alert("You entered p1!");
}); 


-- Sample when a mouse leaves an element identified by 'id=p1'
.. 
$(#p1").mouseleave(function(){
	alert("Some randome text");
}); 

-- Sample when a mouse goes down an element identified by 'id=p1'
.. 
$("#p1").mousedown(function(){
	alert("Mouse down over p1!");
});

-- Sample when a mouse goes up an element identified by 'id=p1'
.. 
$("#p1").mouseup(function(){
	alert("Mouse up over p1!")
})


/* 
hover() >> function it´s a combination of mouse enter/mouseleave() 

Two function are passed ass logic within the function called by the event handler 
$("identifier").actionDetected(function(){ 
		//action 01
	, function02(){ 
		//action 02
	}
});
*/

-- Sample with a hover functionlity over an element with id 'p1' 
$("#p1").hover(function(){
	alert("Some random text!");
}, function(){ 
	alert("Some random text02!");
}); 



-- Sample of the focus() function being performed to an HTML form field 
..
$("input").focus(function(){ 
	$(this).css("background-color","#ccccc");
});

-- Sample of the blur() function being performed to an HTML form field 
.. 
$("input").blur(function(){ 
	($this),css("background-color", "#fffff");
});

-- Sample of the on() method attached one or more even handlers for an element 
..
$("p").on({ 
	mouseenter: function(){ 
		$(this).css("background-color", "lightgray");
	}, 
	mouseleave: function(){
		$(this).css("background-color", "orange");
	},
	click: function(){
		$(this).css("background-color", "yellow");
	}
});


/* 
JQuery 
	* Tutorial 
	* Effects 
	* HTML 
	* Traversing 
	* AJAX 
	* Misc 
	* Examples 
	* References 
*/

-- Sample hiding and showing elements  
.. 
$("#hide").click(function(){ 
	$("p").hide(); 
});
$("#show").click(function(){ 
	$("p").show();
}); 
$("#hide").click(function(){ 
	$("p").hide();
}); 
$("#non-visible").click(function(){ 
	$("div").hide();
});
$("#visible").click(function(){ 
	$("div").show();
}); 



/* 
 hide()/show() functions cant take up to 2 parameters [speed, callback]. 
 Speed can be indicated using : slow, fast , miliseconds 
	
	$(select).hide(speed, callback); 
	$(select).show(speed, callback);

Same pattern it´s followed by a toggle() function 
Same pattern with fade function family 
 Fade Function Family : 
 	* fadeIn() 
 	* fadeOut() 
 	* fadeToggle() 
 	* fadeTo()

*/ 

-- Sample '<p>' being hide due to a button has triggered by a click an event 
..
$("button").click(function(){ 
	$("p").hide(1000);
}); 


-- Sample of using a toggle() function 
.. 
$("button").click(function(){ 
	$("p").toggle();
});

