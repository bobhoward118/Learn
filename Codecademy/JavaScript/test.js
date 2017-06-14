function Bird(color, origin) {
  this.color = color;
  this.origin = origin;
};
function Cat(age, color) {
  this.age = age;
  this.color = color;
};
function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
};

function Person(name,age) {  // ********** CUSTOM CONSTRUCTORS **********
  this.name = name;
  this.age = age;
};
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
var george = new Person("George Washington", 275);

var bob = new Object();
bob.name = "Bob Smith";
bob.age = 20;

var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
square.calcArea = function() {
  return this.sideLength * this.sideLength;
};
var p = square.calcPerimeter();
var a = square.calcArea();

var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
rectangle.setHeight = function(newHeight) {
  this.height = newHeight;
};
rectangle.setWidth = function(newWidth) {
  this.width = newWidth;
};
rectangle.setWidth(8);
rectangle.setHeight(6);

var setAge = function(newAge) {
  this.age = newAge;
};
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;
susan.setAge(35);

var setAge = function(newAge) { // this is no longer part of the bob object
  this.age = newAge;
};
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
bob.setAge(50);


var bob = new Object();
bob.age = 17;
bob.setAge = function(newAge) {
  bob.age =  newAge;
};
bob.getYearOfBirth = function() {
  return 2014 - bob.age;
};
bob.getYearOfBirth();

var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
bob.setAge = function(newAge) {  // ********** METHOD **********
  bob.age = newAge;
};
bob.setAge(40);
bob.setAge(20);

var square = function(x) {
  return x * x;
};
var multiply = function(x, y) {
  return x * y;
};
multiply(5, 25);

var bicycle = {
  speed: 0,
  gear: 1,
  frame_material: "carbon fiber"
};

var snoopy = {
  species: "beagle",
  age: 10
};
var buddy = new Object();
buddy.species = "golden retriever";
buddy.age = 5;

var susan2 = new Object();
susan2.name = "Susan Jordan";
susan2.age = 24;
var bob = new Object();  // ********** CONSTRUCTOR **********
bob.name = "Bob Smith";
bob.age = 30;
var susan = {
  name: "Susan Jordan",
  age: 24
};
var susan2 = new Object();
susan2.name = "Susan Jordan";
susan2.age = 24;
var jon = new Object();
jon["name"] = "Jonathan";
jon["age"] = 18;

var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};
var species = dog["species"];
var weight = dog["weight"];
var age = dog["age"];

var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};
var name1 = bob.name;
var age1 = bob.age;
var name2 = susan.name;
var age2 =susan.age;

var me = {
  age: 21,
  country: "USA"
};
var bob = {};
console.log("I'm ready for Objects!");

var getReview = function(movie) {
  switch(movie) {
    case 'Toy Story 2':
      return "Great story. Mean prospector.";
      break;
    case 'Finding Nemo':
      return "Cool animation, and funny turtles.";
      break;
    case 'The Lion King':
      return "Great songs.";
      break;
    default:
      return "I don't know";
  }
};

var fizzbuzz = 0,fizz = 0,buzz = 0;
for (var i = 1; i < 21; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    fizzbuzz++;
  } else if (i % 3 === 0) {
    console.log("Fizz");
    fizz++;
  } else if (i % 5 === 0) {
    console.log("Buzz");
    buzz++;
  } else {
    console.log(i);
  }
}
console.log("FizzBuzz total = " + fizzbuzz + "\nFizz total = " + fizz + "\nBuzz total = " + buzz);

var multiplesOfEight = [8,16,24,32,40,58];
var answer = multiplesOfEight[5] % 8 !== 0;

var answer = (((3 * 90) === 270) || !(false && (!false)) || "bex".toUpperCase() === "BEX");

