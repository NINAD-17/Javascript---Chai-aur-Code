let marvelHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy's power is ${this.spiderman}`);
    }
}

Object.prototype.taehyung = function() {
    console.log(`Taehyung is present in all objects! 😉`);
}

Array.prototype.heyTaehyung = function() {
    console.log(`Taehyung says hello from Array`);
}

// Add property in top level hierarchy that is Object.
heroPower.taehyung();
marvelHeros.taehyung();
marvelHeros.heyTaehyung(); 
// heroPower.heyTaehyung(); // Object has no access to Array's prototype that we defined.



// ------------------- Inheritance ----------------
// Prototypal inheritance ----------------
// Old syntax
const User = {
    name: "Taehyung",
    email: "taehyung@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// Modern Syntax
// setPrototypeOf is same as __proto__
Object.setPrototypeOf(TeachingSupport, Teacher);