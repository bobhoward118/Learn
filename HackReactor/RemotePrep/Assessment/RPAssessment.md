>> Instructions
>> Use interview conditions. Do not look anything up, refer to old code, or check anything in a console.
>> Note the time at which you begin and end. Assume each problem is a separate program.
Start: 11:19am
Stop:

#Make an array containing the string "remote prep" and the number of your class. Then write an operation that will add your full name to the beginning of the array. Then write an operation that will add your email address to the end.

var array = [“remote prep”, 3];
var array.unshift(“Bob Howard”);
array.push(“learnmeanstack@gmail.com”);



#What will be the values of x and y?
var a = 5;
var x = a;
a++;

x => 5 (CORRECT)

var b = [5];
var y = b;
b.push(6);

y => [5, 6] (CORRECT)



#What will each of these lines output?
var a = 1;

1 == "1"; => true
1 === "1"; => false
1 == a; => false
1 === a; => false
a == "a"; => undefined
a === "a"; => undefined



#Make a function inside an array and invoke it.

array = [1, 2, function(){console.log(‘hi’);}];
function()


#First, write a loop that will cycle through an object called "myObject" and console log each of its values. Then, explain why you did or did not use a "var" keyword in your answer.

var i;
var myObject = {
  prop1: “val1”,
  prop2: “val2”,
  prop3: “val3”
}
while (myObject.prop[i] > 0) {
  console.log(myObject.prop[i]);
};
// did not complete this exercise. I do not know how to count the number key value pairs in an object.



#What will this return?

var fn = function(num){
  return num > 5
};

fn(10);

=> true (CORRECT)



#What will this return?

var x = {name: "Hank"}
typeof x

=> Object (CORRECT)



#What will this return?

var x = ["Hank"]
typeof x

=> Array ??  array.getArray  or  x.constructor



#What will this return?

var x = [{name: "Hank"}]
typeof x

=> Object



#What will this return?

var x = {one: ["two", {three: "four"}]}
typeof x.one[1];

=> String



#What is x?

var x = 5 || 7

=> true



#Fizzbuzz. Console log the numbers from 1 to 100.
#Now for numbers that are multiples of three print "Fizz" instead of that number
#For the multiples of five print "Buzz" instead of that number
#For numbers which are multiples of both three and five print "FizzBuzz"

for (var i = 1, i <= 100, i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(“FizzBuzz”);
  } else if (i % 3 === 0) {
    console.log(“Fizz”);
  } else if (i % 5 === 0) {
    console.log(“Buzz”);
  } else {
    console.log(i);
  }
}

(or)

