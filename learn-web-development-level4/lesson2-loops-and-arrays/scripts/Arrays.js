// Creating Arrays

// 1. Using Array Literal (Most Common)
let array1 = []; // empty array
console.log("Empty array: ", array1);
let array2 = [1, 2, 3]; // numbers
console.log("Array of integers: ", array2);
let mixed = [1, "hello: ", true]; // mixed types
console.log("Array of mixed data types: ", mixed);

// 2. Using Array Constructor
let array4 = new Array(); // empty
console.log("Empty array: ", array4);
let array5 = new Array(3); // length 3 (empty slots)
console.log("Array with empty slots: ", array5);
let array6 = new Array(1, 2, 3); // with values
console.log("Array of integers: ", array6);

// Filling Array After Creation
let array = [];

array[0] = 'apple';
console.log("Array of string: ", array);
array[1] = 'banana';
console.log("Array of string: ", array);
array[2] = 'cherry';
console.log("Array of string: ", array);

// Accessing Array Elements
let fruits = ["Apple", "Banana", "Cherry"];

console.log("First element: ", fruits[0]); // Apple
console.log("Second element: ", fruits[1]); // Banana
console.log("Third element: ", fruits[2]); // Cherry

// Modifying Elements
let fruitArray = ["Apple", "Banana", "Cherry"];
console.log("Original array: ", fruitArray);

fruitArray[1] = "Blueberry";
console.log("After modification: ", fruitArray);
// ["Apple", "Blueberry", "Cherry"]

// Length Property
let fruitsArray = ["Apple", "Banana", "Cherry"];

console.log("Size of array: ", fruitsArray.length); // 3

//  Adding & Removing Elements
// 1. push() → Add to END
let fruitList = ['apple', 'banana'];
console.log("Original array: ", fruitList);

fruitList.push('cherry');

console.log("After adding element: ", fruitList); // ['apple', 'banana', 'cherry']
console.log("Length of array: ", fruitList.length); // 3

// 2. pop() → Remove from END
let fruitList2 = ['apple', 'banana', 'cherry'];
console.log("Original array: ", fruitList2);
let last = fruitList2.pop();

console.log("Last element: ", last);   // cherry
console.log("After removing element: " ,fruitList2); // ['apple', 'banana']

// 3. shift() → Remove from START
let fruitList3 = ['apple', 'banana', 'cherry'];
console.log("Original array: ", fruitList3);
let first = fruitList3.shift();

console.log("First element: ", first);  // apple
console.log("After shifting element: " ,fruitList3); // ['banana', 'cherry']

// unshift() → Add to START
let fruitList4 = ['banana', 'cherry'];

fruits.unshift('apple');

console.log("After unshifting element: " ,fruitList4); // ['apple', 'banana', 'cherry']
console.log("Array length: ", fruits.length); // 3