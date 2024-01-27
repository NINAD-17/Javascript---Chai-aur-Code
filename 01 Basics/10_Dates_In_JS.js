// Dates
// It calculates dates in milliseconds since the midnight of January 1, 1970 UTC
// It's not easy to handle dates in milliseconds. 
// So JS recommends using TC39's temporal API in future when it will implements in all browsers

// But for now you've to use as it is.

let myDate = new Date();
console.log(myDate); // 2024-01-26T14:14:00.059Z
console.log(myDate.toString()); // Fri Jan 26 2024 19:44:00 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Fri Jan 26 2024
console.log(myDate.toISOString()); // 2024-01-26T14:17:46.483Z
console.log(myDate.toJSON()); // 2024-01-26T14:17:46.483Z
console.log(myDate.toLocaleDateString()); // 1/26/2024
console.log(myDate.toLocaleString()); // 1/26/2024, 7:47:46 PM
console.log(myDate.toLocaleTimeString()); // 7:47:46 PM

console.log(typeof myDate); // Object

// To declare specific date
// Remember that months are starting from 0 in javascript
let createNewDate = new Date(2024, 0, 23);
let createNewDate2 = new Date("2024-01-23");
console.log(createNewDate);
console.log(createNewDate2);

// Timestamps
let myTimeStamp = Date.now(); // Helpful to find exact time (in millisecond). used in quizes etc.
console.log(myTimeStamp); 

// To compare times
console.log(createNewDate.getTime());
console.log(myTimeStamp - createNewDate.getTime());

// To convert milliseconds to seconds
console.log(Date.now() / 1000); // But it give decimal value
console.log(Math.floor(Date.now() / 1000));

// If you want to get specific information from Date such as day, year etc
let newDate = new Date();
console.log(newDate.getDay()); // Starts from monday (1)

// In toLocaleString we can define many properties
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: 'Asia/seoul'
}))