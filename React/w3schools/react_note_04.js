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

The three phase are :
* Mounting, 
* Updating,
* Unmounting. 

Mounting : Puttings elements into the DOM. 
		   React has four built-in methods that get called, when mounting :
			- constructor()
			- getDerivedStateFromProps() 
			- render() 
			- componentDidMount() 

Updating : When react detects change in the component's state or props. 
			React has five built-in methods that gets called, when updating : 
			- getDerivedStateFromProps() 
			shouldComponentUpdate() 
			render() 
			getSnapshotBeforeUpdate() 
			componentDidUpdate() 
			
Unmounting : When a component is removed from the DOM. 
			React has only one buil-in method that gets called, when unmounting :
			- componentWillUnmount() 
			
Explanation of each Method per stage :
 * Mounting : 
		constructor ------------ >> This method is called at first, when the component is initiated, and set up the initial 'state' and other
						intial values. 
		getDerivedStateFromProps >> Called right before rendering the elements in the DOM. Here can be set set 'state' object pased on the initial props. 
		render   --------------- >> Is the method that actuallu outputs the HTML to the DOM. 
		componentDidMount ------ >> Called after the component is rendered. 

 * Updating : 
		getDerivedStateFromProps >> First method when a component gets updated. Set state object based on the initial props. 
		shouldComponentUpdate    >> Method that determines whether React should continue with the rendering or not. 
		render ----------------- >> Called again when the component gets updates, it has to re-render the HTML to the DOM, with the new changes. 
		getSnapshotBeforeUpdate- >> We have access to the props and state before the update, Even after the update we can check the values before the update. 
				//If the method getSnapshotBeforeUpdate is present, we should also include the method 'componentDidUpdate', otherwise we will get an error. 
	
		componentDidUpdate ---- >> This method is called after the component is updated in the DOM. 
		
 * Unmounting : 
		componentWillUnmount -- >> In this method the actions when the component is removed from the DOM, are taken. 
		
*/ 

-- Sample with the constructor method called 
class Header extend React.Component { 
	constructor(props) {
		super(props); 
		this.state = {favoritecolor : "red"};
	}
	render() {
		return (
			<h1>Some random text {this.state.favoritecolor}</h1>
		);
	}
}

ReactDOM.render(<Header />, document.getElementById('root')); 


-- Sample with method getDerivedStateFromProps 
class Header extends React.Component { 
	constructor(props) {
		super(props); 
		this.state = {favoritecolor : "red"};
	}
	static getDErivedStateFromProps(props, state){
		return {favoritecolor : props.favcol }; 
	}
	render() {
		return (
			<h1>Some random text {this.state.favoritecolor}</h1>
		);
	}
}
ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root')); 


-- Sample with render method 
class Header extends React.Component {
	render() {
		return (
			<h1>Some random text of Headers</h1>
		);
	}
}
ReactDOM.render(<Header />, document.getElementById('root')); 
