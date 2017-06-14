var result = (3 + 1) * 2;
result 
var other = result + 1;
result = 5;
other

var obj = {};
obj['x'] = 9
obj.y = 10
var key = 'x';
obj[key]
for (var k in obj) {
  console.log(k);
}

var obj = {};
obj.x = 9;
var key = getLetterFromUser();
console.log(obj[key]);
function getLetterFromUser() {
  return prompt("Enter a letter.");
}

var arr = [];
arr['x'] = 9;
arr[0] = 'cat', arr[1] = 'dog';
for (var k in arr) {
  console.log(k);
}
console.log(arr.length);
for (var i = 0; i < arr.length; i++) {
  console.log(i);
}

var fun = function() {
  console.log(2);
  return 1;
}
var res = fun();
console.log(res);

var fun = function() { return 1; };
var res = function() { return 1; }();

var fun = function(input) {
  console.log(input.toUpperCase);
}
fun('hi');

var fun = function() {
  console.log(arguments);
}
fun('hi');

var fun = function(input, in2, in3, in4) {
  console.log(arguments[0]);
}
fun('hi', 3, 9);

var fun = function(input) {
  console.log(arguments);
  var innerFun = function(input) {
    console.log(arguments);
  };
  innerFun('yo');
};
fun('hi');

