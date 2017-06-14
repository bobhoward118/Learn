// 3.1.3  Hello World
function start() {
	println("Hello world.");
}

// 3.1.4  Your Name and Hobby
function start() {
	println("My name is Bob");
	println("I like programming");
}

// 3.2.3  Basic Variables
function start() {
	var name = "Joe";
	println("My namne is " + name);

	var numApples = 5;
	println("Number of apples: " + numApples);

	numApples = 0;
	println("Number of Apples: " + numApples);
}

// 3.2.4  Apples and Oranges
function start() {
	var apples = 20;
	var oranges = 15;

	println("Number of apples: " + apples);
	println("Number of oranges: " + oranges);

	oranges = 0;

	println("Number of apples: " + apples);
	println("Number of oranges: " + oranges);
}

// 3.3.3  Basic User Input
function start() {
	var name = readLine("Name? ");
	println("Name is: " + name);

	var age = readInt("Age? ");
	println("Age is: " + age);
}

// 3.3.4  Grocery Store
function start() {
	var name = readLine("What is your name? ");
	var apples = readInt("How many apples would you like to buy? ");
	var oranges = readInt("How many oranges would you like to buy? ");

	println("Hi " + name + ", you want " + apples + " apples and " + oranges + " oranges");
}

// 3.4.3  Simple Calculator
function start() {
	var first = readInt("First: ");
	var second = readInt("Second: ");
	var sum = first + second;
	println(sum);
}

// 3.4.4  Dollars to Pounds
// Currancy conversation constant
var DOLLARS_TO_POUNDS = 0.6462;

function start() {
	println("This program converts USD to GBP.");
	var dollars = readInt("USD: ");
	// Convert dollars to pounds
	var pounds = dollars * DOLLARS_TO_POUNDS;

	println("GBP: " + pounds);
}

// 3.4.5  Diving Up Groups
// Divid people into groups
function start() {
	var people = readInt("Num people: ");
	var peoplePerGroup = readInt("People per group: ");
	var groups = Math.floor(people / peoplePerGroup);
	var peopleLeft = people % peoplePerGroup;

	println("There are " + groups + " groups with " + peopleLeft + " left over.");
}

// 3.4.6  T-Shirt Shop
// Cost of shirt constant
var COST_OF_SHIRT = 15;
// Get number of shirts from user and return total cost
function start() {
	var numShirts = readInt("How many shirts would you like? ");
	var cost = numShirts * COST_OF_SHIRT;
	println("Your total cost is: $" + cost);
}

// 3.4.7  Running Speed
/* Ask user for miles run, minutes it took, then calculate
* and return miles per hour */
function start() {
	var miles = readInt("How many miles did you run? ");
	var minutes = readInt("How many minutes did you run? ");
	var mph = miles / minutes * 60;
	println("Your speed was: " + mph + " mph.");
}

// 3.5.3  Graphics Hello World
function start() {
	var text = new Text("Hello world");
	text.setPosition(100, 100);
	add(text);
}

// 3.5.4  Blue Circle
function start() {
	var circle = new Circle(30);
	circle.setPosition(100, 50);
	circle.setColor(Color.blue);
	add(circle);
}

// 3.5.5  Red Rectangle
function start() {
	var rect = new Rectangle(100, 50);
	rect.setPosition(60, 150);
	rect.setColor(Color.red);
	add(rect);
}

// 3.5.6  8 Ball
function start() {
	var ball = new Circle(100);
	var centerX = getWidth() / 2;
	var centerY = getHeight() / 2;
	ball.setPosition(centerX, centerY);
	add(ball);

	var number = new Text("8");
	number.setFont("50pt Arial");
	number.setColor(Color.white);
	number.setPosition(centerX - number.getWidth()/2, centerY - number.getHeight()/2);
	add(number);
}

