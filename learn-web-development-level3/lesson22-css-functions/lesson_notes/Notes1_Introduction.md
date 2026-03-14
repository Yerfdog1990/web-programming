# Introduction to CSS Functions

CSS functions provide powerful ways to calculate values directly inside CSS. Instead of writing fixed values everywhere, CSS functions allow you to perform **mathematical operations and conditional calculations** inside your style sheets.

The most commonly used functions for responsive layouts include:

* `calc()`
* `min()`
* `max()`
* `clamp()`

These functions help developers create **flexible and responsive designs** by allowing CSS values to adapt automatically to different screen sizes and layouts.

---

# 5.1 The `calc()` Function

The **`calc()` function** is used to perform mathematical calculations directly in CSS.

It allows you to **combine different units** such as:

* Pixels (`px`)
* Percentages (`%`)
* `em`
* `rem`
* `vw`
* `vh`

This is extremely useful when designing **responsive layouts** where sizes depend on both fixed and relative measurements.

## Syntax

```css
selector {
  property: calc(expression);
}
```

Where **expression** contains a mathematical calculation using:

* `+` addition
* `-` subtraction
* `*` multiplication
* `/` division

---

## Example: Using `calc()`

In the example below, the width of the block is calculated as:

**50% of the parent element minus 20px**

```css
/* Width of the block is half of the parent element minus 20px */

.block {
  width: calc(50% - 20px);
}
```

### Explanation

If the parent container width is:

| Parent Width | Result                   |
| ------------ | ------------------------ |
| 1000px       | 500px − 20px = **480px** |
| 800px        | 400px − 20px = **380px** |

This allows the element to **scale proportionally with the container**.

---

# 5.2 Functions `min()`, `max()`, and `clamp()`

These functions allow CSS to choose values **based on conditions**.

They are extremely useful for **responsive layouts without writing many media queries**.

---

# The `min()` Function

The **`min()` function** returns the **smallest value** from a list of values.

It is useful when you want a property to **never exceed a certain size**.

## Syntax

```css
selector {
  property: min(value1, value2);
}
```

---

## Example

```css
.container {
  width: min(50%, 300px);
}
```

### Explanation

The width will be:

* **50% of the parent width**
* **OR 300px**
* **Whichever is smaller**

| Parent Width | 50%   | Final Width |
| ------------ | ----- | ----------- |
| 1000px       | 500px | **300px**   |
| 400px        | 200px | **200px**   |

This ensures the element **never grows larger than 300px**.

---

# The `max()` Function

The **`max()` function** returns the **largest value** from a list.

It is useful for setting **minimum sizes** so elements never become too small.

## Example

```css
.container {
  width: max(200px, 50%);
}
```

### Explanation

The width will be:

* **200px**
* **OR 50%**
* **Whichever is larger**

| Parent Width | 50%   | Final Width |
| ------------ | ----- | ----------- |
| 300px        | 150px | **200px**   |
| 1000px       | 500px | **500px**   |

This ensures the element **never becomes smaller than 200px**.

---

# The `clamp()` Function

The **`clamp()` function** combines the behavior of **min() and max()**.

It takes **three values**:

```
clamp(minimum, preferred, maximum)
```

* **Minimum value** → the smallest allowed value
* **Preferred value** → the ideal responsive value
* **Maximum value** → the largest allowed value

---

## Example

```css
.text {
  font-size: clamp(12px, 2vw, 24px);
}
```

### Explanation

* Font size **will not go below 12px**
* It **scales with viewport width (2vw)**
* It **will not exceed 24px**

This creates **perfectly responsive typography**.

---

# 5.3 Advantages of Using CSS Functions

Using CSS functions offers several important benefits.

### 1. Flexibility

CSS functions allow **dynamic value calculations** which makes styles flexible and adaptable.

Example:

```css
width: calc(100% - 40px);
```

---

### 2. Simplifies Responsive Design

Functions like `min()`, `max()`, and `clamp()` make responsive design much easier by defining **value limits**.

Example:

```css
width: min(90%, 600px);
```

This automatically adapts layout size without extra CSS.

---

### 3. Reduces Media Queries

Using these functions can **reduce the number of media queries needed**.

Instead of writing multiple breakpoints, CSS automatically adjusts values.

Example without media queries:

```css
font-size: clamp(14px, 3vw, 28px);
```

---

# 5.4 Full Implementation Example

Below is a complete example demonstrating the usage of **calc(), min(), max(), and clamp()**.

---

## CSS

```css
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}

.block {
  background-color: #3498db;
  color: white;
  padding: 10px;
  text-align: center;
}

.block:nth-child(1) {
  width: calc(50% - 20px);
}

.block:nth-child(2) {
  width: min(300px, 100%);
}

.block:nth-child(3) {
  width: max(200px, 50%);
}

.text {
  font-size: clamp(12px, 2vw, 24px);
}
```

---

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CSS Functions Usage Example</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<div class="container">

<div class="block">
Block with width calc(50% - 20px)
</div>

<div class="block">
Block with width min(300px, 100%)
</div>

<div class="block">
Block with width max(200px, 50%)
</div>

<p class="text">
Text with font size clamp(12px, 2vw, 24px)
</p>

</div>

</body>
</html>
```

---

# Exercises

## Exercise 1: Width with `calc()`

### Task

Identify an element with the class **`dynamic-width`**.

Use the **`calc()`** function to set its width to:

**60% of the parent width minus 15px**

Center the element horizontally using **auto margins**.

### Requirements

* Width must use `calc()`
* Width must be `60% - 15px`
* Element must be centered
* Must have class `dynamic-width`

---

### Solution

```css
.dynamic-width {
  width: calc(60% - 15px);
  margin: 0 auto;
}
```

### Example HTML

```html
<div class="dynamic-width">
  Dynamic width element
</div>
```

---

## Exercise 2: Adaptive Width with `min()`

### Task

Create an element with class **`adaptive-min`**.

Use the **`min()`** function to set width to:

* **40% of parent width**
* **or 250px**
* **whichever is smaller**

Add:

* Background color
* Padding

---

### Solution

```css
.adaptive-min {
  width: min(40%, 250px);
  background-color: #2ecc71;
  padding: 15px;
}
```

### Example HTML

```html
<div class="adaptive-min">
  Adaptive width element
</div>
```

---

# Summary

CSS functions provide powerful tools for building modern responsive layouts.

| Function  | Purpose                            |
| --------- | ---------------------------------- |
| `calc()`  | Performs mathematical calculations |
| `min()`   | Returns the smallest value         |
| `max()`   | Returns the largest value          |
| `clamp()` | Restricts values within a range    |

These functions help developers:

* Create **flexible layouts**
* Build **responsive designs**
* **Reduce media queries**
* Write **cleaner CSS**

---

