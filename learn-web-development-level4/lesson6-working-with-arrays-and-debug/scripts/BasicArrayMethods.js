// 1. The splice() Method
// The splice() method is used to modify an array in place by:
// Removing elements
// Adding elements
// Replacing elements

// Example 1: Removing Elements
let fruits1 = ['apple', 'banana', 'cherry', 'date', 'fig'];

let removed = fruits1.splice(2, 2);

console.log(fruits1);  // ['apple', 'banana', 'fig']
console.log(removed); // ['cherry', 'date']


// Example 2: Adding Elements
let fruits2 = ['apple', 'banana', 'cherry'];

fruits2.splice(2, 0, 'date', 'fig');

console.log(fruits2);
// ['apple', 'banana', 'date', 'fig', 'cherry']

// Example 3: Replacing Elements
let fruits3 = ['apple', 'banana', 'cherry'];

fruits3.splice(1, 1, 'date', 'fig');

console.log(fruits3);
// ['apple', 'date', 'fig', 'cherry']


// The slice() Method
// The slice() method creates a new array by copying part of an existing array.

// Example 1: Copy Part of Array
let fruits4 = ['apple', 'banana', 'cherry', 'date', 'fig'];

let sliced1 = fruits4.slice(1, 3);

console.log(sliced1);
// ['banana', 'cherry']


// Example 2: From Beginning
let fruits5 = ['apple', 'banana', 'cherry'];

let sliced2 = fruits5.slice(0, 2);

console.log(sliced2);
// ['apple', 'banana']

// Example 3: To End
let fruits6 = ['apple', 'banana', 'cherry'];

let sliced3 = fruits6.slice(1);

console.log(sliced3);
// ['banana', 'cherry']

// The concat() Method
// The concat() method merges arrays into a new array.

// Example 1: Merge Two Arrays
let fruitsa = ['apple', 'banana'];
let fruitsb = ['cherry', 'date'];

let combined1 = fruitsa.concat(fruitsb);

console.log(combined1);
// ['apple', 'banana', 'cherry', 'date']

// Example 2: Merge Multiple Arrays
let fruitsc = ['apple', 'banana'];
let fruitsd = ['cherry', 'date'];
let fruitse = ['fig', 'grape'];

let combined2 = fruitsc.concat(fruitsd, fruitse);

console.log(combined2);
// ['apple', 'banana', 'cherry', 'date', 'fig', 'grape']


// Example 3: Add Elements
let fruits7 = ['apple', 'banana'];

let moreFruits = fruits7.concat('cherry', 'date');

console.log(moreFruits);
// ['apple', 'banana', 'cherry', 'date']


// The indexOf() Method
// The indexOf() method finds the first occurrence of an element.

// Example 1: Element Found
let fruits8 = ['apple', 'banana', 'cherry'];

let index1 = fruits8.indexOf('banana');

console.log(index1); // 1


// Example 2: Element Not Found
let fruits9 = ['apple', 'banana', 'cherry'];

let index2 = fruits9.indexOf('date');

console.log(index2); // -1

// Example 3: Start Searching from Index
let fruits10 = ['apple', 'banana', 'cherry', 'banana'];

let index3 = fruits10.indexOf('banana', 2);

console.log(index3); // 3

