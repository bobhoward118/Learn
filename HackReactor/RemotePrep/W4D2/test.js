var sayHi = function() {
  console.log('original');
};

var greeter = sayHi;

sayHi = function() {
  console.log("reassigned");
};

sayHi();
greeter();

or

var sayHi = 4;

var greeter = sayHi;

sayHi = 8;

console.log(sayHi);
console.log(greeter);


// Objects pass by reference
var original = {
  testMethod: function() {
    console.log("test");
  }
};

original.testMethod()

var duplicate = original;

duplicate.testMethod();

original.testMethod = function() {
  console.log("changed");
};
original.testMethod();
duplicate.testMethod();



var sayHackReactor = function() {
  console.log("Hack Reacstor");
};

var runner = function(fn) {
  console.log("invoking a function!");
  fn();
};

// runner(function() {
//   console.log("ok");
// });
//
// runner(sayHackReactor);

runner(sayHackReactor()); // breaks because fn() is undefined





var arr = [1,2,3,4,5];

var predicate = function(element) {
  return element.thatProperty !== undefined;
};

_.filter(arr,predicate);
