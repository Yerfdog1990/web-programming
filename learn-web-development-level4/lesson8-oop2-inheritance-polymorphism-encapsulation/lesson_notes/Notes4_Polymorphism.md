### Polymorphism

**What it is**
Polymorphism is a core OOP concept: objects of different classes share the same *interface* (method name), and the runtime decides which implementation to run. You call `obj.doSomething()` without caring whether `obj` is a Dog, Cat, or something else.

**Why it matters**
- **Simplifies code** – write one function that works with many types.
- **Extensibility** – add a new class with the same method; existing code works unchanged.
- **Maintenance** – separates *what* you do (`makeSound()`) from *how* each class does it.

---

#### 1. Types of Polymorphism in JavaScript

**1.1 Ad-hoc polymorphism:** 
Same method name works for different types. JavaScript doesn’t have native operator/function overloading, but you can simulate it by checking argument types inside the method.

**1.2 Subtype (Inclusion) polymorphism:** 
Objects of subclasses are treated as objects of their parent class. Achieved through inheritance and method overriding — the main form you’ll use in JS.

**1.3 Duck typing:** 
JS has no formal interfaces. “If it has a `fly()` method, treat it as flyable.” The type is inferred from the presence of the method, not from inheritance.

**1.4 Function-level polymorphism**
Because functions are first-class, you can pass a function as an argument and invoke it. The caller doesn’t need to know which specific function it is.

---

#### 2. Examples

##### 2.1 Subtype polymorphism via inheritance

```js
class Animal {
  makeSound() {
    console.log('Some generic sound');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Woof!');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow!');
  }
}

function playWithAnimal(animal) {
  animal.makeSound(); // works for any Animal subclass
}

const dog = new Dog();
const cat = new Cat();

playWithAnimal(dog); // Woof!
playWithAnimal(cat); // Meow!
```

*The same call `animal.makeSound()` produces different output depending on the actual object.*

##### 2.2 Polymorphism through duck typing

```js
class Bird {
  fly() {
    console.log('Flying...');
  }
}

class Airplane {
  fly() {
    console.log('Jet engine roaring...');
  }
}

function takeOff(flyingObject) {
  flyingObject.fly(); // no inheritance required
}

takeOff(new Bird()); // Flying...
takeOff(new Airplane()); // Jet engine roaring...
```

*`takeOff` doesn’t care if the argument is a Bird or Airplane — only that it has `fly()`.*

##### 2.3 Polymorphism through functions

```js
function greetMorning() {
  console.log('Good morning!');
}

function greetEvening() {
  console.log('Good evening!');
}

function greet(greetingFunction) {
  greetingFunction();
}

greet(greetMorning); // Good morning!
greet(greetEvening); // Good evening!
```

*`greet` receives a function and executes it, enabling polymorphic behavior.*

##### 2.4 Simulating method overloading

```js
class Calculator {
  add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else if (Array.isArray(a) && Array.isArray(b)) {
      return a.concat(b);
    } else {
      throw new Error('Invalid arguments');
    }
  }
}

const calc = new Calculator();
console.log(calc.add(1, 2)); // 3
console.log(calc.add([1, 2], [3, 4])); // [1, 2, 3, 4]
```

*Same method name `add` behaves differently based on argument types.*

---

#### 3. Exercises with Solutions

**Exercise A – Method Polymorphism**

*Requirements*
- Class `Animal` with `makeSound()`.
- Classes `Dog` and `Cat` extend `Animal` and override `makeSound()`.
- Function `playWithAnimal(animal)` calls `makeSound()`.
- Create `Dog` and `Cat` objects and pass them to `playWithAnimal`.

*Solution*

```js
class Animal {
  makeSound() {
    console.log('Some generic sound');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Woof! Woof!');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow! Meow!');
  }
}

function playWithAnimal(animal) {
  animal.makeSound();
}

const dog = new Dog();
const cat = new Cat();

playWithAnimal(dog); // Woof! Woof!
playWithAnimal(cat); // Meow! Meow!
```

**Exercise B – Overloading the `add` method**

*Requirements*
- Class `Calculator` with `add(a, b)`.
- If both arguments are numbers → return their sum.
- If both arguments are arrays → return concatenated array.
- Otherwise → throw an error.
- Test with numbers and arrays.

*Solution*

```js
class Calculator {
  add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else if (Array.isArray(a) && Array.isArray(b)) {
      return a.concat(b);
    } else {
      throw new Error('Invalid arguments');
    }
  }
}

const calc = new Calculator();

console.log(calc.add(5, 10)); // 15
console.log(calc.add([1, 2], [3])); // [1, 2, 3]

// calc.add(5, [1]); // → Error: Invalid arguments
```

---

**Takeaway**

In JavaScript polymorphism is flexible: rely on inheritance for subtype polymorphism, on duck typing for interface-like behavior, and on type checks when you need “overloaded” methods. The pattern lets you write code that’s open to new types without editing existing functions.

---