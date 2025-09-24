const prompt = require('prompt-sync')();

console.log("Please enter the first number: ");
const firstNum = Number(prompt());

console.log("Please enter the second number: ");
const secondNum = Number(prompt());

let largerNumber;
let smallerNumber;
if(firstNum > secondNum) {
    largerNumber = firstNum;
    smallerNumber = secondNum;
}
else {
    largerNumber = secondNum;
    smallerNumber = firstNum;
}

let lcm;
let multiple = 1;
while(true) {
    if(((largerNumber*multiple) % smallerNumber) == 0) {
        lcm = largerNumber*multiple;
        break;
    }
    multiple++;
}

console.log(`LCM of ${firstNum} and ${secondNum} = ${lcm}`);