var myDog = {
	"name": "Spot",
	"legs": 4,
	"tails": 1,
	"friends": ["Rover", "Snoopy"]
};

// var count = 0;
// function cc(card) {
//   switch(card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count ++;
//       break;
//     case 7:
//     case 8:
//     case 9:
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count --;
//   }
//   if (count > 0) {
//   	// console.log(count + " Bet");
//   	return count + " Bet";
//   } else {
//   	// console.log(count + " Hold");
//   	return count + " Hold";
//   }
// }
// cc(2); cc(3); cc(7); cc('K'); cc('A');

// function abTest(a, b) {
// 	if (a < 0 || b < 0) {
// 		return undefined;
// 	}
// 	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }
// abTest(2, 2);

// function isLess(a, b) {
// 	return a < b;
// }
// isLess(10,15);

function chainToSwitch(val) {
	var answer = "";
	switch(val) {
		case "bob":
			answer = "Marley";
			break;
		case 42:
			answer = "The Answer";
			break;
		case 1:
			answer = "There is no #1";
			break;
		case 99:
			answer = "Missed my by this much!";
			break;
		case 7:
			answer = "Ate Nine";
	}
	debug(answer);
}
chainToSwitch(7);

for (var i = 0; i < 5; i++) {
	array = ["bob", 42, 1, 99, 7];
	chainToSwitch(array[i]);
}

// function sequentialSizes(val) {
// 	var answer = "";
// 	switch(val) {
// 		case 1:
// 		case 2:
// 		case 3:
// 			answer = "Low";
// 			break;
// 		case 4:
// 		case 5:
// 		case 6:
// 			answer = "Mid";
// 			break;
// 		case 7:
// 		case 8:
// 		case 9:
// 			answer = "High";
// 	}
// 	return(answer);
// }
// // sequentialSizes(1);
// for (var i = 1; i < 10; i++) {
// 	console.log(i + " " + sequentialSizes(i));
// }

// function switchOfStuff(val) {
// 	var answer = "";
// 	switch(val) {
// 		case "a":
// 			answer = "apple";
// 			break;
// 		case "b":
// 			answer = "bird";
// 			break;
// 		case "c":
// 			answer = "cat";
// 			break;
// 		default:
// 			answer = "stuff";
// 	}
// 	console.log(answer);
// }
// // switchOfStuff("e");
// for (var i = 0; i < 4; i++) {
// 	var letters = ["a","b","c","d"];
// 	switchOfStuff(letters[i]);
// }


// function caseInSwitch(val) {
//   var answer = "";
//   switch(val) {
//     case 1:
//       answer = "alpha";
//       break;
// 		case 2:
//       answer = "beta";
//       break;
// 		case 3:
//       answer = "gamma";
//       break;
// 		case 4:
//       answer = "delta";
//   }
//   console.log(answer);
// }
// caseInSwitch(1);
// for (var i = 1; i < 5; i++) {
// 	caseInSwitch(i);
// }

// function golfScore(par, strokes) {
//   if (strokes == 1) {
//     return "Hole-in-one!";
//   } else if (strokes <= par - 2) {
//     return "Eagle";
//   }  else if (strokes == par - 1) {
//     return "Birdie";
//   } else if (strokes == par) {
//     return "Par";
//   } else if (strokes == par + 1) {
//     return "Bogey";
//   } else if (strokes == par + 2) {
//     return "Double Bodey";
//   } else {
//     return "Go Home!";
//   }
// }
// golfScore(5, 3);
// for (var p = 3; p < 6; p++) {
// 	for (var s = 1; s < 9; s++) {
// 		console.log("Par " + p + ", " + s + " strokes: " + golfScore(p, s));
// 	}
// }

// function testSize(num) {
//   if (num < 5) {
//     return "Tiny";
//   } else if (num < 10) {
//     return "Small";
//   } else if (num < 15) {
//     return "Medium";
//   } else if (num < 20) {
//     return "Large";
//   } else {
//     return "Huge";
//   }
// }
// testSize(7);

// function orderMyLogic(val) {
//   if (val < 5) {
//     return "Less than 5";
//   } else if (val < 10) {
//     return "Less than 10";
//   } else {
//     return "Greater than or equal to 10";
//   }
// }
// orderMyLogic(7);


