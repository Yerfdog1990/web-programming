# Animation Loops

CSS animations become more powerful when you control **how many times they run** and **in which direction they play**.

In this section, we’ll focus on two important properties:

* `animation-iteration-count`
* `animation-direction`

These properties allow you to create looping and alternating animations for smoother, more natural effects.

---

# 8.1 `animation-iteration-count` Property

The `animation-iteration-count` property specifies **how many times an animation should play**.

It determines whether the animation:

* Plays once
* Plays multiple times
* Plays infinitely

---

## Syntax

```css
element {
  animation-iteration-count: number | infinite;
}
```

### Where:

* `number` → Number of times the animation plays (e.g., `1`, `2`, `3`)
* `infinite` → Animation loops forever

---

## Example: Infinite Bounce Animation

### HTML

```html
<div class="box"></div>
```

### CSS

```css
@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0);
  }
}

.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;

  animation-name: bounce;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
```

---

### Code Explanation

* `@keyframes bounce`
  Moves the element upward (`-30px`) and returns it to its original position.

* `animation-iteration-count: infinite;`
  Makes the animation repeat forever.

---

# 8.2 `animation-direction` Property

The `animation-direction` property controls the **playback direction** of the animation.

It determines whether the animation:

* Plays forward
* Plays backward
* Alternates direction

---

## Syntax

```css
element {
  animation-direction: normal | reverse | alternate | alternate-reverse;
}
```

### Values:

* `normal` → Plays forward (default)
* `reverse` → Plays backward
* `alternate` → Alternates forward and backward
* `alternate-reverse` → Starts backward, then alternates

---

## Example 1: Forward and Reverse Playback

### HTML

```html
<div class="box1"></div>
<div class="box2"></div>
```

### CSS

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100px);
  }
}

.box1, .box2 {
  width: 100px;
  height: 100px;
  background-color: #2ecc71;

  animation-name: moveRight;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.box1 {
  animation-direction: normal;
}

.box2 {
  animation-direction: reverse;
}
```

---

### Code Explanation

* `.box1` → Moves forward (left to right).
* `.box2` → Moves backward (right to left).

---

## Example 2: Alternating Directions

### HTML

```html
<div class="box1"></div>
<div class="box2"></div>
```

### CSS

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100px);
  }
}

.box1, .box2 {
  width: 100px;
  height: 100px;
  background-color: #3498db;

  animation-name: moveRight;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.box1 {
  animation-direction: alternate;
}

.box2 {
  animation-direction: alternate-reverse;
}
```

---

### Code Explanation

* `.box1` → Moves forward, then backward, then forward again.
* `.box2` → Starts in reverse, then alternates direction.

---

# 8.3 Example Using Both Properties

## Swiveling Element

This example uses both looping and alternating direction.

---

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Swiveling Element</title>
  <style>
    @keyframes swing {
      0% {
        transform: rotate(0deg);
      }

      50% {
        transform: rotate(10deg);
      }

      100% {
        transform: rotate(0deg);
      }
    }

    .box {
      width: 100px;
      height: 100px;
      background-color: #e74c3c;

      animation: swing 1s infinite alternate-reverse;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```

---

### Code Explanation

* `@keyframes swing` → Rotates element to 10 degrees and back.
* `animation: swing 1s infinite alternate-reverse;`

    * Duration → `1s`
    * Infinite playback
    * Starts in reverse
    * Alternates direction each cycle

---

# Exercises with Solutions

---

# Exercise 1: Alternating Directions

## Requirements

* Size: `150x150px`
* Background color: `#2ecc71`
* Animation name: `swing`
* Rotate 10 degrees in both directions
* `animation-direction: alternate`
* `animation-iteration-count: infinite`

---

## Solution

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    @keyframes swing {
      0% {
        transform: rotate(-10deg);
      }

      50% {
        transform: rotate(10deg);
      }

      100% {
        transform: rotate(-10deg);
      }
    }

    .box {
      width: 150px;
      height: 150px;
      background-color: #2ecc71;

      animation-name: swing;
      animation-duration: 1s;
      animation-direction: alternate;
      animation-iteration-count: infinite;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```

---

### Explanation

* Rotates between `-10deg` and `10deg`
* `alternate` makes it move back and forth
* `infinite` keeps it running forever

---

# Exercise 2: Full Combination

## Requirements

* Size: `120x120px`
* Background: `#9b59b6`
* Animation name: `scaleUp`
* Scale to `150%`
* Duration: `2s`
* Timing function: `ease-in-out`
* Delay: `1s`
* Infinite playback
* Direction: `alternate-reverse`

---

## Solution

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    @keyframes scaleUp {
      from {
        transform: scale(1);
      }

      to {
        transform: scale(1.5);
      }
    }

    .box {
      width: 120px;
      height: 120px;
      background-color: #9b59b6;

      animation-name: scaleUp;
      animation-duration: 2s;
      animation-timing-function: ease-in-out;
      animation-delay: 1s;
      animation-iteration-count: infinite;
      animation-direction: alternate-reverse;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```

---

### Explanation

* Enlarges from normal size to `150%`
* Waits `1 second` before starting
* Smooth acceleration and deceleration (`ease-in-out`)
* Loops infinitely
* Starts in reverse and alternates direction

---

# Key Takeaways

* `animation-iteration-count` controls **how many times** an animation runs.
* `infinite` creates continuous looping.
* `animation-direction` controls **playback direction**.
* `alternate` creates natural back-and-forth motion.
* `alternate-reverse` starts backward and alternates.
* These properties are essential for creating smooth looping effects.

---

If you'd like, I can now provide a complete summary of all animation properties covered so far in one structured reference sheet.

---