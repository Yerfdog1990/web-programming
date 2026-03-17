// 1. break Statement
// The break statement is used to exit a loop immediately, even if the condition is still true.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking out of the loop");
        break;
    }
    console.log(i); // Exits when i = 5
}

// 2. continue Statement
// The continue statement skips the current iteration and moves to the next one.
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping 3");
        continue;
    }
    console.log(i);
}

// for...of Loop
// Used to iterate over values in iterable objects like arrays, strings, etc.

// ✅ Example (Array)
let numbers = [10, 20, 30];

for (let num of numbers) {
    console.log(num);
}

// ✅ Example (String)
let text = "JS";

for (let char of text) {
    console.log(char);
}

// for...in Loop
// Used to iterate over object properties (keys).
let person = {
    name: "John",
    age: 25
};

for (let key in person) {
    console.log(key, person[key]);
}

// Infinite Loops
// An infinite loop happens when the condition never becomes false.

// ❌ Example (Bad)

/*
let z = 0;

while (z < 5) {
    console.log(z);
    // missing i++
}
*/
// ✅ Fixed Version
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// Nested Loops
// A loop inside another loop.
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}