const readlineSync = require("readline-sync");
let userInput = readlineSync.question("Enter a word or phrase: ");
let index = readlineSync.questionInt("Enter an index number to find the character: ");
let character = userInput[index];

console.log("The character at index " + index + " is: " + character);

// Output:
// Enter a word or phrase: Hola
// Enter an index number to find the character: 3
// The character at index 3 is: a
