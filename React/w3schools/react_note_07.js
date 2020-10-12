
-- Sample of a form with two input being handle its data by setting state with backets. 
class MyForm extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			username: '', 
			age: null,
		};
	}
	myChangeHandler = (event) => {
		let nam = event.target.name; 
		let val = event.target.value; 
		this.setState({[nam]: val}); 
	}
	render() {
		return (
			<form> 
				<h1>Sample {this.state.username} {this.state.age}</h1> 
				<p>Some other input 1:</p>
				<input type='text' name='username' onChange={this.myChangeHandler} /> 
				<p>Some other input 2:</p>
				<input type='text' name'age' onChange={this.myChangeHandler} /> 
			</form>
		);
	}
}
ReactDOM.render(<MyForm />, document.getElementById('root')); 



-- Sample of a form with two input being handle and checkets its data with conditionals at 'myChangeHandler'
class MyForm extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			username: '', 
			age: null,
		};
	}
	myChangeHandler = (event) => {
		let nam = event.target.name; 
		let val = event.target.value; 
		if( nam === "age") { 
			if(!Number(val)) { alert("Your value must be a Number"};
		}
	}
	render() {
		return(
			<form> 
				<h1>Some example {this.state.username} {this.state.age}</h1> 
				<p1>Some example </p> 
				<input type='text' name='username' onChange={this.myChangeHandler} /> 
				<p>Some other example</p> 
				<input type='text' name='age' onChange={this.myChangeHandler} /> 
			</form>
		);
	}
} 
ReactDOM.render(<MyForm />, document.getElementById('root')); 



-- Sample of a form with two input being handle and checkets its data with conditionals at 'mySubmitHandler' 
class MyForm extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			username: '', 
			age: null,
		};
	}
	mySubmitHandler = (event) => {
		event.preventDefault(); 
		let age = this.state.age; 
		if(!Number(age)) { alert("Your value must be a number"); }
	}
	myChangeHandler = (event) => {
		let nam = event.target.name; 
		let val = event.target.value; 
		this.setState({[nam]: val}); 
	}
	render() {
		return (
			<form onSubmit={this.mySubmitHandler}> 
				<h1>Sample {this.state.username} {this.state.age}</h1> 
				<p>Enter value 001 :</> 
				<input type='text' name='age' onChange={this.myChangeHandler} /> 
				<p>Enter value 001 :</> 
				<input type='text' name='age' onChange={this.myChangeHandler} /> 
				<br />
				<br />
				<input type='submit' /> 
			</form>
		);
	}
}
ReactDOM.render(<MyForm /<, document.getElementById('root')); 



/*
To understand react 
			!!!  Look at 
ReactDOM(data) >> Render() >> Component(constructor/state) >> methods that interact with those state props 
*/

-- Sample of handling and displaying an error from the form 
class MyForm extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			username: '', 
			age: null, 
			errormessage: ''
		};
	}
	myChangeHandler = (event) => {
		let nam = event.target.name; 
		let val = event.target.value; 
		let err = ''; 
		if(nam === "age" ) {
			if(val !="" && !Number(val)) {
				err = <strong>Some random message related to the err</strong>;
			}
		}
		this.setState({errormessage: err}); 
		this.setState({{[nam]: val});
	}
	render() {
		return(
			<form> 
				<h1> Some random message {this.state.username} {this.state.age}</h1> 
				<p> Some random message</p> 
				<input type='text' name='username' onChange={this.myChangeHandler} /> 
				<p> Some random Message </p> 
				<input type='text' name='age' onChange={this.state.errorMessage}</form> 
		);
	}
}
ReactDOM.render(<MyForm />, document.getElementById('root')); 


-- Sample of a default value for a text area through the state 
class MyForm extends React.Component {
	constructor(props) {
		super(props); 
		this.state = { description: 'Some default text for the text area' };
	}
	render() {
		return(
			<form>
				<textarea value={this.state.description} /> 
			</form>
		);
	}
}
ReactDOM.render(<MyForm />, document.getElementById('root')); 


-- Sample of a default value selected in a simple select box 
class MyForm extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			mycar: 'Car2'
		};
	}
	render() {
		return(
			<form> 
			<select value={this.state.mycar}> 
				<option value="car1">Car1</option>
				<option value="car2">Car2</option>
				<option value="car3">Car3</option>
			</select> 
			</form>
		);
	}
}
ReactDOM.render(<MyForm />, document.getElementById('root')); 

