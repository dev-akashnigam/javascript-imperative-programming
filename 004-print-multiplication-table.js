const prompt = require('prompt-sync')();

console.log("Please enter a number: ");
const num = Number(prompt());

for(let i=1; i<=10; i++) {
    console.log(`${num} X ${i} = ${num*i}`);
}