// 3.5.7  French Flag
// Draw French Flag (blue, white, red)
function start() {
	var blue = new Rectangle(getWidth()/3, getHeight());
	blue.setColor(Color.blue);
	blue.setPosition(0, 0);
	add(blue);
	var white = new Rectangle(getWidth()/3, getHeight());
	white.setColor(Color.white);
	white.setPosition(getWidth()/3, 0);
	add(white);
	var red = new Rectangle(getWidth()/3, getHeight());
	red.setColor(Color.red);
	red.setPosition(getWidth()/3*2, 0);
	add(red);
}

// 3.5.8  Snowman
var BOTTOM_RADIUS = 100;
var MID_RADIUS = 60;
var TOP_RADIUS = 30;

function start() {
	var bottom = new Circle(BOTTOM_RADIUS);
	bottom.setColor(Color.gray);
	bottom.setPosition(getWidth() / 2, getHeight() - BOTTOM_RADIUS);
	add(bottom);
	var middle = new Circle(MID_RADIUS);
	middle.setColor(Color.gray);
	middle.setPosition(getWidth() / 2, getHeight() - BOTTOM_RADIUS * 2 - MID_RADIUS);
	add(middle);
	var top = new Circle(TOP_RADIUS);
	top.setColor(Color.gray);
	top.setPosition(getWidth() / 2, getHeight() - BOTTOM_RADIUS * 2 - MID_RADIUS * 2 - TOP_RADIUS);
	add(top);
}

// 4.1.3  First Boolean
function start() {
	var loggedIn = false;
	println("User logged in?: " + loggedIn);
}

// 4.1.4  Do You Have a Dog?
function start() {
	var haveDog = false;
	println("Have dog?: " + haveDog);
}

// 4.2.3  Light Switch
function start() {
	var lightOn = true;
	println("Light on? " + lightOn);
	lightOn = !lightOn;
	println("Light on? " + lightOn);
	lightOn = !lightOn;
	println("Light on? " + lightOn);
}

// 4.2.4  President
function start() {
	var atLeastThirtyFive = readBoolean("Are you at least thirty five years old? ");
	var isUSCitizen = readBoolean("Are you a US Citizen? ");
	var canBePresident = atLeastThirtyFive && isUSCitizen;
	println("Can be president: " + canBePresident);
}

// 4.2.5  Wasting Time
function start() {
	var onFacebook = false;
	var onEmail = false;
	var isWastingTime = onFacebook || onEmail;
	println("Wasting time? " + isWastingTime);
}

// 4.2.6  Can You Graduate
function start() {
	var enoughUnits = readBoolean("Do you have enough units? ");
	var metRequirements = readBoolean("Have you met the requirements? ");
	var canGraduate = enoughUnits && metRequirements;
	println("Can graduate? " + canGraduate);
}

// 4.2.7  School's Out
function start() {
	var isWeekday = readBoolean("Is today a weekday? ");
	var isHoliday = readBoolean("Is today a holiday? ");
	var noSchoolToday = !isWeekday || isHoliday;
	println("There is no school today: " + noSchoolToday);
}

// 4.3.3  Voting Age
function start() {
	var age = readInt("What is your age? ");
	var oldEnough = age >= 18
	println("Can vote: " + oldEnough);
}

// 4.3.4  Grade Range
function start() {
	var grade = readInt("What was your grade? ");
	var gotB = grade >= 80 && < 90;
	println("Got a B: " + gotB);
}

// 4.3.5  Rolling Dice
function start() {
	var dieOne = readInt("What is your first dice number? ");
	var dieTwo = readInt("What is your second dice number? ");
	var rolledDoubles = dieOne == dieTwo;
	println("Rolled doubles? " + rolledDoubles);
}

// 4.3.6  All Star
function start() {
	var pointsPerGame = readInt("What are your points per game? ");
	var reboundsPerGame = readInt("What are your rebounds per game? ");
	var assistsPerGame = readInt("What are you assists per game? ");
	var allStar = pointsPerGame >= 25 || (pointsPerGame >= 10 && reboundsPerGame >= 10 && assistsPerGame >= 10);
	println("Are you an all star?; " + allStar);
}

// 4.4.3  Negative Numbers
function start() {
	var number = readInt("Number: ");
	if (number < 0) {
		println("Number is negative.");
	}
}

