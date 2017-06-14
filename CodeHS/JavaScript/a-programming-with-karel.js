// 1.1.3 Our First Karel Program
move();
move();
putBall();
move();
move();

// 1.1.4  Your First Karel Program
move();
move();
move();
move();
takeBall();

// 1.1.5  Short Stack
move();
putBall();
putBall();
move();

/* 1.2.3  Tennis Ball Square
This program has karel place a square of tennis balls
and return to his starting point. */
putBall();
move();
turnLeft();

putBall();
move();
turnLeft();

putBall();
move();
turnLeft();

putBall();
move();
turnLeft();	

move();
turnLeft();

// 1.2.4  Make a Tower
move();
turnLeft();
putBall();
move();
putBall();
move();
putBall();
move();
turnLeft();
turnLeft();
turnLeft();

// 1.2.5  Pyramid of Karel
putBall();
move();
putBall();
move();
putBall();
turnLeft();
move();
turnLeft();
putBall();
move();
putBall();
turnLeft();
turnLeft();
move();
turnLeft();
move();
putBall();
turnLeft();
turnLeft();
turnLeft();

// 1.3.4  Slide Karel
putBall();
move();
turnRight();
move();
turnLeft();
putBall();
move();
turnRight();
move();
turnLeft();
putBall();

function turnRight() {
	turnLeft();
	turnLeft();
	turnLeft();
}

// 1.3.5  Fireman Karel
turnRight();
move();
move();
move();
turnLeft();

function turnRight() {
	turnLeft();
	turnLeft();
	turnLeft();
}

// 1.4.4 Pancakes
makePancakes();
makePancakes();
makePancakes();

function makePancakes() {
	move();
	putBall();
	putBall();
	putBall();
	move();
}

// 1.4.5  Mario Karel
move();
collectCoins();
move2();
collectCoins();
move2();
collectCoins();
move2();
collectCoins();

function collectCoins() {
	turnLeft();
	move3();
	take2Balls();
	turnAround();
	move3();
	turnLeft();
}

function move3() {
	move();
	move();
	move();
}

function move2() {
	move();
	move();
}

function take2Balls() {
	takeBall();
	takeBall();
}

function turnAround() {
	turnLeft();
	turnLeft();
}

// 1.5.4  Pancakes with Start
function start() {
	makePancakes();
	makePancakes();
	makePancakes();
}

function makePancakes() {
	move();
	putBall();
	putBall();
	putBall();
	move();
}

// 1.6.4  The Two Towers
function start() {
	makeTower();
	slideDownTower();
	makeTower();
	move();
	turnRight();
}

function makeTower() {
	move();
	turnLeft();
	putBall();
	move();
	putBall();
	move();
	putBall();
}

function slideDownTower() {
	turnRight();
	move();
	turnRight();
	move();
	move();
	turnLeft();
}

function turnRight() {
	turnLeft();
	turnLeft();
	turnLeft();
}

// 1.7.4  The Two Towers + Comments
/* This program builds two towers and 
* has Karel finish standing atop 2nd tower */
function start() {
	makeTower();
	slideDownTower();
	makeTower();
	move();
	turnRight();
}

/* This function builds a tower 3 
* rows high 
* Precondition: Karel on bottom row facint East
* Postcondition: Karel on 3rd row facing North */
function makeTower() {
	move();
	turnLeft();
	putBall();
	move();
	putBall();
	move();
	putBall();
}

/* This function slides Karel back down 
* tower and moves one column East 
* Precondition: Karel on 3rd row facing North
* Post condition: Karel on bottom row one column 
* to the right and is facing East */
function slideDownTower() {
	turnRight();
	move();
	turnRight();
	move();
	move();
	turnLeft();
}

// This function turns Karel right
function turnRight() {
	turnLeft();
	turnLeft();
	turnLeft();
}

// 1.8.4  The Two Towers + SuperKarel
/* This program builds two towers and 
* has Karel finish standing atop 2nd tower */
function start() {
	makeTower();
	slideDownTower();
	makeTower();
	move();
	turnRight();
}

/* This function builds a tower 3 
* rows high 
* Precondition: Karel on bottom row facint East
* Postcondition: Karel on 3rd row facing North */
function makeTower() {
	move();
	turnLeft();
	putBall();
	move();
	putBall();
	move();
	putBall();
}

