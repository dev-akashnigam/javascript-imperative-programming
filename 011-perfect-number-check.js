const prompt = require('prompt-sync')();

console.log("Please enter a number: ");
const number = Number(prompt());

let sumOfDivisors = 0;
const halfOfNumber = number / 2;
for(let i=1; i<=halfOfNumber; i++) {
    if(number%i == 0) {
        sumOfDivisors += i;
    }
}

if(sumOfDivisors == number) {
    console.log(`Number: ${number} is PERFECT NUMBER.`);
}
else {
    console.log(`Number: ${number} is NOT PERFECT NUMBER.`);
}