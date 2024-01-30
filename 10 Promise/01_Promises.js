// Promise 1

const promiseOne = new Promise(function(resolve, reject) {
    // resolve have relation with .then
    // Do async task
    setTimeout(function() {
        console.log("Async task is complete!");
        resolve();
    }, 5000);
});

promiseOne.then(function() {
    console.log("Promise consumed!");
});

// Promise 2
const promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "NINAD-17", email: "ninad@gmai.com"});
    }, 1000);
});

promiseTwo.then(function(userInfo) {
    console.log(userInfo);
})

// Promise 3
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // try this example by putting false here.
        if(!error) {
            resolve({username: "NINAD-17", password: "123"});
        } else {
            reject("Error: something went wrong!");
        }
    }, 1000);
});


// Below code will not work return value return to next then it's called chaining.
// const username = promiseThree.then((user) => {
//     console.log(user);
//     return user.username;
// });

// console.log(username); // Promise <pending>

// Chaining
promiseThree
.then((user) => {
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("The promise is either resolved or rejected!");
});

// Promise 4
// Async Await is same as .then, .catch
// Async waits for work to done. If work is done then only continue further. here, we don't handle catch.
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username: "JavaScript", password: "123"});
        } else {
            reject("Error: something went wrong!");
        }
    }, 1000);
});

async function consumePromiseFour() {
    try {
        const response = await promiseFour;
        console.log(response);
    } catch(err) {
        console.log(err);
    }
};

consumePromiseFour();

// Get all users
async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // const data = response.json(); // converting values to JSON takes some time so it needs to be wait until all data convert.
        const data = await response.json();
        console.log(data);
    } catch(err) {
        console.log("Error: ", err);
    }
}

getAllUsers();

// Above code in .then .catch format
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((err) => console.log(err));

// In this code, fetch runs first reason is in readme.md