// 4.4.4  Great Names
function start() {
	var name = readLine("Enter name: ");
	if (name == "Jeremy") {
		println("Great name.");
	}
}

// 4.4.5  Even and Odd
function start() {
	var number = readInt("Number: ");
	if (num % 2 == 0) {
		println("Number is even.");
	} else {
		println("Number is odd.");
	}
}

// 4.4.6  Secret Password
function start() {
	var secretPassword = "abc123";
	var password = readLine("Password: ");
	if (password == secretPassword) {
		println("Passwords match.");
	} else {
		println("Password's don't match.");
	}
}

// 4.4.7  Teenagers
function start() {
	var age = readInt("What is your age? ");
	if (age > 12 && age < 20) {
		println("You are a teenager.");
	} else {
		println("Not a teenager.");
	}
}

// 4.4.8  Stop Light
function start() {
	var stopLight = readLine("What color is the stop light? ");
	if (stopLight == "red") {
		println("Red light: you should stop.");
	} else if (stopLight == "yellow") {
		println("Yellow light: you should be cautious.");
	} else if (stopLight == "green") {
		println("Green light: go!");
	} else {
		println("Please enter 'red', 'yellow', or 'green' in all lower case letters.");
	}
}

// 4.5.3  For Loop
function start() {
	for (var i = 0; i < 3; i++) {
		println(i);
	}
}

// 4.5 4  Chalkboard
function start() {
	for (var i = 0; i < 100; i++) {
		println("I will not come late to school");
	}
}

// 4.5.5  The Worm
var NUM_CIRCLES = 15;
function start() {
	for (var i = 0; i < NUM_CIRCLES; i++) {
		var widthX = getWidth()/30;
		var circle = new Circle(widthX);
		circle.setPosition(i * widthX * 2 + widthX , getHeight()/2);
		add(circle);
	}
}

// 4.5.6  Caterpillar
var NUM_CIRCLES = 15;
function start() {
	for (var i = 0; i < NUM_CIRCLES; i++) {
		var widthX = getWidth()/30;
		var circle = new Circle(widthX);
		circle.setPosition(i * widthX * 2 + widthX , getHeight()/2);
		if (i % 2 == 0) {
			circle.setColor(Color.red);
		} else {
			circle.setColor(Color.green);
		}
		add(circle);
	}
}

// 4.6.3  Countdown
function start() {
	for (var i = 10; i >= 0; i--) {
		println(i);
	}
}

// 4.6.4  Count By Twos
function start() {
	for (var i = 0; i <= 100; i += 2) {
		println(i);
	}
}

// 4.6.5  Count By Sevens
function start() {
	for (var i = 0; i <= 500; i += 7) {
		println(i);
	}
}

// 4.6.6  Powers of Two
function start() {
	for (var i = 1; i < 1000000; i *= 2) {
		println(i);
	}
}

// 4.7.3  For Loop Sum
var MIN = 1;
var MAX = 100;

function start() {
	var sum = 0;
	for (var i = MIN; i <= MAX; i++) {
		sum += i;
	}
	println("The sum was " + sum);
}

// 4.7.4  Better Sum
var MIN = readInt("Enter the low number: ");
var MAX = readInt("Enter the high number: ");

function start() {
	var sum = 0;
	for (var i = MIN; i <= MAX; i++) {
		sum += i;
	}
	println("The sum is " + sum);
}

// 4.7.5  Factorial
var N = 5;

function start() {
	var product = 1;
	for (var i = N; i > 0; i--) {
		product *= i;
	}
	println("Factoral " + N + "! equals: " + product);
}

// 4.7.6  All Dice Values
var SIDES_ON_DICE = 6;

function start() {
	for (var i = 1; i <= SIDES_ON_DICE; i++) {
		for (var j = 1; j <= SIDES_ON_DICE; j++) {
			println(i + "," + j);
		}
	}
}

// 4.8.3  Rolling a Die
function start() {
	var roll = Randomizer.nextInt(1,6);
	println("You rolled a " + roll);
}

