// for of 
// These are array specific loops

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!";
for(const greet of greetings) {
    console.log(greet);
}


// Maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States");
map.set("KR", "Republic of Korea");
map.set("IN", "India"); // It will not store this value. Only unique values.

console.log(map);

for(const [key, value] of map) { // We destructured array to get keys and values separately.
    console.log(key, " :- ", value);
}


const myObj = {
    "game1": "BGMI",
    "game2": "GTA-VI",
}

// For of loop is not for objects
// for(const [key, value] of myObj) {
//     console.log(key, " :- ", value);
// } // Error