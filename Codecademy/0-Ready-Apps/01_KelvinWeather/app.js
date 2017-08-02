// Prompt user for today's forcase in Kelvin
const kelvin = prompt('What is the Kelvin temperature today?');

// Conversion from Kelvin to Celsius
const celsius = kelvin - 273;

// Conversion from Celsius to Fehrenheit
var fahrenheit = celsius * (9/5) + 32;

// Remove decimal places
fahrenheit = Math.floor(fahrenheit);

// Log temperature conversion from Kelvin to Fahrenheit
console.log('The temperature is ' + fahrenheit + ' degrees fahrenheit.');
