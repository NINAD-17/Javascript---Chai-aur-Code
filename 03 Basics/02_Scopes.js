var c = 300;

if (true) {
    let a = 20;
    const b = 20;
    var c = 20;
}

console.log(c); // Confusion. therefore don't use var. c's value is accessible outside of scope which isn't good.

// {} in any programming lauguage is a scope.

// Nested Scope
function one() {
    const username = "Taehyung";

    function two() {
        const website = "youtube.com";
        console.log(username);
    }

    // console.log(website); // Can't access website as it's in function two()

    two();
}

one();
// two(); // you need to call it from function one() only.


console.log(addOne(5)); // It can't give you any error and execute normally.
function addOne(num) {
    return num + 1;
}

addTwo(5); // It gives you an error because you've written function in different format. Hoisting concept.
const addTwo = function (num) {
    return num + 2;
}