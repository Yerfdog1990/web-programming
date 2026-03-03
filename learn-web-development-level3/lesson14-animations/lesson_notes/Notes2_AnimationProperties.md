# Animation Properties

CSS animations make web interfaces dynamic and engaging. While `@keyframes` defines **what happens** during an animation, animation properties control **how it behaves** — including its name, duration, speed curve, and delay.

In this section, we’ll cover:

* `animation-name`
* `animation-duration`
* `animation-timing-function`
* `animation-delay`
* `animation-fill-mode`

Each property controls a specific aspect of the animation.

---

# 7.1 `animation-name` Property

The `animation-name` property specifies **which animation** (defined using `@keyframes`) should be applied to an element.

The value must exactly match the name used in the `@keyframes` rule.

---

## Syntax

```css
element {
  animation-name: animation-name;
}
```

### Where:

* `animation-name` → The name defined in `@keyframes`

---

## Example

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100px);
  }
}

.box {
  animation-name: moveRight;
}
```

---

### Code Explanation

* `@keyframes moveRight`
  Defines an animation named **moveRight** that moves the element 100px to the right.

* `.box`
  Applies the `moveRight` animation to the element using `animation-name`.

⚠️ Note: The animation will not run visibly unless a duration is specified.

---

# 7.2 `animation-duration` Property

The `animation-duration` property specifies **how long the animation takes to complete one cycle**.

The value is defined in:

* Seconds (`s`)
* Milliseconds (`ms`)

---

## Syntax

```css
element {
  animation-duration: time;
}
```

### Where:

* `time` → e.g., `2s`, `500ms`

---

## Example

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100px);
  }
}

.box {
  animation-name: moveRight;
  animation-duration: 2s;
}
```

---

### Code Explanation

* `animation-duration: 2s;`
  The animation completes in **2 seconds**.

Without `animation-duration`, the animation will not run.

---

# 7.3 `animation-timing-function` Property

The `animation-timing-function` property controls the **speed curve** of the animation.

It determines whether the animation:

* Starts slow
* Ends slow
* Moves at constant speed
* Accelerates or decelerates

---

## Syntax

```css
element {
  animation-timing-function: function;
}
```

### Where:

* `function` → ease, linear, ease-in, ease-out, ease-in-out

---

## Example

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100px);
  }
}

.box {
  animation-name: moveRight;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
}
```

---

### Code Explanation

* `animation-timing-function: ease-in-out;`
  The animation:

    * Starts slowly
    * Speeds up in the middle
    * Slows down at the end

---

## Main Timing Functions

| Timing Function | Behavior                            |
| --------------- | ----------------------------------- |
| `ease`          | Slow start → fast middle → slow end |
| `linear`        | Constant speed                      |
| `ease-in`       | Slow start → speeds up              |
| `ease-out`      | Fast start → slows down             |
| `ease-in-out`   | Slow start and end, fast middle     |

---

# 7.4 `animation-delay` Property

The `animation-delay` property sets a **waiting time before the animation starts**.

---

## Syntax

```css
element {
  animation-delay: time;
}
```

### Where:

* `time` → e.g., `1s`, `500ms`

---

## Example

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100px);
  }
}

.box {
  animation-name: moveRight;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
}
```

---

### Code Explanation

* `animation-delay: 1s;`
  The animation waits **1 second** before starting.

---

---

# 7.5 `animation-fill-mode` Property

The `animation-fill-mode` property specifies how a CSS animation should apply styles to its target **before and after it is executing**.

By default, an animation does not affect the element before the first keyframe is played or after the last keyframe is finished. Using `forwards` keeps the element in the final state of the animation.

---

## Syntax

```css
element {
  animation-fill-mode: mode;
}
```

### Where:

* `mode` → `none` (default), `forwards`, `backwards`, `both`

---

## Example (forwards)

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100px);
  }
}

.box {
  animation-name: moveRight;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}
```

---

### Code Explanation

* `animation-fill-mode: forwards;`
  The element will **stay at the 100px position** after the animation ends. Without this, it would snap back to its original position (0px).

---

# Complete Example Combining All Properties

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100px);
  }
}

.box {
  width: 100px;
  height: 100px;
  background-color: coral;

  animation-name: moveRight;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
}
```

---

# Exercises with Solutions

---

# Exercise 1: Animation Timing

## Requirements

* Element size: `120x120px`
* Background color: `#2ecc71`
* Animation name: `rotate`
* Rotate element `360deg`
* Timing function: `ease-in-out`
* Duration: `4 seconds`

---

## Solution

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    .box {
      width: 120px;
      height: 120px;
      background-color: #2ecc71;

      animation-name: rotate;
      animation-duration: 4s;
      animation-timing-function: ease-in-out;
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

* `@keyframes rotate` rotates from `0deg` to `360deg`
* `animation-duration: 4s` → lasts 4 seconds
* `animation-timing-function: ease-in-out` → smooth acceleration and deceleration

---

# Exercise 2: Animation Delay

## Requirements

* Element size: `100x100px`
* Background: `#9b59b6`
* Animation name: `slideRight`
* Move right by `100px`
* Delay: `2 seconds`
* Duration: `1.5 seconds`

---

## Solution

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    @keyframes slideRight {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(100px);
      }
    }

    .box {
      width: 100px;
      height: 100px;
      background-color: #9b59b6;

      animation-name: slideRight;
      animation-duration: 1.5s;
      animation-delay: 2s;
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

* The element waits **2 seconds**
* Then moves **100px to the right**
* The movement takes **1.5 seconds**

---

---

# Exercise 3: Animation Fill Mode

## Requirements

* Element size: `100x100px`
* Background color: `#e67e22`
* Animation name: `scaleUp`
* Scale element to `1.5` times its size
* Duration: `2 seconds`
* Fill mode: `forwards`

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
      width: 100px;
      height: 100px;
      background-color: #e67e22;

      animation-name: scaleUp;
      animation-duration: 2s;
      animation-fill-mode: forwards;
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

* The element scales up from `1` to `1.5` over **2 seconds**.
* Due to `animation-fill-mode: forwards`, the element **stays at 1.5x scale** when the animation finishes.

---

# Key Takeaways

* `animation-name` connects an element to a `@keyframes` animation.
* `animation-duration` defines how long one animation cycle lasts.
* `animation-timing-function` controls the speed curve.
* `animation-delay` sets when the animation begins.
* `animation-fill-mode` defines how styles are applied before and after the animation.
* `forwards` ensures the element retains its final animation state.
* Without `animation-duration`, animations will not run.
* All properties work together to fully control animation behavior.

---

If you’d like, I can next cover the `animation-iteration-count`, `animation-direction`, and the shorthand `animation` property to complete the animation property set.

---