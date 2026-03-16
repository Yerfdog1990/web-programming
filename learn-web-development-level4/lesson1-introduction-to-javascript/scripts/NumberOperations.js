// Number types
let integer = 42;
console.log(typeof (integer))// Integer
let float = 3.14;
console.log(typeof (float))// Floating-point number
let bigInt = 12345678901234567890n;
console.log(typeof (bigInt))// Big integer

// Arithmetic Operations
let a = 10;
let b = 3;

console.log("a + b = ", a + b); // 13
console.log("a - b = ", a - b); // 7
console.log("a * b = ", a * b); // 30
console.log("a / b = ", a / b); // 3.333...
console.log("a % b = ", a % b); // 1
console.log("a ** b = ", a ** b); // 1000

// Increment and Decrement
let x = 5;
console.log("x => original value: ", x);
console.log("++x => increment first: ", ++x); // 6 (increment first)

let y = 5;
console.log("\ny => original value: ", y);
console.log("y++ => returns old value: ", y++); // 5 (returns old value)
console.log("y => after increment: ", y);   // 6

let m = 5;
console.log("\nm => original value: ", m);
console.log("--m => decrement first: ", --m); // 4 (decrement first)

let n = 5;
console.log("\nn => original value: ", n);
console.log("n-- => returns old value: ", n--); // 5 (returns old value)
console.log("n => after decrement: ", n);   // 4

// Combined Assignment Operations
let r = 10;

r += 5;  // r = 15
console.log("\n10 += 5: ", r);
r -= 3;  // r = 12
console.log("15 -= 3: ", r);
r *= 2;  // r = 24
console.log("12 *= 2: ", r);
r /= 4;  // r = 6
console.log("24 /= 4: ", r);
r %= 4;  // r = 2
console.log("6 %= 4: ", r);

// Built-in Math Methods

// 1. Math.round()
let rounded = Math.round(4.6);
console.log("\nMath.round(4.6) = ", rounded); // 5

// 2. Math.ceil()
let ceil = Math.ceil(4.2);
console.log("Math.ceil(4.2) = ", ceil); // 5

// 3. Math.floor()
let floor = Math.floor(4.8);
console.log("Math.floor(4.8) = ", floor); // 4

// 4. Math.random()
let random = Math.random();
console.log("Math.random() = ", random);

// 5. Math.max() and Math.min()
let max = Math.max(10, 20, 30, 40, 5);
console.log("Math.max(10, 20, 30, 40, 5) = ", max);

let min = Math.min(10, 20, 30, 40, 5);
console.log("Math.min(10, 20, 30, 40, 5) = ", min);

// 6. Math.sqrt()
let squareRoot = Math.sqrt(16);
console.log("Math.sqrt(16) = ", squareRoot);

// 7. Math.pow()
let power = Math.pow(2, 3);
console.log("Math.pow(2, 3) = ", power);

// Parsing Strings to Numbers

// 1. parseInt() -> Converts a string into an integer.
let parsedInt = parseInt("123");
console.log("Type = ", typeof (parsedInt));
console.log("Value = ", parsedInt);

// 2. parseFloat() -> Converts a string into a floating-point number.
let parsedFloat = parseFloat("3.14");
console.log("Type = ", typeof (parsedFloat));
console.log("Value = ", parsedFloat);

// 3. Number() -> Converts a string into a number.
let converted = Number("789");
console.log("Type = ", typeof (converted));
console.log("Value = ", converted);

// Value Checking Functions

// 1. isNaN() -> Checks if a value is NaN (Not a Number).
console.log("isNaN(NaN) = ", isNaN(NaN)); // true
console.log("isNaN(123) = ", isNaN(123)); // false

// 2. isFinite() -> Checks if a value is finite (not infinite or NaN).
console.log("isFinite(123) = ", isFinite(123)); // true
console.log("isFinite(Infinity) = ", isFinite(Infinity)); // false

// Number Features in JavaScript

// 1. Number Limits
console.log("Maximum number value: ", Number.MAX_VALUE);
console.log("Minimum number value: ", Number.MIN_VALUE);

// 2. Number Precision
// Floating-point arithmetic can sometimes produce unexpected results.
let sum = 0.1 + 0.2;

console.log(sum);

// 3. Safe Integers
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);