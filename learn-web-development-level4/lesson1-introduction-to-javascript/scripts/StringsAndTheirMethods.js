// Strings can be created using three types of quotation marks:
let singleQuote = 'Hello, World!';
console.log(singleQuote);
let doubleQuote = "Hello, World!";
console.log(doubleQuote);
let backticks = `Hello, World!`;
console.log(backticks);

// Basic String Methods

// 1. Property length
let str = 'Hello world';
console.log("Length of 'Hello': ", str.length);

// 2. Method charAt(index)
console.log("Character at index 0: ", str.charAt(0));

// 3. Methods toUpperCase() and toLowerCase()
console.log("Uppercase: ", str.toUpperCase());
console.log("Lowercase: ", str.toLowerCase());

// 4. Method indexOf(substring)\
console.log("Index of 'l': ", str.indexOf('l'));
console.log("Index of 'o': ", str.indexOf('o'));

// 5. Method includes(substring)
console.log("Does 'Hello' include 'l': ", str.includes('l'));

// 6. Method trim()
console.log("Trimmed string: ", str.trim());

// 7. Method replace(searchValue, newValue)
console.log("String with 'l' replaced with 'i': ", str.replace('l', 'i'));

// 8. Method split(separator)
console.log("Split string: ", str.split('')); // Splits by every character
console.log("Split string: ", str.split(' ')); // Splits by spaces

// 9. Method substring(start, end)
console.log("Substring: ", str.substring(0, 5));

// 10. Method substr(start, length)
console.log("Substring: ", str.substr(0, 5)); // Same as substring(), although already deprecated

// 11. Method slice(start, end)
console.log("Slice: ", str.slice(0, 3));

// 12. Method startsWith(substring)
console.log("Does 'Hello' start with 'H': ", str.startsWith('H'));

// 13. Method endsWith(substring)
console.log("Does 'Hello world' end with 'o': ", str.endsWith('o'));

// 14. Method repeat(count)
console.log("Repeated string: ", str.repeat(3));

// 15. Method padStart(targetLength, padString)
console.log("Padded string: ", str.padStart(15, '😂'));

// 16. Method padEnd(targetLength, padString)
console.log("Padded string: ", str.padEnd(15, '😂'));

// 17. Method match(pattern)
console.log("Matches: ", str.match(/[aeiou]/g));

// 18. Method search(pattern)
console.log("Search: ", str.search(/[aeiou]/g));

// 19. Method replaceAll(pattern, replacement)
console.log("Replaced string: ", str.replaceAll('l', 'i'));

// Next-Generation Strings (Template Strings)

// Features of Template Strings
// 1. Expression Interpolation
// Template strings allow inserting variables and expressions using ${}.
let name = "Alice";
let age = 30;

let greeting = `Hello, ${name}! You are ${age} years old.`;

console.log(greeting);

// 2. Multiline Text
// Template strings allow writing multiline text without special characters.
let multiLine = `Lorem ipsum odor, consectetuer adipiscing elit.
Sit lorem mattis eget maximus.`;

console.log(multiLine);

// 3. Embedded Expressions
// You can insert JavaScript expressions and function calls inside template strings.
let a = 5;
let b = 10;

let result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result);

function getGreeting(name) {
    return `Hello, ${name}!`;
}

let greet = `${getGreeting("Bob")}`;
console.log(greet);