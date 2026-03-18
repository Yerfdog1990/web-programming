// What Actually Happens When You Call a Function
function greet(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet("Alice", 25));

// What If Arguments Are Missing?
function add(a, b) {
    return a + b;
}

console.log(add(5)); // NaN

// Default Parameters (Modern Solution)
function greet2(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet2("Alice"));

// Default Parameters with Expressions
function calculatePrice(price, tax = price * 0.2) {
    return price + tax;
}

console.log(calculatePrice(100));

// Rest Parameters
function sumAll(...numbers) {
    return numbers;
}

console.log(sumAll(1, 2, 3, 4));

// With Fixed + Rest
function showItems(firstItem, ...others) {
  console.log(firstItem);
  console.log(others);
}

showItems("apple", "banana", "cherry");