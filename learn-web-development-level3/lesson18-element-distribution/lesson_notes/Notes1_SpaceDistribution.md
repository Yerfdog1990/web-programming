# Space Distribution in CSS Grid

CSS Grid Layout provides powerful tools for controlling **space between grid items**. Managing spacing is important because it improves readability, structure, and visual balance in layouts. CSS Grid offers three main properties for controlling spacing:

* `grid-gap`
* `grid-row-gap`
* `grid-column-gap`

These properties define the **distance between rows and columns**, allowing developers to create clean and organized grid layouts.

---

# 6.1 The `grid-gap` Property

The **`grid-gap` property** (now commonly written as `gap`) is used to define the space between **both rows and columns** in a grid container. It is a **shorthand property** for:

* `grid-row-gap`
* `grid-column-gap`

## Syntax

```css
.grid-container {
  grid-gap: value;
}
```

### Parameter

* **value** – the spacing between rows and columns.
  It can use different CSS units such as:

* `px`

* `%`

* `em`

* `rem`

* `fr`

* `auto`

---

## Example 1: Single Value for Rows and Columns

When **one value** is used, the same spacing is applied to both rows and columns.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-gap: 20px;
}
```

### Explanation

* Creates a **3×3 grid layout**
* Each column takes **equal width (`1fr`)**
* Each row has a **height of 100px**
* A **20px space** appears between every row and column

---

## Example 2: Different Values for Rows and Columns

When **two values** are used:

```
grid-gap: row-gap column-gap;
```

Example:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-gap: 10px 20px;
}
```

### Explanation

* `10px` → spacing **between rows**
* `20px` → spacing **between columns**

This allows more control when vertical and horizontal spacing should differ.

---

# 6.2 The `grid-row-gap` Property

The **`grid-row-gap` property** controls the **spacing between rows only**.

This property allows you to set row spacing **independently from column spacing**.

---

## Syntax

```css
.grid-container {
  grid-row-gap: value;
}
```

### Parameter

* **value** – spacing between rows

It can use units like:

* `px`
* `%`
* `em`
* `rem`

---

## Example 1: Fixed Gap Between Rows

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-row-gap: 15px;
}
```

### Explanation

* The grid contains **three rows**
* Each row has **100px height**
* A **15px space** appears between rows

---

## Example 2: Percentage Gap Between Rows

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-row-gap: 5%;
}
```

### Explanation

* The spacing is **5% of the row height**
* This creates a **responsive gap** that scales with layout changes.

---

# 6.3 The `grid-column-gap` Property

The **`grid-column-gap` property** defines the spacing **between columns only**.

It allows column spacing to be controlled independently from row spacing.

---

## Syntax

```css
.grid-container {
  grid-column-gap: value;
}
```

### Parameter

* **value** – spacing between columns

---

## Example 1: Fixed Gap Between Columns

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-column-gap: 25px;
}
```

### Explanation

* The grid contains **three columns**
* Each column has **equal width**
* The space between columns is **25px**

---

## Example 2: Using `em` Units

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-column-gap: 2em;
}
```

### Explanation

* The column spacing equals **2 times the font size**
* This makes spacing scale with typography.

---

# 6.4 Combined Use of `grid-row-gap` and `grid-column-gap`

You can combine both properties to control row and column spacing separately.

---

## Full Implementation Example

### CSS

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);

  grid-row-gap: 15px;
  grid-column-gap: 25px;
}

.grid-item {
  background-color: #3498db;
  color: white;
  padding: 20px;
  text-align: center;
  border: 1px solid #fff;
}
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Grid Gap Example</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
  <div class="grid-item">Item 5</div>
  <div class="grid-item">Item 6</div>
</div>

</body>
</html>
```

---

### Code Explanation

**`.grid-container`**

* Creates a **CSS Grid layout**
* Defines **three columns** with equal width
* Defines **three rows** with fixed height
* Adds spacing:

    * `15px` between rows
    * `25px` between columns

**`.grid-item`**

Adds styling to grid items:

* Blue background
* White text
* Padding for spacing inside items
* Centered text
* White border

---

# Exercises

## Exercise 1: Even Spaces

### Task

Create a grid container with **four rows and four columns**.
Set an **equal spacing of 20px** between all rows and columns using `grid-gap`.

### Requirements

* Use **CSS Grid**
* Create **4 rows**
* Create **4 columns**
* Use **grid-gap: 20px**
* Ensure **identical spacing between all items**

---

### Solution

### HTML

```html
<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
</div>
```

### CSS

```css
.grid-container {
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 100px);

  grid-gap: 20px;
}

.item {
  background: steelblue;
  color: white;
  text-align: center;
  padding: 20px;
}
```

### Explanation

* `repeat(4, 1fr)` creates **four equal columns**
* `repeat(4, 100px)` creates **four rows**
* `grid-gap: 20px` ensures **equal spacing** between all rows and columns.

---

# Exercise 2: Different Gaps

### Task

Create a grid container with **three rows and three columns**.

Use:

```
grid-gap: 15px 30px
```

* `15px` → row spacing
* `30px` → column spacing

---

### Solution

### HTML

```html
<div class="grid-container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
  <div class="item">E</div>
  <div class="item">F</div>
</div>
```

### CSS

```css
.grid-container {
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);

  grid-gap: 15px 30px;
}

.item {
  background: coral;
  text-align: center;
  padding: 20px;
}
```

### Explanation

* Creates a **3×3 grid**
* `15px` spacing **between rows**
* `30px` spacing **between columns**

This demonstrates how `grid-gap` can control spacing **independently in both directions**.

---

✅ **Key Takeaways**

* `grid-gap` sets spacing between rows and columns simultaneously.
* `grid-row-gap` controls **row spacing only**.
* `grid-column-gap` controls **column spacing only**.
* Using **two values in `grid-gap`** allows different row and column spacing.
* Proper spacing improves **layout clarity and visual balance** in grid designs.

---

