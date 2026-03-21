// 1. The forEach() Method
// Executes a function once for each element.
const numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach((number, index) => {
    console.log(`Index: ${index}, Value: ${number}`);
});

// 2. The map() Method
// Creates a new array by transforming each element.
const numbers2 = [1, 2, 3, 4, 5];

const squared = numbers2.map(number => number * number);

console.log(squared); // [1, 4, 9, 16, 25]

// 3. The filter() Method
// Creates a new array with elements that meet a condition.
const numbers3 = [1, 2, 3, 4, 5];

const evenNumbers = numbers3.filter(number => number % 2 === 0);

console.log(evenNumbers); // [2, 4]

// 4. The reduce() Method
// Reduces an array to a single value.
const numbers4 = [1, 2, 3, 4, 5];

const sum = numbers4.reduce((acc, number) => acc + number, 0);

console.log(sum); // 15

// 5. The some() Method
// Checks if at least one element satisfies a condition.
const numbers5 = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers5.some(number => number % 2 === 0);

console.log(hasEvenNumber); // true

// 6. The every() Method
// Checks if all elements satisfy a condition.
const numbers6 = [1, 2, 3, 4, 5];

const allPositive = numbers6.every(number => number > 0);

console.log(allPositive); // true

// 7. The find() Method
// Returns the first element that matches a condition.
const numbers7 = [1, 2, 3, 4, 5];

const firstEven = numbers7.find(number => number % 2 === 0);

console.log(firstEven); // 2

// 8. The findIndex() Method
// Returns the index of the first matching element.
const numbers8 = [1, 2, 3, 4, 5];

const firstEvenIndex = numbers8.findIndex(number => number % 2 === 0);

console.log(firstEvenIndex); // 1