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
