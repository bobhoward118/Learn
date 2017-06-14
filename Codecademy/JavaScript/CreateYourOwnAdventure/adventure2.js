confirm("Are you ready to play?");

var name = prompt("What is your name?");
alert("Welcome " + name + ", to Adventure World");

var character = prompt("Will you be a 'Knight', a 'Warrior', or a 'Wizard'");
if (character === "Knight") {
  alert("Welcome, Sir " + name);
} else if (character === "Warrior") {
  alert("Welcome, Lord " + name);
} else {
  alert("Welcome, Warlock " + name);
}

var weapon = prompt("Will your weapon of choice be a 'Sword', a 'Spear', or a 'Mace'?");
if (weapon === "Sword" || weapon === "Spear" || weapon === "Mace") {
  alert("A " + weapon + " is a good choice");
} else {
  var weapon = prompt("Please choose 'Sword' or 'Spear' or 'Mace'");
  alert("A " + weapon + " is a good choice");
}

var path1 = confirm("Will you go through the first door?");
if (path1 === true) {
  alert("You have entered a trap!");
} else {
  alert("You have safely passed the first test.");
}

var path2 = confirm("will you go through the second door?");
if (path2 === true) {
  alert("You have safely passed the second test.");
} else {
  alert("You have entered a trap!");
}
