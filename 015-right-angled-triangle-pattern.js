const prompt = require('prompt-sync')();

console.log("Please enter the number of rows required in the right angled triangle: ");
const rowCount = Number(prompt());

for(let row=1; row<=rowCount; row++) {
    for(let col=1; col<=row; col++) {
        process.stdout.write("* ");
    }
    console.log();
}