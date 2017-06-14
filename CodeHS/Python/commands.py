shape("turtle")
# "arrow", "turtle", "circle", "square", "triangle", "classic"
color("red")
# "red", "orange", "yellow", "green", "blue", "indigo", "violet", "black"
forward(75)
backward(30)
right(90) # degrees
left(45)
setposition(100, 100)
setx(50)
sety(50)

home() # Move turtle back to the center of screen
penup()
pendown()
circle(30) # radius
dot() # Place a dot with turtle
speed(5)
# fastest: 0 -- no animation at all
# fast: 10
# normal: 6
# slow: 3
# slowest: 1

print "Hello world"
print 2 + 2
print 10
print "My name is %s and I am %d years old!" % ('Zara', 21)

name = "Zach"
print name

a = 3
b = 4
c = a + b

person = input('Enter your name: ')
print('Hello', person)

+   Addition
-   Subtraction
*   Multiplication
/   Division
%   Modulus (Remainder)
()  Parentheses (For order of operations)
z = x + y
w = x * y

x += 1
x -= 1

absolute_value = abs(x)
abs_val = abs(-5)  #Returns 5
square_root = math.sqrt(x)

x == y      # is x equal to y
x > y       # is x greater than y
x >= y      # is x greater than or equal to y
x < y       # is x less than y
x <= y      # is x less than or equal to y

if x == y:
    print "x and y are equal"

if x > 5:
    print "x is greater than 5."

import random  # you need to import it to be able to use randint!
random_num = random.randint(low, high) # inclusive
random_num = random.randint(0,10) # returns 0 - 10

random_element = random.choice('abcdefghij')
'c'

my_boolean = True
anotherBoolean = False
and_expression = x & y
or_expression = x | y
boolean_expression = x & (y | z)

if x < 0:
    print "x is negative."

if color == "red" | color == "blue" | color == "yellow":
    print "Primary color."
else:
    print "Not a primary color."

if condition_1:
    print "condition_1 evaluates to True"
elif condition_2:
    print "condition_2 evaluates to True"
elif condition_3:
    print "condition_3 evaluates to True"
else:
    print "None of the above conditions evaluated to True. So I execute."

my_list = [1,2,3,4]
for item in my_list:

new_list = [] # Make a new empty list
for number in my_list:
    number * 2
    new_list.append(number)
return new_list

for i in range(4):
	forward(i * 10)
	left(i * 30)
right(45) # not part of for loop because not indented

while BOOLEAN_EXPRESSION:
    
i = 15
while i > 10:
    print i
    i -= 1

def add(x, y):
    return x + y
print add(1, 2)

def my_function(): # defined before call function
	left(45)
my_function() # call function

# Create an empty list
my_list = []
# Create a list with any number of items
my_list = [item1, item2, item3]
number_list = [1, 2, 4]
my_list = [integer, string, boolean]
a_list = ["hello", 4, True]
element = my_list[i]
first_element = a_list[0] # Returns "hello"

# Set an element in a list
my_list[i] = item
a_list[0] = 9 # a_list = [9, 4, True]
# Looping over a list
for item in my_list:
    print "code that executes on each item"
for thing in a_list:
    print thing  # Prints all the items in a_list in order

# Length of a list
list_length = len(my_list)
a_list_length = len(a_list) # Returns 3

# Add to a list
my_list.append(item)
a_list.append("Puppy") # Now a_list = ["hello", 4, True, "Puppy"]

# Remove and return last element from the list
last = my_list.pop()
last_item = a_list.pop() # Returns and removes "Puppy"

# Remove and return an item from a list at index i
my_list.pop(i)
a_list.pop(0) # Returns and removes "hello"

# Return the index in the list of the first item whose value is x.
# It is an error if there is no such item
my_list.index(x)
a_list.index(4)
# Since currently a_list = [4, True] this will return 0
# Because 0 is the index of 4 in the list.
Dictionaries

# Dictionaries have a collection of key, value pairs
a_dictionary = {key1:value1, key2:value2}
my_farm = {pigs:2, cows:4}  # A dictionary can keep a farm's animal count!

# Create an empty dictionary
a_dictionary = {}

# Insert a key, value pair
a_dictionary[key] = value
my_farm["horses"] = 1  # The farm now has one horse

# Get a value for a key
my_dict[key] # Will return the key
my_farm["pigs"] # Will return 2, the value of "pigs"
Sets

#  A set contains an unordered collection of unique and immutable objects
# Make a new set named "new_set"
new_set = set([])
girl_scout_badges = set([])

# Add to a set
new_set.add(item)
girl_scout_badges.add("Squirrel Whisperer")

# Does a set contain a value
item in my_set # Returns a boolean
"Squirrel Whisperer" in girl_scout_badges # Returns True

# Number of elements in the set
len(my_set)
len(girl_scout_badges) #Returns 1 since there is only one item in the set