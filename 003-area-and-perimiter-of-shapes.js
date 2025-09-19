const prompt = require('prompt-sync')();

console.log("Please enter the radius of circle: ")
const radiusOfCircle = Number(prompt());

console.log("Please enter the length of rectangle: ")
const lengthOfRectangle = Number(prompt());

console.log("Please enter the width of rectangle: ")
const widthOfRectangle = Number(prompt());

console.log("Please enter the length of first side of triangle: ")
const lengthOfFirstSideOfTriangle = Number(prompt());

console.log("Please enter the length of second side of triangle: ")
const lengthOfSecondSideOfTriangle = Number(prompt());

console.log("Please enter the length of third side of triangle: ")
const lengthOfThirdSideOfTriangle = Number(prompt());

const areaOfCircle = Math.PI * radiusOfCircle * radiusOfCircle;
const perimeterOfCircle = 2 * Math.PI * radiusOfCircle;

const areaOfRectangle = lengthOfRectangle * widthOfRectangle;
const perimeterOfRectangle = 2 * (lengthOfRectangle + widthOfRectangle);

const perimeterOfTriangle = lengthOfFirstSideOfTriangle + lengthOfSecondSideOfTriangle + lengthOfThirdSideOfTriangle;
const semiPerimeterOfTriangle = perimeterOfTriangle / 2;
const areaOfTriangle = Math.sqrt(semiPerimeterOfTriangle * Math.abs(semiPerimeterOfTriangle-lengthOfFirstSideOfTriangle) * Math.abs(semiPerimeterOfTriangle - lengthOfSecondSideOfTriangle) * Math.abs(semiPerimeterOfTriangle - lengthOfThirdSideOfTriangle));

console.log(`Area and Perimeter of Circle of radius: ${radiusOfCircle.toFixed(2)} = ${areaOfCircle.toFixed(2)}, ${perimeterOfCircle.toFixed(2)}`);
console.log(`Area and Perimeter of Rectangle of length: ${lengthOfRectangle.toFixed(2)} and width: ${widthOfRectangle.toFixed(2)} = ${areaOfRectangle.toFixed(2)}, ${perimeterOfRectangle.toFixed(2)}`);
console.log(`Area and Perimeter of Triangle of lengths: ${lengthOfFirstSideOfTriangle.toFixed(2)}, ${lengthOfSecondSideOfTriangle.toFixed(2)} and ${lengthOfThirdSideOfTriangle.toFixed(2)} = ${areaOfTriangle.toFixed(2)}, ${perimeterOfTriangle.toFixed(2)}`);