/* This function slides Karel back down 
* tower and moves one column East 
* Precondition: Karel on 3rd row facing North
* Post condition: Karel on bottom row one column 
* to the right and is facing East */
function slideDownTower() {
	turnRight();
	move();
	turnRight();
	move();
	move();
	turnLeft();
}

// 1.9.5  Take 'em All
function start() {
	move();
	for (var i = 0; i < 100; i++) {
		takeBall();
	}
	move();
}

// 1.9.6  Dizzy Karel
function start() {
	for (var i = 0; i < 32; i++) {
		turnLeft();
	}
}

// 1.9.7  For Loop Square
function start() {
	for (var i = 0; i < 4; i++) {
		putBall();
		move();
		turnLeft();
	}
}

// 1.9.8  Lots of Hurdles
function start() {
	for (var i = 0; i < 5; i++) {
		jumpHurdle();
	}
}

function jumpHurdle() {
	move();
	move();
	turnLeft();
	move();
	turnRight();
	move();
	turnRight();
	move();
	turnLeft();
}

// 1.10.5  Is There a Ball
function start() {
	placeBall();
	isBall();
}

function isBall() {
	if (ballsPresent()) {
		move();
	}
}

function placeBall() {
	if (noBallsPresent()) {
		putBall();
		move();
	}
}

// 1.11.5  Right Side Up
function start() {
	if (facingSouth()) {
		turnLeft();
	} else {
		turnAround();
	}
}

// 1.12.4  Follow The Yellow Ball Road
function start() {
	while (ballsPresent()) {
		move();
	}
}

// 1.12.5  Lay Row of Tennis Balls
function start() {
	putBall();
	while(frontIsClear()) {
		move();
		putBall();
	}
}

// 1.12.6  Big Tower
function start() {
	checkNorth();
	putBall();
	stackBalls();
}

function checkNorth() {
  while (notFacingNorth()) {
		turnLeft();
	}
}

function stackBalls() {
  while (frontIsClear()) {
		move();
		putBall();
	}
}

// 1.13.4  Random Hurdles
function start() {
	for (var i = 0; i < 13; i++) {
		if (frontIsBlocked()) {
			jumpHurdle();
		} else {
			move();
		}
	}
}

function jumpHurdle() {
	turnLeft();
	move();
	turnRight();
	move();
	turnRight();
	move();
	turnLeft();
}

// 1.14.4 CLimbing Karel  (CodeHS Solution)
/* Karel needs to find the open slot and
 * climb up 7 rows. We cannot depend on the 
 * number of columns. */
function start(){
	for(var i = 0; i < 7; i++){
		moveUp();	
	}
}

/* Karel will start at the left side of a
 * row, keep moving across the row until
 * there is an open spot, then go through
 * the slot, and return to the start of
 * the row. */
function moveUp(){
	while(leftIsBlocked()){
		move();
	}
	turnLeft();
	move();
	turnLeft();
	moveToWall();
	turnAround();
}

function moveToWall(){
	while(frontIsClear()){
		move();
	}
}

// 1.15.3  Dance and Clean Karel  (CodeHS Solution)
/* This program has karel move across first street, and 
 * if he encounters a stack of tennis balls, he picks them
 * all up, and then spins around. This is the code we
 * ended up with in the video, but if you take a close
 * look, you will see that there is a repeated section 
 * of code. Could you make that its own function? */
function start(){
	while(frontIsClear()){
		if(ballsPresent()){
			while(ballsPresent()){
				takeBall();		
			}
			dance();
		}
		
		move();
	}
	
	if(ballsPresent()){
		while(ballsPresent()){
			takeBall();		
		}
		dance();
	}
}

/* This function has karel dance, or spin around
 * by turning left four times. */
function dance(){
	for(var i = 0; i < 4; i++){
		turnLeft();
	}
}

// 1.15.4  Diagonal   (CodeHS Solution)
/* This program has karel lay a diagonal row of tennis balls. 
 * However, the indenting is all wrong. Can you properly 
 * indent this program? */
function start(){
    while(frontIsClear()){
        putBall();
        move();
        turnLeft();
        move();
        for(var i = 0; i < 3; i++){
            turnLeft();
        }
    }
    putBall();
}

// 1.15.5 Staircase  (CodeHS Solution)
/* This program creates a staircase from the first spot all the
 * way across the world for any sized world.
 *
 * This program works, but its indentation is completely wrong.
 * 
 * Run the program first, so you know what it does and don't break it.
 */
