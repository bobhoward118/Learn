// var greeter = function(parameter) {
// 	console.log(true);
// };

// greeter("Hello world");



// var greeter = function() {
// 	var x = 1; // decleared in the function vs
// 	console.log(x);
// 	x++;
// }

// greeter();
// greeter();
// console.log(x);



// var greeter = function(parameter) {
// 	console.log("hello")
// 	console.log(new date());
// };

// greeter();
// greeter();



// var greeter = function() {
// 	var x = 10;
// 	return x;
// };

// var x = greeter();



// var sayingGenerator = function() {
// 	var phrase = "Hey, " + "it's the " + " Fonz";
// 	return phrase;
// };

// var saying = sayingGenerator();

// console.log(saying)

// var brokenSayingGenerator = function() {
// 	var phrase = "Hey, it's the Fonz";
// 	phrase;
// };

// var x = brokenSayingGenerator();

// console.log(brokenSayingGenerator());



// var greeter = function() {
// 	console.log("helllo");
// };

// function greeter2() { // this example definition as well as declaration is hoisted)
// 	console.log("hey");
// };

// greeter();
// greeter2();



// var greeter = function() {
// 	console.log(arguments);
// 	arguments[0];
// };

// greeter(3);
// greeter(3 + 7);
// greeter(3, 7);
// greeter("hello", true, 10, function(){});

// greeter(3);


// var message = function(){
// 	console.log("Today's date is " + Date());
// };

// message();
// messagew();

// var log_and_return = function() {
// 	console.log(arguments)
// };
// var returned_values = log_and_return("hi", true, 3);
// // console.log(returned_values);
// var returned_values_2 = log_and_return(returned_values);


var tripler = function (num) {
	return num * 3;
}
tripler(5);

var multiply = function(val1, val2) {
	return val1 * val2;
}
multiply(5, 25);

var divide = function(value1, value2) {
	return value1 / value2;
}
divide(125, 25);

var remainder = function(num1, num2) {
	return num1 % num2;
}
remainder(25, 4);