// ******************* CONTACT LIST start ********************
var friends = {};
friends.bill = {};
friends.steve = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555"
};
friends.steve.firstName = "Steve";
friends.steve.lastName = "Jobs";
friends.steve.number = "(408) 555-5555"
friends.bill.address = ['One Microsoft Way','Redmond','WA','98052'];
friends.steve.address = ['1 Infinite Loop','Cupertino','CA','95014'];
var list = function(obj) {
  for (var prop in obj) {
    console.log(prop); // or console.log(friends[prop]); as below
  }
};
var search = function(name) {
  for (var prop in friends) {
    if (friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};
list(friends.firstName);
search("Steve");
search("Bill");
// repeated below with Codecademy code
var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");
******************* CONTACT LIST end ********************

var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0;
for (var i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}
console.log(largest);

var myOwnObject = new Object();
myOwnObject.name = "Bob";
myOwnObject['age'] = 25;

var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  interests: ["biking", "hiking", "swimming"]
};

var newArray = [[1, 2, [3, 4]], [5, {name: "Bob"}]];
newArray[1].name;

var myArray = [21, true, "Bob", {name: "Doug", age: 18}, [21,31,41]];

var object1 = new Object();
object1.name = "Bob";
object1.age = 21;

var object2 = {
  name: "Jonathan",
  age: 8
};

var object3 = {
  "name": "Jennifer",
  "age": 6
};

var object4 = {};
object4.name = "Mitchell";
object4['age'] = 6;

var me = new Object();
me.name = "Bob Howard";
me.age = 31;

var myObj = new Object(); // ********** OBJECT CONSTRUCTOR **********
myObj["name"] = "Charlie";
// or
myObj.name = "Charlie";

var me = {  // ********** OBJECT LITERAL NOTATION **********
  name: "Bob Howard",
  age: 21
};
me.name
me['name']

var myObject = {
  key: value,
  key: value,
  key: value
};

var phonebookEntry = {};
phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};
phonebookEntry.phone();
// vs
phonebookEntry.phone;

var jagged = [[1, 2, 3], ["Bob", "Jonathan"], true];
jagged[1][0].length;
var newArray = [[[1,2,3],[4,5,6],[7,8,9]],[[11,12,13],[14,15,16],[17,18,19]],[[21,22,23],[24,25,26],[27,28,29]]];

var array1 = [1, 2, 3];
var array2 = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
var array3 = [[[1,2,3],[4,5,6],[7,8,9]],[[11,12,13],[14,15,16],[17,18,19]],[[21,22,23],[24,25,26],[27,28,29]]];
var myArray = [11, true, "Hello World!"];

var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
console.log(languages[2]);
console.log(languages.length);
for (var i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}

var list = [1, 2, 3];

******************* ADVENTURE 2 start ********************
var user = prompt("You become aware that the world you know may be a computer simulation called 'The Matrix'. Do you IGNORE this intuition, ask WHAT is The Matrix, or FORGET your suspicions?").toUpperCase();
switch(user) {
  case 'IGNORE':
    var crazy = prompt("Does this sound too crazy to be true (YES or NO)?").toUpperCase();
    var dangerous = prompt("Does it seem too dangerous to keep searching for the truth?").toUpperCase();
    if (crazy === 'YES' || dangerous === 'YES') {
      console.log("You do well to ignore what you think and continue believing what you know.");
    } else {
      console.log("Following your intuition may be the only course of action you can live with! Keep searching - the truth is out there.");
    }
    break;
  case 'WHAT':
    var change = prompt("Do you suspect that learning the truth will change everything you know to be true (YES or NO)?").toUpperCase();
    var unstoppable = prompt("Are you willing to go wherever the rabbit hole leads in your search for the truth?").toUpperCase();
    if (change === 'YES' && unstoppable === 'YES') {
      console.log("Morpheus has been looking for you. You are so close to knowing the truth! Follow the white rabbit.");
    } else {
      console.log("You are not ready to meet Morpheus, but he will be watching you very closely.");
    }
    break;
  case 'FORGET':
    var follow = prompt("Do you believe it is best to follow the crowd, never questioning things that do not make sense (YES or NO)?").toUpperCase();
    var protect = prompt("Would you stop at nothing to protect the world as you know it (YES or NO)?").toUpperCase();
    if (follow === 'YES' || protect === 'YES') {
      console.log("New ideas can be very dangerous! You should forget everything you heard about The Matrix.");
    } else {
      console.log("Sometimes asking the hard questions is the only way to find the truth. Keep searching, Neo!");
    }
    break;
  default:
    console.log("I did not understand your selection. Please try again and choose IGNORE, WHAT, or  FORGET!");
};

