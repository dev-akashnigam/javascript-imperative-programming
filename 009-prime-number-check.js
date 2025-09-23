const prompt = require('prompt-sync')();

console.log("Please enter a number: ");
const number = Number(prompt());

if(number<=1) {
    console.log(`Number ${number} is NOT PRIME.`);
}
else if(number == 2) {
    console.log(`Number ${number} is PRIME.`);
}
else if(number%2 == 0) {
    console.log(`Number ${number} is NOT PRIME.`);
}
else {
    const sqrt = Number.parseInt(Math.sqrt(number));

    let isPrime = true;
    for(let i=3; i<=sqrt; i+=2) {
        if(number%i == 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime) {
        console.log(`Number ${number} is PRIME.`);
    }
    else {
        console.log(`Number ${number} is NOT PRIME.`);
    }
}