// 4.8.4  Flipping a Coin
function start() {
	var isHeads = Randomizer.nextBoolean();
	println("You flipped heads " + isHeads);
}

// 4.8.5  Lots of Dice
function start() {
	var sixCount = 0;
	for (var i = 0; i < 100; i++) {
		var roll = Randomizer.nextInt(1,6);
		if (roll == 6) {
			sixCount++;
		}
		println("You rolled: " + roll);
	}
	println("You rolled six " + sixCount + " times.");
}

// 4.8.6  Random Color Square
var SIDE_LENGTH = 100;

function start () {
	var rect = new Rectangle(SIDE_LENGTH, SIDE_LENGTH);
	rect.setPosition(getWidth()/2 - SIDE_LENGTH/2, getHeight()/2 - SIDE_LENGTH/2);
	rect.setColor(Randomizer.nextColor());
	add(rect);
}

// 4.9.3  While Loop Countdown
function start() {
	var i = 10;

	while (i >= 0) {
		println(i);
		i--;
	}
}

// 4.9.4  Inventory
var STARTING_ITEMS_IN_INVENTORY = 20;

function start() {
	var numItems = STARTING_ITEMS_IN_INVENTORY;
	while (numItems > 0) {
		println("We have " + numItems + " items in inventory.");
		var numBuy = readInt("How many items would you like to buy? ");
		if (numBuy > numItems) {
			println("There is not enough in inventory for that purchase.");
		} else {
			numItems -= numBuy;
			println("We now have " + numItems + " left in inventory.");
		}
	}
	println("All out!");
}

// 4.9.5  Fibonacci
var MAX = 1000;

function start() {
	var first = 1;
	var second = 1;
	var sum = 0;
	println(first);
	println(second);
	while ((sum + first) < MAX) {
		sum = first + second;
		println(sum);
		first = second;
		second = sum;
	}
}

// 4.10.3  Adding Up Numbers
var SENTINEL = -1;
function start() {
	var sum = 0;

	while (true) {
		var num = readInt("Enger a number: ");
		if (num == SENTINEL) {
			break;
		}
		sum += num;
	}
	println("The total was: " + sum);
}

// 4.10.4  Snake Eyes
var SENTINEL1 = 1;
var SENTINEL2 = 1;

function start() {
	var die1 = 0;
	var die2 = 0;
	var numRolls = 0;
	while (true) {
		die1 = Randomizer.nextInt(1,6);
		die2 = Randomizer.nextInt(1,6); 
		println("Rolled: " + die1 + " " + die2);
		numRolls++;
		if (die1 == SENTINEL1 && die2 == SENTINEL2) {
			println("It took you " + numRolls + " rolls to get snake eyes.");
			break;
		}
	}
}

// 4.10.5  Better Password Prompt
var SECRET = "abc123";

function start() {
	while (true) {
		var password = readLine("Enter password: ");
		if (password == SECRET) {
			println("You got it!");
			break;
		}
		println("Sorry, that did not match. Please try again.");
	}
}

// 5.1.3  Double Number
function start() {
	doubleNumber(5);
	doubleNumber(12);
	var y = 3;
	doubleNumber(y);
}

function doubleNumber(x) {
	var doubleX = 2 * x;
	println(doubleX);
}

// 5.1.4  Square
function start() {
	square(5);
	square(25);
	var y = 100;
	square(y);
}

function square(x) {
	var squaredNum = x * x;
	println(squaredNum);
}

// 5.1.5  Triple
function start() {
	triple(5);
	triple(125);
	var y = 100;
	triple(y);
}

function triple(x) {
	var tripledNum = x * 3;
	println(tripledNum);
}

// 5.2.3  Sum Function
function start() {
	sum(1, 1);
	sum(5, 10);
	var x = 10;
	var y = 104;
	sum(x, y);
}

function sum(x, y) {
	var total = x + y;
	println(total);
}

// 5.2.4  Area of Triangle
function start() {
	triangleArea(5, 4);
}

function triangleArea(base, height) {
	var area = base * height / 2;
	println(area);
}