function start(){
    putBall();
    while(frontIsClear()){
        turnLeft();
        while (ballsPresent()) {
            move();
        }
        turnRight();
        move();
        createStep();
    }
}
function createStep() {
    turnRight();
    putBall();
    while (frontIsClear()) {
        move();
        putBall();
    }
    turnLeft();
}

// 1.16.1  Fetch
// Gets and returns 1 ball
function start() {
	getBall();
	returnBall();
}

// Goes to get back off shelf
function getBall() {
	turnLeft();
	move4();
	turnRight();
	move();
	move();
	takeBall();
}

// Moves 4 times
function move4() {
	for (var i = 0; i < 4; i++) {
		move();
	}
}

// Returns to starting position and places ball
function returnBall() {
	turnAround();
	move();
	move();
	turnLeft();
	move4();
	turnLeft();
	putBall();
}

// 1.16.2  Racing Karel
/* Run 8 laps, placing a ball in each corner
* on every lap */
function start() {
	for (var i = 0; i < 8; i++) {
		runOneLap();
	}
}

// Run one lap
function runOneLap() {
	for (var i = 0; i < 4; i++) {
		runToTurn();
	}
}

/* Run to next corner, place ball, 
* then turn left */
function runToTurn() {
	while (frontIsClear()) {
		move();
	}
	putBall();
	turnLeft();
}

// 1.16.3  Tower Builder
// Build towers every other column
function start() {
	// Build first tower
	buildTower();
	// Build remaining towers if room available
	while (frontIsClear()) {
		checkRoomForNextTower();
	}
}

// Build one tower and return to start position
function buildTower() {
	turnLeft();
	for (var i = 0; i < 3; i++) {
		putBall();
		move();
	}
	turnAround();
	while (frontIsClear()) {
		move();
	}
	turnLeft();
}

/* Check for room and build next tower 
if room is available */
function checkRoomForNextTower() {
	move();
	if (frontIsClear()) {
		move();
		buildTower();
	}
}

// 1.16.4  Super Cleanup Karel
/* Clean up balls if present from 
* any size world */
function start() {
	cleanRow();
	while (leftIsClear()) {
		moveToNextRow();
		cleanRow();
	}
}

// Clean one row of balls
function cleanRow() {
	while (frontIsClear()) {
		if (ballsPresent()) {
			takeBall();
		}
		move();
	}
	if (ballsPresent()) {
		takeBall();
	}
}

/* Move up to next rown and back 
* to left side of row */
function moveToNextRow() {
	turnLeft();
	move();
	turnLeft();
	while (frontIsClear()) {
		move();
	}
	turnAround();
}

// 1.16.5  Double Tennis Balls
// Double any number of balls
function start() {
	move();
	countBalls();
	doubleBalls();
	returnStartPosition();
}

// Move & double balls once space East
function countBalls() {
	while (ballsPresent()) {
		takeBall();
		move();
		putBall();
		turnAround();
		move();
		turnAround();
	}
}

// Move doubled balls back to origin
function doubleBalls() {
	move();
	while(ballsPresent()) {
		takeBall();
		turnAround();
		move();
		putBall();
		putBall();
		turnAround();
		move();
	}
}

// Move Karel back to start position
function returnStartPosition() {
	turnAround();
	move();
	move();
	turnAround();
}



// ######################################################
// ###############  EXTRA KAREL PRACTICE  ###############
// ######################################################

// Functions Practice: K For Karel
// Put balls to make Letter K
function start() {
	firstStroke();
	moveToPosition();
	secondStroke();
	moveNextPosition();
	secondStroke();
	moveToPosition();
}

// Draw vertical stroke
function firstStroke() {
	turnLeft();
	putBall();
	while (frontIsClear()) {
		move();
		putBall();
	}
}

// Move to 2nd & Final Positions
function moveToPosition() {
	turnRight();
	for (var i = 0; i < 5; i++) {
		move();
	}
	turnAround();
}

// Draw diagonal strokes
function secondStroke() {
	for (var i = 0; i < 4; i++) {
		putBall();
		move();
		turnLeft();
		move();
		turnRight();
	}
	putBall();
}

// Move to 2nd diagonal stroke position
function moveNextPosition() {
	turnLeft();
	move();
}
/***************************************************/
/***************************************************/



