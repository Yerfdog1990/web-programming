# Branches in JavaScript

## 5.1 Conditional Operator `if`

**Branching**, also called **conditional statements**, allows a program to execute different blocks of code depending on whether a condition is **true** or **false**. This makes programs dynamic and interactive because the program can react to different inputs or situations.

The simplest conditional statement in JavaScript is the **`if` operator**. It executes a block of code only when the specified condition evaluates to **true**.

### Syntax

```javascript
if (condition) {
  // code that executes if the condition is true
}
```

### Example

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}
```

### Output

```
You are an adult.
```

### Explanation

1. The variable `age` stores the value `18`.
2. The condition `age >= 18` is checked.
3. Since the condition is **true**, the code inside the block runs.

If the condition were **false**, the code block would not execute.

---

# 5.2 Operator `if...else`

The **`if...else`** statement allows the program to choose between **two alternative blocks of code** depending on the condition.

* If the condition is **true**, the first block executes.
* If the condition is **false**, the `else` block executes.

### Syntax

```javascript
if (condition) {
  // code that executes if the condition is true
} else {
  // code that executes if the condition is false
}
```

### Example

```javascript
let age = 17;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

### Output

```
You are a minor.
```

### Explanation

1. The program checks whether `age >= 18`.
2. Since `17` is less than `18`, the condition is **false**.
3. Therefore, the code inside the `else` block executes.

---

# 5.3 Operator `if...else if...else`

The **`if...else if...else`** structure allows the program to check **multiple conditions sequentially**. The first condition that evaluates to **true** will execute its corresponding block.

### Syntax

```javascript
if (condition1) {
  // code that executes if condition1 is true
} else if (condition2) {
  // code that executes if condition2 is true
} else {
  // code that executes if none of the conditions are true
}
```

### Example

```javascript
let score = 85;

if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 75) {
  console.log("Good!");
} else if (score >= 60) {
  console.log("Satisfactory.");
} else {
  console.log("Unsatisfactory.");
}
```

### Output

```
Good!
```

### Explanation

The program checks the conditions in order:

1. `score >= 90` → false
2. `score >= 75` → true

Since the second condition is **true**, the program prints `"Good!"` and stops checking further conditions.

---

# 5.4 Ternary Operator

The **ternary operator (`?:`)** is a shorter way to write a simple `if...else` statement. It evaluates a condition and returns one of two values depending on whether the condition is true or false.

### Syntax

```javascript
condition ? value1 : value2
```

* If the condition is **true**, `value1` is returned.
* If the condition is **false**, `value2` is returned.

### Example

```javascript
let age = 18;

let access = (age >= 18) ? "access granted" : "access denied";

console.log(access);
```

### Output

```
access granted
```

### Explanation

1. The condition `age >= 18` is evaluated.
2. Since it is **true**, the expression returns `"access granted"`.

The ternary operator is often used when assigning values based on a condition.

---

## Visual Flowchart of JavaScript `if`, `else if`, and `else`

A **flowchart** helps visualize how JavaScript evaluates conditions step by step when using branching statements.

---

# 1. Basic `if` Flow

Structure:

```javascript
if (condition) {
   // code
}
```

### Flow Diagram

```
Start
  |
  v
Check condition
  |
  |---- True ----> Run code inside if
  |
  |---- False ---> Skip block
  |
  v
Continue program
```

### Example

```javascript
let age = 20;

if (age >= 18) {
  console.log("Adult");
}

console.log("Program continues");
```

Execution:

```
age >= 18 ? → True
↓
Print "Adult"
↓
Continue program
```

Output

```
Adult
Program continues
```

---

# 2. `if...else` Flow

Structure:

```javascript
if (condition) {
   // block A
} else {
   // block B
}
```

### Flow Diagram

```
Start
  |
  v
Check condition
  |
  |---- True ----> Run IF block
  |
  |---- False ---> Run ELSE block
  |
  v
Continue program
```

### Example

