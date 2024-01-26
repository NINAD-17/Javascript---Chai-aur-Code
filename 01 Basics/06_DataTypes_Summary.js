// (1) Primitive types
//  --> 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
//  --> Primitive types are call by value it means they given as a copy not as a reference.

// (2) Referenced types (Non-primitive types)
// --> It's possible to give reference in a memory.
// --> types: Array, Object, Functions

// Note: JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

// Symbol Example
// Value of symbol is unique. If you pass same value to variables then also actual value is unique.
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id == anotherId);
console.log(typeof id); // Symbol

// Array
const Chaebols = ['Samsung', 'Hyundai', 'SK', 'LG', 'Lotte'];
console.log(typeof Chaebols); // Object

// Object
const myObj = {
    name: 'Kim',
    age: 22
}
console.log(typeof myObj); // Object

// In JavaScript, we can able to store function in a variable.
const myFunction = function() {
    console.log("Annyeong");
}
console.log(myFunction); // Object function