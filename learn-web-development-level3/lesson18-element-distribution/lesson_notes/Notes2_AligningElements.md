# Aligning Elements in CSS Grid

CSS Grid Layout provides powerful properties that allow developers to **control how elements are positioned inside their grid cells**. While the grid structure determines **where items appear**, alignment properties determine **how items are positioned within each cell**.

The main properties used for alignment are:

* `justify-items` – horizontal alignment
* `align-items` – vertical alignment
* `place-items` – shorthand for both

These properties help create **balanced and visually appealing layouts**.

---

# 7.1 The `justify-items` Property

The **`justify-items` property** controls the **horizontal alignment** of all grid items inside their grid cells.

It affects how items are positioned **from left to right** within each cell.

## Syntax

```css
.grid-container {
  justify-items: value;
}
```

### Parameter

`value` determines how items align horizontally inside the cell.

Possible values:

| Value     | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| `start`   | Aligns items to the **start (left)** of the cell                 |
| `end`     | Aligns items to the **end (right)** of the cell                  |
| `center`  | Centers items **horizontally**                                   |
| `stretch` | Stretches items to **fill the full width** of the cell (default) |

---

## Example 1: Aligning Items to the Start

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: start;
}
```

### Explanation

* Creates a grid with **three equal columns**
* All grid items are aligned to the **left side of the cell**
* Items do not stretch across the entire cell width

---

## Example 2: Centering Items Horizontally

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
}
```

### Explanation

* Items appear **in the middle of each grid cell horizontally**
* Useful when elements should not stretch but stay centered.

---

# 7.2 The `align-items` Property

The **`align-items` property** controls the **vertical alignment** of all grid items inside their grid cells.

It determines how elements are positioned **from top to bottom**.

---

## Syntax

```css
.grid-container {
  align-items: value;
}
```

### Parameter

`value` specifies vertical alignment.

Possible values:

| Value     | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| `start`   | Aligns items to the **top** of the cell                           |
| `end`     | Aligns items to the **bottom** of the cell                        |
| `center`  | Centers items **vertically**                                      |
| `stretch` | Stretches items to fill the **full height** of the cell (default) |

---

## Example 1: Aligning Items to the Top

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  align-items: start;
}
```

### Explanation

* Creates a **3 × 3 grid**
* Each row has **100px height**
* Items appear **at the top of each grid cell**

---

## Example 2: Centering Items Vertically

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  align-items: center;
}
```

### Explanation

* Items appear **vertically centered inside the cell**
* Useful when content should be balanced within cells.

---

# 7.3 The `place-items` Property

The **`place-items` property** is a **shorthand property** used to set both:

* `align-items`
* `justify-items`

This allows you to control **horizontal and vertical alignment simultaneously**.

---

## Syntax

```css
.grid-container {
  place-items: align-value justify-value;
}
```

### Parameters

| Parameter       | Description                            |
| --------------- | -------------------------------------- |
| `align-value`   | vertical alignment (`align-items`)     |
| `justify-value` | horizontal alignment (`justify-items`) |

If **only one value is provided**, it is applied to **both directions**.

---

## Example 1: Centering Items Both Horizontally and Vertically

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  place-items: center;
}
```

### Explanation

* `center` applies to both directions
* Items are **perfectly centered inside each cell**

---

## Example 2: Stretch Vertically and Align Left

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  place-items: stretch start;
}
```

### Explanation

* `stretch` → items fill the **height of the cell**
* `start` → items align to the **left side**

This creates tall items aligned to the **top-left corner**.

---

# 7.4 Full Implementation Example

## CSS

```css
.grid-container {
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);

  gap: 10px;

  place-items: center center;
}

.grid-item {
  background-color: #3498db;
  color: white;
  padding: 20px;
  text-align: center;
  border: 1px solid #fff;
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
<title>CSS Grid Alignment Example</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<div class="grid-container">
  <div class="grid-item">Element 1</div>
  <div class="grid-item">Element 2</div>
  <div class="grid-item">Element 3</div>
  <div class="grid-item">Element 4</div>
  <div class="grid-item">Element 5</div>
  <div class="grid-item">Element 6</div>
</div>

</body>
</html>
```

---

## Code Explanation

### `.grid-container`

* Creates a **CSS Grid container**
* Defines **three equal columns**
* Defines **three rows with height 100px**
* `gap: 10px` adds spacing between cells
* `place-items: center center` centers items **both horizontally and vertically**

### `.grid-item`

Provides styling for grid items:

* Blue background
* White text
* Padding inside the items
* Centered text
* White border

---

# Exercise

## Vertical Centering

### Task

Create a grid container with **four rows and two columns**.
All items inside the grid cells should be **vertically centered** using the `align-items` property.

---

## Requirements

* The grid container must use **CSS Grid**
* The grid must contain **4 rows**
* The grid must contain **2 columns**
* Use `align-items: center`
* Place elements inside the grid cells

---

# Solution

## HTML

```html
<div class="grid-container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
  <div class="item">Item 6</div>
  <div class="item">Item 7</div>
  <div class="item">Item 8</div>
</div>
```

---

## CSS

```css
.grid-container {
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 100px);

  align-items: center;

  gap: 10px;
}

.item {
  background: steelblue;
  color: white;
  text-align: center;
  padding: 15px;
}
```

---

## Explanation

* `repeat(2, 1fr)` creates **two equal columns**
* `repeat(4, 100px)` creates **four rows**
* `align-items: center` vertically centers all items inside their cells
* `gap: 10px` creates spacing between grid cells

---

# Key Takeaways

* **`justify-items`** controls **horizontal alignment** of items.
* **`align-items`** controls **vertical alignment** of items.
* **`place-items`** is a shorthand for both properties.
* Default alignment is **stretch**, meaning items fill the entire cell.
* These properties help create **balanced and visually structured layouts** in CSS Grid.

---