// Functions Practice: Christmas Karel
// Make Christmas Tree out of balls
function start() {
	moveToLeavesOne();
	drawLeaves();
	moveToLeavesTwo();
	drawLeaves();
	moveToTrunk();
	drawTrunk();
}

// Move to first leaves position
function moveToLeavesOne() {
	turnLeft();
	move();
	move();
	turnRight();
}

// Draw triangular set of leaves
function drawLeaves() {
  place3Balls();
	turnLeft();
	place3Balls();
	putBall();
	turnLeft();
	move();
	turnLeft();
	move();
	putBall();
	move();
	putBall();
	turnRight();
	move();
	putBall();
}

// Place 3 balls in a row
function place3Balls() {
  for (var i = 0; i < 3; i++) {
		putBall();
		move();
	}
}

// Move to second leaves position
function moveToLeavesTwo() {
	turnRight();
	move();
	move();
	turnRight();
	for (var i = 0; i < 4; i++) {
		move();
	}
	turnRight();
}

// Move to trunk position 
function moveToTrunk() {
	turnAround();
	while (frontIsClear()) {
		move();
	}
	turnRight();
	move();
	move();
	turnRight();
}

// draw truck and sit on top
function drawTrunk() {
	for (var i = 0; i < 7; i++) {
		putBall();
		move();
	}
	turnRight();
}
/***************************************************/
/***************************************************/



// Functions Practice: X Marks the Spot
// Draw an X from corner to corner
function start() {
	makeDiagonalLine();
	moveToNextPosition();
	makeDiagonalLine();
	moveToEndPosition();
}

// Draw one diagonal line
function makeDiagonalLine() {
	for (var i = 0; i < 4; i++) {
		if (noBallsPresent()) {
			putBall();
		}
		move();
		turnLeft();
		move();
		turnRight();
	}
	putBall();
}

// Move to start of second diagonal line
function moveToNextPosition() {
	turnAround();
	while(frontIsClear()) {
		move();
	}
	turnLeft();
}

// Move to end Position
function moveToEndPosition() {
	turnRight();
	while (frontIsClear()) {
		move();
	}
	turnAround();
}
/***************************************************/
/***************************************************/



// While Loop Practice: Blackout
// Completely fill any size world with balls
function start() {
	fillRow();
	while (leftIsClear()) {
		moveUp();
		fillRow();
	}
}

// Fill one row with balls
function fillRow() {
	putBall();
	while (frontIsClear()) {
		move();
		putBall();
	}
	turnAround();
	while (frontIsClear()) {
		move();
	}
	turnAround();
}

// Move up one row
function moveUp() {
	turnLeft();
	move();
	turnRight();
}
/***************************************************/
/***************************************************/



// While Loop Practice: Move To Top
// Move to top of area with any size height
function start() {
	turnLeft();
	while (frontIsClear()) {
		move();
	}
}
/***************************************************/
/***************************************************/



// Functions and While Loop Practice: Opposite Corner
// Move to opposite corner of any size world
function start() {
	turnLeft();
	moveToEnd();
	turnRight();
	moveToEnd();
}

// Move to end of row
function moveToEnd() {
	while (frontIsClear()) {
		move();
	}
}
/***************************************************/
/***************************************************/



// While Loop Practice: Checkered Row
// Place balls every other space on bottom row
function start() {
	while (frontIsClear()) {
			putBall();
			move();
		if (frontIsClear()) {
			move();
			if (frontIsBlocked()) {
				putBall();
			}
		}
	}
}
/***************************************************/
/***************************************************/



// For Loop Practice: Tall Hurdles
// Jump 5 hurdles 3 rows high
function start() {
	for (var i = 0; i < 5; i++) {
		jumpHurdle();
	}
}

// jump one hurdle
function jumpHurdle() {
	move();
	move();
	turnLeft();
	move3();
	turnRight();
	move();
	turnRight();
	move3();
	turnLeft();
}

// move 3 spaces
function move3() {
	move();
	move();
	move();
}
/***************************************************/
/***************************************************/



// Functions and While Loop Practice: Row and Back
// Put balls bottow row any size world
function start() {
	layRowOfBalls();
	backToStart();
}

// Lay one row of balls
function layRowOfBalls() {
	while (frontIsClear()) {
		putBall();
		move();
	}
	putBall();
}

// Go back to start position
function backToStart() {
	turnAround();
	while (frontIsClear()) {
		move();
	}
	turnAround();
}
/***************************************************/
/***************************************************/



