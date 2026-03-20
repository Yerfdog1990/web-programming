
---

# **3. Template Literals**

Template literals are a modern way of working with strings in JavaScript. They are enclosed in **backticks (` `)** and allow:

* Embedded expressions
* Multi-line strings
* String interpolation (inserting variables directly)

---

## **Basic Syntax**

```javascript
const name = "Alice";
const message = `Hello, ${name}!`;

console.log(message); // Hello, Alice!
```

✔ `${}` is used to insert values or expressions

---

# **3.1 Nested Expressions**

Template literals allow **any JavaScript expression** inside `${}`:

* Arithmetic operations
* Function calls
* Ternary operators

---

## **Example: Mathematical Expression**

```javascript
const a = 5;
const b = 10;

const result = `The result of ${a} + ${b} is ${a + b}.`;
console.log(result);
// "The result of 5 + 10 is 15."
```

---

## **Key Idea**

* Expressions inside `${}` are **evaluated first**
* Then inserted into the string

---

# **3.2 Nested Template Literals**

Template literals can also contain **other template literals or function calls**.

---

## **Example: Object Method Inside Template**

```javascript
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
```

---

## **Key Idea**

* You can call functions inside `${}`
* You can even return template literals from those functions

---

# **3.3 Tagged Templates**

Tagged templates allow you to **process template literals using a function**.

---

## **Syntax**

```javascript
function tag(strings, ...values) {
  // process strings and values
  return result;
}

const output = tag`Hello ${name}`;
```

---

## **How It Works**

* `strings` → array of literal parts
* `values` → array of inserted values

---

## **Example: Highlight Function**

```javascript
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) =>
    `${result}${str}<span class="highlight">${values[i] || ''}</span>`, '');
}

const name = 'Carol';
const hobby = 'painting';

const message = highlight`My name is ${name} and I love ${hobby}.`;

console.log(message);
// "My name is <span class="highlight">Carol</span> and I love <span class="highlight">painting</span>."
```

---

## **Key Uses of Tagged Templates**

* Custom formatting
* Internationalization
* HTML generation

---

# **3.4 Safe Value Insertion**

Template literals can help prevent **security issues like XSS (Cross-Site Scripting)** when used with tagged templates.

---

## **Example: Safe HTML Function**

```javascript
function safeHTML(strings, ...values) {
  return strings.reduce((result, str, i) =>
    `${result}${str}${String(values[i])
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')}`, '');
}

const userInput = '<script>alert("XSS")</script>';
const message = safeHTML`User input: ${userInput}`;

console.log(message);
// "User input: &lt;script&gt;alert("XSS")&lt;/script&gt;"
```

---

## **Key Idea**

* Special characters are escaped
* Prevents malicious code injection

---

# **4. Exercises with Solutions**

---

## **Exercise 1: Mathematical Templates**

### **Problem**

Create a function `createMathMessage` that:

* Takes two numbers
* Returns:
  `"The sum of X and Y is Z"`

---

### **Solution**

```javascript
function createMathMessage(x, y) {
  return `The sum of ${x} and ${y} is ${x + y}`;
}

// Example usage
console.log(createMathMessage(5, 10));
// "The sum of 5 and 10 is 15"
```

---

### **Explanation**

* `${x}` and `${y}` insert values
* `${x + y}` calculates and inserts result

---

## **Exercise 2: Text Formatting with Tagged Templates**

### **Problem**

Create a tagged template function `bold` that:

* Wraps all inserted values in `<b>` tags

---

### **Solution**

```javascript
function bold(strings, ...values) {
  return strings.reduce((result, str, i) =>
    `${result}${str}${values[i] ? `<b>${values[i]}</b>` : ''}`, '');
}

// Example usage
const name = "Alice";
const hobby = "reading";

const message = bold`My name is ${name} and I love ${hobby}.`;

console.log(message);
// "My name is <b>Alice</b> and I love <b>reading</b>."
```

---

### **Explanation**

* `strings` → text parts
* `values` → inserted values
* Each value is wrapped with `<b>` tags

---

# **5. Summary**

### ✔ Key Takeaways

* Template literals use **backticks (` `)**
* `${}` allows embedding:

    * Variables
    * Expressions
    * Function calls
* Nested templates allow complex string construction
* Tagged templates:

    * Process strings with custom logic
    * Useful for formatting and security
* Safe insertion helps prevent **XSS attacks**

---

