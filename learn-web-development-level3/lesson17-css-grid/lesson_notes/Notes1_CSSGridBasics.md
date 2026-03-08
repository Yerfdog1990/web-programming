# CSS Grid Basics

CSS Grid Layout is one of the most powerful layout systems in modern CSS. It allows developers to create **two-dimensional layouts**, meaning elements can be arranged **both horizontally (columns) and vertically (rows)**.

Grid makes complex layouts easier to design compared to older methods like **floats**, **inline-block**, or even **Flexbox** (which is mainly one-dimensional).

---

# 1. Basic Principles of Grid Layout

## What is CSS Grid?

CSS Grid is a **layout system designed for web pages** that divides a container into **rows and columns**, forming a grid where elements can be precisely positioned.

Unlike many earlier layout techniques, Grid allows developers to control **both axes simultaneously**.

Key advantages of CSS Grid:

* Create complex layouts easily
* Precisely place elements anywhere in the grid
* Responsive design becomes simpler
* Reduce reliance on hacks like floats or positioning

---

# 2. Core Concepts of CSS Grid

## 2.1 Grid Container

A **Grid Container** is the parent element that holds grid items.

To create a grid container, apply:

```css
display: grid;
```

or

```css
display: inline-grid;
```

Example:

```css
.container {
  display: grid;
}
```

When this property is applied:

* The element becomes a **grid container**
* All **direct child elements become grid items**

---

## 2.2 Grid Items

**Grid Items** are the **direct children** of the grid container.

Example:

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

Here:

* `.container` → Grid Container
* `.item` elements → Grid Items

Important: **Only direct children become grid items.**

---

# 3. Grid Axes

CSS Grid works with two axes.

### Inline Axis (Horizontal)

* Runs **left → right**
* Represents the **columns**

### Block Axis (Vertical)

* Runs **top → bottom**
* Represents the **rows**

Visual representation:

```
Inline Axis  → → → (columns)

Block Axis
↓
↓
↓ (rows)
```

---

# 4. Grid Cells

A **grid cell** is the smallest unit of the grid.

It is formed where **a row and a column intersect**.

Example grid:

```
+----+----+----+
| A  | B  | C  |
+----+----+----+
| D  | E  | F  |
+----+----+----+
```

Each box above represents a **grid cell**.

Grid items can occupy:

* one cell
* multiple cells

---

# 5. Grid Lines

**Grid lines** are the boundaries that separate rows and columns.

They are used to **position items inside the grid**.

Example grid lines:

```
Column Lines:
1   2   3   4

+---+---+---+
|   |   |   |
+---+---+---+
|   |   |   |
+---+---+---+

Row Lines:
1
2
3
```

These lines allow precise placement of elements.

---

# 6. Grid Areas

A **Grid Area** is a rectangular section of the grid created by **combining multiple cells**.

Grid areas are useful for:

* creating page layouts
* grouping content

Example layout:

```
+--------+--------+
| Header | Header |
+--------+--------+
| Sidebar| Content|
+--------+--------+
| Footer | Footer |
+--------+--------+
```

Each section is a **grid area**.

---

# 7. Syntax Elements of CSS Grid

## 7.1 Creating a Grid Container

The first step in using CSS Grid is defining a container.

```css
.container {
  display: grid;
}
```

Alternative:

```css
.container {
  display: inline-grid;
}
```

Difference:

* `grid` → block-level grid container
* `inline-grid` → inline-level grid container

---

# 7.2 Defining the Grid Structure

We define rows and columns using:

* `grid-template-columns`
* `grid-template-rows`

