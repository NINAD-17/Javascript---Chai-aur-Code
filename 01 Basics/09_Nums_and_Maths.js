const score = 400;
console.log(score);

const balance = new Number(100); // To explicitly define datatype as a number
console.log(balance);

console.log(balance.toString()); // to make it string
console.log(typeof balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // It reduce precision value upto 2 digits. Very useful in ecommerce apps

let otherNumber = 23.899;
console.log(otherNumber.toPrecision(3)); // It gives precise value upto _ digits (here, _ = 3)
otherNumber = 123.899;
console.log(otherNumber.toPrecision(3)); // 124

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // to make it easier to read, it includes comma in between.


/* ++++++++++++ Maths +++++++++++++*/
console.log(Math); // Run this code in browser's console to get all properties.

console.log(Math.abs(-4)); // Absolute value: to make negetive values positive
console.log(Math.round(4.6)); // If > 5 then greater number else nearest smaller number
console.log(Math.ceil(4.2)); // It always rounds number to the nearest greater value unlike round.
console.log(Math.floor(4.6)); // It always rounds number to the nearest smaller number

console.log(Math.min(1, 2, 3, 4));
console.log(Math.max(1, 2, 3, 4));

console.log(Math.random()); // It's value is always lies in between 0 and 1
console.log(Math.random() * 10); // [0 to 9];
console.log((Math.random() * 10) + 1); // [1 to 10]

const min = 10;
const max = 20;
console.log(Math.floor((Math.random() * (max - min + 1))) + min);

// Math.random()
// --> It gives values between 0 and 1. Ex - 0.05
// --> Math.random() * 10 It gives values between 0 (inclusive) and 10 (exclusive). Ex - 9.99
// --> Math.floor(Math.random() * 10) It gives values between 0 to 9 (both inclusive).
