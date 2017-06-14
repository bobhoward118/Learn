var message = ["word", "f", "r", "e", "e", "is", "missing"]
message.indexOf("free")
=> -1
 
message1.substring(0, message1.length / 2) + message2.substring(message2.length / 2, message2.length);
'i ate your cookie'
 
// Global variables accessed and modified anywhere in program, which can span multiple files.
// Defined outside of functions, conventionally at the top of the file.  Normally just 1 or 2 in program.
// Local variable defined inside function using var and only visible (accessible) within the function.
 // If a never seen variable is being assigned without the var keyword, instead of producing an error, a global is created.

// Global created with captial letter
var counter1 = 1;  // Global created, should be Counter1
function test() {
	counter1 = 2;  // Global modified, should be Counter1
	var counter1 = 3;  // Local created – counter1 will be local from here on
	counter2 = 4;  // Global created, should be Counter 2
}
test();
 
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.substring(1,str.length);
}
console.log(capitalizeFirst("javaScript"));
 
function capitalizeName(name) {
    var lowerName = name.toLowerCase();
    var spaceIndex = lowerName.indexOf(' ');
    var first = lowerName.substring(0, spaceIndex);
    var last = lowerName.substring(spaceIndex + 1, lowerName.length);
    return capitalizeFirst(first) + ' ' + capitalizeFirst(last);
}
console.log(capitalizeName("steve jobs"));
Steve Jobs
 
function square(num) {
    return num * num;
}
function sumOfSquares(num1, num2) {
    return square(num1) + square(num2);
}
console.log(sumOfSquares(2, 3)); //should return 2*2 + 3*3 = 13
 

(!(day == "Saturday" || day == "Sunday") && (forecast != "rain"))  

function max(a, b, c) {
    var maxSoFar = a;
    if (b > maxSoFar) {
    	maxSoFar = b;
    }
    if (c > maxSoFar) {
    	maxSoFar = c;
    }
    return maxSoFar;
}
console.log(max(3, 1, 4));
 
function authenticate(password) {
    var successMessage = "you are now logged in!";
    var failureMessage = "oops. try again.";
    if (password == "jsrocks") {
    	return successMessage;
    }
    if (password != "jsrocks") {
    	return failureMessage;
    }
}
console.log(authenticate("jsrocks"));
 
function authChuckNorris(username, password) {
    var successMessage = "welcome chuck norris!";
    var failureMessage = "sorry, try again.";
    if (username == "chuck" && password == "norris") {
    	return successMessage;
    }
    else {
    	return failureMessage;
    }
}
console.log(authChuckNorris("chuck", "norris"));
 
function find42(a, b) {
    return a == 42 || b == 42 || (a + b) == 42 || (a - b) == 42 || (b - a) == 42
}
console.log(find42(20, 22));
true
 
function fivePalindrome(word) {
    if (word.length == 5) {
    	return word.charAt(0) == word.charAt(4) && word.charAt(1) == word.charAt(3);
    }
    else return word.length == 5;
}
console.log(fivePalindrome("Aibohphobia"));
 
function isMultipleOf(firstNum, secondNum) {
    return firstNum % secondNum == 0;
}
function fizzBuzz(num) {
    if (isMultipleOf(num, 15)) {
    	return "FizzBuzz";
    } else if (isMultipleOf(num, 5)) {
    	return "Buzz";
    } else if (isMultipleOf(num, 3)) {
    	return "Fizz";
    } else {
    	return num;
    }
}
console.log(fizzBuzz(25));
 
function isWeekday(day) {
    return day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday";
}
function decide(day, weather) {
  var weekdayPlan = "go to school or work";
  var rainyWeekend = "go code";
  var sunnyWeekend = "go outside";

  if (isWeekday(day)) {
  	return weekdayPlan;
  } else if (weather == "sunny") {
    return sunnyWeekend;
  } else {
   	return rainyWeekend;
  }
}
console.log(decide("Monday", "sunny"));
 
for (var i = 0; i < 10; i++) {
	if (i % 3 != 0) {
    continue;  // continue will skip console.log(i) unless number is divisble by 3
	}
	console.log(i);
}
for (var i = 0; i < 10; i++) {  // same as above without continue;
	if (i % 3 == 0) {
    console.log(i);
	}
}
 
while (condition) { // or a for-loop
	if (condition2) {
        break;
	}
}

