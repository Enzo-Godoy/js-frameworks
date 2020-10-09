/* 

REACT JS >> Is a JS library for building user interfaces. Used to build single page applications. 

Also allow us to create reusable UI Components 

In order to test our developmed sites. We need to install 'React' module by using 'npm'

npm >> It's a software that allows us to install 'package' (programs) from differen different server centralized in one software as the provider. 
		usually most of the JS library and NodeJS modules came from the same software. But there're alternative if we search some. 
		
npx >> It's a simplification of the software "npm" in order to offer a better proximity with new JS Developers to "Packages distribution". 

NodeJS >> It's an implementation of "middleware" layer between the SO and the JS code, and allows us to develop interfaces out of the common one developed by JS developer
		  as web page, dynamic sites and so on. NodeJS allos to interact with different SO, the native code of Windows, Lunux, MacOS through different 'packages' 
		  as module of functionality required. Also it's possible to interacti with Web API's and much more. 
		  
		  REACT it was created by Developers from Facebook. 
		  Creates a Virtual DOM in memory. 
		  Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes
		  in the browser DOM. 
		  
		  Create-react-app 2.0 supports . 
		  Babel 7 (transpiler) 
		  webpack (Module bundler) 
		  Jest (Testing) 
		  
	As angularJS. React JS can be learned through importing the minimized version through links : 
	  <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
	  <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
	  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
	  
	react.production.min.js, react-dom.product.min.js >> Let us write react code in our scripts JS. 
	babel.min.js >> Will be in charge of translate JSX to HTML . JSX it's a react notation to develop Components in html. 
					After being transpiles the code in JSX it's converted to html.
	
*/ 

-- Sample with render of a component within declared. 
import React from 'react'; 
import ReactDom from 'react-dom'; 

class Test extemds React.Component { 
	render() {
		return <h1>Hello First Render!</h1>
	}
}

ReactDOM.render(<Test />, document.getElementById('root')); 

-- Sample of installing of first react-app (npm)
npm install -g create-react-app 

-- Sample of executing of first react-app (npx) // name cannot contain uppercase word or letters
npx create-react-app myfirstreact

-- Sample of running our application 
npm start 

-- Sample by importing the minimized version (react-dom, react-production, babel) 
<!DOCTYPE html> 
<html> 
	
  <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  <body> 
	<div id="mydiv"></div> 
		<script type="text/babel"> 
		 class Hello extends React.Component { 
			render() { 	return <h1>Hello World!</h1> }
		 }
		 
		 ReactDOM.render(<Hello />, document.getElementById('mydiv'))
		</script> 
	</body> 
</html> 



-- Sample of the code by default in our 'myfirstreact' App 
import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css'; 

class App extends Component {
	render() { 
		return() (
		<div className="App">   
		    <header className="App-header"> 
			  <img src={logo} className="App-logo" alt="logo" /> 
			  <p> Edit <code>src/App.js</code> and save to reload. </p> 
			  <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a> 
			</header> 
		</div>
		);
		
	}
}

export default App; 


-- Sample of a react Appp with a simple component internal 
import React, { Component } from 'react'; 

class App extends Component {
	render() {
		return ( 
			<div className="App">
				<h1>Hello World!</h1>
			</div> 
		);
		
	}
	
}
export default App;

-- Sample by Rending from external resource components into index.html | part 01 index.js 
import React from 'reac'; 
import ReactDOM from 'react-dom'; 

const myfirstelement = <h1>Hello React!</h1> 
ReactDOM.render(myfirstlement, document.getElementById('root'));



-- Sample by Rending from external resource components into index.html | part 02 index.html 
<!DOCTYPE html> 
<html lang="en"> 
	<head> 
		<meta charset="utf-08" /> 
		<meta name="viewport" content="width=device-width,  initial-scale=1" /> 
		<title>React App</title> 
	</head> 
	<body> 
		<div id="root"></div> 
	</body> 
</html> 


/*
Some requirements in order to advance with React : 
Classes. 
Arrow Functions.
Variables(let, const, var). 

ES6 >> Ecma Script 6 (It's a standart of JS conventions made in 2015). 

A Class is a type of function, but insted of using the keyword function to initiatie it, we use the keyword class, and 
the properties are assigned inside a constructor() method. In order to create an "class inheritance" we should the extends keyword. 


The super () method refers to the parent class. 
BY calling the super() method in the constructor method, we call the parent's constructor method 
and gets access to the parent's properites and methods. 


*/ 

-- Sample of a  class constructor 
class Car {
	constructor(name){ 
		this.brand = name;
	}
}

-- Sample Referencing the class constructor in order to create a new object. 

class Car {
	constructor(name) { 
		this.brand = name;
	}
}


mycar = new Car("Ford"); 


-- Sample of a Method in a Class 
class Car {
	constructor(name) {
			this.brand = name; 
	}
	
	present(){ 
		return 'I have a' + this.brand;
	}
}

mycar = new Car("Ford"); 
mycar.present();


-- Sample of a class named Model that extends from a class Car 
class Car {
	constructor(name) {	this.brand = name; 	}
	present(){ return 'I have a' + this.brand; }
}

class Model extends Car {
	constructor(name, mod) {
			super(name); 
			this.model = mod;
	}
	
	show() {
		return this.present() + ', it is a' + this.model;
	}
}

mycar = new Model("Ford", "Mustang"); 
mycar.show(); 