var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();
switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
};

******************* ADVENTURE 2 end ********************

var programming = false;
var happy = function() {
  if (!programming) {
    return true;
  } else {
    return false;
  }
};

!true;   // => false
!false;  // => true

var tired = true;
var bored =  false;
var nap =  function() {
  if (tired || bored) {
    return true;
  } else {
    return false;
  }
};

true || true;     // => true
true || false;    // => true
false || true;    // => true
false || false;   // => false

var hungry = true;
var foodHere = true;
var eat = function() {
  if (hungry && foodHere) {
    return true;
  } else {
    return false;
  }
};

true && true;    // => true
true && false;   // => false
false && true;   // => false
false && false;  // => false

var iLoveJavaScript = true;
var iLoveLearning = false;
if(iLoveJavaScript && iLoveLearning) {
  console.log("Awesome! Let's keep learning!");
} else if (!(iLoveJavaScript || iLoveLearning)) {
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}

var direction = prompt("Which is your favorite direction?");
switch(direction) {
  case 'North':
    console.log("North is a great direction");
    break;
  case 'South':
    console.log("South is also one of my favorite directions!");
    break;
  case 'East':
    console.log("Where the wicked witch comes from!");
    break;
  default:
    console.log("You are very brave for choosing " + direction + "!");
};

var answer = prompt("Which is your favorite Chipmonk?");
switch(answer) {
  case 'Alvin':
    console.log("Alvin is my favorite too!");
    break;
  case 'Theodore':
    console.log("Yes, Theodore is one of the best!");
    break;
  default:
    console.log("I have not yet heard of a chipmonk named " + answer + ".");
};

var candy = prompt("What's your favorite candy?","Type your favorite candy here.");
switch(candy) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a candy?");
    break;
  default:
    console.log("I like " + candy + " too!");
};

var color = prompt("What's your favorite primary color?","Type your favorite color here");
switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  case 'yellow':
    console.log("That is a good color as well!");
    break;
  default:
    console.log("I don't think that's a primary color!");
};

var lunch = prompt("What do you want for lunch?","Type your lunch choice here");
// var array = ["sandwich", "soup", "salad", "pie", "cookie"];
// for (var i = 0; i < array.length; i++) {
  switch(lunch) {
  // switch(array[i]) {
    case 'sandwich':
      console.log("Sure thing! One sandwich, coming up.");
      break;
    case 'soup':
      console.log("Got it! Tomato's my favorite.");
      break;
    case 'salad':
      console.log("Sounds good! How about a caesar salad?");
      break;
    case 'pie':
      console.log("Pie's not a meal!");
      break;
    default:
      console.log("Huh! I'm not sure what '" + lunch + "' is. How does a sandwich sound?");
  };
// }

var isEven = function(number) {
  if (number % 2 === 0) {
    return true;
  } else if (isNaN(number)) {
    console.log("Function requires a number as a parameter.");
  } else {
    return false;
  }
};
isEven(9);

