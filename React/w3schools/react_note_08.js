
/* 
About Styling in React  
 By using an object as an expression in the style attribute (01). 
 The props has to be in camelCase always. 
 We can use object creates outside the return() method and make a reference to them. 
 
 By attaching an external css file in the import props at the header of the main file (02). 
 By using a module imported (03). 
 
*/ 

-- Sample of an styling by adding an object to the style attribute 
class MyHeader extends React.Component {
	render() {
		return(
			<div> 
				<h1 style={{color: "red"}}>Some sample</h1> 
				<p>Some example 02</p> 
			</div>
		);
	}
}

-- Some example by using a camelCase named props 
class MyHeader extends React.Component {
	render() {
		return (
			<div> 
				<h1 style={{backgroundColor: "lightblue"}}>Some text in lightblue.</h1> 
				<p>Style Added</p> 
			</div>
		);
	}
}

-- Sample by referening an internal object 
class MyHeader extends React.Component {
	render() {
		const mystyle = {
			color : "white", 
			backgroundColor : "DodgerBlue", 
			padding : "10px", 
			fontFamily: "Arial"
		};
		return (
			<div> 
				<h1 style={mystyle}>Some example 02</h1> 
				<p>Some example 03</p> 
			</div>
		);
	}
}


-- Sample by importing an external file, with external file sample at the beggining 
body {
	background-color : #282c34; 
	color: white; 
	padding: 40px; 
	font-family: Arial; 
	text-align: center;
}

import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './App.css'

class MyHeader extends React.Component {
	render() {
		return (
			<div> 
				<h1>Some example 02</h1> 
				<p>Some example 03</p>
			</div>
		);
	}
}
ReactDOM.render(<MyHeader />, document.getElementById('root')); 


-- Sample by importing an external file css, exporting as a module JS, and importing from the main index.js
.bigblue {
	color: DodgerBlue; 
	padding : 40px; 
	font-family: Arial; 
	text-align: center;
}

import React from 'react'; 
import ReactDOM from 'react-dom'; 
import styles from './mystyle.module.css'; 

class Car extends React.Component {
	render() {
		return <h1 className={style.bigblue}>Some example  02</h1>
	}
}
export default Car; 

import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Carfrom './App.js'; 
ReactDOM.render(<Car />, document.getElementById('root')); 


/* 

Using Sass >> Sass is a CSS pre-processor. These files are executed on the server and send s CSS to the Browser . 
	
For using Sass we neeed to install it through npm 
´´
	npm install node-sass 
´´

Sass file extension >> someName.scss 
*/ 

-- Sample of a Sass file  and importing it from the main file js
$myColor: red; 
h1 {
	color: $myColor;
}

import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './mysass.scss'; 

class MyHeader extends React.Component {
	render() {
		return (
			<div> 
				<h1> Some sample text</h1> 
				<p>Some sample text 02</p> 
			</div>
		);
	}
}
ReactDOM.render(<MyHeader />, document.getElementById('root')); 