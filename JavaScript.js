MDN
A re-introduction to JavaScript (JS tutorial)
Number
String
Boolean
Symbol (ECMAScript 6)
Object
	Function
	Array
	Date
	RegExp
null
undefined

Math.PI
Math.abs(x)
Math.ceil(x)
Math.floor(x)
Math.max(1, 2, 3)
Math.min(1, 2, 3)
Math.pow(x, y) // (2, 10)
Math.random() // 0 inclusive, 1 exclusive
	window.crypto.getRandomValues() // for security

function getRandom() { // 0 inclusive, 1 exclusive
	return Math.random();
}
function getRandomArbitrary(min, max) { // min inclusive, max exclusive
	return Math.random() * (max - min) + min;
}
function getRandomInt(min, max) { // int min inclusive, max exclusive
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomIntInclusive(min, max) { // min & max inclusive
	min = Math.ceil(min);
	max = Math.floor(max);
	num = Math.floor(Math.random() * (max - min + 1)) + min;
}
var totals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var num;
function getRandomIntInclusive(min, max) { // min & max inclusive
	min = Math.ceil(min);
	max = Math.floor(max);
	num = Math.floor(Math.random() * (max - min + 1)) + min;
	totals[num]++;
	// console.log(num);
}
for (var i = 0; i < 1000; i++) {
	getRandomIntInclusive(1, 10);
}
console.log(totals);

parseInt("123", 10); // 10 base is decimal, 2 is binary
parseFloat("4.3"); // always base 10
+ "42"; // unary + operator

isNaN(Nan);
Infinity // 1 / 0;
-Infinity // -1 / 0;
isFinite(1/0);
var name;
let name; // block scope local variable (ECMAScript 2015)
const name; // read-only named constant

// strings have object methods like:
// charAt()
// .replace(x, y)
// toUpperCase()



var price = 17;
var grain = 19650;
var plantingBushels = 0.5; 
var buy = 0;
var acresToPlant = 0;

while (grain > grain / price + plantingBushels) {
	buy++;
	grain -= price;
	grain -= plantingBushels;
}

console.log(buy);















