******************* DRAGON SLAYER start ********************
function dragon() {
  var slaying = true;
  var youHit = Math.floor(Math.random() * 2);
  var damageThisRound = Math.floor(Math.random() * 5 + 1);
  var totalDamage = 0;
//
  while (slaying) {
    if (youHit) {
      console.log("You hit the dragon and did " + damageThisRound + " damage!");
      totalDamage += damageThisRound;
      if (totalDamage >= 4) {
        console.log("You did it! You slew the dragon!");
        slaying = false;
      } else {
        youHit = Math.floor(Math.random() * 2);
      }
    } else {
      console.log("The dragon burninates you! You're toast.");
      slaying = false;
    }
  }
};
for (var i = 0; i < 10; i++){
  dragon();
}
******************* DRAGON SLAYER end ********************

for (var i = 1; i < 11; i++) {
  console.log(i);
}

var i = 1;
while (i < 11) {
  console.log(i);
  i++;
}

var i = 1;
do {
  console.log(i);
  i++;
} while (i < 11);

var getToDaChoppa = function() {
  var repeat = false;
  do {
    console.log("Look! I can create a Do / While loop now!");
  } while (repeat);
};
getToDaChoppa();

var loopCondition = false;
do {
  console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");
} while (loopCondition);

for (var i = 1; i < 11; i++) {
  console.log(i);
}

var i = 1;
while (i < 11) {
  console.log(i);
  i++;
}

var condition = true
var soloLoop = function(){
  while (condition) {
    console.log("Looped once!");
    condition = false;
  }
};
soloLoop();

var num = 0;
var loop = function() {
  while(num < 3) {
    console.log("I'm looping!");
    num++;
  }
};
loop();

var bool = true;
while(bool){
  console.log("Less is more!");
  bool = false;
}

understand = true;
while(understand){ // do not need to say 'understand === true'
  console.log("I'm learning while loops!");
  understand = false;
}

var understand = true;
while(understand === true){
  console.log("I'm learning while loops!");
  understand = false;
}

var coinFace = Math.floor(Math.random() * 2);
while (coinFace === 0) {
  console.log("Heads! Flipping again...");
  var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");

var heads = 0, tails = 0, num = 0;
for (var i = 1; i < 11; i++) {
  num = Math.floor(Math.random() * 2);
  if (num === 0) {
    heads++;
  } else {
    tails++;
  }
}
console.log("Heads count = " + heads + ". \nTails count = " + tails + ".");

**************** SEARCH TEXT FOR YOUR NAME (working start) ****************
var text = "This is a very long Bob string Bill containing Bob my name at least a few Bob times.";
var myName = "Bob";
var hits = [];
for (var i = 0; i < text.length; i++) {
  if (text[i] === "B" && text[i + 1] === "o" && text[i + 2] === "b") {
    for (var j = i; j < (myName.length + i); j++) {
      hits.push(text[j]);
    }
  }
}
//
if (hits.length === 0) {
  console.log("Your name wasn't found!");
} else {
  console.log(hits);
}
**************** SEARCH TEXT FOR YOUR NAME (working end) ****************

***************** SEARCH TEXT FOR YOUR NAME (final start) *****************
text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";
// 
var myName = "Eric";
var hits = [];
// 
for (var i = 0; i < text.length; i++) {
  if (text[i] === "E") {
    for (var j = i; j < (myName.length + i); j++) {
      hits.push(text[j]);
    }
  }
}
//
if (hits.length === 0) {
  console.log("Your name wasn't found!");
} else {
  console.log(hits);
}
***************** SEARCH TEXT FOR YOUR NAME (final end) *****************

var names = ["Bob", "Janet", "Jonathan", "Jennifer", "Tammy"];
for (var i = 0; i < names.length; i++) {
  console.log("I know someone called " + names[i]);
}

var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "L.A.", "S.F."];
for (var i = 0; i < cities.length; i++) {
  console.log("I would like to visit " + cities[i]);
}

var junkData = ["Eddie Murphy", 49, "peanuts", 31];
console.log(junkData[3]);

var junk = ["bob", "howard", 8, 6];
console.log(junk);