function sum(n) {
    var sumSoFar = 0;
    var currentNumber = 1;
    while (currentNumber <= n) {
    	sumSoFar += currentNumber;
    	currentNumber += 1;
    }
    return sumSoFar;
}
console.log(sum(5));
 
function oddSum(n) {
    var sumSoFar = 0;
    var currentNumber = 1;
    while (currentNumber <= n) {
    	sumSoFar += currentNumber;
    	currentNumber += 2;
    }
    return sumSoFar;
}
console.log(oddSum(5));
 
function stringDistance(str1, str2){
    var numMismatch = 0;
    var index = 0;
    while (index <= str1.length) {
    	if (str1.charAt(index) != str2.charAt(index)) {
        	numMismatch ++;
    	}
    	index += 1;
    }
    return numMismatch;
}
console.log(stringDistance("cow", "cat"));
 
function equal(str1, str2) {
    if (str1.length != str2.length) {
    	return false;
    }
    var index = 0;
    while (index < str1.length) {
    	if (str1.charAt(index) != str2.charAt(index)) {
        	return false;
    	}
    	index++;
    }
    return true;
}
console.log(equal("javascript", "JavaScript"));
 
function sum(num) {
    var currentSum = 0;
    for (var i=1; i <= num; i++) {
    	currentSum += i;
    }
    return currentSum;
}
console.log(sum(10));
 
function countWords(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
    	if (str.charAt(i) == " ") {
        	count ++;
    	}
    }
    return count + 1;
}
console.log(countWords("I am a short sentence"));

var shoppingList = ["apple", "banana", "orange"];
x = [1, 2]; y = ['c', 'b', 'a'];
x.push(3, 4);  // adds element - MODIFIES array
x.pop();  // removes last element - MODIFIES array
x.reverse(); // reverses order - MODIFIES array
x.sort();  // sorts numerically or alphabetically - MODIFIES array
x.length;  // returns number of array elements, leaves UNCHANGED
x.concat(y, z);  // combines arrays but leaves UNCHANGED
x.slice(0, 2);  // returns items in index numbers specified, leaves UNCHANGED
x.indexOf(item); // returns index number of item specified, leaves UNCHANGED
var arr = [];
for (var i = 1; i <= 100; i++) {
    arr.push(i);
}
100
 
function everyOther(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i += 2) {
    	sum += arr[i];
    }
    return sum;
}
 
everyOther([1,2,3,4,5]);
9
 
function firstAndLast(arr) {
    if (arr[0] == arr[arr.length - 1]) {
    	return true;
    } else {
    	return false;
    }
}
firstAndLast([1,3,1]);
true
 
function reverse(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
    	swap(arr, i, arr.length - 1 - i);
    }
    return arr;
}
function swap(arr, pos1, pos2) {
    var temp = arr[pos2];
    arr[pos2] = arr[pos1];
    arr[pos1] = temp;
}
reverse(1,2,3,4,5);
1
 
function range(n) {
    var nums = [];
    for (var i = 0; i <= n; i++) {
    	nums.push(i);
    }
    return nums;
}
range(10);
 
var arr = ["one", "two", "three", "four", "five"];
function iff(arr, item) {
    var isThere;
    if (typeof item == "string") {
    	isThere = false;
    	for (var i = 0; i < arr.length; i++) {
      	if (arr[i] == 6) {
          isThere = true;
      	}
    	}
    }
    if(isThere) {
    	arr.push(item);
    }
    return arr;
}
iff([1,2,3], "hi");
 
var eMails = ["free candy", "free water", "asdf", "asdfg", "free travel"];
function findSpam(eMails) {
    var filteredEmails = [];
    for (var i = 0; i < eMails.length; i++) {
    	var mail = eMails[i];
    	if (mail.indexOf("free") != -1) {
        filteredEmails.push("spam");
    	} else {
        filteredEmails.push(mail);
    	}
    }
    return filteredEmails;
}
findSpam(["free candy", "free water", "asdf", "asdfg", "free travel"]);
 
Happy Numbers
function happyNum(number) {
    var sqr, digit;
    var cycle = [];
    while(number != 1 && cycle[number] !== true) {
    	cycle[number] = true;
    	sqr = 0;
    	while (number > 0) {
        	digit = number % 10;
        	sqr += digit * digit;
        	number = (number  - digit) / 10;
    	}
    	number = sqr;
    }
    if (number == 1){
      	return "Happy Number";
    }
    else{
 	   return "Unhappy Number"; 
    }
}
happyNum(250);
