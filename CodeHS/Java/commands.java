move();	 	
turnLeft();
putBall();	 	
takeBall();

private void turnRight()
{
    turnLeft();
    turnLeft();
    turnLeft();
}

private void turnAround()
{
    turnLeft();
    turnLeft();
}

if(ballsPresent())
{
  takeBall();
}
else
{
  move();
}

while(frontIsClear())
{
    move();
}

for(int i = 0; i < 5; i++)
{
    putBall();
    move();
}

/* A multi-line comment describes your code
 * to someone who is reading it. */
// Use single line comments to clarify code.

System.out.println("Hello world.");
System.out.print("Hello world. ");
System.out.print("How are you?");

int myVarName;
int myVarName = 5;
myVarName = 10;
System.out.println("The value is: " + myValue);

private void printText(String input)
{
  System.out.println(input);
}

private int addTwo(int number)
{
  return number + 2;
}

String name = readLine("What is your name? ");
int age = readInt("What is your age? ");
double myDouble = readDouble(prompt);
boolean finishedWork = readBoolean("Is your work done? ");

x == y    // is x equal to y
x > y     // is x greater than y
x >= y    // is x greater than or equal to y
x < y     // is x less than y
x <= y    // is x less than or equal to y

if (x == y)
{
  System.out.println("x and y are equal");
}

+ Addition
- Subtraction
* Multiplication
/ Division
% Modulus (Remainder)
() Parentheses (For order of operations)
int z = x + y;
int w = x * y;

x++
x--
x = x + y;    x += y;
x = x - y;    x -= y;
x = x * y;    x *= y;
x = x / y;    x /= y;

int low = 1;
int high = 6;
int roll = Randomizer.nextInt(low, high);
boolean coinFlip = Randomizer.nextBoolean();
// This coin flip has an 80% chance of being true
double probability = 0.8;
boolean coinFlip = Randomizer.nextBoolean(probability);
// Random double value between 0 and 1
double chanceOfRain = Randomizer.nextDouble();
// Random double value between low and high
double low = 2.0;
double high = 5.0;
double randomValue = Randomizer.nextDouble(low, high);
// Methods
Randomizer.nextInt(int low, int high)
Randomizer.nextBoolean()
Randomizer.nextBoolean(double probability)
Randomizer.nextDouble()
Randomizer.nextDouble(double low, double high)

// A boolean is either true or false
boolean myBoolean = true;
boolean anotherBoolean = false;
boolean result = readBoolean("Question? ");

boolean x = !y;   // x gets the opposite of y
boolean andExp = x && y;
boolean orExp = x || y;
boolean boolExp = x && (y || z);

if (color == "red" || color == "blue" || color == "yellow")
{
  System.out.println("Primary color.");
}
else if (color == "purple");
{
  System.out.println("Purple was chosen.")
}
else
{
  System.out.println("Not a primary color.");
}

for (int i = 0; i < 10; i++)
{
    System.out.println(i);
}

int i = 15;
while (i > 10)
{
    System.out.println(i);
  i--;
}

while (true)
{
  // code
  if (condition)
    {
    break;
  }
}

// Create an array of size 5
int[] arr = new int[5];
// Create an array that is initialized with values
int[] arr = {7, 8, 9, 10};
arr[i]
System.out.println(arr[4]) // starts with index 0

// to loop through an array, you can use a standard
// for loop, given an array of n elements arr
for (int i = 0; i < arr.length; i++)
{
    System.out.println(arr[i])
}

// Don't forget to import ArrayList!
import java.util.ArrayList;
// Create a general ArrayList
ArrayList<T> arrList = new ArrayList<T>();
// where T represents a type (Object or primitive)

// Create an ArrayList of ints and add some.
ArrayList<Integer> arrList = new ArrayList<Integer>();
// ArrayLists contain objects, so instead of using primitive types
// like int, we use their Object forms, like Integer.
arrList.add(1);
arrList.add(2);
arrList.add(3);
arrList.add(4)
// to access a given index in an ArrayList
// you can use the following syntax
arrList.get(i);
// this can also be saved to a variable
int arrListElem = arrList.get(2); // arrListElem = 3

// for example, to print out the 3rd element in the ArrayList:
System.out.println(arrList.get(2))
// Like arrays, ArrayLists are indexed at 0.

// you can remove in a similar way
arrList.remove(i);

// to loop through an ArrayList, you can use a standard
// for loop, given an ArrayList of n elements arrList
for (int i = 0; i < arrList.size(); i++)
{
    System.out.println(arrList.get(i))
}
// this will print each element in a list on its own line

