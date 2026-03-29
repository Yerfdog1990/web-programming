
---

# 📘 New Data Structures: Map and Set (ES6)

---

# 🔹 3.1 Collection: Map

---

## ✅ What is a Map?

A **Map** is a collection of **key-value pairs** where:

* Keys can be **any data type** (strings, numbers, objects, functions)
* Maintains **insertion order**
* Provides efficient operations for data management

---

## 🔍 Why Map instead of Object?

| Feature   | Object                        | Map        |
| --------- | ----------------------------- | ---------- |
| Key types | Strings/Symbols only          | Any type   |
| Order     | Not guaranteed (historically) | Guaranteed |
| Size      | Manual                        | `.size`    |
| Iteration | Complex                       | Easy       |

---

## 🔹 Creating a Map

```javascript
const map = new Map();
```

---

## 🔹 Adding Elements (`set`)

```javascript
map.set('key1', 'value1');
map.set(2, 'value2');
map.set({ name: 'objectKey' }, 'value3');
```

---

## 🔍 Key Insight

👉 Keys can be:

* Strings
* Numbers
* Objects
* Functions

---

## 🔹 Retrieving Elements (`get`)

```javascript
const map = new Map();

map.set('key1', 'value1');
map.set(2, 'value2');

console.log(map.get('key1')); // value1
console.log(map.get(2));      // value2
```

---

## 🔹 Checking for Keys (`has`)

```javascript
console.log(map.has('key1')); // true
console.log(map.has('key3')); // false
```

---

## 🔹 Deleting Elements (`delete`)

```javascript
map.delete('key1');
console.log(map.has('key1')); // false
```

---

## 🔹 Clearing the Map (`clear`)

```javascript
map.clear();
console.log(map.size); // 0
```

---

## 🔹 Iterating Over a Map

```javascript
const map = new Map();
map.set('key1', 'value1');
map.set(2, 'value2');

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
```

---

## ✅ Output

```
key1: value1
2: value2
```

---

## 🔍 Important Notes

* Map is **iterable**
* Returns `[key, value]` pairs
* Works with destructuring

---

# 🔹 3.2 Collection: Set

---

## ✅ What is a Set?

A **Set** is a collection of:

👉 **Unique values only**

* No duplicates allowed
* Maintains insertion order
* Stores any data type

---

## 🔹 Creating a Set

```javascript
const set = new Set();
```

---

## 🔹 Adding Elements (`add`)

```javascript
set.add(1);
set.add('value2');
set.add({ name: 'objectValue' });
```

---

## 🔍 Duplicate Behavior

```javascript
set.add(1);
set.add(1); // ignored
```

👉 Set automatically removes duplicates

---

## 🔹 Checking Values (`has`)

```javascript
console.log(set.has(1));        // true
console.log(set.has('value3')); // false
```

---

## 🔹 Deleting Elements (`delete`)

```javascript
set.delete(1);
console.log(set.has(1)); // false
```

---

## 🔹 Clearing the Set (`clear`)

```javascript
set.clear();
console.log(set.size); // 0
```

---

## 🔹 Iterating Over a Set

```javascript
const set = new Set();
set.add(1);
set.add('value2');

for (const value of set) {
  console.log(value);
}
```

---

## ✅ Output

```
1
value2
```

---

# 🔹 3.3 Comparing Map and Set

---

## ✅ Advantages of Map

* ✔ Keys can be **any type**
* ✔ Maintains **insertion order**
* ✔ Easy size retrieval (`.size`)
* ✔ Better for structured data (key-value)

---

## ✅ Advantages of Set

* ✔ Automatically ensures **unique values**
* ✔ Maintains **insertion order**
* ✔ Fast lookup (`has`)
* ✔ Ideal for filtering duplicates

---

## 🔍 Comparison Table

| Feature          | Map             | Set                |
| ---------------- | --------------- | ------------------ |
| Stores           | Key-value pairs | Values only        |
| Keys allowed     | Any type        | Not applicable     |
| Duplicate values | Allowed         | Not allowed        |
| Order            | Maintained      | Maintained         |
| Use case         | Structured data | Unique collections |

---

# 🔹 3.4 Practical Examples

---

## 📌 Example 1: Map (User Information)

```javascript
const users = new Map();

users.set(1, { name: 'Alice', age: 25 });
users.set(2, { name: 'Bob', age: 30 });

for (const [id, user] of users) {
  console.log(`User ID: ${id}, Name: ${user.name}, Age: ${user.age}`);
}
```

---

## ✅ Output

```
User ID: 1, Name: Alice, Age: 25
User ID: 2, Name: Bob, Age: 30
```

---

## 📌 Example 2: Set (Unique Values)

```javascript
const numbers = [1, 2, 3, 1, 2, 4, 5, 3];
const uniqueNumbers = new Set(numbers);

for (const number of uniqueNumbers) {
  console.log(number);
}
```

---

## ✅ Output

```
1
2
3
4
5
```

---

# 🧪 Exercises with Solutions

---

# ✅ Exercise 1: Unique Emails

---

## 📝 Problem

Use a Set to:

* Store emails (including duplicates)
* Check existence
* Delete one email
* Iterate
* Clear the set

---

## ✅ Solution

```javascript
const emails = new Set();

// Add emails (including duplicates)
emails.add("a@gmail.com");
emails.add("b@gmail.com");
emails.add("a@gmail.com"); // duplicate
emails.add("c@gmail.com");

// Check existence
console.log(emails.has("a@gmail.com")); // true

// Delete an email
emails.delete("b@gmail.com");

// Iterate
for (const email of emails) {
  console.log(email);
}

// Clear the set
emails.clear();
console.log(emails.size); // 0
```

---

## ✅ Output

```
true
a@gmail.com
c@gmail.com
0
```

---

# ✅ Exercise 2: Users and Roles

---

## 📝 Problem

Use a Map to:

* Store usernames and roles
* Iterate and print results

---

## ✅ Solution

```javascript
const userRoles = new Map();

// Add users
userRoles.set("Alice", "admin");
userRoles.set("Bob", "editor");
userRoles.set("Charlie", "viewer");

// Iterate
for (const [username, role] of userRoles) {
  console.log(`${username}: ${role}`);
}
```

---

## ✅ Output

```
Alice: admin
Bob: editor
Charlie: viewer
```

---

# 🔹 Advanced Insights

---

## ✅ Map vs Object (Important)

```javascript
const obj = {};
obj[{}] = "value";

console.log(obj); // "[object Object]"
```

👉 Objects convert keys to strings → problem

---

## ✅ Map solves this

```javascript
const map = new Map();
const key = {};

map.set(key, "value");

console.log(map.get(key)); // "value"
```

---

## ✅ Set for Removing Duplicates

```javascript
const arr = [1, 1, 2, 3];
const unique = [...new Set(arr)];

console.log(unique); // [1, 2, 3]
```

---

# 🔹 Key Takeaways

---

✔ **Map**

* Stores key-value pairs
* Keys can be any type
* Maintains order

✔ **Set**

* Stores unique values
* Automatically removes duplicates
* Efficient for filtering

✔ Both:

* Are iterable
* Maintain insertion order
* Provide better performance for certain operations

---

# 🚀 Final Insight

👉 Use:

* **Map** → when you need structured key-value relationships
* **Set** → when you need unique collections

---

