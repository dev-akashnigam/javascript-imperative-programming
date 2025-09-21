const prompt = require('prompt-sync')();

console.log("Please enter the year: ");
const year = Number(prompt());

if(year%100 == 0) {
    if(year%400 == 0) {
        console.log(`Year: ${year} is a leap year`);
    }
    else {
        console.log(`Year: ${year} is NOT a leap year`);
    }
}
else {
    if(year%4 == 0) {
        console.log(`Year: ${year} is a leap year`);
    }
    else {
        console.log(`Year: ${year} is NOT a leap year`);
    }
}