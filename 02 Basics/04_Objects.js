// Singleton
const tinderUser = new Object(); // It's a singleton object
const tinderUser2 = {}; // It's a non-singleton object

console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "some@email.com",
    fullName: {
        userFullName: {
            firstName: "Sam",
            lastName: "sung"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);
// Optional Chaining: if fullName isn't exist then? so at that point we've to use ? --> fullName? It's useful in APIs

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = { obj1, obj2 }; // It gives you object inside object
const obj5 = Object.assign({}, obj1, obj2); // {} is optional but gives you guaranteed object with all elements. It means that all values are going in object {}. It acts as target. If you not give it then all values will go in obj1
const obj4 = { ...obj1, ...obj2 }; // It merge all object elements. Use this syntax. Spread operator
console.log("Obj3: ", obj3, "\nObj4: ", obj4);

console.log(Object.keys(tinderUser)); // It returns all keys in an array.
console.log(Object.values(tinderUser)); // It returns all values in an array
console.log(Object.entries(tinderUser)); // It returns all [key, value] an array. [[], [], []]

// Before applying any property you can check it if it's exist or not.
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // True
console.log(tinderUser.hasOwnProperty("isLogged")); // False



/**************** Destructuring **************** */
const course = {
    courseName: "JS Tutorial",
    price: "999",
    courseInstructor: "Kim Jay"
}

// course.courseInstructor // By this you can access data. But if you're using it multiple times then destructuring helps you to write clean code.
const { courseInstructor } = course;
console.log(courseInstructor);

// Or you can also able to give any name to it
const { courseInstructor: instructor } = course;
console.log(instructor);


// API 
// JSON example
// {
//     "name": "kim Jay",
//     "courseName": "JS Tutorial",
//     "price": "free"
// }

// When you get data from API in JSON then you can use jsonformatter.org to get data in good readable format.