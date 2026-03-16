## Simple Memory Diagram of How JavaScript Stores `var`, `let`, and `const`

To understand how JavaScript handles variables internally, it helps to visualize how the **JavaScript engine allocates memory** during execution. When a script runs, JavaScript creates different **memory environments (scopes)** where variables are stored.

The two main environments involved are:

* **Global Memory (Global Execution Context)**
* **Block Memory (Block Scope / Lexical Environment)**

The way variables are stored depends on whether they are declared using **`var`**, **`let`**, or **`const`**.

---

# 1. Memory Diagram for `var`

Variables declared with `var` are stored in the **global or function execution context**.

They are **hoisted and initialized with `undefined`** during the memory creation phase.

### Example

```javascript
console.log(a);
var a = 10;
```

### Step 1: Memory Creation Phase

Before execution begins, JavaScript scans the code and allocates memory.

```
Global Memory
---------------------
a : undefined
```

`a` is already created in memory and given the value **undefined**.

### Step 2: Code Execution Phase

The code runs line by line.

```
console.log(a);  → undefined
a = 10;
```

Memory becomes:

```
Global Memory
---------------------
a : 10
```

So the output is:

```
undefined
```

---

# 2. Memory Diagram for `let`

Variables declared with `let` are **hoisted**, but they are placed in a **Temporal Dead Zone (TDZ)** until their declaration is reached.

### Example

```javascript
console.log(b);
let b = 20;
```

### Step 1: Memory Creation Phase

JavaScript creates the variable but **does not initialize it**.

```
Global Memory
---------------------
b : <uninitialized>  (TDZ)
```

### Step 2: Execution Phase

When JavaScript tries to access `b` before initialization:

```
console.log(b);
```

This produces an error because the variable is still in the **Temporal Dead Zone**.

```
ReferenceError: Cannot access 'b' before initialization
```

After the declaration line runs:

```
let b = 20;
```

Memory becomes:

```
Global Memory
---------------------
b : 20
```

---

# 3. Memory Diagram for `const`

`const` behaves very similarly to `let`.

The main difference is that **it must be initialized immediately and cannot be reassigned**.

### Example

```javascript
console.log(c);
const c = 30;
```

### Step 1: Memory Creation Phase

```
Global Memory
---------------------
c : <uninitialized>  (TDZ)
```

### Step 2: Execution Phase

Attempting to access `c` before initialization results in an error.

```
ReferenceError: Cannot access 'c' before initialization
```

After the declaration:

```
const c = 30;
```

Memory becomes:

```
Global Memory
---------------------
c : 30
```

---

# 4. Block Scope Memory Example

`let` and `const` variables inside blocks are stored in a **separate block memory environment**.

### Example

```javascript
if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
}
```

### Memory Layout

```
Global Memory
---------------------
z : 30


Block Memory (if block)
---------------------
x : 10
y : 20
```

Explanation:

* `x` and `y` exist **only inside the block**
* `z` is created in the **global scope**

Trying to access them:

```javascript
console.log(z); // 30
console.log(x); // Error
console.log(y); // Error
```

---

# 5. Visual Summary Diagram

```
                JavaScript Memory

                Global Memory
        --------------------------------
        var variables → initialized (undefined)
        let variables → TDZ until declaration
        const variables → TDZ until declaration
        --------------------------------


             Block Scope Memory
        --------------------------------
        let variables → stored here
        const variables → stored here
        --------------------------------
```

---

# 6. Quick Comparison Table

| Feature                 | var               | let     | const       |
| ----------------------- | ----------------- | ------- | ----------- |
| Scope                   | Function / Global | Block   | Block       |
| Hoisting                | Yes               | Yes     | Yes         |
| Initial Value           | `undefined`       | TDZ     | TDZ         |
| Reassignment            | Allowed           | Allowed | Not allowed |
| Initialization Required | No                | No      | Yes         |

---

# 7. Interview Tip

A common interview explanation:

> `var` is hoisted and initialized with `undefined`.
> `let` and `const` are also hoisted but stay in the **Temporal Dead Zone (TDZ)** until the declaration line is executed.

This is one of the **most frequently asked JavaScript interview concepts**.

---

## Advanced Diagram of the JavaScript Execution Context

### (Call Stack + Memory + Scope Chain)

To understand concepts like **closures, hoisting, and scope**, it is important to understand how the **JavaScript execution context** works internally.

When JavaScript runs a program, the engine organizes execution using three main components:

1. **Memory (Variable Environment)**
2. **Call Stack (Execution Context Stack)**
3. **Scope Chain (Lexical Environment)**

These components work together to manage variables, functions, and program execution.

---

# 1. The JavaScript Execution Context

An **execution context** is the environment where JavaScript code is evaluated and executed.

There are three main types:

1. **Global Execution Context (GEC)**
   Created when the program starts.

