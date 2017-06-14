// Stage 2, The Maze
for (var count = 0; count < 3; count++) {
  moveForward();
  moveForward();
  turnRight();
}
 
 
while (notFinished()) {
  if (isPathForward()) {
    moveForward();
  } else {
    if (isPathLeft()) {
  	turnLeft();
    } else {
  	turnRight();
    }
  }
}
 
 
// Stage 5, The Artist
// 3
penColour('#ff0000');
for (var count = 0; count < 4; count++) {
  moveForward(100);
  turnRight(90);
}
 
 
// 4
for (var count = 0; count < 3; count++) {
  penColour(colour_random());
  moveForward(100);
  turnRight(120);
}
 
 
// 5 draw envelop – a triangle followed by square
for (var count = 0; count < 3; count++) {
  moveForward(100);
  turnRight(120);
}
for (var count2 = 0; count2 < 4; count2++) {
  moveForward(100);
  turnRight(90);
}
 
// 6
for (var count = 0; count < 3; count++) {
  moveForward(100);
  turnRight(120);
}
turnRight(180);
for (var count2 = 0; count2 < 4; count2++) {
  moveForward(100);
  turnRight(90);
}
 
// 7
penColour('#228b22');
for (var count = 0; count < 4; count++) {
  turnRight(90);
  moveForward(100);
}
turnLeft(90);
moveForward(50);
for (var count2 = 0; count2 < 4; count2++) {
  moveForward(100);
  turnLeft(90);
}
 
// 8
or (var count = 0; count < 8; count++) {
  penColour(colour_random());
  moveForward(100);
  moveBackward(100);
  turnRight(45);
}
penColour('#0000cd');
penWidth(2);
for (var count2 = 0; count2 < 10; count2++) {
  turnRight(35);
  for (var count = 0; count < 5; count++) {
    moveForward(100);
    turnRight(145);
  }
}

// 9
for (var count = 0; count < 360; count++) {
  moveForward(1);
  turnRight(1);
}
 
// 10
penColour('#0000cd');
penWidth(2);
for (var count2 = 0; count2 < 10; count2++) {
  turnRight(35);
  for (var count = 0; count < 5; count++) {
    moveForward(100);
    turnRight(145);
  }
}
 
Stage 7, The Artist 2
penColour(colour_random());
for (var count = 0; count < 3; count++) {
  moveForward(100);
  turnRight(120);
}
turnRight(90);
penColour(colour_random());
for (var count2 = 0; count2 < 3; count2++) {
  moveForward(100);
  turnRight(120);
}
 
for (var count3 = 0; count3 < 4; count3++) {
  for (var count2 = 0; count2 < 10; count2++) {
    penColour(colour_random());
    for (var count = 0; count < 4; count++) {
  	moveForward(20);
  	turnRight(90);
    }
    moveForward(20);
  }
  turnRight(90);
}
 
// Stage 9, The Farmer
// 1
moveForward();
moveForward();
moveForward();
moveForward();
dig();
 
// 2
moveForward();
fill();
fill();
 
// 3
moveForward();
for (var count = 0; count < 10; count++) {
  dig();
}
 
// 4
for (var count = 0; count < 4; count++) {
  dig();
  moveForward();
  turnLeft();
}
 
// 5
while (isPathForward()) {
  moveForward();
  for (var count = 0; count < 5; count++) {
    fill();
  }
}
 
// 6
while (pilePresent()) {
  dig();
  moveForward();
}
 
// 7
turnRight();
moveForward();
while (holePresent()) {
  fill();
}
 
// 8
while (isPathForward()) {
  moveForward();
}
fill();
 
// 9
for (var count = 0; count < 2; count++) {
  while (isPathForward()) {
  	moveForward();
    dig();
  }
  turnLeft();
}
 
// 10
while (isPathForward()) {
  moveForward();
  if (pilePresent()) {
    dig();
  }
}
 
// 11
while (isPathForward()) {
  moveForward();
  if (pilePresent()) {
    dig();
  }
  if (holePresent()) {
    fill();
  }
}
 
