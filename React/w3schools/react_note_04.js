/* 
About react states  : Each compoennt has a built-in state object , the state object is where we store property values that belongs 
to the component. 
 When the 'state' object changes, the component re-renders. 
 
 ! Remember to pass as arg 'props' to the constructor and super() > invokation of parent construct.
 As other objects state can contain as many props as we pleased. To refer to these props from the component we use 
  >> { this.state.props } 
  
  To change a value in the state object  we use the this.setState() method. 
  When a value in the state object changes, the component will re-render. 
  
*/ 

-- Sample of props on the object state 
class Car extends React.Component { 
	constructor(props) { 
		super(props); 
		this.state = {brand: "Ford"};
	}
	render() { 
		return (
			<div> 
			 <h2>Some random text</h2>
			</div>
		);
	}
}

-- Sample of multiple props on the object state 
class Car extends React.Component { 
	constructor(props) { 
		super(props); 
		this.state = {
			brand : "Ford", 
			model : "Mustang",
			color :  "red", 
			year  : 1964
		};
	}
	render() {
		return ( 
			<div>
				<h1>Some random text</h1>
			</div>
		);
	}
}


-- Sample with state props being referred from component
class Car extends React.Component { 
	constructor(props) {
		super(props); 
		this.state = {
			brand: "Ford", 
			model: "Mustang", 
			color: "Red", 
			year: 1964
		};
	}
	render() {
		return(
			<div> 
				|<h1>Some {this.state.brand}</h1> 
				 <p> 
					prop color : {this.state.color} <br>
					prop model : {this.state.model} <br>
					prop color : {this.state.year}  <br>
				 </p> 
			</div>
		);
	}
}


-- Sample with handling an event by a function assigned to a button from a component 
class Car extends React.Component { 
	constructor(props) { 
		super(props); 
		this.state = { 
			brand: "Ford", 
			model: "Mustang", 
			color: "blue", 
			year: 1999
		};
	}
	changeColor = () => {
			this.setState({color:"blue"});
	}
	render() {
		return (
			<div> 
				<h1>Mine brand {this.state.brand}</h1> 
				<p> 
					
					Prop model : {this.state.model}</br> 
					Prop color : {this.state.color}</br>
					Prop year  : {this.state.year} </br>
				</p> 
				<button type="button" onClick={this.changeColor}>Change color</button> 
			</div>
		);
	}
}

/* 
LifeCycle of Components : Each component in React has a lifecycle wich you can monitor and manipulate during its three main phases. 

The three phase are : Mounting, Updating and Unmounting. 

Mounting : Puttings elements into the DOM. 
		   React has four built-in methods that get called, in this orer : 
			* constructor()
			* getDerivedStateFromProps() 
			* render() 
			* componentDidMount() 
		The render() method is required and will always be called, the others are optional and will be called only if we define them. 
		
The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initiak
state and other initial values.











































