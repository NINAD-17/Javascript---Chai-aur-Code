// getOwnPropertyDescriptor shows you hidden properties of an object
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

/* output: 
    {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
    }

    You can't able to make writable property true. Because it's hardcoded in JS and have multiple checks written in c++ so you can't able to change it.
    We can use this to include some hardcoded values in our framework.
*/


console.log(Math.PI); // Constant value
Math.PI = 5; // It will not work
console.log(Math.PI);


// const myNewObject = Object.create(null); // We can also create an object using this syntax
const coffee = {
    name: "cold coffee",
    price: 250,
    isAvailable: true,
    
    orderCoffee: function() {
        console.log("Coffee isn't ready yet :(");
    }
}

console.log(Object.getOwnPropertyDescriptor(coffee, "name"));
Object.defineProperty(coffee, "name", {
    writable: false,
    enumerable: true
});
console.log(Object.getOwnPropertyDescriptor(coffee, "name"));


for (let [key, value] of Object.entries(coffee)) {
    if(typeof value !== "function") 
        console.log(`${key}: ${value}`);
}