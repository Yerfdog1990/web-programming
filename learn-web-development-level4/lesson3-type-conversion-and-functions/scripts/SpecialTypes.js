//  Variables are References
let NumArray = [2, 4, 5];
console.log(NumArray);
let NumArray2 = [...NumArray];
NumArray2.push(6);
console.log(NumArray2);
let array3 = NumArray;
array3.push(7);
console.log(array3);

// Null and Undefined
// 1. Initializing Variables
let myObject = null;
console.log(myObject);
let myArray = null;
console.log(myArray);

// 2. Checking for Undefined
let value;
if (value === undefined) {
    console.log("Variable is not initialized.");
}

// 3. Checking for Null
let result = null;
if (result === null) {
    console.log("No value present.");
}

// 4. Clearing Values
let person = { name: "Alice" };
person = null;
console.log(person);

// 5. Checking Property Existence
let obj = {};
if (obj.property === undefined) {
    console.log("Property does not exist.");
}