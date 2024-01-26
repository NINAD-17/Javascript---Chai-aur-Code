// Memory
// 1. Stack Memory: Used in all primitive data types.
//      --> We get copy of variables that we declare.

// 2. Heap Memory: Used in non-primitive types.
//      --> We get reference of variable.


// Example of static memory
let myInstaUserName = "Insta123";
let myXuserName = myInstaUserName; // myXuserName gets copy of myInstaUserName

myXuserName = "Xuser123";
console.log(myInstaUserName);
console.log(myXuserName);

// Example of Heap memory
let userOne = {
    name: "userName",
    upi: "abc@ybl"
}

let userTwo = userOne; // userTwo gets reference of userOne. It means userTwo variable can change information from userOne also as both are pointing to same location.
userTwo.email = "userTwo@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

// ---->>> Note: See images of stack and heap in README.md ---------------------