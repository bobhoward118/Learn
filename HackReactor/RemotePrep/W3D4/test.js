// var my_array = ["one, "two", "three"]

var person = {
  "name": "Mario",
  "job": "Plumber"
}

// person["name"]
// person["job"]

// person["name"] = "Luigi"
person["name"]
// person.name // cannot use variables with dot.notation





// var my_dream_life = {};
// var property_key = "job";
// my_dream_life[property_key] = "Programmer";
// var another_property_key = "salary";
// my_dream_life[another_property_key] = "100K";
// // my_dream_life[property_key]
// // my_dream_life["job"]
// var next_property = "car";
// my_dream_life[next_property] = "Ferrari";
// // my_dream_life[next_property]
// // my_dream_life["car"]
// var property_key2 = "home";
// my_dream_life[property_key2] = "mansion";
// var property_key3 = "marraige";
// my_dream_life[property_key3] = "married";
// var property_key4 = "kids";
// my_dream_life[property_key4] = "none";
// my_dream_life[property_key4]


// var car = {
//   make: "Toyota"
// }
// car["model"] = "Camry"
// // car["model"]
// // car.model
//
// car.model = "Prius"
// // car["model"]
// // car.model
//
// var prop = "year";
// car[prop]
// car.prop = 1992;
// car.prop
// console.dir(car);
// // car.nothing_here

// var dream_car = {};
// dream_car.make = "Toyota";
// dream_car.model = "Camry";
// dream_car.color = "Grey";
// dream_car.year = 2016;
// dream_car.registered = true;
// dream_car.year


// var demo_object = {
//     one: 1,
//     two: 2,
//     three: 3
// }
// var one = "three"
//
// // demo_object['two'] // ??
// demo_object[one] // ??


// var state_capitals = {
//     California: 'Sacramento',
//     Texas: 'Austin'
// }
//
// var place = 'California'

// state_capitals['place'] // ??
// state_capitals.place   // ??
// state_capitals[place] // ??
//
// state_capitals['California'] // ??
// state_capitals.California   // ??
// state_capitals[California] // ??


// var arr = ]1, 2, 3, 4];
// for (var i = 0; i < arr.length; i++) {
//   /stuff
// }

// var obj = {
//   'a': 'apples',
//   'b': 'beer',
//   'c': 'candy'
// }
//
// for (var letter in obj) {
//   console.log(obj[letter]);
// }


// var obj = {
//     greeting: 'howdy',
//     direction: 'down',
//     color: 'red',
//     'spaces-and-dashes can be used': ' but need to have quotes'
// }
//
// for (var key in obj) {
//     console.log(obj[key]) //why don't we need quotes around key??
//     // what would happen if we logged obj.key instead? Why? Test it.
// }
//
// Object.keys(obj); // returns array of keys


// var obj = {
//   '0': 'a',
//   '1': 'b',
//   '2': 'c'
// };
//
// // for (var i = 0; i < 3; i++) {
// //   console.log(obj[i]);
// // }
//
// obj.length()



// var dream_car = {};
// dream_car.make = "Toyota";
// dream_car.model = "Camry";
// dream_car.color = "Grey";
// dream_car.year = 2016;
// dream_car.registered = true;
//
// for (var key in dream_car) {
//   console.log(dream_car[key]);
// } // ****** also got "undefined"
//
// for (var x in dream_car) {
//   console.log(dream_car[x]);
// }
