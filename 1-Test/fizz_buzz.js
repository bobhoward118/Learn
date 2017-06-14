var fizzBuzz = 0;
var fizz = 0;
var buzz = 0;
for (i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " = FizzBuzz");
    fizzBuzz ++;
  } else if (i % 3 === 0) {
    console.log(i + " = Fizz");
    fizz ++;
  } else if (i % 5 === 0) {
    console.log(i + " = Buzz");
    buzz ++;
  } else {
    console.log(i);
  }
}
console.log("Fizz count: " + fizz);
console.log("Buzz count: " + buzz);
console.log("FizzBuzz count: " + fizzBuzz);