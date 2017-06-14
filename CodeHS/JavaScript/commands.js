// Conditions
* frontIsClear()	frontIsBlocked()
* leftIsClear()		leftIsBlocked()
* rightIsClear()	rightIsBlocked()
* ballsPresent()	noBallsPresent()
* facingNorth()		notFacingNorth()
* facingSouth()		notFacingSouth()
* facingEast()		notFacingEast()
* facingWest()		notFacingWest()
* randomChance(); // ()=50%, (0.8)=80%  UltraKarel
* colorIs(color); // UltraKarel

* println("Print with new line");
* print("No new line");

var myName;
var myName = "Bob";
myName = "Joe";  // must start with letter, $, or _
var gotB = grade >= 80 && grade < 90;

var name = readLine("Name? ");
var people = readInt("Num people: ");
var dollars = readFloat("USD: ");
var isUSCitizen = readBoolean("Are you a US Citizen? ");

// ==  !=  <  >  <=  >=  
// + - * / % 
// ++ -- += -= *= /=
// CONSTANT VALUES IN ALL CAPS
Math.abs(-2);
Math.sqrt(25);
Math.round(Math.PI);
Math.floor(2.5);
Math.ceil(2.5);

* Randomizer.nextInt(1,6); // inclusive
* Randomizer.nextFloat(1, 6);
* Randomizer.nextBoolean();
* Randomizer.nextColor();

* getWidth(); // (0,0) (x,y)
* getHeight();
* removeAll(); // removes all objects from the canvas
* obj.getType(); // Circle, Rectangle, Text, or Line (replace obj)

function start() {
	* var circle = new Circle(30); // radius
	* circle.setPosition(100, 50); // (x y) center of circle
	* circle.setColor(Color.blue);
	* add(circle);

	* var ball = new Circle(100);
	* var centerX = getWidth() / 2;
	* var centerY = getHeight() / 2;
	* var curRadius = getRadius();
	* circle.setRadius(101);
	* var x = circle.getX();
	* var y = circle.getY();
	* ball.setPosition(centerX, centerY);
	* ball.move(dx, dy);
	* add(ball);

	* var rect = new Rectangle(100, 50);
	* rect.setPosition(60, 150); // top left corner
	* rect.setColor(Color.red);
	* add(rect);
	* rect.getX();
	* rect.getY();
	* rect.move(dx, dy);

	* var myArc = new Arc(radius, start, end, unit); // units 0=degrees / 1=radians
	* myArc.setPosition(100, 200);
	* myArc.setColor(Color.red);
	* var x = myArc.getX();
	* var y = myArc.getY();
	* add(myArc);

	* var line = new Line(x1, y1, x2, y2);
	* line.setWidth(10);
	* add(line);	
	* line.move(dx, dy);
	* line.setPosition(x1, y1);
	* line.setEndpoint(x2, y2);
	* var x = line.getX();
	* var y = line.getY();

	* var oval = new Oval(width, height);
	* oval.setPosition(x, y);
	* oval.setColor(Color.red);
	* add(oval);
	* var x = oval.getX();
	* var y = oval.getY();
	* oval.move(dx, dy);

	var text = new Text(lable, font); // ("Hello", "30pt Arial")
	* text.setPosition(100, 100); // bottom left corner
	* text.setFont("50pt Arial");
	* text.setColor(Color.white);
	* add(text);
	* text.setText("Goodbye");
	* var x = oval.getX();
	* var y = oval.getY();
	* getWidth();
	* getHeight();
	* text.move(dx, dy);
	var number = new Text(lable, font); // ("Hello", "30pt Arial")
	* number.setText(9); // to change text later
}

var copter = new WebImage("https://image.url");
copter.setSize(300, 150);
copter.setPosition(getWidth()/4, getHeight()/2);
add(copter);

obj.setColor(color);
Color.red
Color.green
Color.blue
Color.yellow
Color.cyan
Color.orange
Color.white
Color.black
Color.gray
Color.
var color = new Color(r, g, b); // 0 - 255
var brown = new Color(139, 69, 19);
rect.setColor(brown);
rect.setColor("#FF66CC"); // hexadecimal
var color = Color.randomRed();
var color = Color.randomBlue();
var color = Color.randomGreen();
var color = Randomizer.netColor();

rect.setRotation(45); // (angle, unite) so (45, 1) for Radians
  // default is degrees (45, 0)
rect.setRotation(Math.PI / 2, 1);

// NOT !, AND &&, OR ||

break;

// setTimer(callback, delay);
* setTimer(draw, 20);
* stopTimer(draw);
* ball.move(2, 2);

// Can ROTATE: Rectangle, Arc, Line, Oval, Text, WebImage








































