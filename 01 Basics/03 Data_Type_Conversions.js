let score = "33";

console.log(typeof score);
console.log(typeof(score));
// Why we're checking type of variable?
// --> If frontend send data to backend but to process that data it needs to be check the datatype of variable.
//     As you see that score is in string data type but we need that in form of number to process.

let valueInNumber = Number(score); // Number is a class-based
console.log(typeof valueInNumber);
console.log(valueInNumber);

// Example of NaN
score = "33abc";
valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN - Not a Number

/**
 * "33" => 33
 * "33abc" => NaN
 * true and false => 1 and 0
 * null => 0
 * undefined => NaN
 */


let isTrue = 1;
let booleanIsTrue = Boolean(isTrue);
console.log(typeof booleanIsTrue);
console.log(booleanIsTrue);

/**
 * 1 => true
 * 0 => false
 * "" => false
 * "..." => true
 */