// 5.2.5  Height in Meters
var INCHES_TO_CM = 2.54;
var CM_TO_METERS = 0.01;
var FEET_TO_INCHES = 12;

function start() {
	convertHeightToMeters(6, 4);
	convertHeightToMeters(5, 8);
	convertHeightToMeters(5, 2);
}

function convertHeightToMeters(feet, inches) {
	var meters = (feet * FEET_TO_INCHES + inches ) * INCHES_TO_CM * CM_TO_METERS;
	println(feet + " feet, " + inches + " inches = " + meters + " meters");
}

// 5.3.3 Draw CIrcles
function drawCircle(radius, color, x, y) {
	var circle = new Circle(radius);
	circle.setColor(color);
	circle.setPosition(x, y);
	add(circle);
}

function start() {
	drawCircle(40, Color.red, 100, 300);
	drawCircle(50, Color.green, 50, 100);
	drawCircle(70, Color.blue, getWidth()/2, getHeight()/2);
}

// 5.3.4  Horizontal Lines
function start() {
	horizontalLine(100, 200);
	horizontalLine(200, 100);
	horizontalLine(300, 50);
}

function horizontalLine(y_location, length) {
	var line = new Line(0, y_location, length, y_location);
	line.setLineWidth(5);
	add(line);
}

// 5.3.5  Graphics Stop Light
var LIGHT_RADIUS = 35;
var STOPLIGHT_WIDTH = 120;
var STOPLIGHT_HEIGHT = 350;
var BUFFER = 100;
var GRAY_COLOR = "#737071";

function start() {
	var rect = new Rectangle(STOPLIGHT_WIDTH, STOPLIGHT_HEIGHT);
	rect.setPosition(getWidth()/2-(STOPLIGHT_WIDTH/2), getHeight()/2-(STOPLIGHT_HEIGHT/2));
	rect.setColor(GRAY_COLOR);
	add(rect);
	
	var circle = new Circle(LIGHT_RADIUS);
	circle.setPosition(getWidth()/2, getHeight()/2-BUFFER);
	circle.setColor(Color.red);
	add(circle);
	
	var circle = new Circle(LIGHT_RADIUS);
	circle.setPosition(getWidth()/2, getHeight()/2);
	circle.setColor(Color.yellow);
	add(circle);
	
	var circle = new Circle(LIGHT_RADIUS);
	circle.setPosition(getWidth()/2, getHeight()/2+BUFFER);
	circle.setColor(Color.green);
	add(circle);
}

// 5.3.6  Pool Table
var POOL_BALL_RADIUS = 40;
var POOL_BALL_FONT = "30pt Arial";

function start() {
	drawPoolBall(Color.orange, 5, 100, 100);
	drawPoolBall(Color.green, 6, 50, 200);
	drawPoolBall(Color.red, 3, 150, 350);
	drawPoolBall(Color.blue, 2, 250, 140);
}

function drawPoolBall(color, num, x, y) {
	var circle = new Circle(POOL_BALL_RADIUS);
	circle.setPosition(x, y);
	circle.setColor(color);
	add(circle);

	var number = new Text(num);
	number.setFont(POOL_BALL_FONT);
	number.setPosition(x-number.getWidth()/2, y+number.getHeight()/3);
	number.setColor(Color.white);
	add(number);
}

// 5.4.3  Doubled Number
function start() {
	var numApples = 4;
	println("Before: " + numApples);
	var twiceAsMany = doubleNumber(numApples);
	println("After: " + twiceAsMany);

	var y = 11;
	println(doubleNumber(y));
}

function doubleNumber(x) {
	var doubledX = 2 * x;
	return doubledX;
}

// 5.4.4  Square with Return Values
function start() {
	var x = square(5);
	println(x);
	var y = square(25);
	println(y);
	var z = square(50);
	println(z);
}

function square(x) {
	var result = x * x;
	return result;
}

// 5.4.5  Triple with Return Values
function start() {
	var x = triple(5);
	println(x);
	var y = triple(25);
	println(y);
	var z = triple(50);
	println(z);
}

function triple(x) {
	var result = x * 3; 
	return result;
}

