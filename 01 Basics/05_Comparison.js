// >
// <
// >=
// <=
// == 
// !=

// Comparison between two different datatypes
console.log("2" > 1); // True - Here "2" is converted to Number.

// Note: whenever you compare any value then always ensure that datatype of both is same otherwise it may give you unpredictable result.

// In JS, > < >= <= and == work differently. In comparison operators null becames 0 as a number but in case of == it doesn't work like that.
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// Strict Check: ===
// It checks value as well as datatype.
console.log("2" == 2); // true
console.log("2" === 2); // false
