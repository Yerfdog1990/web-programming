## What is Hoisting in JavaScript?

**Hoisting** is a JavaScript behavior where **variable and function declarations are moved to the top of their scope during the memory creation phase**, before the code is executed.

This does **not mean the code physically moves**, but the JavaScript engine **allocates memory for declarations before execution begins**.

In simple terms:

> **Hoisting allows you to use some variables or functions before they are declared in the code.**

---

# 1. Hoisting Example with `var`

Example:

```javascript
console.log(x);
var x = 10;
```

### Output

```
undefined
```

### Why this happens

Before execution begins, JavaScript internally interprets the code like this:

```javascript
var x;
console.log(x);
x = 10;
```

So during the **memory creation phase**, the variable `x` is created and initialized with `undefined`.

Memory state before execution:

```
x : undefined
```

Then execution continues:

```
console.log(x) → undefined
x = 10
```

---

# 2. Hoisting with Functions

Function declarations are **fully hoisted**, meaning both the function name and its body are stored in memory before execution.

Example:

```javascript
sayHello();

function sayHello() {
  console.log("Hello!");
}
```

### Output

```
Hello!
```

JavaScript internally treats it like this:

```javascript
function sayHello() {
  console.log("Hello!");
}

sayHello();
```

So function declarations can be called **before they appear in the code**.

---

# 3. Hoisting with `let` and `const`

`let` and `const` are **also hoisted**, but they behave differently.

They are placed in a **Temporal Dead Zone (TDZ)** until their declaration is reached.

Example:

```javascript
console.log(a);
let a = 5;
```

### Output

```
ReferenceError: Cannot access 'a' before initialization
```

Memory during creation phase:

```
a : uninitialized (TDZ)
```

Because the variable exists but **cannot be accessed**, JavaScript throws an error.

---

# 4. Summary of Hoisting Behavior

| Declaration Type     | Hoisted | Initial Value | Accessible Before Declaration |
| -------------------- | ------- | ------------- | ----------------------------- |
| `var`                | Yes     | `undefined`   | Yes                           |
| `let`                | Yes     | TDZ           | No                            |
| `const`              | Yes     | TDZ           | No                            |
| Function Declaration | Yes     | Full function | Yes                           |

---

# 5. Visual Diagram of Hoisting

Example code:

```javascript
console.log(a);
var a = 10;
```

### Memory Creation Phase

```
Global Memory
-----------------
a : undefined
```

### Execution Phase

```
console.log(a) → undefined
a = 10
```

Final memory:

```
a : 10
```

---

# 6. Simple Definition (For Exams or Interviews)

**Hoisting is the JavaScript behavior where variable and function declarations are processed and stored in memory before the code execution phase begins.**

* `var` variables are initialized with `undefined`.
* `let` and `const` are hoisted but remain in the **Temporal Dead Zone** until their declaration.
* Function declarations are fully hoisted.

---

✅ **Short Interview Answer**

> Hoisting is the JavaScript mechanism where variable and function declarations are moved to the top of their scope during the memory creation phase before execution begins.

---