2. **Function Execution Context (FEC)**
   Created whenever a function is invoked.

3. **Eval Execution Context**
   Rarely used.

Each execution context contains:

* **Memory (Variable Environment)**
* **Code Execution Phase**
* **Scope Reference**

---

# 2. Memory Creation Phase vs Execution Phase

Every execution context runs in **two phases**.

### Phase 1: Memory Creation Phase

During this phase:

* Variables are stored in memory.
* `var` variables are initialized with **undefined**.
* `let` and `const` are placed in the **Temporal Dead Zone**.
* Functions are stored completely in memory.

### Phase 2: Code Execution Phase

During this phase:

* Code runs line by line.
* Variables receive actual values.
* Functions are executed.

---

# 3. The Call Stack

The **Call Stack** keeps track of which function is currently executing.

JavaScript uses **Last In First Out (LIFO)**.

Example:

```javascript
function first() {
  second();
}

function second() {
  console.log("Hello");
}

first();
```

### Call Stack Diagram

```
Call Stack
-----------------
|   second()    |
-----------------
|   first()     |
-----------------
|   Global()    |
-----------------
```

Execution order:

1. Global context is created
2. `first()` is pushed onto the stack
3. `second()` is pushed onto the stack
4. `second()` finishes and is removed
5. `first()` finishes and is removed

---

# 4. Memory + Call Stack Example

Consider this code:

```javascript
var a = 5;

function add(x, y) {
  var result = x + y;
  return result;
}

var sum = add(2, 3);
```

---

### Step 1: Global Memory Creation

```
Global Memory
-------------------------
a      : undefined
add    : function
sum    : undefined
```

---

### Step 2: Execution Phase

```
a = 5
sum = add(2,3)
```

When `add()` runs, a new execution context is created.

---

### Function Execution Context

```
add() Memory
-------------------------
x       : 2
y       : 3
result  : undefined
```

Then execution continues:

```
result = 5
return 5
```

Global memory becomes:

```
Global Memory
-------------------------
a      : 5
add    : function
sum    : 5
```

---

# 5. The Scope Chain

The **scope chain** determines how JavaScript resolves variables.

When JavaScript looks for a variable:

1. It checks the **current scope**
2. If not found, it checks the **outer scope**
3. Eventually it reaches the **global scope**

Example:

```javascript
var globalVar = "Global";

function outer() {

  var outerVar = "Outer";

  function inner() {
    console.log(globalVar);
    console.log(outerVar);
  }

  inner();
}

outer();
```

### Scope Chain Diagram

```
Inner Scope
   ↓
Outer Scope
   ↓
Global Scope
```

Memory view:

```
Global Memory
----------------
globalVar

Outer Function Memory
----------------
outerVar

Inner Function Memory
----------------
(no variables)
```

The inner function accesses variables through the **scope chain**.

---

# 6. Closures

A **closure** occurs when a function remembers variables from its **outer scope** even after the outer function has finished executing.

Example:

```javascript
function outer() {

  let counter = 0;

  function increment() {
    counter++;
    console.log(counter);
  }

  return increment;
}

const count = outer();

count();
count();
count();
```

Output:

```
1
2
3
```

---

### Closure Memory Diagram

When `outer()` finishes:

```
Global Memory
-------------------------
count → increment function
```

However, the variable `counter` is **not destroyed**.

It is preserved in a special memory structure called a **closure**.

```
Closure Memory
-------------------------
counter : 0
```

Each time `count()` runs:

```
counter++
```

So the value persists across function calls.

---

# 7. Full Execution Context Diagram

Here is a simplified view of the JavaScript engine:

```
                 JavaScript Engine
--------------------------------------------------

                Call Stack
           ---------------------
           |   increment()     |
           ---------------------
           |    outer()        |
           ---------------------
           |    Global()       |
           ---------------------

--------------------------------------------------

                Memory (Heap)

        Global Memory
        ---------------------
        globalVar
        outer()
        count

        Closure Memory
        ---------------------
        counter

--------------------------------------------------

                Scope Chain

        Inner Scope
            ↓
        Outer Scope
            ↓
        Global Scope
```

---

# 8. How This Explains Key Concepts

### Hoisting

During the **memory creation phase**, variables and functions are stored before execution.

```
var → initialized as undefined
let/const → TDZ
functions → fully stored
```

---

### Scope

Scope determines **where variables are accessible**.

* Global scope
* Function scope
* Block scope

---

### Closures

Closures occur because **functions keep access to their lexical environment** even after execution ends.

---

# 9. Interview-Level Summary

JavaScript execution works using three main structures:

**Call Stack**
Tracks which function is currently running.

**Memory (Variable Environment)**
Stores variables and functions.

**Scope Chain**
Allows functions to access variables from outer scopes.

Closures occur because functions retain references to variables in their **lexical scope**, which is preserved in memory even after the outer function finishes execution.

---