// Functions and For Loop Practice: opposite Squares
/* Place square of balls bottom corners 
* any size world */
function start() {
	placeSquare();
	findEndOfRow();
	placeSquare();
	// Finish position
	turnRight();
}

// Place one square of balls
function placeSquare() {
	for (var i = 0; i < 4; i++) {
		putBall();
		move();
		turnLeft();
	}
}

// Find end of the row
function findEndOfRow() {
	while (frontIsClear()) {
		move();
	}
	turnLeft();
}
/***************************************************/
/***************************************************/



// Stairway To Heaven
// Climb unknown number of steps
function start() {
	while (frontIsBlocked()) {
		climbOneStep();
	}
}

// Climb one step
function climbOneStep() {
	turnLeft();
	move();
	turnRight();
	move();
}



// ######################################################
// ###############  EXTRA KAREL PUZZLES  ################
// ######################################################

// MIDPOINT KAREL
/* Place one ball on bottom at midpoint 
* of any size world */
function start() {
	placeBalls();
	collectBalls();
	countHalfBalls();
	moveToMidPoint();
}

/* Place balls on bottom row
* Pre-condition: bottom left corner, 
* facing East 
* Post-condition: bottom right corner, 
* facing East, one ball on each space 
* along bottom row */
function placeBalls() {
	putBall();
	while (frontIsClear()) {
		move();
		putBall();
	}
}

/* Collect row of balls
* Pre-condition: bottom right corner, 
* facing East 
* Post-condition: bottom right corner, 
* facing East, all balls in bottom 
* right corner */
function collectBalls() {
	turnAround();
	while (frontIsClear()) {
		move();
		if (ballsPresent()) {
			takeBall();
			turnAround();
			moveWhileFrontIsClear();
			putBall();
			turnAround();
		}
	}
	turnAround();
	moveWhileFrontIsClear();
}

/* Count half stack of balls
* Pre-condition: bottom right corner, 
* facing East 
* Post-condition: bottom right corner, 
* facing East, balls laid back out 
* to middle point, except for bottom 
* right corner  */
function countHalfBalls() {
	while (ballsPresent()) {
		turnAround();
		takeBall();
		if (ballsPresent()) {
			takeBall();
			move();
			while (ballsPresent()) {
				move();
			}
			putBall();
			turnAround();
			moveWhileFrontIsClear();
		} else {
			turnAround();
		}
	}
}

/* Move to mid point, collecting all
* other balls along the way
* Pre-condition: bottom right corner, 
* facing East
* Post-condition: mid point with one 
* ball, facing East */
function moveToMidPoint() {
	turnAround();
	if (frontIsClear()) {
		move();
		while (ballsPresent()) {
			takeBall();
			move();
		}
		turnAround();
		move();
		putBall();
	} else {
		putBall();
		turnAround();
	}
}

// Move while front is clear
function moveWhileFrontIsClear() {
	while (frontIsClear()) {
		move();
	}
}
/***************************************************/
/***************************************************/



// TARGET KAREL
/* Find target, then fill intersecting 
* street and avenue with balls, then 
* return to target location */ 
function start() {
	findTarget();
	placeBalls();
	placeBalls();
	turnRight();
	placeBalls();
	placeBalls();
	turnLeft();
	putBall();
}

// Find target location
function findTarget() {
	while (noBallsPresent()) {
		if (frontIsClear()) {
			move();
		} else {
			turnAround();
			while (frontIsClear()) {
				move();
			}
			turnRight();
			move();
			turnRight();
		}
	}
	takeBall();
}

/* Place balls from target to wall,
* then return */
function placeBalls() {
	while (frontIsClear()) {
		move();
		putBall();
	}
	turnAround();
	while (ballsPresent()) {
		move();
	}
}
/***************************************************/
/***************************************************/



// THE WINDING YELLOW ROAD
/* Follow path, finish at end facing
* same direction as ending path */
function start() {
	while (ballsPresent()) {
		followPath();
		findNextDirection();
	}
	finalPosition();
}

/* Follow path to end, then turn 
* around */
function followPath() {
	while (ballsPresent()) {
		move();
	}
	turnAround();
	move();
}

/* Check for path Right, if not 
* move to left */
function findNextDirection() {
	turnRight();
	move();
	if (noBallsPresent()) {
		turnAround();
		move();
		move();
	}
}

