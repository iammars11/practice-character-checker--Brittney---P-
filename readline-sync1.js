const readlineSync = require("readline-sync");
let userInput = readlineSync.question("Enter a word or phrase: ");
let index = readlineSync.questionInt("Enter an index number to find the character: ");

console.log("The character at index " + index + " is: " + userInput[index]);