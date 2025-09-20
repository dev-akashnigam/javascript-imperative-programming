const prompt = require('prompt-sync')();

console.log("Please enter a number: ");
const num = Number(prompt());

if(num%2 == 0) {
    console.log(`Number: ${num} is even.`);
}
else {
    console.log(`Number: ${num} is odd.`);
}