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