```javascript
let age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

Execution:

```
age >= 18 ? → False
↓
Run ELSE block
↓
Print "Minor"
```

Output

```
Minor
```

---

# 3. `if...else if...else` Flow

This structure checks **multiple conditions sequentially**.

Structure:

```javascript
if (condition1) {
   // block 1
} else if (condition2) {
   // block 2
} else {
   // block 3
}
```

### Flow Diagram

```
Start
  |
  v
Check condition1
  |
  |---- True ----> Run block1
  |
  |---- False
          |
          v
     Check condition2
          |
          |---- True ----> Run block2
          |
          |---- False ----> Run ELSE block
  |
  v
Continue program
```

### Example

```javascript
let score = 82;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 75) {
  console.log("Good");
} else if (score >= 60) {
  console.log("Satisfactory");
} else {
  console.log("Unsatisfactory");
}
```

Execution:

```
score >= 90 ? → False
↓
score >= 75 ? → True
↓
Print "Good"
↓
Stop checking other conditions
```

Output

```
Good
```

---

# 4. Ternary Operator Flow

Structure:

```javascript
condition ? value1 : value2
```

### Flow Diagram

```
Check condition
   |
   |---- True ----> value1
   |
   |---- False ---> value2
```

### Example

```javascript
let age = 18;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Execution

```
age >= 18 ? → True
↓
Return "Adult"
```

Output

```
Adult
```

---

# 5. Complete Execution Example

```javascript
let temperature = 30;

if (temperature > 35) {
  console.log("Very Hot");
} else if (temperature > 25) {
  console.log("Warm");
} else {
  console.log("Cold");
}
```

### Execution Flow

```
temperature > 35 ? → False
↓
temperature > 25 ? → True
↓
Print "Warm"
↓
Program ends
```

Output

```
Warm
```

---

# Key Rules to Remember

1. **Conditions are checked from top to bottom.**
2. **Once a condition is true, the rest are skipped.**
3. **`else` executes only if all previous conditions are false.**
4. **Ternary operator is just a shorter form of `if...else`.**

---

✅ **Interview Tip**

Many JavaScript bugs happen because developers misunderstand how conditions are evaluated sequentially.

Example mistake:

```javascript
let score = 95;

if (score >= 60) {
  console.log("Pass");
} else if (score >= 90) {
  console.log("Excellent");
}
```

Output

```
Pass
```

Because **the first condition is already true**, the second one never runs.

---

# Exercises with Solutions

## Exercise 1: Age Verification

### Problem

Write a program that asks the user for their age and verifies whether they are a minor or an adult.

### Requirements

* Use the `prompt()` method to ask the user for their age.
* Use the `if` conditional operator.
* If age < 18 → output `"You are a minor."`
* If age ≥ 18 → output `"You are an adult."`

### Solution

```javascript
let age = prompt("Enter your age:");

if (age < 18) {
  console.log("You are a minor.");
}

if (age >= 18) {
  console.log("You are an adult.");
}
```

### Example Output

```
You are an adult.
```

---

# Exercise 2: Student's Grade

### Problem

Write code that determines a student's grade based on their score.

### Requirements

* Use an `if...else if...else` statement.
* Score ≥ 90 → `"Excellent"`
* Score ≥ 75 and < 90 → `"Good"`
* Score ≥ 60 and < 75 → `"Satisfactory"`
* Score < 60 → `"Unsatisfactory"`

### Solution

```javascript
let score = 85;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 75) {
  console.log("Good");
} else if (score >= 60) {
  console.log("Satisfactory");
} else {
  console.log("Unsatisfactory");
}
```

### Example Output

```
Good
```

---

# Summary

Branching statements allow programs to **make decisions based on conditions**. JavaScript provides several ways to implement branching:

* **`if`** – executes code if a condition is true.
* **`if...else`** – chooses between two blocks of code.
* **`if...else if...else`** – checks multiple conditions.
* **Ternary operator (`?:`)** – a short form of `if...else`.

These conditional structures are essential for building logical programs that respond to different inputs and situations.

---

If you'd like, I can also show you **a visual flowchart of how JavaScript `if`, `else if`, and `else` execute step-by-step**, which makes debugging conditions much easier.
