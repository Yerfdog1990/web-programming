// 1. Basic Syntax
const name = 'John';
const greeting = `Hello, ${name}!`;
console.log(greeting);

// 2. Nested Expressions
// Template literals allow any JavaScript expression inside ${}

// Example: Mathematical Expression
const a = 5;
const b = 10;

const result = `The result of ${a} + ${b} is ${a + b}.`;
console.log(result);
// "The result of 5 + 10 is 15."

// 3. Nested Template Literals
// Template literals can also contain other template literals or function calls.

// Example: Object Method Inside Template
const user = {
    name: 'Bob',
    age: 25,
    greet() {
        return `Hello, ${this.name}!`;
    }
};

const message = `${user.greet()} You are ${user.age} years old.`;

console.log(message);
// "Hello, Bob! You are 25 years old."

// Tagged Templates
// Tagged templates allow you to process template literals using a function.

// Example: Highlight Function
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) =>
        `${result}${str}<span class="highlight">${values[i] || ''}</span>`, '');
}

const name1 = 'Carol';
const hobby = 'painting';

const message1 = highlight`My name is ${name1} and I love ${hobby}.`;

console.log(message1);
// "My name is <span class="highlight">Carol</span> and I love <span class="highlight">painting</span>."

// Safe Value Insertion
// Template literals can help prevent security issues like XSS (Cross-Site Scripting) when used with tagged templates.

// Example: Safe HTML Function
function safeHTML(strings, ...values) {
    return strings.reduce((result, str, i) =>
        `${result}${str}${String(values[i])
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')}`, '');
}

const userInput = '<script>alert("XSS")</script>';
const message2 = safeHTML`User input: ${userInput}`;

console.log(message2);
// "User input: &lt;script&gt;alert("XSS")&lt;/script&gt;"