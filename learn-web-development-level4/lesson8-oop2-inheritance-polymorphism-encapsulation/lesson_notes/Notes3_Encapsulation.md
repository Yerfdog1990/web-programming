
### 9.1 Core Concepts

Encapsulation is all about bundling data (properties) and methods (functions) that operate on that data within a single unit, like a class. The main idea is to hide the internal implementation details and expose only what's necessary through well-defined interfaces.

Here’s why it’s so cool:

* **Data Hiding:** It lets you keep the "guts" of your object private, so users can't mess with them directly. This makes your code safer and prevents accidental misuse.
* **Access Control:** You get to decide exactly how your object's internal state can be changed, usually through specific methods.
* **Maintainability:** If you need to change how something works internally, you can do it without breaking other parts of your code that use the object, as long as the external interface stays the same.
* **Improved Testing:** Because the internal workings are isolated, it’s much easier to test individual parts (unit testing) and reduces unexpected side effects.

In JavaScript, you achieve encapsulation using properties and methods. Since ES2022, we even have proper private fields and methods!

### 9.2 Encapsulation with Closures (Before ES2022)

Before private fields landed in ES2022, JavaScript often used closures for encapsulation. A closure allows an inner function to access variables from its outer (enclosing) function, even after the outer function has finished executing. This creates a "private" scope for variables.

**Example:**

```javascript
function createCounter() {
  let count = 0; // This is our 'private' variable

  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.getCount()); // 2
counter.decrement(); // 1
// console.log(counter.count); // This would be undefined, showing 'count' is private
```

In this example, `count` is only accessible inside `createCounter` and the methods it returns. You can't directly access `counter.count` from outside, but you can interact with it using `increment`, `decrement`, and `getCount`. Pretty neat, right?

### 9.3 Private Fields in ES2022

ES2022 brought in true private fields and methods using the `#` symbol. This makes encapsulation even more explicit and robust within classes. Anything declared with `#` cannot be accessed or modified from outside the class at all.

**Example:**

```javascript
class Person {
  #name; // private field
  #age; // private field

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }

  setName(name) {
    this.#name = name;
  }

  setAge(age) {
    if (age > 0) { // Simple validation example
      this.#age = age;
    }
  }
}

const person = new Person('Alice', 30);
console.log(person.getName()); // "Alice"
console.log(person.getAge()); // 30

person.setName('Bob');
person.setAge(25);

console.log(person.getName()); // "Bob"
console.log(person.getAge()); // 25

// console.log(person.#name); // This would throw an error: 'Private field '#name' must be declared in an enclosing class'
```

Here, `#name` and `#age` are truly private. You *must* use the public methods (`getName`, `getAge`, `setName`, `setAge`) to interact with them.

### 9.4 Private Methods

Just like fields, methods can also be private using the `#` symbol. This is super useful for internal helper functions that shouldn't be called directly from outside the class.

**Example:**

```javascript
class BankAccount {
  #balance; // private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#logTransaction('deposit', amount); // Calling a private method internally
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      this.#logTransaction('withdraw', amount); // Calling a private method internally
    }
  }

  getBalance() {
    return this.#balance;
  }

  #logTransaction(type, amount) { // Private method
    console.log(`Transaction: ${type} ${amount}`);
  }
}

const account = new BankAccount(1000);
account.deposit(500); // "Transaction: deposit 500"
console.log(account.getBalance()); // 1500

account.withdraw(200); // "Transaction: withdraw 200"
console.log(account.getBalance()); // 1300

// account.#logTransaction('test', 100); // This would throw an error: 'Private field '#logTransaction' must be declared in an enclosing class'
```
In this `BankAccount` class, `#logTransaction` is an internal helper. It's called by `deposit` and `withdraw` to record actions, but no one outside the class can directly call it.

### Exercises with Solutions

#### Exercise 1: Private Fields of Person

Declare a class `Person` with private fields `#name` and `#age`. Implement methods `getName`, `getAge`, `setName`, and `setAge` for accessing and modifying the private fields. Create an instance of the class and demonstrate the methods, including an attempt to access the private fields from outside the class.

**Requirements:**
* The program should include the declaration of a class `Person` with private fields `#name` and `#age`.
* The program should include methods `getName` and `getAge` to retrieve the values of the private fields `#name` and `#age` respectively.
* The program should include methods `setName` and `setAge` to alter the values of the private fields `#name` and `#age` respectively.
* The program should create an instance of the class `Person` and demonstrate the use of methods `getName`, `getAge`, `setName`, and `setAge`.
* The program should demonstrate that any attempt to access the private fields `#name` and `#age` from outside the class will result in an error or access failure.

**Solution:**

```javascript
class Person {
  #name; // Private field for name
  #age; // Private field for age

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // Public method to get the name
  getName() {
    return this.#name;
  }

  // Public method to get the age
  getAge() {
    return this.#age;
  }

  // Public method to set the name
  setName(newName) {
    if (typeof newName === 'string' && newName.trim()!== '') {
      this.#name = newName;
      console.log(`Name updated to: ${this.#name}`);
    } else {
      console.log("Invalid name provided.");
    }
  }

  // Public method to set the age with validation
  setAge(newAge) {
    if (typeof newAge === 'number' && newAge > 0 && newAge < 150) {
      this.#age = newAge;
      console.log(`Age updated to: ${this.#age}`);
    } else {
      console.log("Invalid age provided.");
    }
  }
}

