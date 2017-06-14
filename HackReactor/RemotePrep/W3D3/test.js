// var x = "hello world";
// var y = 6;

// console.log(x[y]);

// counter = 0;
// while (counter < 10) {
// 	console.log(x[counter]);
// 	counter++
// }



// var str = "string of text";
// var arr =  ["hello", 55, ["nested", true, ["really nested"]], false];

// console.log(arr[2][2][0]);



// var arr = ["new", true];

// arr[2] = 99;
// arr[1] = false;
// arr[5] = "jump";
// arr[3] = undefined;

// console.log(arr);




// var recipe = [];
// recipe[0] =  "open eat24";
// recipe[1] = "order food";
// recipe[5] = "eat";

// recipe.length = 10;
// // var lastStep =  1;

// // console.log(recipe[lastStep]);
// console.log(recipe.length);

// // counter = 0;
// // while (counter < recipe.length) {

// // }

// console.log(recipe);
// recipe.push("popppp")
// console.log(recipe);
// var x = recipe.pop();
// console.log(x);
// recipe.push([1,1,1,1,1,1,1,1,11])
// console.log(recipe[6].push(111));



// var numArr = [1,1,1,1,1,1,1,1,1,1];
// // var counter = 0;
// // while (counter < numArr.length) {
// // 	numArr[counter]++;
// // 	counter++;
// // }

// console.log(numArr);
// numArr.push(1, 2, 3);
// console.log(numArr);

// numArr.unshift(9);
// console.log(numArr);
// numArr.shift();
// console.log(numArr);



// var numArr = [1,1,1,1,1,1,1,1,1,1];

// var i = 0;
// while (i < numArr.length) {
// 	console.log(numArr[i]);
// 	i++;
// }

// console.log("break");
// for (var i = 0; i < numArr.length; i++) {
// 	console.log(numArr[i]);
// }



// var bucket_list = ["learn to code", "get a web dev job"];
// console.log(bucket_list);
// bucket_list.push("graduate Hack Reactor")
// console.log(bucket_list);
// bucket_list.unshift("travel the world", "retire early")
// console.log(bucket_list);
// console.log(bucket_list.length);
// var dying_wish = bucket_list.pop();
// console.log(bucket_list);
// console.log(dying_wish);
// var do_it_now = bucket_list.shift();
// console.log(bucket_list);
// console.log(do_it_now);
// console.log(bucket_list.length);



// var numArr = [1, false, "dog", "test", true, 99];

// // var print = function(x) {
// // 	console.log(x);
// // }

// // var x = new Array();
// // var x = [];

// // for (var i = 0; i < numArr.length; i++) {
// // 	console.log(numArr[i]);
// // }


// numArr.forEach(function(element) {
// 	console.log(element);
// });



// var numArr = [1,2,3];
// var numArr2 = [1,2,3];

// console.log(numArr === numArr2); // => false



// var string = "hello ";
// string += "world";
// console.log(string);

// var arr = ["hello "];
// arr += ["world"];
// console.log(arr);

// var arr2 = ["hello "];
// var arr3 = ["world"];
// arr2 = arr2.concat(arr3);

// console.log(arr2);



// var arr = ["hello ", 1, 1 1];
// console.log(arr);
// console.log(arr.splice(0, 1));
// console.log(arr);

// var arr = ["hello ", 1, 1, 1];
// var arr2 = arr.slice(1, 2);
// console.log(arr);
// console.log(arr2);


// var x  = function() {
// 	var args = Array.prototype.slice.call(arguments); // use case for slice
// }

// var array = ["love", "coding", "I"];
//
// var reverser =  function(array) {
// 	var reversedArray = [];
// 	for (var i = array.length; i > 0; i--) {
// 		reversedArray.push(array.pop);
// 	}
// 	return reversedArray
// };
//
// console.log(array);



// var arr = [true, 5, "string", function(element){console.log(element)}, 22, false];

// console.log(arr[3]);


// var arr2 = new Array(7);

// arr[5] == null; // bad practice because empty values are "undefined", not "jull"
//  arr[5] === undefined; // use this instead
//  typeof null



var dream_car = {};
dream_car.make = "Toyota";
dream_car.model = "Camry";
dream_car.color = "Grey";
dream_car.year = 2016;
dream_car.registered = true;
dream_car.color
