-- Sample of a Class Component 
class Car extends React.Component { 
	render() { return <h2>Some random text</h2> }
}

ReactDOM.render(<Car />, document.getElementById('root')); 


-- Sample of a function Component 
function Car() { return <h2>Some random text 02</h2> } 

ReactDom.render(<Car />, document.getElementById('root')); 


-- Sample of a Class component with a constructor 
class Car extends React.Component { 
	constructor() {
		super(); 
		this.state = {color : "red" }; 
	}
	render() { return <h2>Some text related to $this.color </h2>; } 
}

ReactDOM.render(<Car />, document.getElementById('root')); 


-- Sample of  a class component with a constructor an expression state 
class Car extends React.Component { 
		constructor() { 
			super(); 
			this.state = {color: "red" };
		}
		render() { return <h2>Some text and my color option : { this.state.color }</h2>; } 
}
ReactDOM.render.(<Car />, document.getElementById('root'));


-- Sample of rendering a component and changing props by attributes  
class Car extends React.Component {
	constructor(){
		super(); 
		this.state = { color: "red" };
	}
	render { return <h2>Some text and value from attributes : { this.state.color}</h2>; } 
}
ReactDOM.render.(<Car color="red" />, document.getElementById('root')); 


-- Sample of a component within a component 
class Car extends React.Component {  
	render() { return <h2> Some random text </h2>;	}
} 

class Garage extends React.Component {
	render () {
		return (
			<div> 
				<h1>Some random text</h1> 
				<Car /> 
			</div>
		);
	}
}
ReactDOM.render(<Garage />, document.getElementById('root'); 


-- Sample of exporting a component  
import React from 'react'; 
import ReactDOM from 'react-dom'; 

class Car extends React.Component{ 
	render() { return <h2>Some text for component Car</h2>; }
}

export default Car; 


/* importing it from App.js */ 
import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Car from './App.js'; 

ReactDOM.render(<Car />, document.getElementById('root')); 



/* 
About Props : Props represent the state of React components, (pre-hooks) , and these are 
passed to components via HTML attributes. 

 Props are like function arguments but received through the attributes of the component related to
 Also they let us pass data between components.  Variables or expressions needs to be send through curly braces. 
 
 
 !If our component has a constructor function, the props should always be passed to the constructor and also to the
 React.Component via the super() method. 
 
 React Props are read-only! - an error it will be throwed if we try to changed them. 
 
*/ 


-- Sample adding an attribute to a component and being referred after  
class Car extends React.Component {
	render() { return <h2> I am random {this.props.brand} </h2>; }
}
const myelement = <Car brand="Ford" /> 
 

-- Sample adding an attribute to a component and being referred in another component | 01
class Car extends React.Component { 
	render() { return <h2>Some random {this.props.brand} </h2>; }
}

class Garage extends React.Component {
	render() {
		return ( 
			<div> 
				<h1>Some random text</h1> 
				<Car brand="ford" />
			</div> 
		);
	}	
}

ReactDOM.render(<Garage />, document.getElementById('root')); 



-- Sample adding an attribute to a component and being referred in another component | 02
class Car extends React.Component { 
	render() { return <h2>Some random text {this.props.brand}</h2>
} 

class Garage extends React.Component {
	render() { 
		const carname = "Some name"; 
		return (
			<div> 
				<h1>Some random text</h1> 
				<Car brand={carname} /> 
			</div>
		);
	}
}
ReactDOM.render(<Garage />, document.getElementById('root')); 


-- Sample of an object pass as attribute to the component 
class Car extends React.Component { 
	render() { return <h2>Some random text {this.props.brand.model} </h2>  } 
}

class Garage extends React.Component { 
	render() {
			return <h2> Some random text {this.props.brand.model} </h2>; 
	}
} 

class Garage extends React.Component { 
	render() {
		const carinf = { name : "Ford", model: "Mustang"};
		return (
			<div> 
				<h1> Some random text </h1> 
				<Car brand={carinf} /> 
			</div>
		);
	}
}

ReactDOM.render(<Garage /> , document.getElementById('root'));


-- Sample with Props in the Constructor 
class Car extends React.Compoennt { 
	constructor(props) {
		super(props);
	}
	render() {
		return <h2>Some random : {this.props.model} </h2> ; 
	}
}
ReactDOM.render(<Car model="Must-324" /> , document.getElementById('root')); 
