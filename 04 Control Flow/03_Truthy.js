// Truthy and Falsy values
// We assume some values as true or false.

let userEmail = "user@example.com"; 

if(userEmail) { // Here, we not compare any values. We just assume that if there is any value in userEmail then it will definitely true.
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

userEmail = "";
if(userEmail) { // Here, as there is no value it executes else statement
} else {
    console.log("Don't have user email");
}


// Falsy values
// false, 0, -0, BigInt (0n), "", null, undefined, NaN

// Truthy values
// true, "0", "false", " ", [], {}, function(){}


// To check if an array is empty or not
userEmail = [];
if(userEmail.length === 0)
    console.log("Empty");

// To check if an object is empty or not
userEmail = {};
if(Object.keys(userEmail).length === 0)
    console.log("Object is Empty");



// false == 0 ---> true
// false == " " ---> true
// 0 == " " ---> true


// Nullish Coalescing Operator (??): null undefined
// Sometimes when you call from database, then you not get response directly
// you get two values. So the chances are that you get null/undefined response

let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = undefined ?? 10; // 10
val1 = null ?? 10 ?? 15; // 10 It takes first value

console.log(val1);

// Ternary Operator:
// condition? true: false;

const iceAmericanoPrice = 100;
iceAmericanoPrice >= 80? console.log("Greater than 80"): console.log("Less than 80");