// Stage 11, The Artist 3
// 1
penColour('#ff0000');
for (var count = 0; count < 4; count++) {
  moveForward(100);
  turnRight(90);
}
 
// 2
// draw_a_square
for (var count = 0; count < 4; count++) {
  moveForward((50));
  turnRight(90);
}
 
// 3
for (var count2 = 0; count2 < 3; count2++) {
  penColour(colour_random());
  // draw_a_square
  for (var count = 0; count < 4; count++) {
    moveForward((100));
    turnRight(90);
  }
  turnRight(120);
}
 
// 4
for (var count2 = 0; count2 < 36; count2++) {
  penColour(colour_random());
  // draw_a_square
  for (var count = 0; count < 4; count++) {
    moveForward((100));
    turnRight(90);
  }
  turnRight(10);
}
 
// 5
// draw_a_square
for (var count = 0; count < 4; count++) {
  moveForward((50));
  turnRight(90);
}
// draw_a_square
for (var count2 = 0; count2 < 4; count2++) {
  moveForward((60));
  turnRight(90);
}
// draw_a_square
for (var count3 = 0; count3 < 4; count3++) {
  moveForward((70));
  turnRight(90);
}
// draw_a_square
for (var count4 = 0; count4 < 4; count4++) {
  moveForward((80));
  turnRight(90);
}
// draw_a_square
for (var count5 = 0; count5 < 4; count5++) {
  moveForward((90));
  turnRight(90);
}
 
// 6
var counter;
 
for (counter = 50; counter <= 90; counter += 10) {
  // draw_a_square
  for (var count = 0; count < 4; count++) {
    moveForward((counter));
    turnRight(90);
  }
}
 
// 7
var counter;
 
for (counter = 25; counter <= 60; counter += 5) {
  moveForward(counter);
  turnRight(90);
}
 
// 8
// draw_a_snowman
turnLeft(90);
var distances = [(250) * 0.5, (250) * 0.3,(250) * 0.2];
for (var counter = 0; counter < 6; counter++) {
 
  var distance = distances[counter < 3 ? counter: 5 - counter] / 57.5;
  for (var degree = 0; degree < 90; degree++) {
    moveForward(distance);
    turnRight(2);
  }
  if (counter != 2) {
    turnLeft(180);
  }
}
turnLeft(90);
// draw_a_snowman
turnLeft(90);
var distances2 = [(100) * 0.5, (100) * 0.3,(100) * 0.2];
for (var counter2 = 0; counter2 < 6; counter2++) {
 
  var distance2 = distances2[counter2 < 3 ? counter2: 5 - counter2] / 57.5;
  for (var degree2 = 0; degree2 < 90; degree2++) {
    moveForward(distance2);
    turnRight(2);
  }
  if (counter2 != 2) {
    turnLeft(180);
  }
}
turnLeft(90);
 
// 9
for (var count = 0; count < 3; count++) {
  penColour(colour_random());
  // draw_a_snowman
  turnLeft(90);
  var distances = [(150) * 0.5, (150) * 0.3,(150) * 0.2];
  for (var counter = 0; counter < 6; counter++) {
 
    var distance = distances[counter < 3 ? counter: 5 - counter] / 57.5;
    for (var degree = 0; degree < 90; degree++) {
  	moveForward(distance);
  	turnRight(2);
    }
    if (counter != 2) {
  	turnLeft(180);
    }
  }
  turnLeft(90);
  turnRight(90);
  jumpForward(100);
  turnLeft(90);
}
 
// 10
var counter;
 
for (counter = 110; counter >= 70; counter -= 10) {
  // draw_a_snowman
  turnLeft(90);
  var distances = [(counter) * 0.5, (counter) * 0.3,(counter) * 0.2];
  for (var counter2 = 0; counter2 < 6; counter2++) {
 
    var distance = distances[counter2 < 3 ? counter2: 5 - counter2] / 57.5;
    for (var degree = 0; degree < 90; degree++) {
  	moveForward(distance);
  	turnRight(2);
    }
    if (counter2 != 2) {
  	turnLeft(180);
    }
  }
  turnLeft(90);
  turnRight(90);
  jumpForward(60);
  turnLeft(90);
}
 
