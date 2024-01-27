function sayMyName() {
    console.log("N");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("D");
}

sayMyName; // It's reference of function
sayMyName(); // It's execution of function


function addTwoNumbers(num1, num2) { // Parameters
    console.log(num1 + num2);
}

const result = addTwoNumbers(3, 4); // Arguments
console.log(result); // undefined. As the function have not returned any value.

function addTwoNums(num1, num2) {
    return num1 + num2;
    console.log("unreachable code!"); // code after return will not execute.
}
console.log(addTwoNums(3, 4)); 

function loginUserMessage(username = "Sam") {
    if(username === undefined) { // Or you can use default value `username = "sam"`
        console.log("Please enter a username!");
        return; 
    }
    return `${username} just logged in!`;
}
console.log(loginUserMessage("Taehyung"));
console.log(loginUserMessage()); // here you've not passed any value so it gives you 'undefined just logged in!'


// If you don't know about total numbers of arguments then use, rest operator (...__)
function calculateCartPrice(val1, val2, ...num) {
    return num; // It returns an array
}

console.log(calculateCartPrice(200, 400, 900, 800)); // 200 = val1, 400 = val2, 900, 800 = number


const user = {
    username: "Taehyung",
    age: "28"
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and age is ${anyObject.age}`);
}

handleObject(user);

const myNewArr = [100, 200, 400, 300];
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArr));