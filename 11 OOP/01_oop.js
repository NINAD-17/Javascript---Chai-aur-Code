const User = {
    username: "Taehyung",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log("this:", this);
    }
};

console.log(User.username);
console.log(User.getUserDetails());


// Constructor Function ------------------
const promiseOne = new Promise(() => {}); // new keyword is the constructor function

function User2(username, loginCount, isLoggedIn) {
    this.username = username; // this.username is the variable.
    // this allows us to write same name as that value and differentiate it by using this keyword.
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this; // this statement is defined implicitly. So don't need to use it. But you should use it to good understanding.
}

// const userOne = User2("Suga", 12, true);
// const userTwo = User2("Jhope", 14, false); // this overwrites all the values. So you can't able to store multiple instances.
// console.log(userOne);

// use new keyword to create separate instances
const userOne = new User2("Suga", 12, true);
const userTwo = new User2("Jhope", 14, false); 
console.log(userOne);
console.log(userTwo);   
console.log(userOne.constructor); // Function: User2