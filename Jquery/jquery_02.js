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

-- Sample of using fadeIn() 
$("button").click(function(){ 
	$("#div1").fadeIn(); 
	$("#div2").fadeIn("slow"); 
	$("#div3").fadeIn(3000);
}); 

-- Sample of using fadeOut() 
$("button").click(function(){ 
	$("#div1").fadeOut();
	$("#div2").fadeOut("slow"); 
	$("#div3").fadeOut(3000);
}); 

-- Sample with fadeToggle() 
$("button").click(function(){ 
	$("#div1").fadeToggle(); 
	$("#div2").fadeToggle("slow"); 
	$("#div3").fadeToggle(3000);
}); 

/* 
	The function fadeTo() has a variation in it´s args from the previous mentioned 
	We add after 'speed', as a second parameter the 'opacity' and then after that the callback function 
	$(selector).fadeTo(speed, opacity, callback);
*/

$("button").click(function(){ 
	$("#div1").fadeTo("slow", 0.15); 
	$("#div2").fadeTo("slow", 0.4);
	$("#div3").fadeTo("slow", 0.7);
}); 


/* 
Functions from the slide family : 
 * slideDown() 
 * slideUp() 
 * slideToggle() 

 */ 

 -- Sample with slideDown() 
 $("#flip").click(function(){ 
 	$("#panel").slideDown();
 });

 -- Sample with slideUp() 
 $("#flip").click(function(){ 
 	$("#panel").slideUp();
 }); 

 -- Sample with slideToggle() 
 $("#flip").click(function(){ 
 	$("#panel").slideToggle();
 }); 

 /* 
 JQuery Animations 
 we can do animation by using the animate() method 

 By default all HTML elements have a static position, and cannot be moved. 
 To avoid this static positon we need to first set position-prop to : relative, fixed, absolute 
 Any of these three it should work 

Another important thing to remember is that we must use camelCase for the setting of properties, 
hungarian it won´t work.

Also we can specify property´s animaytion values as (show, hide, toogle)

Interesting JQuery uses a Queue functionality . So all the animation are performed one by one. 

 */ 

 -- Sample of a basic animate setting 
 .. 
 $("button").click(function(){ 
 	$("div").animate({left: '250px'});
 }); 

-- Sample by using multiple properties added to the animation 
$("button").click(function(){ 
	$("div").animate({ 
		left: '250px'; 
		opacity: '0.5'; 
		height: '150px', 
		width: '150px'
	});
}); 

-- Sample of animate() that uses relative values 
.. 
$("button").click(function(){
	$("div").animate({
		left: '250px', 
		height: '+=150px', 
		width: '+=150px'
	});
}); 


-- Sample of using predefined values(toogle, hide, show) 
.. 
$("button").click(function(){ 
	$("div").animatie({
		heigth: 'hide'
	});
});


-- Sample with that represent multiple properties to be queued (? , add to the queue for simplicity 
.. 
$("button").click(function(){ 
	var div = ($"div");
	div.animate({height: '300px', opacity = '0.4'}, "slow");
	div.animate({width:  '300px', opacity = '0.8'}, "slow");
	div.animate({height: '100px', opacity = '0.4'}, "slow");
	div.animate({width:  '100px', opacity = '0.8'}, "slow");
});

-- Sample with two animation being executed in order 
$("button").click(function(){ 
	var div = $("div"); 
	div.animate({left: '100px'}, "slow");
	div.animate({fontSize: '3em'}, "slow");
});