// 11
var length2;
 
penWidth(1);
for (length2 = 1; length2 <= 100; length2++) {
  penColour(colour_random());
  moveForward(length2);
  turnRight(95);
}
 
// Stage 13, The Farmer 2
// 1
for (var count2 = 0; count2 < 3; count2++) {
  turnLeft();
  for (var count = 0; count < 4; count++) {
    if (pilePresent()) {
  	dig();
    }
    if (holePresent()) {
  	fill();
    }
    if (isPathForward()) {
  	moveForward();
    }
  }
  turnRight();
  turnRight();
  while (isPathForward()) {
  	moveForward();
  }
  turnLeft();
  if (isPathForward()) {
    moveForward();
  }
}
 
// 2
function fill_5() {
  for (var count = 0; count < 5; count++) {
    Maze.fill();
  }
}
Maze.moveForward();
fill_5();
 
 
// 3
function fill_5() {
  for (var count = 0; count < 5; count++) {
    fill();
  }
}
 
while (isPathForward()) {
  moveForward();
  fill_5();
}
 
// 4
function remove_7() {
  for (var count = 0; count < 7; count++) {
    dig();
  }
}
 
for (var count2 = 0; count2 < 4; count2++) {
  remove_7();
  moveForward();
  turnLeft();
  moveForward();
  turnRight();
}
 
// 5
function remove_6() {
  for (var count2 = 0; count2 < 6; count2++) {
    dig();
  }
}
 
for (var count = 0; count < 3; count++) {
  moveForward();
  remove_6();
  moveForward();
}
 
// 6
function fill_8() {
  for (var count = 0; count < 8; count++) {
    fill();
  }
}
 
function remove_8() {
  for (var count2 = 0; count2 < 8; count2++) {
    dig();
  }
}
 
remove_8();
while (isPathForward()) {
  moveForward();
}
fill_8();
 
// 7
function avoid_the_cow_and_remove_1() {
  turnLeft();
  moveForward();
  turnRight();
  moveForward();
  moveForward();
  turnRight();
  moveForward();
  dig();
}
 
avoid_the_cow_and_remove_1();
 
// 8
function avoid_the_cow_and_remove_1() {
  turnLeft();
  moveForward();
  turnRight();
  moveForward();
  moveForward();
  turnRight();
  moveForward();
  dig();
  turnLeft();
}
 
for (var count = 0; count < 3; count++) {
  avoid_the_cow_and_remove_1();
}
 
// 9
function remove_stack_of_4_piles() {
  turnLeft();
  for (var count2 = 0; count2 < 4; count2++) {
    dig();
    moveForward();
  }
  turnRight();
  turnRight();
  for (var count3 = 0; count3 < 4; count3++) {
    moveForward();
  }
  turnLeft();
}
 
for (var count = 0; count < 6; count++) {
  remove_stack_of_4_piles();
  moveForward();
}
 
// 10
function remove_stack_of_4_piles() {
  turnLeft();
  for (var count = 0; count < 4; count++) {
    dig();
    moveForward();
  }
  turnRight();
  turnRight();
  for (var count2 = 0; count2 < 4; count2++) {
    moveForward();
  }
  turnLeft();
}
 
function fill_stack_of_2_holes() {
  turnLeft();
  for (var count3 = 0; count3 < 2; count3++) {
    fill();
    moveForward();
  }
  turnRight();
  turnRight();
  for (var count4 = 0; count4 < 2; count4++) {
    moveForward();
  }
  turnLeft();
}
 
while (isPathForward()) {
  if (pilePresent()) {
    remove_stack_of_4_piles();
  } else {
    fill_stack_of_2_holes();
  }
  moveForward();
}
 
// Stage 15, The Artist 4
// 1
function draw_a_square() {
  for (var count = 0; count < 4; count++) {
    moveForward(100);
    turnRight(90);
  }
}
 
