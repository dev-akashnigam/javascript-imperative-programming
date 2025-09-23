const prompt = require('prompt-sync')();

console.log("Please enter a number: ");
let number = Number(prompt());
let numberFirstCopy = number;

let totalDigits = 0;
while(number!=0) {
    number = Number.parseInt(number / 10);
    totalDigits++;
}

number = numberFirstCopy;

let sum = 0;
while(number!=0) {
    let lastDigit = number % 10;
    sum = sum + Number.parseInt(Math.pow(lastDigit, totalDigits));

    number = Number.parseInt(number / 10);
}

if(sum == numberFirstCopy) {
    console.log(`Number ${numberFirstCopy} is ARMSTRONG NUMBER.`);
}
else {
    console.log(`Number ${numberFirstCopy} is NOT ARMSTRONG NUMBER.`);
}