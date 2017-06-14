import turtle
talia = turtle.Turtle()

#square
talia.forward(150)
talia.right(90)
talia.forward(150)
talia.right(90)
talia.forward(150)
talia.right(90)
talia.forward(150)

talia.pencolor("darkViolet")
talia.pensize(8)


talia.penup()
talia.goto(40, 80)
talia.pendown()


tom.fillcolor("blue")
tom.color("red") #line & fill are same color
tom.begin_fill()
# tom.forward(240)
# tom.right(90)
# tom.forward(320)
# tom.right(90)
# tom.forward(240)
# tom.right(90)
# tom.forward(320)
# tom.right(90)
tom.end_fill()


# Draw a square
for i in range(4):
  tom.forward(300)
  tom.right(90)


# Using a list to run a For loop
lengths = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 120, 130]

for length in lengths:
	tia.forward(length)
	tia.right(90)

# Create a list of colors
colors = ["red", "blue", "gold", "green"]

# Use a loop to draw a square with one side each color
for color in colors:
  tia.color(color)
	tia.circle(100)
	tia.setheading(90) # In degrees
	tia.circle(50, 180) # Draws 180 degrees of the circle

