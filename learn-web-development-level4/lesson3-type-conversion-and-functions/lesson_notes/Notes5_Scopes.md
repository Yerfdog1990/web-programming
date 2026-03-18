
---

# 🌍 **5. Scopes in JavaScript**

---

## 🧠 **What is Scope?**

**Scope** defines **where variables and functions can be accessed** in your program.

👉 Think of scope as a **visibility boundary**:

* Inside → accessible ✅
* Outside → not accessible ❌

---

## 🔑 **Three Main Types of Scope**

1. **Global Scope**
2. **Local Scope (Function Scope)**
3. **Block Scope**

---

# 🌍 **5.1 Global Scope**

---

## 📌 **Definition**

Global scope includes:

* Variables declared **outside any function or block**
* Functions declared at the top level

👉 These are accessible **anywhere in the program**

---

## ✅ **Example 1: Global Variables**

```javascript
var globalVar = 'I am a global variable';

function showGlobalVar() {
  console.log(globalVar); // Access to global variable
}

showGlobalVar(); 
console.log(globalVar);
```

---

## 🔍 **Output**

```text
I am a global variable
I am a global variable
```

---

## 🧠 **Internal Understanding**

```text
globalVar → stored in global memory
Accessible everywhere
```

---

## ✅ **Example 2: Global Functions**

```javascript
function globalFunction() {
  return 'I am a global function';
}

console.log(globalFunction());
```

---

## 🔍 **Output**

```text
I am a global function
```

---

## ⚠️ **Important Notes**

* Global variables:

    * Stay in memory for entire program
    * Can be accessed anywhere
* Overuse can cause:

    * Naming conflicts
    * Bugs (hard to track)

---

# 🏠 **5.2 Local Scope (Function Scope)**

---

## 📌 **Definition**

Local scope includes:

* Variables declared **inside a function**
* Functions declared inside another function

👉 Only accessible **inside that function**

---

## ✅ **Example 3: Local Variables**

```javascript
function localScopeExample() {
  var localVar = 'I am a local variable';
  console.log(localVar);
}

localScopeExample();
console.log(localVar); // ❌ Error
```

---

## 🔍 **Output**

```text
I am a local variable
ReferenceError: localVar is not defined
```

---

## 🧠 **Internal Understanding**

```text
localVar exists only during function execution
Destroyed after function ends
```

---

## ✅ **Example 4: Local Functions**

```javascript
function outerFunction() {
  function innerFunction() {
    return 'I am a local function';
  }
  console.log(innerFunction());
}

outerFunction();
console.log(innerFunction()); // ❌ Error
```

---

## 🔍 **Output**

```text
I am a local function
ReferenceError: innerFunction is not defined
```

---

## 🧠 **Key Concept**

> Functions can be **scoped inside other functions**

---

# 📦 **5.3 Block Scope**

---

## 📌 **Definition**

Block scope applies to:

* Variables declared with `let` and `const`
* Inside `{ }` blocks (if, loops, etc.)

👉 Accessible **only inside the block**

---

## ✅ **Example 5: let (Block Scope)**

```javascript
if (true) {
  let blockVar = 'I am a block-scoped variable';
  console.log(blockVar);
}

console.log(blockVar); // ❌ Error
```

---

## 🔍 **Output**

```text
I am a block-scoped variable
ReferenceError: blockVar is not defined
```

---

## ✅ **Example 6: const in Loop**

```javascript
for (const i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); // ❌ Error
```

---

## 🔍 **Important Detail**

```text
const cannot be reassigned → causes error in loop
```

---

# ⚠️ **Difference: var vs let/const**

| Keyword | Scope Type     |
| ------- | -------------- |
| var     | Function scope |
| let     | Block scope    |
| const   | Block scope    |

---

# 🧱 **Nested Block Scope**

---

## ✅ **Example 7: Nested Blocks**

