// This
const user = {
    username: "Taehyung",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${username}, welcome to website`); // Wrong
        console.log(`${this.username}, welcome to website`);
        // Here you can't able to simply use '${username}'
        // When you're refering current context you need to use this keyword
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

console.log(this); // It gives you an output: {}
// In node environment, this refers to an empty object

// Note: But in browser's console, you will get an ouput as a window object
// Window object is a global object in the browser.


function one() {
    let username = "Taehyung";
    console.log(this);
    console.log(this.username); // undefined // It will not work in functions.
}
one(); // You will get many values when you see this in a function.


// Arrow Functions
const two = () => {
    let username = "sam";
    console.log(this); // {}. Here you will not get values of this.
}
two();


// const addTwo = (num1, num2) => {
//     return num1 + num2; // Explicit return
// }

// You can write above code as,
const addTwo = (num1, num2) => num1 + num2; // Implicit return

// But to return object you must need to wrap values in (..)
const objRet = () => ({username: "Taehyung"});
console.log(objRet());