for (var i = 100; i > 0; i -= 5) {
  console.log(i);
}

for (var i = 10; i > 0; i--) {
  console.log(i);
}

for (var i = 8 ; i < 120; i += 12) {
  console.log(i);
}

for (var i = 5; i < 51; i += 5) {
  console.log(i);
}

for (var counter = 1; counter < 11; counter++) {
  console.log(counter);
}

******************** ADVENTURE 2 start ******************
confirm("Are you ready to play?");
var name = prompt("What is your name?");
alert("Welcome " + name + ", to Adventure World");
var character = prompt("Will you be a 'Knight', a 'Warrior', or a 'Wizard'");
if (character === "Knight") {
  alert("Welcome, Sir " + name);
} else if (character === "Warrior") {
  alert("Welcome, Lord " + name);
} else {
  alert("Welcome, Warlock " + name);
}
var weapon = prompt("Will your weapon of choice be a 'Sword', a 'Spear', or a 'Mace'?");
if (weapon !== "Sword" || weapon !== "Spear" || weapon !== "Mace") {
  var weapon = prompt("Please choose 'Sword' or 'Spear' or 'Mace'");
} else {
  alert("A " + weapon + " is a good choice");
}
var path1 = confirm("Will you go through the first door?");
if (path1 === true) {
  alert("You have entered a trap!");
} else {
  alert("You have safely passed the first test.");
}
var path2 = confirm("will you go through the second door?");
if (path2 === true) {
  alert("You have safely passed the second test.");
} else {
  alert("You have entered a trap!");
}

******************** ADVENTURE 1 start ******************
confirm("Are you ready to play?");
var age = prompt("What's your age?");
if (age < 13) {
  console.log("You are allowed to play, but we take no responsibility.");
} else {
  console.log("You are old enough to fully enjoy this game!");
}
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
var userAnswer = prompt("Do you want to race Bieber on stage?");
if (userAnswer === "yes") {
  console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
} else {
  console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}
var feedback = prompt("Please rate this game on a scale from 1 - 10.");
if (feedback > 8) {
  console.log("Thank you! We should race at the next concert!");
} else {
  console.log("I'll keep practicing coding and racing.");
}

var sleepCheck = function (numHours) {
  if (numHours >= 8) {
    return "You're getting plenty of sleep! Maybe even too much!";
  } else {
    return "Get some more shut eye!";
  }
};
sleepCheck(10);

var my_number = 7; //this has global scope
var timesTwo = function(number) {
  var my_number = number * 2;
  console.log("Inside the function my_number is: " + my_number);
}; 
timesTwo(7);
console.log("Outside the function my_number is: " + my_number);

var areaBox = function(length, width) {
  return length * width;
};
areaBox(4,3);

var perimeterBox = function(length, width) {
  return length + length + width + width;
};
// or
var perimeterBox = function(length, width) {
  return (length * 2) + (width * 2);
};
perimeterBox(4,3);

var quarter = function(number) {
  return number / 4;
};
if (quarter(36) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}

var timesTwo = function(number) {
  return number * 2;
};
var newNumber = timesTwo(12);
console.log(newNumber);

var orangeCost = function(cost) {
  console.log(cost * 5);
};
orangeCost(5);

var calculate = function(number) {
  var val = number * 10;
  console.log(val);
};
// or 
var calculate = function(number) {
  console.log(number * 10);
}
calculate(55);

var foodDemand = function(food) {
  console.log("I want to eat " + food);
};
foodDemand("BBQ");

var greeting = function(name) {
  console.log("Great to see you, " + name);
};
greeting("Bob");

var divideByThree = function(number) {
  var val = number / 3;
  console.log(val);
};
// or 
var divideByThree = function(number) {
  console.log(number / 3);
};
// or 
function divideByThree(number) {
  console.log(number / 3);
};
divideByThree(3.333);


console.log(2 * 5)
console.log("Hello")