
---

# **8. Destructuring in JavaScript**

## **What is Destructuring?**

Destructuring is a JavaScript syntax that allows you to **unpack values** from:

* **Objects → properties**
* **Arrays → elements**

into **separate variables**.

✔ Makes code cleaner

✔ Improves readability

✔ Reduces repetition

---

# **8.1 Object Destructuring**

## **1. Basic Syntax**

Extract values from an object into variables:

```javascript id="9y9y8r"
const person = {
  name: 'John',
  age: 30,
  isStudent: false
};

const { name, age, isStudent } = person;

console.log(name);
console.log(age);
console.log(isStudent);
```

✔ Output:

```id="9x6z7p"
John
30
false
```

---

## **2. Assigning to New Variable Names**

You can rename variables while destructuring:

```javascript id="qstb67"
const person = {
  name: 'John',
  age: 30
};

const { name: personName, age: personAge } = person;

console.log(personName);
console.log(personAge);
```

✔ Useful to avoid naming conflicts

---

## **3. Default Values**

If a property does not exist, a default value is used:

```javascript id="y3d9z1"
const person = {
  name: 'John',
  age: 30
};

const { name, isStudent = true } = person;

console.log(isStudent);
```

✔ Output:

```id="m9fpq2"
true
```

---

## **4. Nested Destructuring**

Extract values from nested objects:

```javascript id="5v5tme"
const person = {
  name: 'John',
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const { name, address: { city, country } } = person;

console.log(city);
console.log(country);
```

---

## **5. Destructuring in Function Parameters**

```javascript id="2lg4dl"
function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

const person = {
  name: 'John',
  age: 30
};

greet(person);
```

✔ Makes functions cleaner

---

# **8.2 Array Destructuring**

## **1. Basic Syntax**

```javascript id="6jqm2k"
const fruits = ['apple', 'banana', 'cherry'];
const [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);
```

---

## **2. Skipping Elements**

```javascript id="r2v8j6"
const fruits = ['apple', 'banana', 'cherry'];
const [first, , third] = fruits;

console.log(first);
console.log(third);
```

✔ Skip unwanted values

---

## **3. Default Values**

```javascript id="pqz9ed"
const fruits = ['apple'];
const [first, second = 'banana'] = fruits;

console.log(second);
```

✔ Output:

```id="0nfl3l"
banana
```

---

## **4. Nested Destructuring**

```javascript id="c1xv2f"
const numbers = [1, [2, 3], 4];
const [one, [two, three], four] = numbers;

console.log(two);
console.log(three);
```

---

## **5. Destructuring in Function Parameters**

```javascript id="n7j7yq"
function getFullName([firstName, lastName]) {
  return `${firstName} ${lastName}`;
}

const nameArray = ['John', 'Doe'];

console.log(getFullName(nameArray));
```

---

# **8.3 Practical Uses of Destructuring**

## **1. Swapping Variables**

```javascript id="tv7qox"
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);
```

✔ Simple and clean swap

---

## **2. Extracting Nested Data (e.g., API Response)**

```javascript id="h05y1s"
const response = {
  data: {
    user: {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    }
  }
};

const { data: { user: { id, name, email } } } = response;

console.log(name);
console.log(email);
```

---

## **3. Default Values in Functions**

```javascript id="z7j43k"
function createUser({ name = 'Anonymous', age = 0, isAdmin = false } = {}) {
  return {
    name,
    age,
    isAdmin
  };
}

console.log(createUser({ name: 'Alice', age: 25 }));
console.log(createUser());
```

✔ Prevents errors when arguments are missing

---

## **4. Using Rest Operator with Arrays**

```javascript id="jsq1mj"
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first);
console.log(second);
console.log(rest);
```

✔ Output:

```id="d5a0hf"
1
2
[3, 4, 5]
```

---

# **Exercises with Solutions**

---

## **Exercise 1: Object Destructuring**

### **Task**

* Create object `employee`
* Extract:

    * `firstName → fName`
    * `lastName → lName`

---

### **Solution**

```javascript id="zsmu9a"
const employee = {
  firstName: 'John',
  lastName: 'Doe',
  position: 'Developer',
  salary: 50000
};

const { firstName: fName, lastName: lName } = employee;

console.log(fName);
console.log(lName);
```

✔ Output:

```id="i2j9bg"
John
Doe
```

---

## **Exercise 2: Array Destructuring**

### **Task**

* Create array `colors`
* Extract:

    * first → `firstColor`
    * third → `thirdColor`

---

### **Solution**

```javascript id="my93w2"
const colors = ['red', 'green', 'blue', 'yellow'];

const [firstColor, , thirdColor] = colors;

console.log(firstColor);
console.log(thirdColor);
```

✔ Output:

```id="4muh5g"
red
blue
```

---

# **Summary**

* Destructuring allows extracting values from:

    * Objects → `{ }`
    * Arrays → `[ ]`
* Key features:

    * Rename variables
    * Set default values
    * Handle nested structures
    * Use in function parameters
* Common use cases:

    * Cleaner code
    * API data extraction
    * Swapping variables
    * Handling function arguments

---

