// 2 Types to declare 
// 1. Literals = {}
// 2. Constructor = Object.create
// Singleton: When we use constructor to declare objects then singleton makes.

// Object Literals
const mySym = Symbol("key1");
const mySym2 = Symbol("key2");

const JsUser = {
    name: "Taehyung", // By default key(name) is processed as string("name")
    "fullName": "Kim Taehyung",
    age: 28,
    mySym: "myKey1",
    [mySym2]: "myKey2", // Now you're actually refering to Symbol mySym2. And also it can be accessed only by [...]
    location: "Seoul",
    email: "taehyung@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email); // This is not good method to access data from object
console.log(JsUser["fullName"]); // This is good method
// Reason: If you tried to access fullName which is written in string then by JsUser.fullName method it's not able to access.

console.log(JsUser.mySym); // It can't give you value in Symbol. It gives it in String
console.log(typeof JsUser.mySym); // String

console.log(typeof JsUser[mySym2]);
console.log(JsUser[mySym2]);

JsUser.email = "KimTaehyung@samsung.com";
console.log(JsUser.email);
// Object.freeze(JsUser); // To don't able to change values of object use this
// JsUser.email = "KimTaehyung@naver.com";
// console.log(JsUser);

// In JavaScript, you can treat function as a  variables.
// Before updating Object unfreeze the object by commenting above code.
JsUser.greeting = function() {
    console.log("Hello JavaScript User!");
}
console.log(JsUser.greeting); // [Function (anonymous)] --> returns reference of function. Not executed
console.log(JsUser.greeting());

JsUser.greeting2 = function() {
    console.log(`Hello JavaScript User, ${this.name}`); // When you want to reference same object then use this.
}
console.log(JsUser.greeting2());