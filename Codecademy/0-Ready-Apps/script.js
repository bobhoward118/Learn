



// *#*#*#*  INSTALL BABEL start *#*#*#*
npm install babel-cli
npm install babel-preset-env // -D adds to devDependencies in package.json
npm run build

npm init // creates package.json file in root
  (name): learning-babel
  (version): 1.0.0
  (description): Use Babel to transpile JavaScript ES6 to ES5

npm install babel-cli -D
npm install babel-preset-env -D

touch .babelrc
  {
    "presets": ["env"]
  }

package.json
  "scripts": {
    "build": "babel src -d lib"
  }

npm run build

// *#*#*#*  INSTALL BABEL end *#*#*#*


// *#*#*#*  ES5 vs ES6 *#*#*#*
var carbonara = 'You can make carbonara with ' + pasta + ', ' + meat + ', and a sauce made with ' + sauce + '.';  // ES5

const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;  //  ES6



// *#*#*#*  PROJECT DOG YEARS start *#*#*#*
// Ask suser for their name and store in myName variable
let myName = prompt('What is your name?');

// Convert name to all lower case letters
myName = myName.toLowerCase();

// Ask user for their age and set to myAge variable
let myAge = prompt('What is your age?');

// Set number of early years for conversion
let earlyYears = 2;

earlyYears *= 10.5;

// Set number of later years by subtracking early years from age
let laterYears = myAge - 2;

// Calculate later years in dog years
laterYears *= 4;

// Add early years and later years together
let myAgeInDogYears = earlyYears + laterYears;

// Log to console result of users age converted to dog years
console.log('My name is ' + myName + '. I am ' + myAgeInDogYears + ' years old in dog years.');
// *#*#*#*  PROJECT DOG YEARS end *#*#*#*



// *#*#*#*  PROJECT KELVIN WEATHER start *#*#*#*
// Prompt for today's forcast in Kelvin
const kelvin = prompt('What is the Kelvin temperature today?');

// Conversion from Kelvin to Celsius
let celsius = kelvin - 273;

// Convert Celsius to Fehrenheit
let fehrenheit = celsius * (9/5) + 32;

// Remove decimal places
fehrenheit = Math.floor(fehrenheit);

// Log the result of converting the Kelvin temperature to Fehrenheit.
console.log('The temperature is ' + fehrenheit + ' degrees fehrenheit.');
// *#*#*#*  PROJECT KELVIN WEATHER end *#*#*#*




let myName = 'Bob';
let myCity = 'Austin';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`); // ES6 use "backticks" (left of 1) and wrap variable is ${myName}


let favoriteAnimal = 'bobcat';
console.log('My favorite animal: ' + favoriteAnimal);

// (if x = 4)
x += 2; // 6
x -= 2; // 2
x *= 2; // 8
x /= 2; // 2
x++; // 5
x--; // 3
++x; // 5
--x; // 3


let changeMe = true;
changeMe = false;
console.log(changeMe);


const entree = 'Enchiladas';
const price = 12;

console.log(entree);
console.log(price);

entree = 'Tacos';


Number.isInteger(2017);
Math.ceil(43.8); // 44
Math.floor(Math.random() * 100); // 36
Math.random() * 1000; // 17 digits

// STRING METHODS
'Bob'.startsWith('B'); // true
'Bob'.toUpperCase(); // "BOB"
'   Bob   '.trim(); // "Bob"


'Bob'.length; // 3
console.log(3.5 + 25);
console.log('Greater');
