var input1 = prompt("Please type a starting number");
var bottomNumber = parseInt(input1)
var input = prompt("Please type a number");
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
var message = "<p>" + randomNumber + " is a random number between " + bottomNumber + " and " + topNumber + ".</p>";
document.write(message);

// var dieRoll = Math.floor(Math.random() * 6) + 1;
// alert('You rolled a ' + dieRoll);

// var questions = 3;
// var questionsLeft = ' [' + questions + ' questions left]';
// var adjective = prompt('Please type an adjective' + questionsLeft);
// questions -= 1;
// questionsLeft = ' [' + questions + ' questions left]';
// var verb = prompt('Please type a verb' + questionsLeft);
// questions -= 1;
// questionsLeft = ' [' + questions + ' questions left]';
// var noun = prompt('Please type a noun' + questionsLeft);
// alert('All done. Ready for the message?');
// var sentence = "<h2>There once was a " + adjective;
// sentence += ' programmer who wanted to use JavaScript to ' + verb;
// sentence += ' the ' + noun + '.</h2>';
// document.write(sentence);

// var HTMLBadges = prompt('How many HTML badges do you have?');
// var CSSBadges = prompt('How many CSS badges do you have?');
// var totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
// alert('Wow! You have ' + totalBadges + ' badges!');

// var secondsPerMin = 60;
// var minsPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;

// var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
// document.write('There are ' + secondsPerDay + ' seconds in a day');
// var secondsPerWeek = secondsPerDay * daysPerWeek;
// document.write('<br>There are ' + secondsPerWeek + ' seconds per week.');
// var secondsPerMonth = secondsPerWeek * 52 / 12;
// document.write('<br>There are ' + secondsPerMonth + ' seconds per month.');
// var secondsPerYear = secondsPerMonth * 12;
// document.write('<br>There are ' + secondsPerYear + ' seconds per year.');
// var yearsAlive = secondsPerDay * daysPerWeek * weeksPerYear * 49;
// document.write('<br>I have been alive for ' + yearsAlive + ' seconds.');

// var id = "23188xtr";
// var lastName = "Smith";
// var userName = id.toUpperCase() + "#" + lastName.toUpperCase();
// document.write(userName);

// var stringToShout = prompt("What shoudl I shout?");
// var shout = stringToShout.toUpperCase();
// shout += "!!!";
// alert(shout);

// var visitor = prompt("What is your name?");
// var message = 'Hello ' + visitor + ". Welcome to Treehouse.";
// message += " We are so glad that you came by to visit, ";
// message += visitor;
// message += ". Please come again when you want to learn some more.";
// document.write("<h2>" + message + "</h2>");

// var visitorName = prompt("What is your name?");
// alert(visitorName);
// console.log(visitorName);

// document.write("<h2>Hello JavaScript!</h2>");
// document.write("Welcome to JavaScript Basics");
