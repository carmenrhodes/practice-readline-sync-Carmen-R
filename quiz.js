const readline = require("readline-sync");

let userName = readline.question("What is your name? ");
console.log(`Hello, ${userName}! Welcome to the patient survey!\n`);

let age = readline.questionInt("How old are you? ");
console.log(`You are ${age} years old.\n`);

let dob = readline.question("What is your date of birth? (MM/DD/YYYY) ");
console.log(`Your date of birth is: ${dob}\n`);

let hasChildren = readline.question("Do you have any children? (yes/no) ").toLowerCase();

let childrenCount = 0;
if (hasChildren === "yes") {
    childrenCount = readline.questionInt("How many children do you have? ");
    console.log(`You have ${childrenCount} children.\n`);
} else {
    console.log("You do not have any children.\n");
}

let feelingScale;
do {
    feelingScale = readline.questionInt("How are you feeling today on a scale of 1 to 10? ");
    if (feelingScale < 1 || feelingScale > 10) {
        console.log("Please enter a number between 1 and 10.");
    }
} while (feelingScale < 1 || feelingScale > 10);

console.log(`You rated your feelings as a ${feelingScale}/10 today.\n`);

console.log("Thank you for completing the survey! Have a great day!");