function draw_a_circle() {
  for (var count2 = 0; count2 < 360; count2++) {
    moveForward(1);
    turnRight(1);
  }
}
 
draw_a_square();
 
// 2
function draw_a_square() {
  for (var count = 0; count < 4; count++) {
    moveForward(100);
    turnRight(90);
  }
}
 
function draw_a_triangle() {
  for (var count2 = 0; count2 < 3; count2++) {
    moveForward(100);
    turnRight(120);
  }
}
 
draw_a_triangle();
 
// 3
function draw_a_square() {
  for (var count = 0; count < 4; count++) {
    moveForward(100);
    turnRight(90);
  }
}
 
function draw_a_triangle() {
  for (var count2 = 0; count2 < 3; count2++) {
    moveForward(100);
    turnRight(120);
  }
}
 
draw_a_triangle();
moveForward(100);
draw_a_square();
moveForward(100);
draw_a_triangle();
 
// 4
function draw_a_square() {
  for (var count = 0; count < 4; count++) {
    moveForward(100);
    turnRight(90);
  }
}
 
function draw_a_triangle() {
  for (var count2 = 0; count2 < 3; count2++) {
    moveForward(100);
    turnRight(120);
  }
}
 
draw_a_square();
moveForward(100);
turnRight(30);
draw_a_triangle();
 
// 5
function draw_a_square() {
  for (var count = 0; count < 4; count++) {
    moveForward(100);
    turnRight(90);
  }
}
 
function draw_a_triangle() {
  for (var count2 = 0; count2 < 3; count2++) {
    moveForward(100);
    turnRight(120);
  }
}
 
function draw_a_house() {
  draw_a_square();
  moveForward(100);
  turnRight(30);
  draw_a_triangle();
}
 
draw_a_house();
 
// 6
var length2;
 
function draw_a_square(length2) {
  for (var count = 0; count < 4; count++) {
    moveForward(length2);
    turnRight(90);
  }
}
 
function draw_a_triangle(length2) {
  for (var count2 = 0; count2 < 3; count2++) {
    moveForward(length2);
    turnRight(120);
  }
}
 
draw_a_triangle(100);
moveForward(100);
draw_a_triangle(200);
 
// 7
var length2;
 
function draw_a_square(length2) {
  for (var count = 0; count < 4; count++) {
    moveForward(length2);
    turnRight(90);
  }
}
 
function draw_a_triangle(length2) {
  for (var count2 = 0; count2 < 3; count2++) {
    moveForward(length2);
    turnRight(120);
  }
}
 
function draw_a_house(length2) {
  draw_a_square(150);
  moveForward(150);
  turnRight(30);
  draw_a_triangle(150);
}
 
draw_a_house(length2);
 
// 8
var length2;
 
function draw_a_house(length2) {
  draw_a_square(length2);
  moveForward(length2);
  turnRight(30);
  draw_a_triangle(length2);
  turnRight(150);
  moveForward(length2);
  turnLeft(90);
  moveForward(length2);
  turnLeft(90);
}
 
function draw_a_square(length2) {
  for (var count = 0; count < 4; count++) {
    moveForward(length2);
    turnRight(90);
  }
}
 
function draw_a_triangle(length2) {
  for (var count2 = 0; count2 < 3; count2++) {
    moveForward(length2);
    turnRight(120);
  }
}
 
draw_a_house(100);
draw_a_house(150);
draw_a_house(100);
 
// 9
var length2;
var counter;
 
function draw_a_house(length2) {
  draw_a_square(length2);
  moveForward(length2);
  turnRight(30);
  draw_a_triangle(length2);
  turnRight(150);
  moveForward(length2);
  turnLeft(90);
  moveForward(length2);
  turnLeft(90);
}
 
function draw_a_square(length2) {
  for (var count = 0; count < 4; count++) {
    moveForward(length2);
    turnRight(90);
  }
}
 
function draw_a_triangle(length2) {
  for (var count2 = 0; count2 < 3; count2++) {
    moveForward(length2);
    turnRight(120);
  }
}
 