// you can also use a 'foreach' loop
for (Integer i : arrList)
{
    System.out.println(i);
}

String name = readLine("What is your name? ");
boolean likesIceCream = readBoolean("Do you like ice cream? ");
double gpa = readDouble("What is your GPA? ");
int age = readInt("How old are you? ");

Character Methods
// The Character class allows for advanced
// manipulations of characters in java.
// These methods are static, which means they are called on the
// Character class level, rather than on a specific Character object
// To use these methods, simply call them on the class Character

static boolean isUpperCase(char ch)
Character.isUpperCase('A') // returns true

// Methods
static boolean isUpperCase(char ch)
    returns true if ch is an uppercase character,
    false otherwise

static boolean isLowerCase(char ch)
    returns true if ch is a lowerspace character,
    false otherwise

static boolean isDigit(char ch)
    returns true if ch is a digit (a number),
    false otherwise

static boolean isLetter(char ch)
    returns true if ch is a letter, false otherwise

static boolean isLetterOrDigit(char ch)
    returns true if ch is either a letter or a digit,
    false otherwise

static boolean isWhitespace(char ch)
    returns true if ch is a whitespace character
    (i.e. space or new line), false otherwise

static char toUpperCase(char ch)
    returns the uppercase version of ch

static char toLowerCase(char ch)
    returns the lowercase version of ch

char ch = 'd';
boolean upper = Character.isUpperCase(ch);  // upper is false
upper = Character.isUpperCase('D');         // upper is true
upper = Character.isUpperCase(' ');         // upper is false
upper = Character.isUpperCase('1');         // upper is false

char ch = 'd';
boolean lower = Character.isLowerCase(ch);  // lower is true
lower = Character.isLowerCase('D');         // lower is false
lower = Character.isLowerCase(' ');         // lower is false
lower = Character.isLowerCase('1');         // lower is false

// Checking for letter or digit
// isLetter, isDigit, isLetterOrDigit
char ch = 'd';
boolean isLetter = Character.isLetter(ch);  // isLetter is true
boolean isDigit = Character.isDigit(ch);    // isDigit is false
boolean either = Character.isLetterOrDigit(ch); // either is true

isDigit = Character.isDigit(' ');           // isDigit is false
isDigit = Character.isDigit('9');           // isDigit is true

either = Character.isLetterOrDigit('9');    // either is true
either = Character.isLetterOrDigit(' ');    // either is false

// Checking for whitespace like space ' ' or new line '\n'
// isWhitespace
char space = ' ';
boolean whiteSpace = Character.isWhitespace(space); // whitespace is true

whiteSpace = Character.isWhitespace('\n'); // whitespace is true
whiteSpace = Character.isWhitespace('8');  // whitespace is false
whiteSpace = Character.isWhitespace('A');  // whitespace is false

// toUpperCase and toLowerCase
char lowerD = 'd';
char upper = Character.toUpperCase(lowerD);  // upper is 'D'
char lower = Character.toLowerCase(upper);   // lower is 'd'

// These methods are static, which means they are called on the
// Math class level, rather than on a specific Math object
// To use these methods, simply call them on the class Math
static double abs(double a)
// Usage
double result = Math.abs(-14);  // result is 14

// Methods
static int abs(int a)
static double abs(double a)
    returns the absolute value of a

static int max(int a, int b)
static double max(double a, double b)
    returns the greater of two values a and b

static int min(int a, int b)
static double min(double a, double b)
    returns the lower of two values a and b

static double pow(double a, double b)
    returns a raised to the power of b

static double sqrt(double a)
    returns the square root of a

static double floor(double a)
    returns the greatest value less than
    or equal to a

static double ceil(double a)
    returns the lowest value greater than
    or equal to a


// Absolute value
// abs
double val = -5.5;
double abs = Math.abs(val); // abs is 5.5

int num = 5;
int abs = Math.abs(num);    // abs is 5

// Maximum of two values
// max
int max = Math.max(4, 5);   // max is 5
max = Math.max(-4, -5);     // max is -4

double max = Math.max(3.0, -2.1);   // max is 3.0
max = Math.max(-2.2, -10.2);        // max is -2.2

// Minimum of two values
// min
int min = Math.min(10, 1);  // min is 1
min = Math.min(-10, -11);   // min is -11

double min = Math.min(9.4, 11.1);   // min is 9.4
min = Math.min(2.2, -9.5);          // min is -9.5

// Exponents (a raised to the power of b)
// pow
double base = 4;
double exp = 2;
double power = Math.pow(base, exp);  // power is 16.0 (4 * 4 = 16)

