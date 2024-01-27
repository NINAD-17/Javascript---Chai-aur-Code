// For Each
// It's a higher order function
const coding = ["js", "cpp", "py", "java", "rb"];


// For Each contain a callback function
// Callback function don't have any name.
// all array's elements are get by function as a parameter
coding.forEach( function (item) {
    console.log(item);
});

// using arrow function
coding.forEach((item) => {
    console.log(item);
});


// Or you can define function separately and give reference of it in forEach loop
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);

// For Each give you other parameters such as index and array
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})


// Array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
];

myCoding.forEach( (item) => {
    console.log(`${item.languageName} ----> ${item.languageFileName}`);
});