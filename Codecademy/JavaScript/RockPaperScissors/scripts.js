

// *********************** Rock Paper Scisors **********************
// var userChoice = prompt("Do you choose rock, paper or scissors?");
// if (userChoice === "rock" || userChoice || "paper" or userChoice || "scissors") {
//     return userChoice;
// } else {
//     userChoice = prompt("Please choose only rock, paper, or scissors.");
// }
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
// 	computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
// 	computerChoice = "paper";
// } else {
// 	computerChoice = "scissors";
// } console.log("Computer: " + computerChoice);

// var compare = function(choice1, choice2) {
//     if (choice1 === choice2) {
//         return "The result is a tie!";
//     } else if (choice1 === "rock") {
//         if (choice2 === "scissors") {
//             return "rock wins!";
//         } else {
//             return "paper wins";
//         }
//     } else if (choice1 === "paper") {
//         if (choice2 === "rock") {
//             return "paper wins";
//         } else {
//             return "scissors wins";
//         }
//     } else {
//         if (choice2 === "rock") {
//             return "rock wins";
//         } else {
//             return "scissors wins";
//         }
//     }
// }

// compare(userChoice, computerChoice);



// *********************** Approved Solution **********************
// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
// 	computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
// 	computerChoice = "paper";
// } else {
// 	computerChoice = "scissors";
// } console.log("Computer: " + computerChoice);

// var compare = function(choice1, choice2) {
//     if (choice1 === choice2) {
//         return "The result is a tie!";
//     } else if (choice1 === "rock") {
//         if (choice2 === "scissors") {
//             return "rock wins!";
//         } else {
//             return "paper wins";
//         }
//     } else if (choice1 === "paper") {
//         if (choice2 === "rock") {
//             return "paper wins";
//         } else {
//             return "scissors wins";
//         }
//     } else {
//         if (choice2 === "rock") {
//             return "rock wins";
//         } else {
//             return "scissors wins";
//         }
//     }
// }

// compare(userChoice, computerChoice);
// *********************** Second Solution **********************
// var userChoice = prompt("Do you choose rock, paper, or scissors?");
// var computerChoice = Math.random();
// var winner = "";
// if (computerChoice < 0.34) {
//     computerChoice = "rock";
// } else if (computerChoice < 0.67) {
//     computerChoice = "paper";
// } else {
//     computerChoice = "scissors";
// }

// var compare = function(choice1, choice2) {
//   if (userChoice === computerChoice) {
//       winner = "The result is a tie!";
//   } else if (userChoice === "rock") {
//       if (computerChoice === "paper") {
//           winner = "Paper wins!";
//       } else {
//           winner = "Rock wins";
//       }
//   } else if (userChoice === "paper") {
//       if (computerChoice === "rock") {
//           winner = "Paper wins!";
//       } else {
//           winner = "Scissors wins";
//       }
//   } else {
//       if (computerChoice === "rock") {
//           winner = "Rock wins";
//       } else {
//           winner = "Scissors wins!";
//       }
//   }
// }

// compare(userChoice, computerChoice);
// *********************** End Approved Solution **********************

// document.write("<p>The user chose " + userChoice + ", and the computer chose " + computerChoice + ". " + winner + ".</p>");
