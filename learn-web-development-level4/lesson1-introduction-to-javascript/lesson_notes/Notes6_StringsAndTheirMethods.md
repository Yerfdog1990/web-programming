# Strings and Their Methods in JavaScript

## 4.1 Introduction to Strings

In JavaScript, **strings** are sequences of characters used to represent text. Strings are one of the fundamental data types in the language and are commonly used for displaying messages, storing user input, and manipulating textual data.

Strings can be created using **three types of quotation marks**:

* Single quotes `'text'`
* Double quotes `"text"`
* Backticks `` `text` ``

### Examples of Strings

```javascript
let singleQuote = 'Hello, World!';
let doubleQuote = "Hello, World!";
let backticks = `Hello, World!`;
```

All three forms create strings, but **backticks provide additional features** such as interpolation and multiline text.

---

# 4.2 Basic String Methods

JavaScript provides many **built-in methods and properties** that allow developers to manipulate strings efficiently.

## 1. Property `length`

The `length` property returns the **number of characters** in a string.

```javascript
let str = 'Hello';
console.log(str.length); 
```

Output:

```
5
```

---

## 2. Method `charAt(index)`

The `charAt()` method returns the **character at a specific index**.

```javascript
let str = 'Hello';
let result = str.charAt(1);

console.log(result);
```

Output

```
e
```

Indexes in JavaScript **start from 0**.

```
H  e  l  l  o
0  1  2  3  4
```

---

## 3. Methods `toUpperCase()` and `toLowerCase()`

These methods convert strings to **uppercase** or **lowercase**.

```javascript
let str = 'Hello';

console.log(str.toUpperCase());
console.log(str.toLowerCase());
```

Output

```
HELLO
hello
```

---

## 4. Method `indexOf(substring)`

The `indexOf()` method returns the **index of the first occurrence of a substring**. If the substring does not exist, it returns `-1`.

```javascript
let str = 'Hello, world!';
let result = str.indexOf('world');

console.log(result);
```

Output

```
7
```

---

## 5. Method `includes(substring)`

The `includes()` method checks if a string **contains a specific substring**.

```javascript
let str = 'Hello, world!';
let result = str.includes('world');

console.log(result);
```

Output

```
true
```

---

## 6. Method `trim()`

The `trim()` method removes **whitespace from both the beginning and end of a string**.

```javascript
let str = '   Hello, world!   ';
console.log(str.trim());
```

Output

```
Hello, world!
```

---

## 7. Method `replace(searchValue, newValue)`

The `replace()` method replaces a **specific substring** with another substring.

```javascript
let str = 'Hello, world!';
console.log(str.replace('world', 'JavaScript'));
```

Output

```
Hello, JavaScript!
```

---

## 8. Method `split(separator)`

The `split()` method divides a string into an **array of substrings** based on a separator.

```javascript
let str = 'Hello, world!';
let words = str.split(' ');

console.log(words);
```

Output

```
['Hello,', 'world!']
```

---

## 9. Method `substring(start, end)`

The `substring()` method returns a **portion of the string between two indexes**.

```javascript
let str = 'Hello, world!';
console.log(str.substring(0, 5));
```

Output

```
Hello
```

---

## 10. Method `substr(start, length)`

The `substr()` method extracts a substring starting from a **given index and for a specified length**.

```javascript
let str = 'Hello, world!';
console.log(str.substr(0, 5));
```

Output

```
Hello
```

---

## 11. Method `slice(start, end)`

The `slice()` method extracts part of a string and returns a **new string**.

```javascript
let str = 'Hello, world!';
console.log(str.slice(0, 5));
```

Output

```
Hello
```

---

## 12. Method `startsWith(substring)`

The `startsWith()` method checks if a string **begins with a specific substring**.

```javascript
let str = 'Hello, world!';
console.log(str.startsWith('Hello'));
```

Output

```
true
```

---

## 13. Method `endsWith(substring)`

The `endsWith()` method checks if a string **ends with a specific substring**.

```javascript
let str = 'Hello, world!';
console.log(str.endsWith('world!'));
```

Output

```
true
```

---

## 14. Method `repeat(count)`

The `repeat()` method returns a **new string repeated a specific number of times**.

```javascript
let str = 'Hello';
console.log(str.repeat(3));

let str2 = '-';
console.log(str2.repeat(30));
```

Output

```
HelloHelloHello
------------------------------
```

---

# 4.3 Next-Generation Strings (Template Strings)

Template strings were introduced in modern JavaScript to make working with text **more readable and flexible**.

They use **backticks**:

```
`text`
```

Example:

```javascript
const greeting = `Hello, World!`;
console.log(greeting);
```

Output

```
Hello, World!
```

---

## Features of Template Strings

### 1. Expression Interpolation

Template strings allow inserting **variables and expressions** using `${}`.

```javascript
let name = "Alice";
let age = 30;

let greeting = `Hello, ${name}! You are ${age} years old.`;

console.log(greeting);
```

Output

```
Hello, Alice! You are 30 years old.
```

---

### 2. Multiline Text

Template strings allow writing **multiline text without special characters**.

```javascript
let multiLine = `Lorem ipsum odor, consectetuer adipiscing elit.
Sit lorem mattis eget maximus.`;

console.log(multiLine);
```

Output

```
Lorem ipsum odor, consectetuer adipiscing elit.
Sit lorem mattis eget maximus.
```

---

### 3. Embedded Expressions

You can insert **JavaScript expressions and function calls** inside template strings.

```javascript
let a = 5;
let b = 10;

let result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result);

function getGreeting(name) {
  return `Hello, ${name}!`;
}

let greeting = `${getGreeting("Bob")}`;
console.log(greeting);
```

Output

```
The sum of 5 and 10 is 15.
Hello, Bob!
```

---

# Exercises with Solutions

## Exercise 1: String Case Conversion

### Problem

Create a string and convert it to uppercase and lowercase using the methods `toUpperCase()` and `toLowerCase()`. Print both results.

### Solution

```javascript
let text = "JavaScript is powerful";

let upper = text.toUpperCase();
let lower = text.toLowerCase();

console.log(upper);
console.log(lower);
```

Output

```
JAVASCRIPT IS POWERFUL
javascript is powerful
```

---

# Exercise 2: Substring Replacement

### Problem

Write a program that:

* Replaces the word **"World"** with **"Igor"**
* Removes whitespace from both ends of the string
* Prints the final result

### Solution

```javascript
let text = "   Hello World! Welcome to the World of JavaScript.   ";

let replaced = text.replace("World", "Igor");
let trimmed = replaced.trim();

console.log(trimmed);
```

Output

```
Hello Igor! Welcome to the World of JavaScript.
```

---

# Summary

Strings in JavaScript are powerful tools for handling text data. The language provides many **built-in methods** that allow developers to:

* Inspect strings (`length`, `indexOf`)
* Modify text (`replace`, `trim`)
* Extract substrings (`slice`, `substring`, `substr`)
* Check text patterns (`includes`, `startsWith`, `endsWith`)
* Transform case (`toUpperCase`, `toLowerCase`)
* Split strings into arrays (`split`)

Modern JavaScript also introduces **template strings**, which make working with dynamic and multiline text easier and more readable.

---