// function testElseIf(val) {
//   if (val > 10) {
//     return "Greater than 10";
//   } else if (val < 5) {
//     return "Smaller than 5";
//   } else {
//     return "Between 5 and 10";  
//   } 
// }
// testElseIf(7);

// function testElse(val) {
//   var result = "";
//   if (val > 5) {
//     result = "Bigger than 5";
//   } else {
//     result = "5 or Smaller";
//   }
//   return result;
// }
// testElse(4);

// function testLogicalOr(val) {
//   if (val < 10 || val > 20) {
//     return "Outside";
//   }
//   return "Inside";
// }
// testLogicalOr(15);
// // *** test cases ***
// for (var i = 9; i <= 21; i++) {
//   console.log(i + " " + testLogicalOr(i));
// }
// or
// var i = 9;
// while (i < 22) {
// 	console.log(i + " " + testLogicalOr(i));
// 	i++;
// }

// function testLogicalAnd(val) {
//   if (val <= 50 && val >= 25) {
//     return "Yes";
//   }
//   return "No";
// }
// testLogicalAnd(10);
// // Test case
// for (var i = 24; i <= 51; i++) {
//   console.log(i + " evaluates " + testLogicalAnd(i));
// }

// function testLessOrEqual(val) {
//   if (val <= 12) {
//     return "Smaller Than or Equal to 12";
//   }
//   if (val <= 24) {
//     return "Smaller Than or Equal to 24";
//   }
//   return "25 or More";
// }
// testLessOrEqual(10);

// function testLessThan(val) {
//   if (val < 25) {
//     return "Under 25";
//   }
//   if (val < 55) {
//     return "Under 55";
//   }
//   return "55 or Over";
// }
// testLessThan(10);

// function testGreaterOrEqual(val) {
//   if (val >= 20) {
//     return "20 or Over";
//   }
//   if (val >= 10) {
//     return "10 or Over";
//   }
//   return "9 or Under";
// }
// testGreaterOrEqual(10);

// function testGreaterThan(val) {
//   if (val > 100) {
//     return "Over 100";
//   }
//   if (val > 10) {
//     return "Over 10";
//   }
//   return "10 or Under";
// }
// testGreaterThan(10);


// function testStrictNotEqual(val) {
//   if (val !== 17) {
//     return "Not Equal";
//   }
//   return "Equal";
// }
// testStrictNotEqual(10);

// function testNotEqual(val) {
//   if (val != 99) {
//     return "Not Equal";
//   }
//   return "Equal";
// }
// testNotEqual(10);

// function testStrict(val) {
//   if (val === 7) {
//     return "Equal";
//   }
//   return "Not Equal";
// }
// testStrict(10);

// function testEqual(val) {
//   if (val == 12) {
//     return "Equal";
//   }
//   return "Not Equal";
// }
// testEqual(10);

// function trueOrFalse(wasThatTrue) {
//   if (wasThatTrue) {
//     return "Yes, that was true";
//   }
//   return "No, that was false";
// }
// trueOrFalse(true);

// function welcomeToBooleans() {
// return true;
// }

// function nextInLine(arr, item) {
//   arr.push(item);
//   var removed = arr.shift();
//   return removed;
// }
// // Display Code
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 10));
// console.log("After: " + JSON.stringify(testArr));
// // Tests
// nextInLine([], 1) // returns 1
// nextInLine([2], 1) // returns 2
// nextInLine([5,6,7,8,9], 1) // returns 5
// var testArr = [1,2,3,4,5];
// nextInLine(testArr, 10) // returns 1
// testArr[4] // returns 10


// var processed = 0;
// function processArg(num) {
//   return (num + 3) / 5;
// }
// processed = processArg(7);

// function timesFive(num) {
//   return num * 5;
// }
// timesFive(5);

// var outerWear = "T-Shirt";
// function myOutfit() {
//   var outerWear = "sweater";
//   return outerWear;
// }
// myOutfit();

// function myLocalScope() {
//   'use strict';
//   var myVar = "This is a local variable";
//   console.log(myVar);
// }
// myLocalScope(); // returns string
// console.log(myVar); // returns 'not defined'