Example:

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 100px;
  grid-template-rows: 50px 100px;
}
```

Explanation:

Columns:

```
100px | 200px | 100px
```

Rows:

```
50px
100px
```

This creates a **3 × 2 grid**.

---

# 7.3 Fractional Units (fr)

Grid often uses the **fr unit**.

`fr` means **fraction of available space**.

Example:

```css
grid-template-columns: 1fr 2fr 1fr;
```

Meaning:

* first column → 1 fraction
* second column → 2 fractions
* third column → 1 fraction

Ratio:

```
1 : 2 : 1
```

---

# 7.4 Merging Cells with `grid-area`

Grid items can span multiple rows or columns.

Syntax:

```css
grid-area: row-start / column-start / row-end / column-end;
```

Example:

```css
.item1 {
  grid-area: 1 / 1 / 2 / 4;
}
```

Meaning:

```
row start: 1
column start: 1
row end: 2
column end: 4
```

So the element spans:

* first row
* first three columns

---

# 7.5 Automatic Placement of Items

Grid can automatically place elements when positions are not specified.

Example:

```css
.container {
  display: grid;
  grid-auto-rows: minmax(100px, auto);
}
```

Explanation:

`minmax(100px, auto)` means:

* minimum row height = 100px
* maximum height adjusts automatically

---

# 7.6 Gap Between Grid Items

The `gap` property controls spacing between grid cells.

Example:

```css
.container {
  gap: 10px;
}
```

You can also define separately:

```
row-gap
column-gap
```

Example:

```css
row-gap: 10px;
column-gap: 20px;
```

---

# 8. Example: Simple CSS Grid Layout

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CSS Grid Example</title>

<style>

.container{
  display:grid;
  grid-template-columns:1fr 2fr 1fr;
  grid-template-rows:100px 200px;
  gap:10px;
}

.item{
  background-color:lightblue;
  padding:20px;
  text-align:center;
}

</style>
</head>

<body>

<div class="container">

<div class="item">Item 1</div>
<div class="item">Item 2</div>
<div class="item">Item 3</div>
<div class="item">Item 4</div>
<div class="item">Item 5</div>
<div class="item">Item 6</div>

</div>

</body>
</html>
```

---

## Explanation

The grid container has:

```
3 columns
2 rows
```

Column sizes:

```
1fr | 2fr | 1fr
```

Meaning:

* first column → 1 part
* second column → 2 parts
* third column → 1 part

Row sizes:

```
100px
200px
```

Spacing between grid cells:

```
gap: 10px
```

Six items are automatically placed into the grid.

---

# Exercise 1 — Creating a Grid Container

## Task

Create a grid container with:

* **3 columns**
* first column = **100px**
* second column = **200px**
* third column = **100px**

Define:

* **2 rows**
* first row = **50px**
* second row = **100px**

Add **six items** inside the container.

---

## Solution

### HTML

```html
<div class="container">

<div class="item">Item 1</div>
<div class="item">Item 2</div>
<div class="item">Item 3</div>
<div class="item">Item 4</div>
<div class="item">Item 5</div>
<div class="item">Item 6</div>

</div>
```

### CSS

```css
.container{
  display:grid;

  grid-template-columns:100px 200px 100px;
  grid-template-rows:50px 100px;

  gap:10px;
}

.item{
  background:lightgreen;
  text-align:center;
  padding:10px;
}
```

---

## Result

The layout will look like:

```
+-------+-------------+-------+
|Item 1 | Item 2      |Item 3 |
+-------+-------------+-------+
|Item 4 | Item 5      |Item 6 |
+-------+-------------+-------+
```

---

# Exercise 2 — Grid Behavior

## Task

Create a grid container with **five items**.

Requirements:

* Use `grid-auto-flow: row`
* Automatically place items in rows
* Add spacing using `gap`

---

## Solution

### HTML

```html
<div class="grid-container">

<div class="grid-item">1</div>
<div class="grid-item">2</div>
<div class="grid-item">3</div>
<div class="grid-item">4</div>
<div class="grid-item">5</div>

</div>
```

---

### CSS

```css
.grid-container{

display:grid;

grid-template-columns:repeat(3,1fr);

grid-auto-flow:row;

gap:15px;

}

.grid-item{

background:lightcoral;
padding:20px;
text-align:center;

}
```

---

## Explanation

`grid-auto-flow: row` tells the browser:

* place items **row by row**
* fill the current row before moving to the next

With 3 columns, the layout becomes:

```
Row 1 → 1 2 3
Row 2 → 4 5
```

---

# Key Takeaways

CSS Grid provides a powerful layout system with these core concepts:

* **Grid Container** → parent element using `display: grid`
* **Grid Items** → children inside the grid
* **Rows and Columns** → defined with `grid-template-rows` and `grid-template-columns`
* **Grid Cells** → intersections of rows and columns
* **Grid Lines** → boundaries used for positioning
* **Grid Areas** → merged cells forming larger layout sections
* **Automatic Placement** → grid can place items automatically
* **Gap** → spacing between grid cells

---