// Get back to end of path position
function finalPosition() {
	turnAround();
	move();
	turnRight();
	move();
}
/***************************************************/
/***************************************************/



// SUPER RANDOM HURDLES
// Jump random hurdles in any size world
function start() {
	turnLeft();
	move();
	turnRight();
	while (frontIsClear()) {
		jumpHurdle();
	}
	turnRight();
	move();
	turnLeft();
}

/* Move from top of hurdle to top 
* of next hurdle */
function jumpHurdle() {
	move();
	turnRight();
	move();
	turnLeft();
	while (frontIsClear()) {
		move();
	}
	turnLeft();
	move();
	turnRight();
}
/***************************************************/
/***************************************************/



// COPY
/* Copy unknown number of balls 
* to next space on right */
function start() {
	moveBalls();
	copyStack();
}

// Move balls once space left
function moveBalls() {
	move();
	while (ballsPresent()) {
		takeBall();
		turnAround();
		move();
		putBall();
		turnAround();
		move();
	}
}

/* Move balls back and create 
* second stack to right */
function copyStack() {
	turnAround();
	move();
	turnAround();
	while (ballsPresent()) {
		takeBall();
		move();
		putBall();
		move();
		putBall();
		turnAround();
		move();
		move();
		turnAround();
	}
}
/***************************************************/
/***************************************************/



// MULTIPLY
// Multiply two stacks of balls
function start() {
	move();
	while (ballsPresent()) {
		makeOneStackCopy();
		returnBalls();
		sumBalls();
		backToFirstFactor();
	}
	finishPositions();
}

/* Make one stack copy for 
* each count in first factor */
function makeOneStackCopy() {
	takeBall();
	move();
	while (ballsPresent()) {
		takeBall();
		move();
		putBall();
		move();
		putBall();
		turnAround();
		move();
		move();
		turnAround();
	}
}

// Return balls after copy
function returnBalls() {
	move();
	while (ballsPresent()) {
		takeBall();
		turnAround();
		move();
		putBall();
		turnAround();
		move();
	}
}

// Add up ball count
function sumBalls() {
	move();
	while (ballsPresent()) {
		takeBall();
		turnAround();
		while (frontIsClear()) {
			move();
		}
		turnAround();
		putBall();
		for (var i = 0; i < 4; i++) {
			move();
		}
	}
}

// Move back to first factor position
function backToFirstFactor() {
	turnAround();
	for (var i = 0; i < 3; i++) {
		move();
	}
	turnAround();
}

/* Move product stack and Karel to
* finish positions */
function finishPositions() {
	move();
	while (ballsPresent()) {
		takeBall();
	}
	turnAround();
	move();
	move();
	turnAround();
	while (ballsPresent()) {
		takeBall();
		move();
		move();
		putBall();
		turnAround();
		move();
		move();
		turnAround();
	}
	move();
}
/***************************************************/
/***************************************************/



// FIBONACCI KAREL
/* Create Fibonacci sequence for any 
* size world */
function start() {
	move();
	while (frontIsClear()) {
		turnAround();
		move();
		turnAround();
		addStackOne();
		addStackTwo();
		returnBothStacks();
	}
	finishPosition();
}

// Copy, then move first stack
function addStackOne() {
	while (ballsPresent()) {
		takeBall();
		turnLeft();
		move();
		putBall();
		turnRight();
		move();
		move();
		turnRight();
		move();
		putBall();
		turnRight();
		move();
		move();
		turnAround();
	}
}

// Copy, then move second stack
function addStackTwo() {
	move();
	while (ballsPresent()) {
		takeBall();
		turnLeft();
		move();
		putBall();
		turnRight();
		move();
		turnRight();
		move();
		putBall();
		turnRight();
		move();
		turnAround();
	}

}

/* Return copied stacks to starting 
* position */
function returnBothStacks() {
	turnLeft();
	move();
	moveBalls();
	turnLeft();
	move();
	turnRight();
	moveBalls();
	turnAround();
	move();
	turnLeft();
	move();
	move();
}

// Move balls down one space
function moveBalls() {
	while (ballsPresent()) {
		takeBall();
		turnAround();
		move();
		putBall();
		turnAround();
		move();
	}
}

// Move Karel to finish position
function finishPosition() {
	turnAround();
	while (frontIsClear()) {
		move();
	}
	turnAround();
}
/***************************************************/
/***************************************************/