// 5.5.3  Return Values
function start() {
	var result = sum(5, 8);
	println(result);

	var x = sum(10, 20);
	println(x);

	var y = addOne(100);
	println(y);

	var z = addOne(y);
	println(z);
}

function sum(first, second) {
	var total = first + second;
	return total;
}

function addOne(x) {
	return x + 1;
}

// 5.5.4  Is It Even?
var SENTINEL = 0;

/* Prompts for a number and determins if it is 
* Even or Odd until user enters 0 */
function start() {
	while (true) {
	var number = readInt("Enter a number: ");
		if (number == SENTINEL) {
		    println("Done!");
			break;
		} else if (isEven(number)) {
			println("Even");
		} else {
			println("Odd");
		}
	} 
}

// Returns boolean to show whether number is Even
function isEven(x) {
	return (x % 2 == 0);
}

// 5.5.5  Max
function start() {
	var x = max(10, 14);
	println("The max is " + x)
}

function max(x, y) {
	if (x / y > 1) {
		return x;
	} else {
		return y;
	}
}

// 5.6.3  Return Values
function start() {
	var x = addOne(8);
	println(x);

	var y = addOne(10);
	println(y);

	var a = sum(10, 20);
	println(a);
}

function addOne(x) {
	var result = x + 1;
	return result;
}

function sum(x, y) {
	var result = x + y;
	return result;
}

// 5.6.4  Local Variables
/* Local variables exist only within a function or conditional 
* loop.  These local variables cannot be accessed outside those blocks
* of code. */

/* The veriable 'x' is local and only accessable within the double();
* function curly braces. */ 
function double(x) {
	// This variable 'result' is also only accessable within the function
	var result = 2 * x;
	return result;
}

// 6.1.1  Ghosts
// Constants for main ghost body
var HEAD_RADIUS = 35;
var BODY_WIDTH = HEAD_RADIUS * 2;
var BODY_HEIGHT = 60;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2); 

// Constants for eyes
var PUPIL_RADIUS = 4;
var PUPIL_LEFT_OFFSET = 8;
var PUPIL_RIGHT_OFFSET = 20;
var EYE_RADIUS = 10;
var EYE_OFFSET = 14;

// Create Ghosts with two eyes looking right
function start() {
	var centerX = getWidth()/2;
	var centerY = getHeight()/2;
	drawGhosts(centerX, centerY, Color.red);
	drawEyes(centerX, centerY, Color.red);
	drawGhosts(100, 100, Color.green);
	drawEyes(100, 100, Color.green);
	drawGhosts(300, 200, Color.black);
	drawEyes(300, 200, Color.black);
	drawGhosts(40, 300, Color.orange);
	drawEyes(40, 300, Color.orange);
	drawGhosts(300, 50, Color.yellow);
	drawEyes(300, 50, Color.yellow);
	drawGhosts(275, 350, Color.blue);
	drawEyes(275, 350, Color.blue);
	drawGhosts(150, 375, Color.purple);
	drawEyes(150, 375, Color.purple);
	drawGhosts(195, 65, Color.grey);
	drawEyes(195, 65, Color.grey);
}

function drawGhosts(centerX, centerY, color) {
	var circle = new Circle(HEAD_RADIUS);
	circle.setPosition(centerX, centerY);
	circle.setColor(color);
	add(circle);
	
	var rect = new Rectangle(BODY_WIDTH, BODY_HEIGHT);
	rect.setPosition(centerX-BODY_WIDTH/2, centerY);
	rect.setColor(color);
	add(rect);
	
	var circle = new Circle(FOOT_RADIUS);
	circle.setPosition(centerX, centerY+BODY_HEIGHT);
	circle.setColor(color);
	add(circle);

	var circle = new Circle(FOOT_RADIUS);
	circle.setPosition(centerX-(FOOT_RADIUS*2), centerY+BODY_HEIGHT);
	circle.setColor(color);
	add(circle);

	var circle = new Circle(FOOT_RADIUS);
	circle.setPosition(centerX+(FOOT_RADIUS*2), centerY+BODY_HEIGHT);
	circle.setColor(color);
    add(circle);
}

