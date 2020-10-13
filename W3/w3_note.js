
/* 
They deserve, these people make a library for their own. Awesome. 
Well, W3.JS  >> Library to simplify web development projects. 

Design for fast application development. For all the devices. 

Some of the things it can does : 
* Run HTML Slideshows 
* Import HTML in HTML 
* Sort the content of any HTML element. 
* Filter the content of any HTML element. 
* Display Javascript Objects in HTML. 
* Read Data from Web Servers (Http Request) 
* Hide or Remove Classes on any HTML element. 
* Add CSS to any HTML Element 

In order to use it we neeed to import the file wich contains all the functions used, sample in next line : 
	<script scr="https://www.w3schols.com/lib/w3.js"></script>         
	
Or just download it from the same 'src' page nad imported it by referencing it using an script tag. 

Generic description of use. 
	To perform any action above some element, we  reference 'w3' followed by the action and the select between parentheses 
	E.G  >>  w3.action(selector); 
	
	Sample : w3.hide('p'); 
	
	
All selectors used from CSS can be applied here. 
*/ 

-- Sample hiding an element by using an HTML element as selector. 
w3.hide('h2'); 

-- Sample hiding an element by using an HTML Id as selector. 
w3.hide('#London'); 

-- Sample hiding an element by using an HTML class as selector. 
w3.hide('.city'); 


/* 
Others Selector E.G : 

("*")   >> Selects all elements in the Document.
(this)  >> Selects the current HTML element.
("p.intro")  >> Selects all <p> elements with class="intro".
("div p")    >> Selects all <p> elements inside all <div> elements. 
("[href]")   >> Selects all elements with an hreg attribute.
("div p:first-child")  >>  Selects the first <p> elements inside all <div> elements.
("a[target=_blank]")   >>  Selects all <a> elements with a target attribute value equal to "_blank" 
("p:nth-child(even)")  >>  Selects all even <p> elements. 


All of the invocation seems to came from the invocation of function from buttons that are handled by JS function from 
within the w3-original-source-file. 



*/ 


-- Sample applying functionality show by using ID 
<button onclick="w3.show('#London')">Show by using id Name</button> 

-- Sample applying functionality show by using Class name
<button onclick="w3.show('.city')">Show by using element name</button>
 
-- Sample applying functionality show by using Element name
<button onclick="w3.show('h2')">Show by using element name</button>

-- Sample applying functionality toogleShow by using ID 
<button onclick="w3.toggleShow('#London')">Toggling by using id name</button> 

-- Sample applying functionality toogleShow by using Class name 
<button onclick="w3.toggleShow('.city')">Toggling by using id name</button>

-- Sample applying functionality toogleShow by using Element name
<button onclick="w3.toggleShow('h2')">Toggling by using Element name</button> 


/* 
	In order to addd CSS styles we use the next format : 
	w3.addStyle(selector, 'property', 'value'); 
*/

-- Sample of adding style by using ID reference 
<button onclick="w3.addStyle('#London', 'background-color', 'red')">Sample of adding style by using ID </button> 

-- Sample of adding style by using Element name 
<button onclick="w3.addStyle('h2', 'background-color', 'red')">Sample of adding style by using element name</button> 

-- Sample of adding style by using Class name reference 
<button onclick="w3.addStyle('.city', 'background-color', 'red')">Sample of adding style by using Class name</button> 


/* 
	In order to add Classes or a Class we use the next format : 
	w3.addClass(selector, 'class1 class2 classN');    
		<!-- or --> 
	w3.addClass(selector, 'class1');
*/ 

-- Sample of adding a class by using an id reference 
<button onclick="w3.addClass('#London', 'marked')"> Press me to add to the element id London</button>

-- Sample of adding  a class by using an element name 
<button onclick="w3.addClass('h2', 'marked')">Press me to add the class marked</button>

-- Sample of adding  a class by using a class reference 
<button onclick="w3.addClass('.city', 'ctx-22')">Press me to add the class ctx-22</button> 

-- Sample of adding multiple classes to a selector (generic) 
<button onclick="w3.addClass('SELECTOR', 'class1 class2 class3')">Press me to add multiple classes</button> 

/* 
	In order to remove Classes or a Class we use the next format : 
	w3.removeClass(selector, 'class1 class2 classN');    
		<!-- or --> 
	w3.removeClass(selector, 'class1');
*/ 

-- Sample of removing  a class by using an Element name 
<button onclick="w3.removeClass('div', 'marked')">Remove a class</button> 

-- Sample of removing  a class by using a Class refence
<button onclick="w3.removeClass('.city', 'marked')">Remove a class by using a class reference</button> 

-- Sample of removing  a class by using an Id reference 
<button onclick="w3.removeClass('#London', 'mctx-22')">Remove Class ctx-22</button> 
 

-- Sample of removing multiple classes to a selector (generic) 
<button onclick="w3.removeClass('#London', 'class1 class2')">Remove multiple classes</button> 
/* 
	In order to remove Classes or a Class we use the next format : 
	w3.toggleClass(selector, 'class');    
		<!-- or --> 
	w3.toggleClass(selector, 'property'', 'class', 'class');
*/ 


-- Sample of removing a class by using an Element name.
<button onclick="w3.toggleClass('div', 'marked')">Sample of toggling a class</button>

-- Sample of removing a class by using a Class reference.
<button onclick="w3.toggleClass('.city', 'city-class')">Sample of toggling  a class 02</button>

-- Sample of removing a class by using an ID referece.
<button onclick="w3.toggleClass('#street', 'street-class')">Sample of toggling a class 03</button>

-- Sample of removing a class by using an ID reference.
<button onclick="w3.toggleClass('#selector', 'class1', 'class2', 'class3')">Sample of a class 04</button> 

/* 
	In order to filter fields, we use the next format : 
	w3.filterHTML(selector);    
*/ 

-- Sample of an activation from HTML of the list filter (shortened)
.. 
	<input oninput="w3.filterHTML('#id01', 'li', this.value)"> 
		<ul id="id01"> 
			<li>Value 01</li>
			<li>Value 02</li>
	
.. 

-- Sample of an activation from HTML of the list filter (extended) 
.. 
	<input oninput="w3.filterHTML('#id01', '.item', this.value)">
		<table id="id01"> 
			<tr> 
				<th>Customer</th> 
				<th>City</th> 
				<th>Addres</th> 
			</tr>
			<tr class="item">  
				<th>Value A-01</th> 
				<th>Value A-02</th> 
				<th>Value A-03</th> 
			</tr>
			<tr class="item"> 
				<th>Value B-01</th> 
				<th>Value B-02</th> 
				<th>Value B-03</th> 
			</tr>
..
