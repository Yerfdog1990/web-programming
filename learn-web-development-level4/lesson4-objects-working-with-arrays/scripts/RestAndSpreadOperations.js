// Spread Operator (...)

// 1. Copying an Array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray);

// 2. Merging Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log(combinedArray);

// 3. Passing Arguments to Functions
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

// 4. Copying an Object
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(copiedObject);

// 5. Merging Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObject = { ...obj1, ...obj2 };

console.log(combinedObject);

// Rest Operator (...)

// 1. Rest Parameters in Functions
function sum1(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum1(1, 2, 3));
console.log(sum1(4, 5, 6, 7));

// 2. Array Destructuring with Rest
const [first, second, ...rest1] = [1, 2, 3, 4, 5];

console.log(first);
console.log(second);
console.log(rest1);

// 3. Object Destructuring with Rest
const { a, b, ...rest2 } = { a: 1, b: 2, c: 3, d: 4 };

console.log(a);
console.log(b);
console.log(rest2);

// Real-World Applications

// 1. Merging Objects with Overrides
const defaultSettings = { theme: 'dark', showNotifications: true };
const userSettings = { showNotifications: false, fontSize: 14 };

const settings = { ...defaultSettings, ...userSettings };

console.log(settings);

// 2. Splitting Arrays
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8];

const [first3, second3, ...rest] = numbers4;

const firstHalf = rest.slice(0, Math.floor(rest.length / 2));
const secondHalf = rest.slice(Math.floor(rest.length / 2));

console.log(firstHalf);
console.log(secondHalf);