// COMPARISON KAREL
// Move to top of largest stack
function start() {
	move();
	while (ballsPresent()) {
		onePassEachStack();
	}
	returnBalls();
	moveFinalPosition();
}

/* Move one ball from each stack 
* up one space */
function onePassEachStack() {
	takeBall();
	turnAround();
	move();
	putBall();
	turnAround();
	move();
	if (noBallsPresent()) {
		setMarker();
	} else {
		move();
		if (ballsPresent()) {
			takeBall();
			move();
			putBall();
			turnAround();
			move();
			if (noBallsPresent()) {
				turnAround();
				setMarker();
			} else {
				move();
				turnAround();	
			}
		} else {
			setMarker();
		}
	}
}

// Set finish position marker
function setMarker() {
	turnLeft();
	move();
	putBall();
	move();
}

/* Return balls both stacks to 
* original position */
function returnBalls() {
	turnLeft();
	while (frontIsClear()) {
		move();
	}
	turnLeft();
	move();
	move();
	turnLeft();
	while (ballsPresent()) {
		takeBall();
		move();
		putBall();
		turnAround();
		move();
		turnAround();
	}
	for (var i = 0; i < 3; i++) {
		move();
	}
	while (ballsPresent()) {
		takeBall();
		turnAround();
		move();
		putBall();
		turnAround();
		move();
	}
}

/* Move to final position and
* remove marker ball */
function moveFinalPosition() {
	turnLeft();
	move();
	turnLeft();
	move();
	if (ballsPresent()) {
		takeBall();
		move();
		turnAround();
	} else {
		move();
		takeBall();
		turnAround();
		move();
	}
}
/***************************************************/
/***************************************************/



// SWAP
// Swap places for two stacks
function start() {
	move();
	movePileOneTemp();
	movePileTwo();
	movePileOneFinal();
}

// Move pile one to temp location
function movePileOneTemp() {
	movePile();
}

// Move pile one space left
function movePile() {
	while (ballsPresent()) {
		takeBall();
		turnAround();
		move();
		putBall();
		turnAround();
		move();
	}
}

// Move pile two to final location
function movePileTwo() {
	move();
	movePile();
}

// Move pile one to final location
function movePileOneFinal() {
	turnAround();
	move();
	move();
	turnAround();
	while (ballsPresent()) {
		takeBall();
		move();
		move();
		putBall();
		turnAround();
		move();
		move();
		turnAround();
	}
}
/***************************************************/
/***************************************************/



// SORTING KAREL
/* Sort balls on bottom row from 
* low to high for any size world */
function start() {
	setMarkers();
	// While Markers are present
	while (ballsPresent()) {
		onePass();
	}
}

/* Set markers to determine number of 
* passes needed for different size worlds */
function setMarkers() {
	turnLeft();
	move2();
	turnRight();
	move2();
	while (frontIsClear()) {
		putBall();
		move();
	}
	putBall();
	turnAround();
	while (ballsPresent()) {
		move();
	}
	turnAround();
	move();
}

// Move 2 spaces
function move2() {
	move();
	move();
}

/* Make one pass to end of  
* row comparing each pair */
function onePass() {
	/* Remove marker and move to 
	* row start position */
	takeBall();
	turnAround();
	while (frontIsClear()) {
	  move();
	}
	turnLeft();
	move2();
	turnLeft();
	move();
	// Compare pairs until at end of row
	while (frontIsClear()) {
		comparePair();
	}
	turnLeft();
	move2();
	turnLeft();
	while (ballsPresent()) {
		move();
	}
	turnAround();
	if (frontIsClear()) {
	  move();
	} else {
		turnAround();
	  while (frontIsClear()) {
	    move();
	  }
	  turnLeft();
	  move2();
	  turnLeft();
	}
}

// Compare one pair of balls
function comparePair() {
	takeBall();
	if (noBallsPresent()) {
		firstStackLess();
	} else {
		moveBallUp();
		move();
		takeBall();
		if (noBallsPresent()) {
			secondStackLess();
		} else {
			moveBallUp();
			turnAround();
			move();
			turnAround();
		}
	}
}

// First stack less, move to next compare
function firstStackLess() {
	putBall();
	bringStacksDown();
}

// Move one ball up then move back
function moveBallUp() {
	turnLeft();
	move();
	putBall();
	turnAround();
	move();
	turnLeft();
}

