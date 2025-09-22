const prompt = require('prompt-sync')();

console.log("Please enter a number: ");
const num = Number(prompt());

let originalNum = num;
let reversedNum = 0;

while(originalNum!=0) {
    let lastDigit = originalNum % 10;
    reversedNum = reversedNum * 10 + lastDigit;

    originalNum = Number.parseInt(originalNum / 10);
}

console.log(`Reverse of number ${num} = ${reversedNum}`);