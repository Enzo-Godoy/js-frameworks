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

	