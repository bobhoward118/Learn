// var add = function(a, b) {
//   return a + b;
// };



// var person = {
//   name: 'Bob',
//   location: 'Los Angeles',
//   age: 56,
//   hobbies: ['working', 'partying'],
//   cat: {
//     name: "mr fuzzles",
//     hobbies: [ "being inert", "nudging things off tables" ]
//   },
//   party: function(){
//     console.log('dance, dance, dance!')
//   }
// }
// person.name
// person.age
//
// person.hobbies[0]
// person.cat.name
//
// person.party // what does this do?
// person.party() // how about this?



// var person = {
//   name: "Jonathan",
//   location: "los Angeles",
//   instructor: true,
//   birthday: 4.3,
//   hobbies: ["walking Hank", "vacuming"],
//   dog: {
//     name: "Hank",
//     toys: ["squeaker", "rope"]
//   },
//   party: function() {
//     console.log("dance, dance, dance");
//   },
//   method: function() {
//     console.log("i'm being invoked in the context of...")
//     console.log(this);
//   },
//   person.work = function() {
//     console.log("Welcome to McDonald's, I'm " + this.name + ". May I take your order?")
//     console.log("Enjoy this beautiful day in " + this.location)
//     console.log("Would you like to hear a story about " + this.cat.name + " and his " + this.cat.hobbies[1])
//   }
// };
//
// // person.party();
// person["party"]();




// var freestanding_fn = function() {
//   console.log(arguments);
//   console.log("--------");
//   console.log(this);
// };
//
// freestanding_fn(1, true, "sitting");
