
### 8.1 The `call` Method
**What it does**

`call` invokes a function immediately, setting `this` to the first argument and passing remaining arguments as a comma-separated list.

**Syntax**
```javascript
func.call(thisArg, arg1, arg2, ...)
```

**Example**
```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'John' };

greet.call(person, 'Hello', '!'); // Hello, John!
```

### 8.2 The `apply` Method
**What it does**
`apply` is the same as `call`, but arguments are passed as an **array**.

**Syntax**
```javascript
func.apply(thisArg, [arg1, arg2, ...])
```

**Example**
```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'John' };

greet.apply(person, ['Hello', '!']); // Hello, John!
```

### 8.3 The `bind` Method
**What it does**
`bind` does **not** call the function right away. It returns a **new function** with `this` permanently set to `thisArg`, and any pre-set arguments baked in.

**Syntax**
```javascript
const boundFunc = func.bind(thisArg, arg1, arg2, ...)
```

**Example**
```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'John' };

const boundGreet = greet.bind(person, 'Hello');
boundGreet('!'); // Hello, John!
```

### 8.4 In-Depth Analysis

**1. Using `call` for Method Inheritance**

Borrow a constructor's initialization.
```javascript
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price, category) {
  Product.call(this, name, price); // inherit name & price
  this.category = category;
}

const cheese = new Food('Cheese', 5, 'Dairy');
console.log(cheese); // Food { name: 'Cheese', price: 5, category: 'Dairy' }
```

**2. Using `apply` to Pass an Array of Arguments**
```javascript
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum.apply(null, numbers)); // 6
```

**3. Using `bind` to Fix Context**

Without `bind`, `this` is lost when you extract a method.
```javascript
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // 42
```

### 8.5 Real-Life Examples

**Borrow an Array Method**
`arguments` is array-like but not an array. Use `call` to borrow `forEach`.
```javascript
function printArguments() {
  Array.prototype.forEach.call(arguments, function(item) {
    console.log(item);
  });
}

printArguments(1, 2, 3); // 1 2 3
```

**Combine Arrays with `apply`**
```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

Array.prototype.push.apply(array1, array2);
console.log(array1); // [1, 2, 3, 4, 5, 6]
```

**Partial Application with `bind`**
```javascript
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5)); // 10
```

---

### Exercises

#### Exercise 1 – Inheritance with `call`
**Task**

Create constructors `Animal(name, species)` and `Dog(name, species)`. `Dog` should inherit `name` and `species` using `call`. Add a `bark` method to `Dog` that logs `Woof! I'm [name], the [species]`.

**Solution**
```javascript
function Animal(name, species) {
  this.name = name;
  this.species = species;
}

function Dog(name, species) {
  Animal.call(this, name, species); // inherit properties
}

Dog.prototype.bark = function() {
  console.log(`Woof! I'm ${this.name}, the ${this.species}`);
};

const myDog = new Dog('Buddy', 'dog');
myDog.bark(); // Woof! I'm Buddy, the dog
```

#### Exercise 2 – Array of Arguments with `apply`
**Task**

Write `maxOfArray(arr)` that returns the maximum value in `arr` using `apply` and `Math.max`.

**Solution**
```javascript
function maxOfArray(arr) {
  return Math.max.apply(null, arr);
}

console.log(maxOfArray([3, 5, 7, 2, 8])); // 8
```

**Key Takeaways**
- `call(thisArg, a, b)` → invoke now, args listed
- `apply(thisArg, [a, b])` → invoke now, args in array
- `bind(thisArg, a, b)` → return new function with `this` fixed (can add more args later)

---