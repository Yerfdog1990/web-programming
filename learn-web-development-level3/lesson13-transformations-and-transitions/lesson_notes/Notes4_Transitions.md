# 4. Transitions in CSS

CSS **transitions** allow you to animate changes in CSS property values smoothly over a specified duration. Instead of instantly changing from one style to another, transitions create gradual effects that improve user experience and make web pages more interactive.

---

# 4.1 The `transition` Property

The `transition` property is a shorthand property that combines all transition-related properties into one line.

It can include:

* The property to animate
* The duration of the animation
* The timing function
* The delay (optional)

## Syntax

```css
element {
  transition: property duration timing-function delay;
}
```

### Where:

* **property** → The CSS property to animate (e.g., `width`, `height`, `background-color`)
* **duration** → How long the animation lasts (`2s`, `500ms`)
* **timing-function** → Speed curve (`ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`)
* **delay** → Time before animation starts (`1s`, `500ms`)

---

## Example

```css
.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transition: width 2s ease-in-out, background-color 1s ease;
}
```

### Code Explanation

```css
transition: width 2s ease-in-out, background-color 1s ease;
```

This defines **two transitions**:

1. `width` → lasts 2 seconds, uses `ease-in-out`
2. `background-color` → lasts 1 second, uses `ease`

Multiple transitions are separated by commas.

---

# 4.2 Individual Transition Properties

Instead of using the shorthand `transition`, you can use separate properties.

---

## 1. `transition-property`

Defines which properties will be animated.

### Syntax

```css
element {
  transition-property: property1, property2;
}
```

### Example

```css
.box {
  transition-property: width, height, background-color;
}
```

---

## 2. `transition-duration`

Specifies how long the transition lasts.

### Syntax

```css
element {
  transition-duration: time;
}
```

### Example

```css
.box {
  transition-duration: 2s, 1s, 3s;
}
```

Each value matches the corresponding property listed in `transition-property`.

---

## 3. `transition-timing-function`

Defines how the animation speed changes over time.

### Syntax

```css
element {
  transition-timing-function: function;
}
```

### Example

```css
.box {
  transition-timing-function: ease-in, linear, ease-out;
}
```

---

## 4. `transition-delay`

Specifies how long to wait before starting the transition.

### Syntax

```css
element {
  transition-delay: time;
}
```

### Example

```css
.box {
  transition-delay: 1s, 0s, 500ms;
}
```

---

# 4.3 Transition Duration

The duration determines how long the animation takes to complete.

It is specified in:

* Seconds (`s`)
* Milliseconds (`ms`)

### Example

```css
.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transition: width 2s, height 1s, background-color 500ms;
}
```

### Code Explanation

* `width` → 2 seconds
* `height` → 1 second
* `background-color` → 500 milliseconds

Each property can have its own duration.

---

# 4.4 Timing Functions

Timing functions control the speed pattern of the animation.

## Main Timing Functions

| Function      | Description                    |
| ------------- | ------------------------------ |
| `ease`        | Starts slow → fast → ends slow |
| `linear`      | Constant speed                 |
| `ease-in`     | Starts slow, then speeds up    |
| `ease-out`    | Starts fast, then slows down   |
| `ease-in-out` | Starts slow → fast → ends slow |

---

### Example

```css
.box {
  width: 100px;
  height: 100px;
  background-color: #2ecc71;
  transition: width 2s ease-in-out,
              height 1s linear,
              background-color 500ms ease;
}
```

### Code Explanation

* `ease-in-out` → smooth start and end
* `linear` → constant speed
* `ease` → slow start and slow end

---

# Exercise 1: Transition Delay

## Task

Create an element:

* 150x150 pixels
* Background color: `#f1c40f`
* On hover:

    * Change background to `#e67e22`
    * Increase size to 200x200 pixels
* Transition:

    * Starts after 1 second
    * Lasts 1.5 seconds
    * Uses `linear` timing function

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 150px;
  height: 150px;
  background-color: #f1c40f;
  transition: width 1.5s linear 1s,
              height 1.5s linear 1s,
              background-color 1.5s linear 1s;
}

.box:hover {
  width: 200px;
  height: 200px;
  background-color: #e67e22;
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

* `1.5s` → duration
* `linear` → constant speed
* `1s` → delay
* Hover triggers size and color changes

---

# Exercise 2: Complex Transitions

## Task

Create an element:

* 100x100 pixels
* Background color: `#9b59b6`
* On hover:

    * Change background to `#8e44ad`
    * Rotate 45 degrees
    * Increase size to 150x150 pixels
* All transitions:

    * Start at same time
    * Last 1.5 seconds
    * Use `ease-in` and `ease-out`

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
  background-color: #9b59b6;
  transition: width 1.5s ease-in,
              height 1.5s ease-out,
              background-color 1.5s ease-in,
              transform 1.5s ease-out;
}

.box:hover {
  width: 150px;
  height: 150px;
  background-color: #8e44ad;
  transform: rotate(45deg);
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

---

# Summary

CSS transitions:

* Animate changes smoothly
* Improve user experience
* Can be written using shorthand or individual properties
* Allow control over:

    * Property
    * Duration
    * Timing function
    * Delay

Transitions are essential for creating modern, interactive web designs.

---