power = Math.pow(1, 4);  // power is 1.0 (1 * 1 * 1 * 1 = 1)

// Square root
// sqrt
double root = Math.sqrt(25);        // root is 5.0
root = Math.sqrt(16);               // root is 4.0
root = Math.sqrt(root);             // root is 2.0

// Floor -- Greatest value lower than the parameter
// floor
double floor = Math.floor(8.323);   // floor is 8.0
floor = Math.floor(-8.323);         // floor is -9.0

// Ceiling -- Lowest value greater than the parameter
// ceil
double ceiling = Math.ceil(8.323);  // ceiling is 9.0
ceiling = Math.ceil(-8.323);        // ceiling is -8.0

// The String class allows for advanced
// manipulations of Strings in Java.
// Methods
char charAt(int index)
    returns the character in the String
    at the specified index.

boolean equals(String other)
    returns whether this string is equal
    to a different String other

boolean equalsIgnoreCase(String other)
    returns whether this string is equal
    to a different String other, ignoring
    differences in upper and lower case

int indexOf(char ch)
    returns the index within this String
    of the first occurance of the specified
    character ch. If ch does not exist in
    this String, -1 is returned

int indexOf(String str)
    returns the index within this String
    of the first occurance of the specified
    substring str. If str does not exist
    inside this String, -1 is returned

int length()
    returns the length of this String

String substring(int beginIndex)
    returns the substring of this String
    starting at the specified beginIndex
    and ending at the end of the string

String substring(int beginIndex, int endIndex)
    returns the substring of this String
    starting at the specified beginIndex
    and ending at the specified endIndex.
    The substring includes the character
    at beginIndex, but does not include
    the character at endIndex.

boolean startsWith(String str)
    returns true if this String starts
    with the specified String str,
    false otherwise

boolean endsWith(String str)
    returns true if this String ends
    with the specified String str,
    false otherwise

String toLowerCase()
    returns a new String containing
    the same characters as this String
    converted to lower case

String toUpperCase()
    returns a new String containing
    the same characters as this String
    converted to upper case

String hello = "hello";
String empty = "";
String sentence = "The quick brown fox jumps over the lazy dog.";

String str = "Hello World!";
char first = str.charAt(0);  // first is 'H'
char middle = str.charAt(6);  // middle is 'W'

String str = "CodeHS";
String lower = "codehs";
boolean isEqual = str.equals("CodeHS"); // isEqual is true
isEqual = str.equals(lower);         // isEqual is false
boolean similar = str.equalsIgnoreCase(lower); // similar is true

String str = "Hello World!";
int index = str.indexOf('H'); // index is 0
index = str.indexOf('o');     // index is 4
index = str.indexOf("World"); // index is 6
index = str.indexOf("Hello"); // index is 0

String str = "Hello";
int length = str.length();  // length is 5

str = "A";
length = str.length();      // length is 1

str = "";
length = str.length();      // length is 0

String str = "CodeHS";
String sub = str.substring(4); // sub is "HS"
sub = str.substring(1);        // sub is "odeHS"
sub = str.substring(1, 4);     // sub is "ode"
sub = str.substring(0, 1);     // sub is "C"

String str = "CodeHS";
boolean codeStart = str.startsWith("Code"); // codeStart is true
boolean hsStart = str.startsWith("HS");     // hsStart false
boolean codeEnd = str.endsWith("Code");     // codeEnd is false
boolean hsEnd = str.endsWith("HS");         // hsEnd is true

String str = "CodeHS";
String hello = "Hello World!";
String lower = str.toLowerCase();   // lower is "codehs"
String upper = lower.toUpperCase(); // upper is "CODEHS"
upper = hello.toUpperCase();        // upper is "HELLO WORLD!"
lower = upper.toLowerCase();        // lower is "hello world!"

// using extends in Java means that one class inherits
// from another.
// for example, a Jet class could extend Plane
public class Jet extends Plane
{
    // Jet specific code here
}

// sometimes you will need to call a method from the
// class you inherited from, known as the parent class.

super.fly(); // this will class the parent class' fly method
Implementing Interfaces

// implementing in Java is similar to using a blueprint.
// an Interface gives methods classes must implement.
public interface Blueprint
{
    public String address = "10 Downing Street"
    public void printAddress();
}

public class Building implements Blueprint {
    // we have to declare a method with the same
    // signature as the interface.
    public void printAddress()
    {
        // you can use interface variables like static variables
        System.out.println(Blueprint.address);
    }
}