```javascript
if (true) {
  let outerVar = 'I am in the outer block';

  if (true) {
    let innerVar = 'I am in the inner block';

    console.log(outerVar);
    console.log(innerVar);
  }

  console.log(outerVar);
  console.log(innerVar); // ❌ Error
}
```

---

## 🔍 **Output**

```text
I am in the outer block
I am in the inner block
I am in the outer block
ReferenceError: innerVar is not defined
```

---

## 🧠 **Rule**

* Inner block → can access outer variables ✅
* Outer block → cannot access inner variables ❌

---

# 🔄 **5.4 Interaction of Different Scopes**

---

## ✅ **Example 8: Global + Local Scope**

```javascript
var globalVar = 'I am a global variable';

function scopeExample() {
  var localVar = 'I am a local variable';

  console.log(globalVar);
  console.log(localVar);
}

scopeExample();

console.log(globalVar);
console.log(localVar); // ❌ Error
```

---

## 🔍 **Output**

```text
I am a global variable
I am a local variable
I am a global variable
ReferenceError: localVar is not defined
```

---

## 🧠 **Key Idea**

```text
Function can access:
✔ Its own variables
✔ Global variables
```

---

## ✅ **Example 9: Arrow Function Scope**

```javascript
let globalVar = 'I am a global variable';

const arrowFunction = () => {
  let localVar = 'I am a local variable in arrow function';

  console.log(globalVar);
  console.log(localVar);
};

arrowFunction();

console.log(globalVar);
console.log(localVar); // ❌ Error
```

---

## 🔍 **Output**

```text
I am a global variable
I am a local variable in arrow function
I am a global variable
ReferenceError: localVar is not defined
```

---

## 🧠 **Important Insight**

Arrow functions:

* Still follow **same scope rules**
* Just inherit `this` differently (not scope)

---

# 🧪 **Exercises with Solutions**

---

## 🧪 **Exercise 1: Global Variable**

### ✅ Solution

```javascript
var globalMessage = "Hello from global scope";

function showMessage() {
  console.log(globalMessage);
}

showMessage();
```

---

## 🔍 Output

```text
Hello from global scope
```

---

# 🧪 **Exercise 2: Block Scope**

---

## ✅ Solution

```javascript
if (true) {
  let blockScopedVar = "I am block scoped";
  console.log(blockScopedVar); // ✅ works
}

console.log(blockScopedVar); // ❌ error
```

---

## 🔍 Output

```text
I am block scoped
ReferenceError: blockScopedVar is not defined
```

---

# ⚠️ **Common Exam Traps**

---

## ❌ 1. Thinking `var` is block-scoped

```javascript
if (true) {
  var x = 10;
}
console.log(x); // ✅ Works (function scoped)
```

---

## ❌ 2. Accessing Local Outside Function

```javascript
function test() {
  let x = 5;
}
console.log(x); // ❌ Error
```

---

## ❌ 3. Inner Scope Confusion

```javascript
if (true) {
  let a = 1;
  if (true) {
    let b = 2;
  }
  console.log(b); // ❌ Error
}
```

---

# 🧠 **Deep Concept: Scope Chain**

When accessing a variable:

```text
1. Look in current scope
2. If not found → go to outer scope
3. Repeat until global scope
```

---

## 🔍 Example

```javascript
let x = 10;

function test() {
  console.log(x);
}

test(); // 10
```

---

# 🎯 **Final Summary**

---

## 📊 **Scope Types**

| Scope  | Where Declared             | Accessible           |
| ------ | -------------------------- | -------------------- |
| Global | Outside all functions      | Everywhere           |
| Local  | Inside function            | Only inside function |
| Block  | Inside `{}` with let/const | Only inside block    |

---

## 🧠 **Golden Rules**

* Global → accessible everywhere
* Local → only inside function
* Block → only inside `{}`
* Inner scope → can access outer
* Outer scope → cannot access inner

---

# 🧠 **Memory Trick**

> “Inside can see outside, but outside cannot see inside.”

---

