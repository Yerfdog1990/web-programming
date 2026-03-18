// Explicit Type Conversion

// 1. Conversion to String
// Method 1: String(value)
// The String() function converts any value into a string.
let num1 = 123;
let str1 = String(num1);

console.log(typeof str1); // "string"

// Method 2: value.toString()
// The toString() method is used to convert a value (usually a primitive or object) into a string.
let bool1 = true;
let str2 = bool1.toString();

console.log(typeof str2); // "string"

// Conversion to Number
// Method 1: Number(value)
// The Number() function converts a value into a number.
let str3 = "456";
let num2 = Number(str3);

console.log(typeof num2); // "number"

// Method 2: parseInt(value, base)
// Converts a string into an integer.
let str4 = "123";
let num3 = parseInt(str4, 10);

console.log(typeof num3); // "number"

// Method 3: parseFloat(value)
// Converts a string into a floating-point number.
let str5 = "123.45";
let num4 = parseFloat(str5);

console.log(typeof num4); // "number"

// Conversion to Boolean
// Method: Boolean(value)
// Converts a value into a boolean (true or false).
let str6 = "";
let bool2 = Boolean(str6);

console.log(typeof bool2); // "boolean"

// Implicit Type Conversion

// 1. Conversion to String
// Rule: Whenever a string is involved in addition (+), JavaScript converts other values into strings.
let result1 = "The number is " + 123;

console.log(result1); // "The number is 123"

// Conversion to Number
// Rule: When using arithmetic operators (except +), JavaScript converts strings into numbers.
let result2 = "123" - 5;

console.log(result2); // 118

// Conversion to Boolean
// Rule: Values are converted to boolean when used in: if statements, loops, and logical expressions
let value = "hello";

if (value) {
    console.log("Value is truthy");
}

if ("") {
    console.log("This won't be logged.");
} else {
    console.log('"" is considered false in a boolean context.');
}