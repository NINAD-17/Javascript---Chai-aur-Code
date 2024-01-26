const name = "Taehyung";
const repoCount = 50;
const gameName = new String("Grand-Theft-Auto"); // You can also use this to declare string.

// console.log(name + repoCount + " GitHub"); // Outdated Syntax! Don't use it.

// String Interpolation: New syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

console.log(name[0]);
console.log(name.__Proto__); // You don't need to use proto to access methods on that string.
console.log(name.lenght); 
console.log(name.toUpperCase()); // As you can see, we don't use __Proto__ before that method.
console.log(name.charAt(3));
console.log(name.indexOf('T'));

const newString = gameName.substring(0, 5); // Can't able to give negative values
console.log(newString);

const anotherString = gameName.slice(-8, 4); // Can use -ve values as well
console.log(anotherString);

const newStringOne = "     Kim    ";
console.log(newStringOne);
console.log(newStringOne.trim()); // Remove white spaces

const url = "https://google.com/search?q=samsung%20galaxy";
console.log(url.replace("%20", '-'));
console.log(url.includes("samsung"));

// to convert string into array
console.log(gameName.split("-"));