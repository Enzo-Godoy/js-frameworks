
-- Sample with componentDidMount 
class Header extends React.Component { 
	constructor(props) {
		super(props); 
		this.state = {favoritecolor: "red"};
	}
	componentDidMount() {
		setTimeout(() => {
		this.setState({favoritecolor: "yellow"})
		},1000)
	}
	render() {
		return (
			<h1>Some random text {this.state.favoritecolor}</h1>
		);
	}
}
ReactDOM.render(<Header />, document.getElementById('root')); 

-- Sample with getDerivedStateFromProps 
class Header extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {favoritecolor: "red"};
	}
	static getDerivedStateFromProps(props, state) {
		return ({favoritecolor: "blue"});
	}
	render() {
		return (
			<div> 
				<h1>Some random text {this.state.favoritecolor}</h1> 
				<button type="button" onClick={this.changeColor}>Action color</buton>
			</div>
		);
	}
}


-- Sample of shouldComponentUpdate 
class Header extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {favoritecolor: "red"};
	}
	shouldComponentUpdate() {
		return false;
	}
	changeColor = () => {
		this.setState({favoritecolor: "blue"});
	}
	render() {
		return(
			<div> 
				<h1>Some random text: {this.state.favoritecolor}</h1> 
				<button type="button" onClick="{this.changeColor}>Change color</button> 
			</div>
		);
	}
}
ReactDOM.render(<Header />, document.getElementById('root')); 


-- Sample of render after a component was updated 
class Header extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {favoritecolor: "red"}; 
	}
	changeColor = () => {
		this.setState({favoritecolor: "blue"}); 
	}
	render() {
		return(
			<div> 
				<h1>Some random text: {this.state.favoritecolor}</h1> 
				<button type="button" onClick={this.changeColor}>Some random text</button>
			</div>
		);
	}
}
ReactDOM.render(<Header />, document.getElementByid('root')); 


-- Sample of getSnapshotBeforeUpdate 
class HEader extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {favoritecolor: "red"};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({favoritecolor: "yellow"})
		},1000)
	}
	getSnapshortBeforeUpdate(prevProps, prevState) {
		document.getElementById("div1").innerHTML = "Before the update, the favorite was " + prevState.favoritecolor;
	}
	componentDidUpate() {
		document.getElementById("div2").innerHTML = "The updated favorite is " + this.state.favoritecolor;
	}
	render() {
		return(
			<div> 
				<h1>Some random text {this.state.favoritecolor}</h1>
				<div id="div1"></div> 
				<div id="div2"></div> 
			</div> 
		);
	}
}
ReactDOM.render(<Header />, document.getElementById('root')); 


-- Sample method componentDidUpdate 
class Header extends React.Component {
	constructor(props) {
		super(props); 
		thi.state = {favoritecolor: "red"};
	}
	componentDidMount() { 
		setTimeout(() => {
			this.setState({favoritecolor: "yellow"})
		}, 1000)
	}
	componentDidUpdate() {
		document.getElementById("mydiv").innerHTML = "The updated favorite is" + this.state.favoritecolor;
	}
	render() {
		return(
			<div> 
				<h1>Some random text {this.state.favoritecolor}</h1> 
				<div id="mydiv"></div> 
			</div> 
		);
	}
}
ReactDOM.render(<Header />, document.getElementById('root')); 


-- Sample of method componentWillUnmount 
class Container extends React.Component {
	constructor(props){
		super(props); 
		this.state = {show:true};
	}
	delHeader = () => {
		this.setState({show: false});
	}
	render() {
		let myheader; 
		if(this.state.show) {
			myheader = <Child />;
		};
		
		return(
			<div>	{myheader}
				<button type="button" onClick={this.delHeader}>Show button</button> 
			</div>
		);
	}
}
class Child extends React.Component {
	componentWillUnmount() {
		alert("The component named Header some text.");
	}
	render() {
		render (
			<h1>Some random text!</h1>
		);
	}
}
ReactDOM.render(<Container />, document.getElementById('root')); 


/* 
React Events >> Implies that react perform actions based on user events, react has the same events as HTML. 
				React events are written in camelCase syntax, E.G : 'onClick', 
				React events handlers are wrriten inside curly braces E.G : onClick={functionName}

	Comparative HTML vs React : 
	+ <button onClick={shoot}>Same example</button> 
	+ <button onclick="shoort()">Some example</button>
	
	- A good practice is to put the event handler as a method in the component class. 
	Bind 'this' >> in the presented context, the 'this' keyword should represent the component that owns the method. 
	Arrow Functions >> 'this' will always represent the object that defined the arrow function. 
	
In class components, the 'this' keyword is not defined by default, so with regular functions the 'this' keywrod represents the object that
called the method, which can be the global window object, a HTML button, etc. 

 >> If we must use regulare functions instead of arrow functions we have to bind 'this' to the component instance using the 'bind()' method. 
 
 
 Passing arguments, we have two options : 
  * Make an anonymous arrow function.  
  * Bind the event handler to 'this'. 
  
 React Event Object : 
 Event handlers have acces to the React event that triggered the function. Without arrow function, the React event object is sent 
 automatically as the last argument when using the 'bind()' method. 
