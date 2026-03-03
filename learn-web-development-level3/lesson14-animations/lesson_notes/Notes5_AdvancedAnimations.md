# Advanced Animation Techniques

Advanced animations combine multiple CSS transformations, JavaScript timing control, and event handling to create rich, interactive user experiences. This section covers:

* **10.1 Combined Animations (CSS-only)**
* **10.2 JavaScript Animations with `requestAnimationFrame`**
* **10.3 Controlling CSS Animations with JavaScript**
* **10.4 Animation Events and Interactivity**
* Exercises with full solutions

---

## 10.1 Combined Animations (CSS)

Complex animations often involve **multiple transformations** applied at the same time:

* `scale()` → resizing
* `rotate()` → rotation
* `translateX()` → horizontal movement

These can be combined using the `transform` property inside `@keyframes`.

---

### Example: Combined Animations

### ✅ HTML + CSS

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Combined Animations</title>

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: #3498db;
    animation: combined 4s infinite alternate;
  }

  @keyframes combined {
    0% {
      transform: scale(1) rotate(0deg) translateX(0);
    }

    50% {
      transform: scale(1.5) rotate(45deg) translateX(100px);
    }

    100% {
      transform: scale(1) rotate(0deg) translateX(0);
    }
  }
</style>
</head>

<body>
  <div class="box"></div>
</body>
</html>
```

---

### 🔎 Code Explanation

* `.box`

    * Sets dimensions and background color.
    * Applies the `combined` animation.
* `animation: combined 4s infinite alternate;`

    * `4s` → duration
    * `infinite` → repeats forever
    * `alternate` → reverses direction each cycle
* `transform`

    * Combines scale, rotation, and movement in one property.

⚠ Important: Multiple transforms must be written in **one line** inside `transform`.

---

## 10.2 JavaScript Animations with `requestAnimationFrame`

While CSS handles many animations well, JavaScript gives **more control**.

### Why use `requestAnimationFrame`?

* Synchronizes with screen refresh rate
* Smooth performance
* More efficient than `setInterval`
* Ideal for physics-based or dynamic animations

---

### Example: Moving a Ball

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Animation with requestAnimationFrame</title>

<style>
  .ball {
    width: 50px;
    height: 50px;
    background-color: #e74c3c;
    border-radius: 50%;
    position: absolute;
  }
</style>
</head>

<body>

<div class="ball"></div>

<script>
const ball = document.querySelector('.ball');
let start = null;

function animate(time) {
  if (!start) start = time;

  let progress = time - start;

  // Move up to 200px over 2 seconds
  ball.style.left = Math.min(progress / 10, 200) + 'px';

  if (progress < 2000) {
    requestAnimationFrame(animate);
  }
}

requestAnimationFrame(animate);
</script>

</body>
</html>
```

---

### 🔎 Code Explanation

* `requestAnimationFrame(animate)`

    * Calls `animate()` before each repaint.
* `time`

    * Automatically passed timestamp.
* `progress`

    * Time passed since animation started.
* `Math.min(progress / 10, 200)`

    * Gradually increases position.
    * Stops at 200px.

---

## 10.3 Controlling CSS Animations with JavaScript

JavaScript can:

* Start animations
* Stop animations
* Toggle animations
* Restart animations

This is typically done by **adding or removing classes**.

---

### Example: Trigger Animation on Button Click

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Animation on Button Click</title>

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: #2ecc71;
    position: relative;
  }

  .box.animate {
    animation: moveAndRotate 3s forwards;
  }

  @keyframes moveAndRotate {
    0% {
      transform: translateX(0) rotate(0deg);
    }

    100% {
      transform: translateX(200px) rotate(360deg);
    }
  }
</style>
</head>

<body>

<div class="box" id="box"></div>
<button id="startButton">Start Animation</button>

<script>
document.getElementById('startButton')
  .addEventListener('click', function() {
    document.getElementById('box')
      .classList.toggle('animate');
});
</script>

</body>
</html>
```

---

### 🔎 Code Explanation

* `.box.animate`

    * Adds animation when class is applied.
* `forwards`

    * Keeps the final animation state.
* `classList.toggle()`

    * Adds or removes the animation class.

---

## 10.4 Interacting with Animations via Events

CSS animations emit events:

| Event                | When It Fires           |
| -------------------- | ----------------------- |
| `animationstart`     | When animation begins   |
| `animationend`       | When animation finishes |
| `animationiteration` | Each repetition         |

---

### Example: Tracking Animation Events

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tracking Animation Events</title>

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: #9b59b6;
    animation: scaleUp 2s infinite;
  }

  @keyframes scaleUp {
    0% { transform: scale(1); }
    50% { transform: scale(1.5); }
    100% { transform: scale(1); }
  }
</style>
</head>

<body>

<div class="box" id="box"></div>

<script>
const box = document.getElementById('box');

box.addEventListener('animationstart', () => {
  console.log('Animation started');
});

box.addEventListener('animationend', () => {
  console.log('Animation ended');
});

box.addEventListener('animationiteration', () => {
  console.log('Animation iteration');
});
</script>

</body>
</html>
```

---

## 🧠 Key Concepts Summary

| Concept                 | Purpose                            |
| ----------------------- | ---------------------------------- |
| `@keyframes`            | Defines animation stages           |
| `transform`             | Combines movement, rotation, scale |
| `animation`             | Applies animation                  |
| `requestAnimationFrame` | High-performance JS animation      |
| `classList`             | Control animations dynamically     |
| Animation events        | Track animation lifecycle          |

---

# Exercises with Solutions

---

# Exercise 1: Complex Animations

### 📝 Task

Create an element:

* 100x100 pixels
* Background: `#3498db`
* Animate for 4 seconds:

    * Scale to 1.5
    * Rotate 45°
    * Move 100px right
* Repeat infinitely
* Alternate direction

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: #3498db;
    animation: complex 4s infinite alternate;
  }

  @keyframes complex {
    0% {
      transform: scale(1) rotate(0deg) translateX(0);
    }

    100% {
      transform: scale(1.5) rotate(45deg) translateX(100px);
    }
  }
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

---

# Exercise 2: Animation Launch on Button Click

### 📝 Task

* Create a 100x100 element
* Background: `#2ecc71`
* Button text: "Start Animation"
* Move 200px right
* Rotate 360°
* Duration: 3 seconds
* Starts on button click

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: #2ecc71;
    position: relative;
  }

  .box.animate {
    animation: moveRotate 3s forwards;
  }

  @keyframes moveRotate {
    from {
      transform: translateX(0) rotate(0deg);
    }

    to {
      transform: translateX(200px) rotate(360deg);
    }
  }
</style>
</head>
<body>

<div class="box" id="box"></div>
<button id="btn">Start Animation</button>

<script>
const btn = document.getElementById("btn");
const box = document.getElementById("box");

btn.addEventListener("click", function() {
  box.classList.add("animate");
});
</script>

</body>
</html>
```

---

# 🎯 Final Thoughts

Advanced animations combine:

* CSS transforms for performance
* JavaScript timing control
* Dynamic class manipulation
* Event-based interactivity

When used properly, they:

* Improve UX
* Increase engagement
* Provide visual feedback
* Make interfaces feel modern and responsive

---