// var myGlobal = 10;

// function fun1() {
//   oopsGlobal = 5;
// }

// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }
// fun2();

// function functionWithArgs(a, b) {
//   console.log(a + b);
// }
// functionWithArgs(1,2);
// functionWithArgs(7,9);

// function reusableFunction() {
//   console.log("Hi World");
// }
// reusableFunction();

// var myList = [["milk", 2], ["bread", 1], ["eggs", 12], ["cereal", 3], ["apples", 6]];

// var myArray = [["John", 23], ["dog", 3]];
// myArray.shift();
// myArray.unshift(["Paul", 35]);

// var myArray = [["John", 23], ["dog", 3]];
// var removedFromMyArray = myArray.shift();

// var myArray = [["John", 23], ["cat", 2]];
// var removedFromMyArray = myArray.pop();

// var myArray = [["John", 23], ["cat", 2]];
// myArray.push(["dog", 3]);

// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
// myData = myArray[2][1]; // returns 8
// myData = myArray[3][0][2]; // returns 12

// var myArray = [1,2,3];
// myArray[0] = 3;

// var myArray = [1,2,3];
// var myData = myArray[0];

// var myArray = [["Bob", 117], ["Jonathan", 14]];
// myArray[1][0]; // returns "Jonathan"

// var myArray = ["Bob", 21];

// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
//   var result = "";
//   result = "The " + myNoun + " was " + myAdjective + " and " + myVerb + " very " + myAdverb + ".";
//   return result;
// }
// wordBlanks("dog", "big", "ran", "quickly");
// wordBlanks("cat", "little", "hit", "slowly");

// var lastName = "Lovelace";
// var secondToLastLetterOfLastName = lastName[lastName.length -2];

// var lastName = "Lovelace";
// var lastLetterOfLastName = lastName[lastName.length - 1];

// var lastName = "Lovelace";
// var thirdLetterOfLastName = lastName[2];

// var myStr = "Bob";
// myStr[0] = "J";
// // does not change Bob to Job

// var firstLetterOfLastName = "";
// var lastName = "Lovelace";
// firstLetterOfLastName = lastName[0];

// var lastNameLength = 0;
// var lastName = "Lovelace";
// lastNameLength = lastName.length;

// var someAdjective = "way cool!";
// var myStr = "Learning to code is ";
// myStr += someAdjective;

// var myName = 'Bob Howard';
// var myStr = 'My name is ' + myName + ' and I am swell!';

// var myStr = "This is the ";
// myStr += "first sentence.";
// myStr += " This is the ";
// myStr += "second sentence.";

// var myStr = "This is the start." + " This is the end.";

// var myStr = "\\ \t \t \r \n";

// var myStr = '<a href="http://www.example.com" target="_blank">Link</a>'

// var myStr = "I am a \"double quoted\" string inside \"double quotes\"";

// var myFirstName = "Bob";
// var myLastName = "Howard";

// function convertToF(celsius) {
// 	var fahrenheit = (celsius * 9 / 5) + 32;
// 	return fahrenheit;
// }
// convertToF(38);

// var d = 33;
// d /= 11;

// var c = 4.6;
// c *= 10;

// var b = 9;
// b -= 15;

// var a = 3;
// a += 12;

// var remainder = 11 % 3;

// var quotient = 4.4 / 2.0;
// var product = 2.0 * 2.5;

// var myDecimal = 11.7;

// var myVar = 11;
// myVar--;

// var myVar = 87;
// myVar++;

// var quotient = 66 / 33;
// var product = 8 * 10;
// var difference = 45 - 33;
// var sum = 10 + 10;

// var studlyCapVar;
// var properCamelCase;
// var titleCaseOver;
// studlyCapVar = 10;
// properCamelCase = "A String";
// titleCaseOver = 9000;

// var a = 5;
// var b = 10;
// var c = "I am a";
// a = a + 1;
// b = b + 5;
// c = c + " String!";

// var a;
// var b = 2;
// a = 7;
// b = a;

// var myName;

// This is a single line comment

/* This is a multi-
line comment */