function drawEyes(centerX, centerY, color) {
	var circle = new Circle(EYE_RADIUS);
	circle.setPosition(centerX-EYE_OFFSET, centerY);
	circle.setColor(Color.white);
	add(circle);

	var circle = new Circle(EYE_RADIUS);
	circle.setPosition(centerX+EYE_OFFSET, centerY);
	circle.setColor(Color.white);
	add(circle);

	var circle = new Circle(PUPIL_RADIUS);
	circle.setPosition(centerX-PUPIL_LEFT_OFFSET, centerY);
	circle.setColor(Color.blue);
	add(circle);

	var circle = new Circle(PUPIL_RADIUS);
	circle.setPosition(centerX+PUPIL_RIGHT_OFFSET, centerY);
	circle.setColor(Color.blue);
	add(circle);
}

// 6.1.2  Guessing Game
var MIN = 1;
var MAX = 100;

function start() {
	var number = Randomizer.nextInt(MIN, MAX);
	while (true) {
		var guess = readInt("Guess? ");
		if (guess == number) {
			println("Correct!");
			break;
		} else if (guess > number) {
			println("High");
		} else {
			println("Low");
		}
	}
}

// function start() {
// 	var number = Math.ceil(Math.random()*100);
// 	while (true) {
// 		var guess = prompt("Guess? ");
// 		if (guess == number) {
// 			alert("Correct!");
// 			break;
// 		} else if (guess > number) {
// 			alert("High");
// 		} else {
// 			alert("Low");
// 		}
// 	}
// }
// start();

// var num;
// var zero = 0;
// var hundredOne = 0;
// for (var i = 0; i < 1000; i++) {
//   var num = console.log(Math.ceil(Math.random()*100));
//   if (num == 0) {
//   	zero++;
//   } else if (num == 101) {
//   	hundredOne++;
//   }
// }
// console.log("0 count: " + zero);
// console.log("101 count: " + hundredOne);

// 6.1.3  Draw Something
var centerX = getWidth()/2;
var centerY = getHeight()/2;

function start() {
	var circle = new Circle(180);
	circle.setPosition(centerX, centerY);
	circle.setColor(Color.black);
	add(circle);
	
	var circle = new Circle(160);
	circle.setPosition(centerX, centerY);
	circle.setColor(Color.white);
	add(circle);
	
	var rect = new Rectangle(225, 225);
	rect.setPosition(centerX-112.5, centerY-112.5);
	rect.setColor(Color.yellow);
	add(rect);
	
	var line = new Line(centerX, centerY-105, centerX, centerY+45);
	line.setLineWidth(30);
	line.setColor(Color.red);
	add(line);
	
	var rect = new Rectangle(30, 30);
	rect.setPosition(centerX-15, centerY+75);
	rect.setColor(Color.red);
	add(rect);
}

// 7.1.3  Moving Ball
var ball;

function start() {
	ball = new Circle(20);
	add(ball);
	setTimer(draw, 20);
}

function draw() {
	ball.move(2, 2);
}

// 7.1.4  Magic 8 Ball
/* Draw magic 8 ball, shake every 2 seconds to change
* the number and color of the ball */
var RADIUS = 120;
var FONT = "48pt Arial";

var circle;
var number;

function start() {
	// Create circle & number
	circle = new Circle(RADIUS);
	circle.setPosition(getWidth()/2, getHeight()/2);
	add(circle);

	number = new Text(8, FONT);
	var x = getWidth()/2 - number.getWidth()/2;
	var y = getHeight()/2 - number.getHeight()/2;
	number.setPosition(x, y);
	number.setColor(Color.white);
	add(number);

	// Timer to run shake() every 2 seconds
	setTimer(shake, 2000);
}

function shake() {
	var random_number = Randomizer.nextInt(1, 9);
	number.setText(random_number);

	circle.setColor(Randomizer.nextColor());
}

// 7.1.5  Crazy Ball
var RADIUS = 100;
var circle;

