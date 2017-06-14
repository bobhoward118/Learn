# 1.1.2  WELCOME
# 1. I want to make cool web apps
# 2. Learn the basics of Python
# 3. It's a popular langage

# 2.1.3  MOVE FORWARD
forward(100)

# 2.1.4  MOVE BACKWARD
backward(100)

# 2.1.5  ROTATE
forward(25)
left(90)
forward(25)
right(90)
forward(25)

# 2.1.6  PERPENDICULAR LINES
forward(100)
left(90)
forward(100)

# 2.1.7  SQUARE
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)

# 2.1.8  DIAMOND
left(45)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)

# 2.1.9  STAIRCASE
left(90)
forward(30)
right(90)
forward(30)
left(90)
forward(30)
right(90)
forward(30)
left(90)

# 2.2.3  PERPENDICULAR LINES, PART 2
color("red")
forward(100)
left(90)
color("black")
forward(100)

# 2.2.4  RED SQUARE
color("red")
forward(50)
left(90)
forward(50)
left(90)
forward(50)

# 2.2.5  ALTERNATING COLORS
color("red")
forward(50)
left(90)
color("black")
forward(50)
left(90)
color("red")
forward(50)
left(90)
color("black")
forward(50)
left(90

# 2.2.6  REVIEW
color("red")
forward(20)
color("orange")
forward(20)
color("yellow")
forward(20)
color("green")
forward(20)
color("blue")
forward(20)
color("indigo")
forward(20)
color("violet")
forward(20)

# 2.2.7  RAINBOW, PART 2
color("red")
forward(40)
left(60)
color("orange")
forward(40)
left(60)
color("yellow")
forward(40)
left(60)
color("green")
forward(40)
left(60)
color("blue")
forward(40)
left(60)
color("indigo")
forward(40)
left(60)

# 2.3.3  SQUARE, PART 2
for i in range(4):
	forward(50)
	left(90)

# 2.3.4  SPIRAL
for i in range(10):
	forward(i * 10)
	left(90)

# 2.3.5  STAIRCASE, PART 2
left(90)
for i in range(4):
	forward(30)
	right(90)
	forward(30)
	left(90)

# 2.3.6  TRIANGLE
for i in range(3):
	forward(50)
	left(120)

# 2.3.7  HEXAGON
for i in range(6):
	forward(50)
	left(60)	

# 2.3.8  CIRCLE
for i in range(360):
	forward(1)
	left(1)

# 2.3.9  INWARD SPIRAL
for i in range(50):
	forward(50 - i)
	left(90)

# 2.4.3  SQUARE, PART 3
def draw_edge():
	forward(50)
	left(90)

for i in range(4):
	draw_edge()

# 2.4.4  STAIRCASE, PART 3
left(90)
def draw_step():
	forward(30)
	right(90)
	forward(30)
	left(90)

for i in range(4):
	draw_step()

# 2.4.5  HEXAGON, PART 2
def draw_edge():
	forward(50)
	left(60)

for i in range(6):
	draw_edge()

# 2.4.6  ALTERNATING COLORS, PART 2
def draw_red_edge():
	color("red")
	forward(50)
	left(90)

def draw_black_edge():
	color("black")
	forward(50)
	left(90)

for i in range(2):
	draw_red_edge()
	draw_black_edge()

# 2.4.7  FENCEPOSTS
def make_fencepost():
	forward(10)
	left(90)
	forward(30)
	backward(30)
	right(90)
	forward(10)

for i in range(5):
	make_fencepost()

# 2.4.8  DIAMONDS
def draw_diamond():
	left(45)

	for i in range(4):
		forward(20)
		left(90)
	
	right(45)

for i in range(3):
	draw_diamond()
	forward(50)

draw_diamond()

# 2.5.1  GET CREATIVE
def make_pedal():
	for i in range(50):
		forward(4)
		left(0.6)
	left(150)
	for i in range(50):
		forward(4)
		left(0.6)

for i in range(30):
	make_pedal()
	left(162)














































































