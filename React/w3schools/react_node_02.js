/* 

 Arrow functions >> A simplified way to write functions since ES6. 
 It consist of parenthes follow by a head as '=>' in order to use it, we should declare a variable as a reference identifier. 
  Also if we want to use it with one parameter or without parameters we could avoid parenthesis at the moment of write them.

*/ 

-- Sample with before Arrow functions 
const hello = function() {
		return "Hello World!";
}

-- Sample with Arrow Function 
const hello = () => {
		return "Hello World!";
}

-- Sample with Arrow Function with simplified version, shortened. 
const hello = () => "Hello World!"; 

-- Sample of an Arrow function with Parameters 
const hello = (val) => "Hello" + val; 

-- Sample without Parentheses 
const hello = val => "Hello " + val; 

/* 

this >> In arrow functions there are no binding of this, in regulare fucntions the 'this' keyword represent the object tjat called the function(context), wich 
		could be the window, the document,  a button or whatever. 
		
		With arrow functions, the 'this' keyword always represents the object the object that defined the arrow function. 
		
*/ 

-- Sample with a regular function, 'this' represents the object that called the function: 
class Header {
	constructor() {
		this.color = "Red";
	}
	
	//Regular function :  
	const change = function() {
		document.getElementByID("demo").innerHTML += this;
	}
	
	myHheader = new Header(); 
	
	window.addEventListner("load", myHeader.changeColor); 
	document.getElementById("btn").addEventListener("click", myheader.changeColor); 
}

-- Sample with an arrow function. 
class Header {
	constructor() {
		this.color = "Red";
	}
	
	const changeColor = () => {
		document.getElementById("demo").innerHTML += this;
	}
	
	myheader = new Header(); 
	
	window.addEventListner("load", myheader.changeColor); 
	document.getElementByID("btn").addEventListener("click", myheader.changeColor); 
}

/* 
About variables definition in ES6 and before: 
	Before there were only one way of defininf our variables 'var' keyword. If the keyword wasn't used the value it would be assigned to the 
	global object as props. Unless we were in strict mode the avoid this. (Definition without keyword) 
	
	Since ES6 release we have three ways of defining var : const, let, var. 
	Each one of those with different scopes, redifinition ability, and re-declaration as well. 
	var >> to global scope usually unless inside of a function.
	let >> to local scope usually used inside of functions. 
	const >> to make by convention know to other the value must not be replaced. 
	
*/ 



-- Sample with the three keyword for defining vars ES6. 
const valueRandom = 5.6;
var valueRandom = 5.6;
{
	let valueRandom = 5.6;
}

/* 
The Render Function in react : 
 The generation of HTML component from react code or component made as by JSX or not it's made through 'ReactDOM.render()' method. 
 
 ReactDOM.render() >> takes two arguments the code or component reference and the html element of destiny); 
 
*/ 

-- Sample with a ReactDOM.render() refernece and the html code where it should be loaded. 
<body> 
	<div id="root"></div> 
</body> 
ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

-- Sample creating a variable that containes HTML code and displaying it in a node. 
const myelement = (
	<table> 
		<tr> 
			<th>Name</th> 
		</tr> 
		<tr> 
			<th>John</th> 
		</tr> 
		<tr> 
			<th>Elsa</th> 
		</tr> 
		
);

ReactDOM.render(myelement, document.getElementById('root'));

-- Sample of rendering code in a HTML element diferent from a div 
<body> 
	<header id="sandy"></header> 
</body> 

ReactDOM.render(<p>Hello</p>, document.getElementByID('sandy'); 


/* 
JSX >> It's code from a mixing of JS and HTML that it's transpiled to HTML by babel and doesn't required any 
	   appending method to HTML elements. 
	   
	   for this elements declared in variables that represent chuncks of code are used and passes as reference to the 
	   ReactDOM.render method. 
	   With JSX we can write expressions inside curly braces {} 
	   The expression can be a React variable, or property, or any other JS valid expression. Interpreted at runtime.
	   
	   If we want to write multiple tag elements in a component we should wrapp them in parenthesis, also 
	   Always we need to remember to make an only parent 'HTML Element' of the new component. Also remember always to close the elements!.
	   
	   React Components : Are independent and reusable bits of code. They serve the same purpose as JavaScript functions, 
	   but work in isolation and returns HTML via a render function.
	   
	   Two types : 
	   * Class Components. 
	   * Function Components. 
	   
	   Class Components : The component hast to include the extends React.Component statement, this statement creates an inheritance to
						  React.Compoennts, and gives our component acces to React.Component's functions. 
						  Also rquired the render() method.
		Function Components : Behaves almost similar to the Class component, but class component posses other feature that makes it particular. 
	

If there is a constructor() function in our component, this function will be called when the component gets initiated.  
		constructor is where we initiate the component's properties. 
		
		In React, compoennt properties should be kept in an object called state. 
		In the constructor function we could use the super() statement that gives us acces to all the function of the parent
		component (React.Component) due to a the 'extends React.Component' propertie of the class. 
		
		We could change properties of the component by changing the attributes of the component elements. This way thanks 
		to the 'this' reference the value from the element are updated. 
		
		Usually compoennt are keep in separate files in order to modulate them. 
			After being divided we should remember to include them by exporting them as resource at the top of our 'Render() file'
*/ 

-- Sample JSX 1 
const myelement  = <h1> Random Text '1</h1>; 
ReactDOM.render(myelement, document.getElementById('root')); 

-- Sample without JSX 
const myelement = React.createElement('h1', {}, 'Some random coden 02'); 
ReactDOM.render(myelement, document.getElementById('root')); 

-- Sample of a expression in curly races 
const myelement = <h1>React some { 0 + 1 } result </h1> 

-- Sample of a component multiline 
const myelement = (
	<ul> 
	 <li>Apples</li> 
	 <li>Bananas</li> 
	 <li>Cherries</li> 
	</ul>
);


-- Sample of a parent elemnt for a component 
const myelement = ( 
	<div> 
		<h1>Some example</h1>
		<h1>Some example 02</h1>
	</div> 
);

