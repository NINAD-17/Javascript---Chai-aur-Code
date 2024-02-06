// Array

const myArr = [0, 1, 2, 3, 4];
const myArr2 = [0, 1, 2, 3, 4, true, "abc"]; // In JS, array can contain multiple datatypes also.
const chaebols = new Array("Samsung", "Hyundai", "SK", "LG", "Lotte");

console.log(myArr[1]);

// Array creates shallow copies.
// 1. Shallow Copy: It's a copy whose properties share the same references as those of the source object
// 2. Deep Copy: Properties don't share the same reference

// Array Methods
myArr.push(5);
console.log(myArr);

myArr.pop();
console.log(myArr);

// Unshift
myArr.unshift(9); 
console.log(myArr);
// here, 9 will be added at 0th index and all other elements from 0 will shift 1 index.
// So this is time consuming operation if array is very big. and all index will change
myArr.shift(); // It's like a pop operation but it will do it in front of array.
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(4));

const newArr = myArr.join(); // Adds all elements in string.
console.log(newArr);
console.log(typeof newArr); // string

// Slice and Spice
// Unlike slice, spice operation manipulates the original array.
// It means [1, 3] here from 1 to 3 indexes are cut from original array.
console.log("A) ", myArr);

const myn1 = myArr.slice(1, 3); // [1, 3)
console.log(myn1);

console.log("B) ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C) ", myArr);
console.log(myn2);