for (counter = 50; counter <= 150; counter += 50) {
  draw_a_house(counter);
}
 
// 10

 
// Stage 17, The Farmer 3 (debug)
// 1
moveForward();
turnLeft();
moveForward();
fill();
turnRight();
moveForward();
dig();
 
// 2
for (var count2 = 0; count2 < 2; count2++) {
  for (var count = 0; count < 2; count++) {
    moveForward();
  }
  turnLeft();
}
dig();
 
// 3
moveForward();
turnLeft();
moveForward();
for (var count = 0; count < 5; count++) {
  dig();
}
turnRight();
moveForward();
turnLeft();
moveForward();
for (var count2 = 0; count2 < 7; count2++) {
  dig();
}
 
// 4
for (var count = 0; count < 5; count++) {
  moveForward();
}
while (holePresent()) {
  fill();
}
 
// 5
for (var count = 0; count < 7; count++) {
  moveForward();
  if (pilePresent()) {
    dig();
  }
  turnLeft();
  moveForward();
  turnRight();
}
 
// 6
for (var count = 0; count < 7; count++) {
  moveForward();
  if (pilePresent()) {
    dig();
  } else {
    fill();
  }
  turnLeft();
  moveForward();
  turnRight();
}
 
// 7
function remove_square() {
  for (var count2 = 0; count2 < 4; count2++) {
    for (var count = 0; count < 3; count++) {
  	moveForward();
  	dig();
    }
    turnLeft();
  }
}
 
remove_square();
 
// 8
function remove_square() {
  for (var count3 = 0; count3 < 4; count3++) {
    for (var count2 = 0; count2 < 2; count2++) {
  	moveForward();
  	dig();
    }
    turnLeft();
  }
}
 
function fill_square() {
  for (var count5 = 0; count5 < 4; count5++) {
    for (var count4 = 0; count4 < 2; count4++) {
  	moveForward();
  	fill();
    }
    turnLeft();
  }
}
 
remove_square();
for (var count = 0; count < 5; count++) {
  moveForward();
}
fill_square();
 
// 9
var counter;
var height;
 
function remove_pile(height) {
  for (var count = 0; count < height; count++) {
    dig();
  }
}
 
for (counter = 1; counter <= 6; counter++) {
  remove_pile(counter);
  moveForward();
}
 
 
// Stage 19, The Artist 5
// 1
var counter;
 
for (counter = 1; counter <= 100; counter += 2) {
  penColour(colour_random());
  moveForward(counter);
  turnRight(90);
}
 
// 2
var counter;
 
for (counter = 1; counter <= 300; counter++) {
  penColour(colour_random());
  moveForward(counter);
  turnRight(150);
}
 
// 3
var counter;
 
for (counter = 1; counter <= 300; counter++) {
  penColour(colour_random());
  moveForward(counter);
  turnRight(130);
}
 
// 4
var step;
 
function draw_a_circle(step) {
  for (var count2 = 0; count2 < 60; count2++) {
    moveForward(step);
    turnRight(step);
  }
}
 
for (var count = 0; count < 10; count++) {
  penColour(colour_random());
  draw_a_circle(6);
  turnRight(36);
}
 
// 5
var counter;
var step;
 
function draw_a_circle(step) {
  for (var count2 = 0; count2 < 60; count2++) {
    moveForward(step);
    turnRight(6);
  }
}
 
for (counter = 4; counter <= 8; counter += 4) {
  for (var count = 0; count < 10; count++) {
    penColour(colour_random());
    draw_a_circle(counter);
    turnRight(36);
  }
}
 
// 6
var depth;
var branches;
 
function draw_a_tree(depth, branches) {
  if (depth > 0) {
	penColour(colour_random());
	penDown();
	moveForward(7 * depth);
	turnLeft(130);
	for (var count = 0; count < branches; count++) {
  	turnRight(180 / branches);
  	draw_a_tree(depth - 1, branches);
	}
	turnLeft(50);
	penUp();
	moveBackward(7 * depth);
  }
}
 
draw_a_tree(9, 2);