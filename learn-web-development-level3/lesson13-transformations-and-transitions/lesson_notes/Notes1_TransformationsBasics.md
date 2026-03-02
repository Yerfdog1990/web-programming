# Transformation Basics (CSS)

CSS transformations allow you to visually change elements on a webpage by modifying their **position, size, rotation, and shape** without affecting their normal layout in the document flow. This makes them extremely useful for building interactive, animated, and dynamic user interfaces.

The main property used for transformations is:

```css
transform
```

It supports both **2D and 3D transformations** and can combine multiple transformation functions.

---

## 1.1 The `transform` Property

The `transform` property applies one or more transformation functions to an element.

### Syntax

```css
element {
  transform: transformation-function;
}
```

### Where:

* **transformation-function** → The function that defines how the element will be transformed.

### Example

```css
.element {
  transform: translate(50px, 100px);
}
```

This moves the element 50px to the right and 100px downward.

### Key Points

* Transformations do **not affect the document flow**.
* The element’s original space remains reserved.
* Multiple transformation functions can be combined.
* Often used with the `transition` property for smooth animation effects.

---

## 1.2 The `translate()` Transformation

The `translate()` function moves an element along the X-axis and/or Y-axis.

### Syntax

```css
element {
  transform: translate(x, y);
}
```

### Where:

* **x** → horizontal movement (positive = right, negative = left)
* **y** → vertical movement (positive = down, negative = up)

---

### Example: Moving an Element on Hover

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transition: transform 0.5s;
}

.box:hover {
  transform: translate(50px, 50px);
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

* `.box` has fixed dimensions (100x100px) and a blue background.
* `transition: transform 0.5s;` creates a smooth animation.
* On hover, the box moves:

    * 50px to the right
    * 50px downward

---

### Moving an Element (Task Requirements)

* ✔ 100x100 pixels
* ✔ Background color: `#3498db`
* ✔ Moves 50px right and 50px down
* ✔ Smooth transition

Correct implementation:

```css
.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transition: transform 0.5s ease;
}

.box:hover {
  transform: translate(50px, 50px);
}
```

---

## 1.3 The `rotate()` Transformation

The `rotate()` function rotates an element around its center.

### Syntax

```css
element {
  transform: rotate(angle);
}
```

### Where:

* **angle** → rotation in degrees (`deg`)

    * Positive values → clockwise
    * Negative values → counterclockwise

---

### Example: Rotate on Hover

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #e74c3c;
  transition: transform 0.5s;
}

.box:hover {
  transform: rotate(45deg);
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

* The element rotates **45 degrees clockwise** when hovered.
* The rotation happens smoothly because of the `transition`.

---

## 1.4 The `scale()` Transformation

The `scale()` function changes the size of an element.

### Syntax

```css
element {
  transform: scale(sx, sy);
}
```

### Where:

* **sx** → horizontal scaling
* **sy** → vertical scaling
* Value > 1 → enlarges
* Value < 1 → shrinks
* Value = 1 → original size

---

### Example: Scale on Hover

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #2ecc71;
  transition: transform 0.5s;
}

.box:hover {
  transform: scale(1.5, 1.5);
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

* The element increases to **1.5 times** its original size on both axes.
* The transition ensures smooth animation.

---

### Element Scaling (Task Requirements)

* ✔ 100x100 pixels
* ✔ Background color: `#2ecc71`
* ✔ Scales 1.5 times
* ✔ Smooth transition

Correct implementation:

```css
.box {
  width: 100px;
  height: 100px;
  background-color: #2ecc71;
  transition: transform 0.5s ease;
}

.box:hover {
  transform: scale(1.5);
}
```

Note: `scale(1.5)` applies equal scaling to both X and Y axes.

---

## 1.5 The `skew()` Transformation

The `skew()` function slants an element along the X and/or Y axis.

### Syntax

```css
element {
  transform: skew(ax, ay);
}
```

### Where:

* **ax** → skew angle along X-axis
* **ay** → skew angle along Y-axis
* Can be positive or negative

---

### Example: Skew on Hover

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #9b59b6;
  transition: transform 0.5s;
}

.box:hover {
  transform: skew(20deg, 10deg);
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

* Skews 20° horizontally (X-axis)
* Skews 10° vertically (Y-axis)
* The element appears slanted when hovered

---

## 1.6 Combining Multiple Transformations

The `transform` property allows multiple transformation functions to be applied together.

### Example

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transition: transform 0.5s;
}

.box:hover {
  transform: 
    translate(50px, 50px) 
    rotate(45deg) 
    scale(1.5) 
    skew(20deg, 10deg);
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

When hovered, the element:

1. Moves 50px right and down
2. Rotates 45 degrees
3. Scales 1.5 times
4. Skews 20° on X and 10° on Y

All transformations are applied **simultaneously**, creating a complex visual effect.

---

# Summary of Transformation Functions

| Function      | Purpose         | Example                 |
| ------------- | --------------- | ----------------------- |
| `translate()` | Moves element   | `translate(50px, 50px)` |
| `rotate()`    | Rotates element | `rotate(45deg)`         |
| `scale()`     | Resizes element | `scale(1.5)`            |
| `skew()`      | Slants element  | `skew(20deg, 10deg)`    |

---

# Important Concepts to Remember

* Transformations do not affect surrounding elements.
* Always use `transition` for smooth animation.
* Multiple transformations can be combined.
* Order matters when combining transformations.
* Works for both 2D and 3D transformations.

---

# Exercises and Solutions

---

# Exercise 1: Moving an Element

## Instructions

Create an element that:

* Is 100x100 pixels
* Has background color `#3498db`
* Moves 50px right and 50px down on hover
* Has a smooth transition

---

## Solution

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transition: transform 0.5s;
}

.box:hover {
  transform: translate(50px, 50px);
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

---

# Exercise 2: Element Scaling

## Instructions

Create an element that:

* Is 100x100 pixels
* Has background color `#2ecc71`
* Scales 1.5 times on hover
* Has a smooth transition

---

## Solution

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #2ecc71;
  transition: transform 0.5s;
}

.box:hover {
  transform: scale(1.5);
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

---

# Conclusion

CSS transformations are essential for creating engaging web experiences. Using the `transform` property with functions like `translate`, `rotate`, `scale`, and `skew`, you can create movement, resizing, rotation, and distortion effects — all without disturbing the document layout.

Mastering these basics is the foundation for advanced animations and modern UI design.

---