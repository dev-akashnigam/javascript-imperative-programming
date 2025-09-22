const prompt = require('prompt-sync')();

console.log("Please enter the natural number till where sum is required: ");
const natNum = Number(prompt());

let sum = 0;
for(let i=1; i<=natNum; i++) {
    sum += i;
}

console.log(`Sum of first ${natNum} natural numbers = ${sum}`);