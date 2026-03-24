### Mixins and Composition 

Mixins and composition are alternatives to classical inheritance. They let you assemble behavior from small, reusable pieces instead of building deep class hierarchies.

---

#### 11.1 Mixins

**What they are:**

A mixin is a plain object (or class) that contains methods/properties. You *copy* those members into a class’s prototype with `Object.assign`.

**Example**

```js
const CanEat = {
  eat() {
    console.log('Eating...');
  }
};

const CanWalk = {
  walk() {
    console.log('Walking...');
  }
};

class Person {
  constructor(name) {
    this.name = name;
  }
}

// Copy methods from mixins to the class prototype
Object.assign(Person.prototype, CanEat, CanWalk);

const person = new Person('John');
person.eat();  // Eating...
person.walk(); // Walking...
```

**Advantages**
- **Code reuse** – share the same methods across many classes.
- **Flexibility** – pick and choose which mixins a class needs.
- **Avoids deep inheritance** – no need for `class Person extends WalkerEater`.

**Issues**
- **Name conflicts** – if two mixins define `move()`, the last one wins.
- **Unclear structure** – it’s not obvious at a glance which behaviors a class has.

---

#### 11.2 Composition

Composition builds objects by *combining* other objects or functions rather than inheriting from them.

**Example 1: Function composition**

```js
function canEat(obj) {
  obj.eat = function() {
    console.log('Eating...');
  };
}

function canWalk(obj) {
  obj.walk = function() {
    console.log('Walking...');
  };
}

function Person(name) {
  this.name = name;
}

const person = new Person('John');
canEat(person);
canWalk(person);

person.eat();  // Eating...
person.walk(); // Walking...
```

**Example 2: Composition with classes**

```js
class CanEat {
  eat() {
    console.log('Eating...');
  }
}

class CanWalk {
  walk() {
    console.log('Walking...');
  }
}

class Person {
  constructor(name) {
    this.name = name;
    // Create instances of CanEat and CanWalk
    this.eater = new CanEat();
    this.walker = new CanWalk();
  }

  // Delegate methods to the corresponding instances
  eat() {
    this.eater.eat();
  }

  walk() {
    this.walker.walk();
  }
}

const person = new Person('John');
person.eat();  // Eating...
person.walk(); // Walking...
```

**Advantages**
- **Flexibility** – combine any behaviors at runtime.
- **Modularity** – each piece is an independent module, easy to test.
- **No inheritance hierarchy** – avoids the pitfalls of multiple inheritance.

**Issues**
- **More boilerplate** – you must write delegation methods.
- **Potential redundancy** – each composed object needs its own wiring.

---

#### 11.3 Mixins vs Composition

**Mixins**
- Easy to add functionality to many classes.
- Risk of name collisions.
- Structure can become opaque.

**Composition**
- More flexible and modular.
- Avoids inheritance problems.
- Can be more verbose to implement and maintain.

---

#### 11.4 Exercises with Solutions

**Exercise 1 – Functionality Mixins**

*Requirements*
- Create mixin `CanSwim` with `swim()` → logs `"Swimming..."`.
- Create mixin `CanFly` with `fly()` → logs `"Flying..."`.
- Create class `Bird`.
- Use `Object.assign` to add both mixins to `Bird.prototype`.
- Instantiate `Bird` and call `swim()` and `fly()`.

*Solution*

```js
const CanSwim = {
  swim() {
    console.log('Swimming...');
  }
};

const CanFly = {
  fly() {
    console.log('Flying...');
  }
};

class Bird {}

Object.assign(Bird.prototype, CanSwim, CanFly);

const bird = new Bird();
bird.swim(); // Swimming...
bird.fly();  // Flying...
```

**Exercise 2 – Function Composition**

*Requirements*
- Implement `canRun(obj)` that adds `run()` → logs `"Running..."`.
- Implement `canJump(obj)` that adds `jump()` → logs `"Jumping..."`.
- Create constructor function `Athlete`.
- Use composition to add `run` and `jump` to each `Athlete` instance.
- Create an athlete and call `run()` and `jump()`.

*Solution*

```js
function canRun(obj) {
  obj.run = function() {
    console.log('Running...');
  };
}

function canJump(obj) {
  obj.jump = function() {
    console.log('Jumping...');
  };
}

function Athlete(name) {
  this.name = name;
  canRun(this);
  canJump(this);
}

const athlete = new Athlete('Alex');
athlete.run();  // Running...
athlete.jump(); // Jumping...
```

**Takeaway**

- Use **mixins** when you want to sprinkle the same behavior across many classes quickly.
- Use **composition** when you want finer control, clearer dependencies, and the ability to swap behaviors at runtime. Both help you avoid rigid inheritance chains.

---