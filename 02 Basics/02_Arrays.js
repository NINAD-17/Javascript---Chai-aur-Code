const brands = ["Kakao", "Naver", "Hybe"];
const chaebols = ["Samsung", "Hyundai", "SK", "LG", "Lotte"];

// brands.push(chaebols); // Here brands array take chaebols as a single element. So Array includes another array
// console.log(brands);
// console.log(brands[3][0]); // To access 3rd index (array) elements. this isn't good code.

// Concat returns an array
// const allBrands = brands.concat(chaebols);
// console.log(allBrands);

// Better approach is to use spread operator
const allBrands = [...brands, ...chaebols];
console.log(allBrands);

// Flat: returns a new array with all sub-array elements concatenated into it recursively up to the specified deapth
const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const usable_another_Array = another_Array.flat(Infinity);
console.log(usable_another_Array);

// Make anyother data type to array
console.log(Array.isArray("Taehyung"));
console.log(Array.from("Taehyung"));
console.log(Array.from({name: "Taehyung"})); // It can't able to directly convert to array. So it gives you an empty array

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3));