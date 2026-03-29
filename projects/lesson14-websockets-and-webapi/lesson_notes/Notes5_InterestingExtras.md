
---

# 📘 8. Interesting Extras

This section covers three useful JavaScript concepts:

1. **Pseudorandom Numbers**
2. **`switch` Statement**
3. **Nullish Coalescing Operator (`??`)**

---

# 🔢 8.1 Pseudorandom Numbers

## 📌 What Are Pseudorandom Numbers?

Pseudorandom numbers are **numbers that appear random but are generated using a deterministic algorithm**.

* They are **not truly random**
* They are **predictable if the algorithm and seed are known**
* Useful for:

    * Games (dice rolls 🎲)
    * Simulations
    * Shuffling data

⚠️ Not suitable for:

* Cryptography
* Security-sensitive systems

---

## 🧠 How They Work

Most pseudorandom generators use:

* A **seed value**
* A formula to generate the next number

### Example Algorithm (Linear Congruential Generator)

```javascript
let a = 41;
let c = 11119;
let m = 11113;
let seed = 1;

function getNextRandom() {
  seed = (a * seed + c) % m;
  return seed;
}
```

### Usage:

```javascript
for (let t = 0; t < 10; t++) {
  console.log(getNextRandom());
}
```

### 📌 Explanation:

* Each new number depends on the previous one
* Produces a **sequence** of numbers

---

## 🎯 Key Insight

> You cannot determine randomness from a single number — only from a sequence.

---

## 😂 Funny Example

```javascript
function getNextRandom() {
  return 4; // always random 😄
}
```

---

# 🔀 8.2 The `switch` Statement

## 📌 What is `switch`?

The `switch` statement is used to **compare one value against multiple cases**.

---

## 🧾 Syntax

```javascript
switch(expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // fallback
}
```

---

## 💡 Example

```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // Wednesday
```

---

## ⚠️ Important Notes

* `break` prevents fall-through
* Without `break`, execution continues to next case

---

## 🎯 When to Use `switch`

Use it when:

* Comparing **one variable**
* Against **many fixed values**

---

# ❓ 8.3 Nullish Coalescing Operator (`??`)

## 📌 What is `??`?

The `??` operator returns the **right-hand value only if the left-hand value is:**

* `null`
* `undefined`

---

## 🧾 Syntax

```javascript
let result = value1 ?? value2;
```

---

## 💡 Examples

```javascript
let foo = null ?? 'default';
console.log(foo); // 'default'

let bar = 0 ?? 'default';
console.log(bar); // 0

let baz = undefined ?? 'default';
console.log(baz); // 'default'
```

---

## ⚖️ Difference: `??` vs `||`

```javascript
let value = 0 || 'default';
console.log(value); // 'default'

let value2 = 0 ?? 'default';
console.log(value2); // 0
```

### 🔍 Key Difference:

| Operator | Treats as "missing"    |   |                             |
| -------- | ---------------------- | - | --------------------------- |
| `        |                        | ` | falsy values (0, "", false) |
| `??`     | only null or undefined |   |                             |

---

## 🎯 Real-World Use

### Example 1: Configuration Defaults

```javascript
function configure(settings) {
  settings = settings ?? {};
  let timeout = settings.timeout ?? 1000;
  let color = settings.color ?? 'blue';
}
```

---

### Example 2: Function Defaults

```javascript
function printMessage(message) {
  message = message ?? 'No message provided';
  console.log(message);
}
```

---

# 🧪 Exercises with Solutions

---

## ✅ Exercise 1: Default Settings (Using `??`)

### 📝 Problem:

Set default values:

* theme = 'light'
* language = 'en'
* notifications = true

---

### ✅ Solution:

```javascript
function applySettings(userSettings) {
  userSettings = userSettings ?? {};

  const theme = userSettings.theme ?? 'light';
  const language = userSettings.language ?? 'en';
  const notifications = userSettings.notifications ?? true;

  return { theme, language, notifications };
}

// Test
console.log(applySettings({ theme: 'dark' }));
```

---

### ✔ Output:

```javascript
{ theme: 'dark', language: 'en', notifications: true }
```

---

## ✅ Exercise 2: Season of the Year (Using `switch`)

### 📝 Problem:

Determine season based on month (1–12)

---

### ✅ Solution:

```javascript
function getSeason(month) {
  let season;

  switch (month) {
    case 12:
    case 1:
    case 2:
      season = "Winter";
      break;

    case 3:
    case 4:
    case 5:
      season = "Spring";
      break;

    case 6:
    case 7:
    case 8:
      season = "Summer";
      break;

    case 9:
    case 10:
    case 11:
      season = "Fall";
      break;

    default:
      season = "Invalid month";
  }

  return season;
}

// Test
console.log(getSeason(4)); // Spring
```

---

## ✔ Output:

```javascript
Spring
```

---

# 🧠 Summary

## 🔑 Pseudorandom Numbers

* Generated using algorithms
* Depend on seed values
* Useful for simulations and games

## 🔑 switch Statement

* Cleaner alternative to multiple `if...else`
* Matches one value to many cases

## 🔑 Nullish Coalescing (`??`)

* Provides defaults for `null` or `undefined`
* Safer than `||` when handling valid falsy values

---

# 🚀 Final Insight

These “extras” are **small but powerful tools**:

* `??` improves **data safety**
* `switch` improves **readability**
* Pseudorandom generators help in **simulation logic**

---

