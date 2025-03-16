const readline = require("readline-sync");

let hobby = readline.question("What is your favorite hobby? ");
let index = readline.questionInt("Enter an index number to find the character at that position: ");
if (index >= 0 && index < hobby.length) {
    console.log(`The character at index ${index} is: '${hobby[index]}'`);
} else {
    console.log("Invalid index! Please enter a number between 0 and " + (hobby.length - 1));
}