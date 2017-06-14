/* INSTRUCTIONS
touch newfilename.js
javascripting verify introduction.js
javascritping run program.js
javascripting help
*/


// INTRODUCTION
console.log('hello');


// VARIABLES
var example;
example = 'some string';
console.log(example);


// STRINGS
var someString = 'this is a string';
console.log(someString);


// STRING LENGTH
var example;
example = 'example string';
console.log(example.length);


// REVISTING STRINGS
var pizza = 'pizza is alright';
pizza = pizza.replace('alright', 'wonderful');
console.log(pizza);


// NUMBERS
var example = 123456789;
console.log(example);


// ROUNDING NUMBERS
var roundUp = 1.5;
var rounded = Math.round(roundUp);
console.log(rounded);


// NUMBER TO STRING
var n = 128;
console.log(n.toString());


// IF STATEMENT
var fruit = 'orange';
if (fruit.length > 5) {
	console.log('The fruit name has more than five characters.');
} else {
	consoel.log('The fruit name has five characters or less.');
}


// FOR LOOP
var total = 0;
var limit = 10;
for (i = 0; i < limit; i++) {
	total += i;
}
console.log(total);


// ARRAYS
var pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni'];
console.log(pizzaToppings);


// ARRAY FILTERING
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = numbers.filter(function(number) {
	return number % 2 === 0;
});
console.log(filtered);


// ACCESSING ARRAY VALUES
var food = ['apple', 'pizza', 'pear'];
console.log(food[1]);


// LOOPING THROUGH ARRAYS



// OBJECTS



// OBJECT PROPERTIES



// FUNCTIONS



// FUNCTION AGRUMENTS



// SCOPE