// Draw circle and set timer to call move() function
function start() {
	circle = new Circle(RADIUS);
	circle.setPosition(getWidth()/2, getHeight()/2);
	add(circle);

	setTimer(move, 100);
}

// Change color and position of ball
function move() {
	var x = Randomizer.nextInt(RADIUS, getWidth()-RADIUS);
	var y = Randomizer.nextInt(RADIUS, getHeight()-RADIUS);
	circle.setPosition(x, y);
	circle.setColor(Randomizer.nextColor());
}

// 7.2.3  Random Circles
var MAX_RADIUS = 100;
var MAX_CIRCLES = 100;
var counter = 0;

function start() {
	setTimer(draw, 50);
}

function draw() {
	drawCircle(	Randomizer.nextInt(0, MAX_RADIUS),
							Ramdomizer.nextColor(),
							Randomizer.nextInt(0, getWidth()),
							Ramdomizer.nextInt(0, getHeight()));

	counter++;

	if (counter = MAX_CIRCLES) {
		stopTimer(draw);
	}
}

function drawCircle(radius, color, x, y) {
	var circle = new Circle(radius);
	circle.setColor(color);
	circle.setPosition(x, y);
	add(circle);
}

// 7.2.4  Spinner Example
// Constants
var LENGTH = 150;
var DELAY = 30;

var X_CENTER = getWidth()/2;
var Y_CENTER = getHeight()/2;

var line;
var time = 0;

// Rotate line in a circle
function start() {
	// create the line and add it.
	line = new Line(X_CENTER, Y_CENTER, X_CENTER, Y_CENTER);
	add(line);

	// Set timer to call function 
	setTimer(rotateLine, DELAY);
}

// Set endpoints of the line
function rotateLine() {
	time += 0.1;

	var dx = LENGTH * Math.cos(time);
	var dy = LENGTH * Math.sin(time);

	line.setEndpoint(X_CENTER + dx, Y_CENTER - dy);
}

// 7.2.5  Growing Circle
/* Constants */
var START_RADIUS = 1;
var INCREMENT = 1;
var CHANGE_COLORS_AT = 10;
var circle;

// Create initial circle in center of canvas
function start() {
	circle = new Circle(START_RADIUS);
	circle.setPosition(getWidth()/2, getHeight()/2);
	add(circle);
	
	// Start timer to make circle larger
	setTimer(draw, 50);
}

/* Make circle larger until it fills the canvas,
* changing color at regular intervals */
function draw() {
	var newRadius = circle.getRadius();
	if (newRadius * 2 >= getHeight()) {
		stopTimer(draw);
	} else {
		circle.setRadius(newRadius + INCREMENT);
		if (newRadius % CHANGE_COLORS_AT == 0) {
			circle.setColor(Randomizer.nextColor());
		}
	}
}

// 7.2.6  Paint Spaltter
// Constants
var CIRCLES_PER_SPLATTER = 20;
var MIN_RADIUS = 5;
var MAX_RADIUS = 25;
var DELAY = 500;

// Start paint spatter timer
function start() {
	setTimer(splatter, 500);
}

// Create one splatter of paint
function splatter() {
	var color = Randomizer.nextColor();
	for (var i = 0; i < CIRCLES_PER_SPLATTER; i++) {
		var radius = Randomizer.nextInt(MIN_RADIUS, MAX_RADIUS);
		var x = Randomizer.nextInt(0, getWidth());
		var y = Randomizer.nextInt(0, getHeight());
		
		var circle = new Circle(radius);
		circle.setPosition(x, y);
		circle.setColor(color);
		add(circle);
	}
}

// 7.3.3  Random Ghosts
// Constants for ghost body
var HEAD_RADIUS = 35;
var BODY_WIDTH = HEAD_RADIUS * 2 + 2;
var BODY_HEIGHT = 60;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH-4) / (NUM_FEET * 2);

// Constants for eyes
var PUPIL_RADIUS = 4;
var PUPIL_LEFT_OFFSET = 8;
var PUPIL_RIGHT_OFFSET = 20;
var EYE_RADIUS = 10;
var EYE_OFFSET = 14;
















































































































