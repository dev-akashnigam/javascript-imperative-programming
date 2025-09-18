// Read two numbers and print their sum, difference, product, and quotient.

const prompt = require('prompt-sync')();

console.log("Please enter the first number: ");
const firstNum = Number(prompt());

console.log("Please enter the second number: ");
const secondNum = Number(prompt());

const sum = firstNum + secondNum;
const diff = firstNum - secondNum;
const product = firstNum * secondNum;
const quotient = firstNum / secondNum;

console.log(`Sum = ${sum}`);
console.log(`Difference = ${diff}`);
console.log(`Product = ${product}`);
console.log(`Quotient = ${quotient}`);

