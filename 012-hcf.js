const prompt = require('prompt-sync')();

console.log("Please enter the first number: ");
const firstNum = Number(prompt());

console.log("Please enter the second number: ");
const secondNum = Number(prompt());

let largerNum;
let smallerNum;

if(firstNum > secondNum) {
    largerNum = firstNum;
    smallerNum = secondNum;
} 
else {
    largerNum = secondNum;
    smallerNum = firstNum;
}

let hcf = 1;
for(let i=smallerNum; i>1; i--) {
    if(firstNum%i ==0 && secondNum%i==0) {
        hcf = i;
        break;
    }
}

console.log(`HCF of ${firstNum} and ${secondNum} = ${hcf}`);