// Second stack less, swap stacks
function secondStackLess() {
	turnLeft();
	move();
  putBall();
	for (var i = 0; i < 2; i++) {
	  turnLeft();
	  moveBallsUp();
	  moveBallsUp();
	  move();    
	}
	turnLeft();
	move();
}

// Move balls up while present
function moveBallsUp() {
  move();
	while (ballsPresent()) {
		takeBall();
		moveBallUp();
	}
	turnLeft();
}

// Bring both stacks back down
function bringStacksDown() {
  turnLeft();
  move();
  moveBallsDown();
  turnRight();
  move();
  turnLeft();
  moveBallsDown();
  turnAround();
  move();
  turnLeft();
}

// Move balls down while present
function moveBallsDown() {
  while (ballsPresent()) {
    takeBall();
    turnAround();
    move();
    putBall();
    turnAround();
    move();
  }
}
/***************************************************/
/***************************************************/
/***************************************************/
/***************************************************/



/***************************************************/
/***************************************************/
/* ### OLD ### SORTING KAREL 
* Sorts a row of balls from lowest to highest.
 * PRE: start program.
 * POST: end position after 5 line passes. */
function start(){
  for(var i = 0; i < 5; i++){
  	compareOnePass();
  }
}
 
/* Compare all pairs in row in one pass.
 * PRE: start position - facing right.
 * POST: start position - facing right. */
function compareOnePass(){
  move();
  while(frontIsClear()){
    // Move one ball up from first stack.
    ifBallsPresent();
    if(noBallsPresent()){
      firstStackLess();
    }else{
      move();
      // Move one ball up from second stack.
      ifBallsPresent();
      if(noBallsPresent()){
        secondStackLess();
      }else{
        /* If neither stack depleted move to start
        * position to compare the pair again. */
        turnAround();
        move();
        turnAround();
    }
  }
  /* Move back to start position to ready
  * for another pass of the row. */
  turnAround();
  while(frontIsClear()){
    move();
  }
  turnAround();
}
 
/* Function to take one ball and move above.
 * PRE: bottom of stack - facing right.
 * POST: bottom of stack - facing right. */
function ifBallsPresent(){
  if(ballsPresent()){
    takeBall();
    turnLeft();
    move();
    putBall();
    turnAround();
    move();
    turnLeft();
  }
}
 
/* If first stack is less, move all balls in
 * both stacks to pair sort end positions.
 * PRE: bottom first stack - facing right.
 * POST: bottom second stack - facing right. */
function firstStackLess(){
  turnLeft();
  move();
  moveBallsDown();
  turnAround();
  move();
  turnLeft();
  move();
  turnLeft();
  move();
  moveBallsDown();
  turnAround();
  move();
  turnLeft();
}
 
/* If second stack is less, move all balls in
 * both stacks to pair sort end positions.
 * PRE: bottom second stack - facing right.
 * POST: bottom second stack - facing right. */
function secondStackLess(){
  turnAround();
  move();
  turnRight();
  move();
  moveBallsDown();
  turnAround();
  move();
  turnLeft();
  moveBallsRight();
  move();
  turnLeft();
  move();
  turnRight();
  moveBallsLeft();
  turnAround();
  move();
  turnRight();
  moveBallsDown();
  turnAround();
  move();
  turnLeft();
  move();
}
 
/* Function to move stack of balls up.
 * PRE: bottom - facing down.
 * POST: bottom - facing down. */
function moveBallsUp(){
  while(ballsPresent()){
    takeBall();
	  turnAround();
	  move();
	  putBall();
	  turnAround();
	  move();
  }
}
 
/* Function to move stack of balls down.
 * PRE: top - facing up.
 * POST: top - facing up. */
function moveBallsDown(){
  while(ballsPresent()){
		takeBall();
		turnAround();
		move();
		putBall();
		turnAround();
		move();
  }
}
 
/* Function to move stack of balls right.
 * PRE: first stack - facing right.
 * POST: first stack - facing right. */
function moveBallsRight(){
  while(ballsPresent()){
		takeBall();
		move();
		putBall();
		turnAround();
		move();
		turnAround();
  }
}
 
/* Function to move stack of balls left.
 * PRE: second stack - facing right.
 * POST: second stack - facing right. */
function moveBallsLeft(){
  while(ballsPresent()){
		takeBall();
		turnAround();
		move();
		putBall();
		turnAround();
		move();
  }
} 
/***************************************************/
/***************************************************/