var i = 1;
while (i <= 100) {
  if (i % 3 === 0) {
    if (i % 5 ===0) {    
      console.log(“FizzBuz”);
    } else {
      console.log(“Fizz”);
  } else if (i % 5 === 0) {
    console.log(“Buzz”);
  } else {
    console.log(i);
  }
}



#What will reversed actually equal as is? How would you fix reverseString?
var reverseString = function(inputString) {
  for(var i = 0; i < inputString.length; i++){
    return inputString[i];
  }
};
var reversed = reverseString('abcdef');

(as is) => abcdef
(fixed) . . .
var reverseString = function(inputString) {
  var i = inputString.length;  
  while (i > 0) {
    return inputString[i];
    i-=
  }
};
var reversed = reverseString('abcdef');



#What will x equal?
var fn = function(array){
  array.forEach(function(val){
    return val * 5
  })
}
var x = fn([1,2,3,4,5]);

=> [5,10,15,20,25]



#What will this output?
for (var i = 0; i < 2; i++){
  for (var j = 0; j < 2; j++){
    console.log(i);
  }
};

=> 0
=> 0
=> 1
=> 1



#Write a function that takes a positive integer and outputs a random integer between 0 and up to but not including the parameter.

var fn = function(integer) {
  if (integer > 0) {
    console.log(Math.floor(Math.random(integer)));
  };
};
fn(5)



#Write a function "funcRunner" that just takes a function as a parameter and invokes it. Then, invoke "funcRunner" in such a way that the word "hello" will be logged to the console.

var funcRunner = function(fn) {
  console.log(fn);
};
var fn = function(string) {
  return(string);
}
funcRunner(“hello”)



#CSS stands for "Cascading Style Sheet," but why are they cascading?

Rules cascade down from the top of the .css file down to the bottom, unless overridden below.  Similarly, subsequently called .css files over previously called .css files as in the HTML Head element.



#Write a function that takes a number n and returns a square grid of X's of n width. You may use an array or console log strings.

var grid = function(n) {
  for (var i = n; i > 0, i—- ) {
    var array1;
    for (var j = n; j > 0, j—-) {
      array1.push(“x”);
    }
    var array2;
    array2.push(array1);
}
grid(5)



#Log to the console a single string containing both "double quotes" and 'single quotes.'

console.log(‘Here are both ”double quotes” and \’single quotes\’’);



**********************************************************************
************************ Ran out of time here ************************
**********************************************************************



#What does 'git push remote origin' do?

??



#What would you write to travel up one directory in a relative path? How about two?

=> cd ..
=> cd ../..



#What will this output and why?
var x = [1,2,3,4,5];
var y = [1,2,3,4];
y.push(5);
x === y

=> false
because two arrays are never the same, are the pointing to the same place in memory - No, but they would have the same values



#Write a function that takes a string and returns true or false if it contains two of the same characters back-to-back. Example:
dog //false
doggy //true





#What will this output?
var x = [1,2,3,4,5]
x.indexOf(1) + x.indexOf(2);

=> 1



#What two lines will this display in the console?
var fn = function(val, callback){
  console.log(callback(val));
}
console.log(fn(100, function(x){return x + 1}))

=> 101
=> undefined



#Write a decorator function that takes an object and gives it 2 new properties with countries for keys and capitals for values.





#Why would you ever write the following?
var context = this;





#Get and Post: What's the difference?

Get queries information from server, and Post will send information to server



#Explain what we mean by "asynchronous" when talking about server calls.

when code runs concurrently, synchronous runs in order



#What will you see on the console and why?
console.log(fn);
console.log(fn());
var fn = function(){
  return "hello world"
}





#Write a function "mirrorCheck" that takes an object and returns true if any of its keys are identical to their value. Example:
var obj = {
  color: "blue",
  stuff: "stuff"
}
mirrorCheck(obj)  // true





#Write 'indexOf' from scratch. Example:
var arr = [1,2,3,4,5];
indexOf(arr, 1)  // 0
indexOf(arr, 6)  // -1





#Write 'contains' from scratch using your indexOf function. Example:
var arr = [1,2,3,4,5];
contains(arr, 1) // true
contains(arr, 6) // false





*Nightmare Mode*
**Note that if you don't get to these today, you might use them for practice interview questions with your classmates.**
#Write a function "Counter" that returns a function whereby on each call, the output begins at 1 and each subsequent call is one more than the previous.
var myCounter = Counter()
console.log(myCounter())   // 1
console.log(myCounter())   // 2
var myCounter2 = Counter()
console.log(myCounter2())  // 1
console.log(myCounter())   // 3





#Remember the module pattern? Create a shopping basket that has an "itemCount" method and an "addItem" method, but does not allow access to the basket itself.
basketModule.addItem("milk");
basketModule.addItem("bread");
console.log(basketModule.itemCount())  // 2
console.log(basketModule.basket())     // TypeError: basketModule.basket is not a function




#From Eloquent Javascript, "Use the reduce method in combination with the concat method to "flatten" an array of arrays into a single array that has all the elements of the input arrays."




#Write a random pair function that takes the members of our class and outputs an array of tuples of random pairings. (A tuple is an array of two elements.) Be sure everyone is accounted for and no one is repeated. For odd numbers, make the last group a group of three.
var class = ["James", "Huy", "Bob", "Thomas", "Emmanuel", "Justin", "Matthew", "Christina", "Alitsiya", "Dave", "Alexander", "Daniel", "David", "Mitchell", "Janica"]

console.log(randomPair(class))

// [["Dave", "Mitchell"], ["Thomas", "Alitsiya"], ["James", "Daniel"], ["Huy", "Bob"], ["Janica", "Alexander"], ["David", "Christina"], ["Matthew", "Emmanuel", "Justin"]




#deepCompare: Write a function that will compare two objects and determine if all of their values are the same.
var a = {name: "Hank", species: "Dog"}
var b = {species: "Dog", name: "Hank"}
console.log(deepCompare(a, b))  // true




#RECURRING NIGHTMARE MODE: Make it so that your deep compare function will work with nested objects and arrays.
var a = {name: "Hank", species: "Dog", owner: {name: "Jonathan", instructor: true}}
var b = {species: "Dog", name: "Hank", owner: {name: "Jonathan", instructor: true}}
console.log(deepCompare(a, b))  // true



***** Counter solution:
var Counter = function(){
    var counter = 0;
    return function(){
        counter++;
        return counter;
    };
};


var myCounter = Counter()
console.log(myCounter())   // 1
console.log(myCounter())   // 2
var myCounter2 = Counter()
console.log(myCounter2())  // 1
console.log(myCounter())   // 3
