# Animation Basics

CSS animations allow you to create smooth, complex visual effects without JavaScript. The core of CSS animation is the `@keyframes` rule, which defines how an element’s styles change over time.

---

## 6.1 The `@keyframes` Rule

The `@keyframes` rule defines the stages of an animation by specifying which CSS properties should change and when they should change during the animation timeline.

### What Are Keyframes?

Keyframes define:

* **Which styles** are applied
* **At what point in time** they are applied during the animation

The animation runs from the starting point (0%) to the ending point (100%), applying the defined styles gradually.

---

## Syntax of `@keyframes`

### Syntax 1: Using `from` and `to`

```css
@keyframes animation-name {
  from {
    /* starting styles */
  }

  to {
    /* final styles */
  }
}
```

* `from` corresponds to `0%`
* `to` corresponds to `100%`

---

### Syntax 2: Using Percentages

```css
@keyframes animation-name {
  0% {
    /* starting styles */
  }

  100% {
    /* final styles */
  }
}
```

This version allows more flexibility, especially when adding intermediate steps like `25%`, `50%`, or `75%`.

---

## Example: Smooth Background Color Transition

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Animation Example</title>
  <style>
    @keyframes changeColor {
      from {
        background-color: lightblue;
      }

      to {
        background-color: lightcoral;
      }
    }

    .animated-box {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      animation: changeColor 3s infinite;
    }
  </style>
</head>
<body>
  <div class="animated-box">Hover over me!</div>
</body>
</html>
```

### Explanation

* `@keyframes changeColor` defines an animation that changes the background color:

    * From `lightblue`
    * To `lightcoral`
* The `animation` property on `.animated-box`:

    * Uses the `changeColor` animation
    * Runs for **3 seconds**
    * Repeats **infinitely**

---

# 6.2 Multiple Keyframes

You can define more than two keyframes to create more complex animations with intermediate stages.

---

## Example: Diagonal Movement with Color Change

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multiple Keyframes Example</title>
  <style>
    @keyframes moveAndChangeColor {
      0% {
        background-color: lightblue;
        transform: translate(0, 0);
      }

      50% {
        background-color: lightgreen;
        transform: translate(100px, 100px);
      }

      100% {
        background-color: lightcoral;
        transform: translate(200px, 0);
      }
    }

    .animated-box {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      animation: moveAndChangeColor 5s infinite;
    }
  </style>
</head>
<body>
  <div class="animated-box">Watch me move!</div>
</body>
</html>
```

---

### Explanation

The animation progresses in **three stages**:

* **0%**

    * Color: `lightblue`
    * Position: `(0, 0)`

* **50%**

    * Color: `lightgreen`
    * Moves `100px` right and `100px` down

* **100%**

    * Color: `lightcoral`
    * Moves `200px` to the right

The animation:

* Lasts **5 seconds**
* Repeats **infinitely**

---

# 6.3 Examples of Simple Animations

---

## Example 1: Pulsing Effect

Creates a smooth expand-and-contract animation.

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pulsing Effect</title>
  <style>
    @keyframes pulse {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.2);
      }

      100% {
        transform: scale(1);
      }
    }

    .pulse-box {
      width: 150px;
      height: 150px;
      background-color: lightpink;
      animation: pulse 2s infinite;
    }
  </style>
</head>
<body>
  <div class="pulse-box">Pulsing</div>
</body>
</html>
```

### Explanation

* At `0%`: Element is normal size (`scale(1)`)
* At `50%`: Scales to `120%` (`scale(1.2)`)
* At `100%`: Returns to original size
* Animation duration: **2 seconds**
* Repeats infinitely

---

## Example 2: Rotation

Creates a continuous rotation effect.

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rotating Effect</title>
  <style>
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    .rotate-box {
      width: 100px;
      height: 100px;
      background-color: lightseagreen;
      animation: rotate 3s infinite linear;
    }
  </style>
</head>
<body>
  <div class="rotate-box">Rotating</div>
</body>
</html>
```

### Explanation

* Rotates from `0deg` to `360deg`
* Duration: **3 seconds**
* `infinite` → loops forever
* `linear` → constant speed (no acceleration or deceleration)

---

# Exercises with Solutions

---

# Exercise 1: Movement and Color

## Requirements

* Element size: `100x100px`
* Initial background: `#e74c3c`
* Three keyframes:

    * `0%`: initial position, `#e74c3c`
    * `50%`: move 100px right and down, color `#f1c40f`
    * `100%`: return to start, color `#3498db`
* Duration: 5 seconds
* Infinite loop

---

## Solution

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    @keyframes moveAndColor {
      0% {
        background-color: #e74c3c;
        transform: translate(0, 0);
      }

      50% {
        background-color: #f1c40f;
        transform: translate(100px, 100px);
      }

      100% {
        background-color: #3498db;
        transform: translate(0, 0);
      }
    }

    .box {
      width: 100px;
      height: 100px;
      background-color: #e74c3c;
      animation: moveAndColor 5s infinite;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```

---

# Exercise 2: Pulsation

## Requirements

* Element size: `200x200px`
* Background: `#9b59b6`
* Scale to `120%` at `50%`
* Return to normal at `100%`
* Duration: 3 seconds
* Infinite loop

---

## Solution

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    @keyframes pulsate {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.2);
      }

      100% {
        transform: scale(1);
      }
    }

    .pulse {
      width: 200px;
      height: 200px;
      background-color: #9b59b6;
      animation: pulsate 3s infinite;
    }
  </style>
</head>
<body>
  <div class="pulse"></div>
</body>
</html>
```

---

# Key Takeaways

* `@keyframes` defines how an animation behaves over time.
* `from` = `0%`, `to` = `100%`.
* You can define multiple percentage stages for complex animations.
* The `animation` property controls:

    * Name
    * Duration
    * Iteration count
    * Timing function (e.g., `linear`)
* CSS animations allow smooth visual effects with minimal code.

---

If you'd like, I can also create a comparison section between **transitions vs animations**, especially since you’ve been working on transitions recently.

---