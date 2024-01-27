// Map
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNums.map( (num) => num + 10 );
console.log(newNums);

// Chaining
// In this we can use multiple methods directly
newNums = myNums.map((num) => num * 10) // Here, result of this map will pass to 2nd map
                .map((num) => num + 1)
                .filter((num) => num >= 40);
console.log(newNums);