// 1. Logical AND (&&)
// The AND operator (&&) returns true only if both conditions are true.
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive.");
}

// 2. Logical OR (||)
// The OR operator (||) returns true if at least one condition is true.
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("Today is a day off.");
}

// 3. Logical NOT (!)
// The NOT operator (!) reverses a boolean value.
let isRaining = false;

if (!isRaining) {
    console.log("You can go for a walk.");
}

// 4. Comparison Operators
// Comparison operators return boolean values, often used with logical operators.
console.log(5 == '5');   // true
console.log(5 === '5');  // false
console.log(5 != '5');   // false
console.log(5 !== '5');  // true
console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 >= 10);  // true
console.log(10 <= 5);   // false

// 5. Combining Operators
// You can combine multiple logical operators:
let ages = 20;
let hasLicenses = true;
let hasCar = false;

if ((ages >= 18 && hasLicenses) || hasCar) {
    console.log("You can travel");
}

// Short-Circuit Evaluation

// 1. AND (&&) Short-Circuit
// 👉 Returns the first falsy value, or the last value if all are true
console.log(5 && 10); // 10
console.log(0 && 10); // 0
console.log(5 && 0); // 0
console.log(0 && 0); // 0

// 2. OR (||) Short-Circuit
// 👉 Returns the first truthy value, or the last value if all are false
console.log(5 || 15); // 5
console.log(0 || 5); // 5
console.log(5 || 0); // 5
console.log(0 || 0); // 0

// 3. NOT (!) and Double NOT (!!)
console.log(!true);  // false
console.log(!0);     // true

// Convert to Boolean
console.log(!!"hello"); // true
console.log(!!0);       // false

// Bitwise Operator

// 1. Bitwise AND (&)
// Returns 1 only if both bits are 1.
console.log(5 & 3);

// 2. Bitwise OR (|)
// Returns 1 if at least one bit is 1
console.log(5 | 3);

//3. Bitwise XOR (^)
// Returns 1 if bits are different
console.log(5 ^ 3);

// 4. Bitwise NOT (~)
// Flips all bits.
console.log(~5); // -6

// 5. Left Shift (<<)
// Shifts bits to the left (multiply by 2)
console.log(5 << 1); // 10

// 6. Right Shift (>>)
// Shifts bits to the right (divide by 2)
console.log(5 >> 1); // 2