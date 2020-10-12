
-- Sample about Event Handlers within a component Class 
class Football extends React.Component {
	shoot() {
		alert("Great Shoot!");
	}
	render() {
		return (
			<button onClick={this.shoot}>Some example! </button> 
		);
	}
}
ReactDOM.render(<Football />, document.getElementById('root')); 


-- Sample about BIND 'this'  within components 
class Football extends React.Component {
	shoort () => {
		alert(this);
	}
	
	/* The 'this' keyword refers to the component Object */
	render() {
		return (
			<button onClick={this.shoot}>Sample of code!</button>
		);
	}
}
ReactDOM.render(<Football />, document.getElementById('root')); 


-- Sample about BINDING the component by using 'bind' 
class Football extends React.Component {
	constructor(props) {
		super(props) 
		this.shoot = this.shoot.bind(this)
	}
	shoot() {
		alert(this);
	}
	render() {
		return(
			<button onClick={this.shoot}>Some example</button>
		);
	}
}
ReactDOM.render(<Football />, document.getElementById('root'));


-- Sample of passing an event handler to an arrow function within the component 
class Football extends React.Component {
	shoot = (a) => {
		alert(a);
	}
	render() {
		return (
			<button onClick={() => this.shoot("Goal")}>Some example</button>
		);
	}
}
ReactDOM.render(<Football />, document.getElementById('root')); 


-- Sample of passing an event handler  and hangling it with 'shoot.bind'  
class Football extends React.Component {
	shoot(a) {
		alert(a);
	}
	render() {
		return(
			<button onClick={this.shoot.bind(this, "Goal")}>Some example</button>
		);
	}
}
ReactDOM.render(<Football />, document.getElementById('root')); 


-- Sample of passing an event Object to the arrow function within the React Component 
class Football extends React.Component {
	shoort = (a, b) => {
		alert(b.type);
		/* 'b' represents the event that triggered the function. (click) event in this case. */
	}
	render() {
		return (
			<button onClick={(ev) => this.shoot("Goal", ev)}>Some sample of passing the evetn click</button> 
		);
	}
}
ReactDOM.render(<Football />, document.getElementById('root'));


-- Sample of passing an event Object through passing 'this' to the arrow Function 
class Football extends React.Component {
	shoot = (a, b) => {
		alert(b.type);
	}
	render() {
		return (
			<button onClick={this.shoot.bind(this, "Goal")}>Sample of passing the event click to the component</button>
		);
	}
}
ReactDOM.render(<Football />, document.getElementById('root'));


/* 
React Used forms to allow users to interact with the Web Page 

In HTML, form data is usually handled by the DOM. 
In React, form data is usually handled by the components. 
	When the data is handled by the components, all the data is stored in the component 'state'. 
	We can control changes by adding event handlers in the 'onChange' attribute. 
	
We can control the submit action by adding an event handler in the onSubmit attribute.  

Most of the elements within the form have specific Formats, but at the end the format it's similar.
*/ 


-- Sample of adding a Form in React 
class myForm extends React.Component {
	render() {
		return(
			<form> 
				<h1>Message 01</h1> 
				<p>Enter some text:</p> 
				<input type="text" /> 
			</form>
		);
	}
}
ReactDOM.render(<MyForm /> document.getElementById('root')); 

-- Sample of handling an event and making the update of the state of the component 
class MyForm extends React.Component {
	constructor(props) {
		super(props); 
		this.state = { username: ''};
	}
	myChangeHandler = (event) => { this.setState({username: event.target.value}); }
	render() {
		return(
			<form> 
				<h1>Some example {this.state.username}</h1> 
				<p>Some example 02</p> 
				<input type='text' onChange={this.myChangeHandler} /> 
			</form>
		);
	}
}
ReactDOM.render(<MyForm />, document.getElementById('root')); 


-- Sample of rendering by filtrating by a conditional if it required to be set the username 
class MyForm extends React.Component {
	constructor(props) {
		super(props); 
		this.state = { username: ''};
	}
	myChangeHandler = (event) => { this.setState({ username: event.target.value });	}
	render() {
		<form>  {header}
			<p>Enter some text: </p> 
			<input type='text' onChange={this.myChangeHandler} /> 
		</form> 
		);
	}
}
ReactDOM.render(<MyForm />, document.getElementById('root')); 


-- Sample of handling the data after the  onSubmit element presents it's state.
class MyForm extends React.Component {
	constructor(props) {
		super(props); 
		this.state = { username: '' };
	}
	mySubmitHandler = (event) => {
		event.preventDefault(); 
		alert("You are submitting " + this.state.username);
	}
	render() {
		return (
			<form onSubmit={this.mySubmitHandler}> 
				<h1>Sample {this.state.username}</h1> 
				<p>Some example </p> 
				<input type='text' onChange={this.myChangeHandler} /> 
				<input type='submit' /> 
			</form>
		);
	}
}
ReactDOM.render(<MyForm />, document.getElementById('root'));