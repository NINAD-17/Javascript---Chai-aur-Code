// For In
// For of loop only works for array and not for objects
// For in loops works for both
const myObj = {
    js: "javascript",
    cpp: "c++",
    py: "python",
    rb: "ruby"
}

for(const key in myObj) {
    console.log(`key: ${key} ---- value: ${myObj[key]}`);
}

// In for in loop, it gives keys and not values unlike for of which give values.
// Key of arrays starts with 0 and by default numbers. therefore object was created to make keys you want for values.
const programming = ["js", "py", "cpp", "rb"];
for(const key in programming) {
    console.log(`${key} ---> ${programming[key]}`);
}


// For in --> maps
// Map isn't iteratable.
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States");
map.set("KR", "Republic of Korea");
map.set("IN", "India"); // It will not store this value. Only unique values.

// for(const key in map) {
//     console.log(key); 
// } // It's not possible.