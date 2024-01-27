// Immediately Invoked Function Expression (IIFE)
// sometimes because of pollution in global scope, problems can arise
// To remove this pollution, we use IIFE.
// It immediately executes the function.

(function connect() {
    console.log("DB CONNECTED");
})(); 
// In above code ';' is must. It tells code that where to stop.

// Here, ()() first () = function defination and second () = execution

// Using arrow function
((name) => {
    console.log(`DB CONNECTED ${name}`);
})("Sam");