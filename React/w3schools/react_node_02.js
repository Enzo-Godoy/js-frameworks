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




