// Create an instance of the Person class
const person1 = new Person('Charlie', 42);

console.log("Initial State:");
console.log(`Name: ${person1.getName()}`); // Output: Name: Charlie
console.log(`Age: ${person1.getAge()}`); // Output: Age: 42

console.log("\nUpdating Information:");
person1.setName('Diana'); // Output: Name updated to: Diana
person1.setAge(28); // Output: Age updated to: 28

console.log("\nUpdated State:");
console.log(`Name: ${person1.getName()}`); // Output: Name: Diana
console.log(`Age: ${person1.getAge()}`); // Output: Age: 28

console.log("\nAttempting to access private fields directly (this will cause an error):");
try {
  console.log(person1.#name); // This line will throw a SyntaxError
} catch (error) {
  console.error(`Error: ${error.message}`); // Output: Error: Private field '#name' must be declared in an enclosing class
}

try {
  person1.#age = 100; // This line will also throw a SyntaxError
} catch (error) {
  console.error(`Error: ${error.message}`); // Output: Error: Private field '#age' must be declared in an enclosing class
}

person1.setAge(-5); // Output: Invalid age provided.
person1.setName(''); // Output: Invalid name provided.
```

#### Exercise 2: Private Fields in Car

Declare a `Car` class with private fields `#brand` and `#model`. Implement the methods `getBrand`, `getModel`, `setBrand`, and `setModel` to access and modify the private fields. Add a private method `#logChange`, which will be called when the brand or model is changed. Demonstrate the operation of all methods, including an attempt to call the private method from outside.

**Requirements:**
* The `Car` class must be declared with private fields `#brand` and `#model`.
* The class must contain the methods `getBrand` and `getModel` to retrieve the values of the private fields `#brand` and `#model`, respectively. There should also be methods `setBrand` and `setModel` to modify the values of these fields.
* The class must include a private method `#logChange`, which will be called within the `setBrand` and `setModel` methods when the values of the `#brand` and `#model` fields are changed.
* You need to demonstrate the use of all methods, including obtaining and changing values of private fields.
* Demonstrate an attempt to call the private method `#logChange` from outside the class.

**Solution:**

```javascript
class Car {
  #brand; // Private field for car brand
  #model; // Private field for car model

  constructor(brand, model) {
    this.#brand = brand;
    this.#model = model;
    this.#logChange('initialization', `${brand} ${model}`); // Log initial creation
  }

  // Public method to get the brand
  getBrand() {
    return this.#brand;
  }

  // Public method to get the model
  getModel() {
    return this.#model;
  }

  // Public method to set the brand
  setBrand(newBrand) {
    if (typeof newBrand === 'string' && newBrand.trim()!== '' && this.#brand!== newBrand) {
      const oldBrand = this.#brand;
      this.#brand = newBrand;
      this.#logChange('brand update', `from '${oldBrand}' to '${this.#brand}'`);
    } else if (this.#brand === newBrand) {
        console.log(`Brand is already '${newBrand}'. No change needed.`);
    }
     else {
      console.log("Invalid brand provided. Brand not changed.");
    }
  }

  // Public method to set the model
  setModel(newModel) {
    if (typeof newModel === 'string' && newModel.trim()!== '' && this.#model!== newModel) {
      const oldModel = this.#model;
      this.#model = newModel;
      this.#logChange('model update', `from '${oldModel}' to '${this.#model}'`);
    } else if (this.#model === newModel) {
        console.log(`Model is already '${newModel}'. No change needed.`);
    }
    else {
      console.log("Invalid model provided. Model not changed.");
    }
  }

  // Private method to log changes
  #logChange(type, details) {
    console.log(`[LOG] Car ${this.#brand} ${this.#model}: ${type} - ${details}`);
  }
}

// Create an instance of the Car class
const myCar = new Car('Toyota', 'Camry');
// Output: [LOG] Car Toyota Camry: initialization - Toyota Camry

console.log("\nInitial Car Info:");
console.log(`Brand: ${myCar.getBrand()}`); // Output: Brand: Toyota
console.log(`Model: ${myCar.getModel()}`); // Output: Model: Camry

console.log("\nChanging Car Info:");
myCar.setBrand('Honda'); // Output: [LOG] Car Honda Camry: brand update - from 'Toyota' to 'Honda'
myCar.setModel('Civic'); // Output: [LOG] Car Honda Civic: model update - from 'Camry' to 'Civic'

console.log("\nUpdated Car Info:");
console.log(`Brand: ${myCar.getBrand()}`); // Output: Brand: Honda
console.log(`Model: ${myCar.getModel()}`); // Output: Model: Civic

myCar.setBrand('Honda'); // Output: Brand is already 'Honda'. No change needed.
myCar.setModel(''); // Output: Invalid model provided. Model not changed.

console.log("\nAttempting to call private method directly (this will cause an error):");
try {
  myCar.#logChange('external call', 'attempted'); // This line will throw a SyntaxError
} catch (error) {
  console.error(`Error: ${error.message}`); // Output: Error: Private field '#logChange' must be declared in an enclosing class
}
```

---