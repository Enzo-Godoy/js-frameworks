/*Rewriting functions*/ 
let multiply= (a,b) => a * b ; 
function multiply(a, b){
	return a * b; 
}

function getHero(id){
	if(id == 5){
		return hero;
	} 
}
let getHero = (id) => {
	if(id == 5) return hero ; 
	else return 0;
}
 
console.log(getHero(5)); 
console.log(multiply(10, 20));


/* Sample with backstricks another one */
function someRandom(nombre){
	return `some Random message ${ message }`; 
}
let someRandom= (nombre)=> `some Random message ${ message }`;
console.log(someRandom('Ezequiel')); 
console.log(multiply(3,24));

let fruitStore = { 
	name: 'Apple',
	price : 4.99, 
	colour : 'Yellow',
		getFruit() {
			return ` ${ this.name } ${ this.price } ${ this.colour }`; 
		}
}

let songStore = { 
	cd : 'Some Mystic name as usual', 
	price : 2.33,
	artist : 'Some fancy name', 
	year : 1998, 
		getCd() {
				return ` ${ this.cd } ${ this.price } ${ this.artist } ${ this.year }`
		}
}
console.log(deadpool.getNombre()); 
console.log(fruitStore.getFruit()); 
console.log(songStore.getCd()); 
