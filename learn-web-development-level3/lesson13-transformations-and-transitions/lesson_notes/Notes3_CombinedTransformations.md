# Combined Transformations

CSS allows you to combine multiple transformation functions inside a single `transform` property. By combining functions like `translate()`, `rotate()`, `scale()`, and `skew()`, you can create complex visual effects and animations.

Understanding how these transformations work together — especially **the order in which they are applied** — is essential for mastering advanced layout and animation techniques.

---

# 3.1 Basics of Combined Transformations

The `transform` property can contain multiple transformation functions separated by spaces.

## Syntax

```css
element {
  transform: function1() function2() ... functionN();
}
```

Each function is applied **in sequence**, from left to right.

---

## Example

```css
element {
  transform: translate(20px, 20px) rotate(45deg) scale(1.5) skew(10deg, 5deg);
}
```

This means:

1. Move the element 20px right and 20px down.
2. Rotate it 45 degrees.
3. Scale it 1.5 times.
4. Skew it 10° on X-axis and 5° on Y-axis.

---

# Moving and Rotating

In this example, the element moves first, then rotates.

## Example

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transform: translate(50px, 50px) rotate(45deg);
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

## Code Explanation

* The element first moves 50px right and 50px down.
* Then it rotates 45 degrees clockwise.
* The transformations happen in the order written.

---

# 3.2 Exploring Different Combinations

## 1. Scaling and Skewing

The element scales first, then skews.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #e74c3c;
  transform: scale(1.5) skew(20deg, 10deg);
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Code Explanation

* First: the element scales 1.5 times on both axes.
* Second: it skews 20° along X-axis and 10° along Y-axis.

---

## 2. Moving, Rotating, and Scaling

This example combines three transformations.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #2ecc71;
  transform: translate(100px, 0) rotate(30deg) scale(2, 1.5);
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Code Explanation

The element:

1. Moves 100px to the right.
2. Rotates 30 degrees.
3. Scales 2 times along X-axis and 1.5 times along Y-axis.

---

# 3.3 Impact of Transformation Order

When combining transformations, **order matters**.

Each transformation affects the result of the previous one.

---

## Example A: Rotate First, Then Move

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box-a {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transform: rotate(45deg) translate(50px, 50px);
}
</style>
</head>
<body>

<div class="box-a"></div>

</body>
</html>
```

### Explanation

* First: rotate 45 degrees.
* Then: move 50px right and 50px down.
* Because the element is already rotated, the movement occurs along its rotated axes.

---

## Example B: Move First, Then Rotate

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box-b {
  width: 100px;
  height: 100px;
  background-color: #e74c3c;
  transform: translate(50px, 50px) rotate(45deg);
}
</style>
</head>
<body>

<div class="box-b"></div>

</body>
</html>
```

### Explanation

* First: move 50px right and down.
* Then: rotate 45 degrees.
* The rotation happens around the element’s new position.

---

## Key Concept

Changing the order changes the final visual result — even if the same transformation values are used.

---

# Exercises with Solutions

---

# Exercise 1: Complete Transformation

## Requirements

Create an element:

* Size: 100x100 pixels
* Background color: `#2ecc71`
* Move 100px right
* Rotate 30 degrees
* Scale 2 times along X-axis and 1.5 times along Y-axis
* All transformations must be combined into:

```css
transform: translate(100px, 0) rotate(30deg) scale(2, 1.5);
```

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
  transform: translate(100px, 0) rotate(30deg) scale(2, 1.5);
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

The element:

1. Moves 100px to the right.
2. Rotates 30 degrees.
3. Scales wider (2x) and taller (1.5x).

All transformations are applied in one `transform` property.

---

# Exercise 2: Order of Transformations

## Requirements

* Create two 100x100 pixel elements.
* Use different background colors.
* First element:

  ```css
  transform: rotate(45deg) translate(50px, 50px);
  ```
* Second element:

  ```css
  transform: translate(50px, 50px) rotate(45deg);
  ```

---

## Solution

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box-a {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transform: rotate(45deg) translate(50px, 50px);
}

.box-b {
  width: 100px;
  height: 100px;
  background-color: #e74c3c;
  transform: translate(50px, 50px) rotate(45deg);
}
</style>
</head>
<body>

<div class="box-a"></div>
<br><br>
<div class="box-b"></div>

</body>
</html>
```

---

## Explanation

### First Element (.box-a)

* Rotates first.
* Then moves along rotated axes.
* Final position appears diagonal relative to the original layout.

### Second Element (.box-b)

* Moves first.
* Then rotates around its new position.
* Produces a different final visual result.

---

# Final Summary

✔ Multiple transformations can be combined in one `transform` property.
✔ Transformations are applied in sequence.
✔ The order of transformations significantly affects the final output.
✔ Common combinations:

* Move + Rotate
* Scale + Skew
* Move + Rotate + Scale
* Any combination of transform functions

---

Mastering combined transformations allows you to build advanced animations, interactive UI components, and visually dynamic web designs.

---