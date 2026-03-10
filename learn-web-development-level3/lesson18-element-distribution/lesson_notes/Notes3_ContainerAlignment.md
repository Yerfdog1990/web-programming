# Grid Container Alignment in CSS Grid

CSS Grid Layout not only allows you to control **how items are placed inside grid cells**, but also how the **entire grid structure is aligned inside its container**.

Sometimes the **grid itself does not fill the entire container**. When this happens, CSS provides properties that allow you to control how the grid is positioned inside the container.

The main properties used for **grid container alignment** are:

* `justify-content` – horizontal alignment of the grid
* `align-content` – vertical alignment of the grid
* `place-content` – shorthand for both properties

These properties help create **flexible and visually balanced layouts**.

---

# 8.1 The `justify-content` Property

The **`justify-content` property** controls the **horizontal alignment of the entire grid** within the container.

This property becomes useful when:

* The container width is **larger than the total grid width**
* There is **extra horizontal space available**

## Syntax

```css
.grid-container {
  display: grid;
  justify-content: value;
}
```

### Possible Values

| Value           | Description                                            |
| --------------- | ------------------------------------------------------ |
| `start`         | Aligns the grid to the **left side** of the container  |
| `end`           | Aligns the grid to the **right side** of the container |
| `center`        | Centers the grid horizontally                          |
| `stretch`       | Stretches the grid to fill the container width         |
| `space-around`  | Equal space around each grid track                     |
| `space-between` | Equal space between grid tracks                        |
| `space-evenly`  | Equal space between tracks and container edges         |

---

## Example 1: Aligning Grid to the Start

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  justify-content: start;
}
```

### Explanation

* Creates **three columns of 100px**
* The grid is positioned at the **left edge of the container**
* Extra horizontal space remains on the right.

---

## Example 2: Centering the Grid

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  justify-content: center;
}
```

### Explanation

* The grid columns remain **100px each**
* The entire grid appears **centered horizontally** in the container.

---

# 8.2 The `align-content` Property

The **`align-content` property** controls the **vertical alignment of the grid within the container**.

This property becomes useful when:

* The container height is **larger than the grid height**
* There is **extra vertical space available**

---

## Syntax

```css
.grid-container {
  align-content: value;
}
```

### Possible Values

| Value           | Description                                       |
| --------------- | ------------------------------------------------- |
| `start`         | Aligns grid to the **top** of the container       |
| `end`           | Aligns grid to the **bottom** of the container    |
| `center`        | Centers the grid vertically                       |
| `space-between` | Equal vertical space between rows                 |
| `space-around`  | Equal space around each row                       |
| `space-evenly`  | Equal spacing between rows and container edges    |
| `stretch`       | Stretches rows to fill container height (default) |

---

## Example 1: Aligning Content to the Top

```css
.grid-container {
  display: grid;
  grid-template-rows: repeat(3, 100px);
  align-content: start;
}
```

### Explanation

* Creates **three rows of 100px**
* The entire grid aligns to the **top of the container**
* Empty vertical space appears below the grid.

---

## Example 2: Centering Grid Vertically

```css
.grid-container {
  display: grid;
  grid-template-rows: repeat(3, 100px);
  align-content: center;
}
```

### Explanation

* The grid rows remain **100px high**
* The grid appears **centered vertically** within the container.

---

# 8.3 The `place-content` Property

The **`place-content` property** is a **shorthand** used to set both:

* `justify-content`
* `align-content`

This allows you to align the grid **both horizontally and vertically with a single property**.

---

## Syntax

```css
.grid-container {
  place-content: justify-value align-value;
}
```

### Parameters

| Parameter       | Description                              |
| --------------- | ---------------------------------------- |
| `justify-value` | horizontal alignment (`justify-content`) |
| `align-value`   | vertical alignment (`align-content`)     |

---

## Example 1: Centering Grid Horizontally and Vertically

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  place-content: center center;
}
```

### Explanation

* Creates a **3 × 3 grid**
* Each cell is **100px**
* The entire grid is **centered horizontally and vertically** within the container.

---

## Example 2: Stretching Grid Width and Aligning to Top

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  place-content: stretch start;
}
```

### Explanation

* The grid **stretches across the container width**
* The grid is aligned to the **top edge of the container**

---

# 8.4 Full Implementation Example

## CSS

```css
.grid-container {
  display: grid;

  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);

  gap: 10px;

  place-content: center center;
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
<title>Grid Container Alignment Example</title>
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

## Code Explanation

### `.grid-container`

* Creates a **CSS Grid container**
* Defines **three columns each 100px wide**
* Defines **three rows each 100px tall**
* `gap: 10px` creates spacing between grid cells
* `place-content: center center` centers the entire grid **both horizontally and vertically**

### `.grid-item`

Provides styling for items:

* Blue background
* White text
* Padding for spacing inside items
* Centered text
* White border

---

# Difference between these three levels of alignment in CSS Grid

Understanding **alignment in CSS Grid** can be confusing because there are **three different levels where alignment can occur**. Each level controls **a different thing** in the grid layout.

The three levels are:

1️⃣ **Item alignment** – aligns all grid items inside their cells

2️⃣ **Single item alignment** – aligns one specific grid item

3️⃣ **Grid container alignment** – aligns the entire grid inside the container

Think of it like this:

```
Container
   ↓
Grid (rows & columns)
   ↓
Cells
   ↓
Items inside cells
```

Each level controls a **different layer of the layout**.

---

# 1️⃣ Item Alignment

## `align-items` and `justify-items`

Item alignment controls **how all grid items are positioned inside their individual grid cells**.

These properties apply to **every grid item at once**.

| Property        | Direction  | What it controls                           |
| --------------- | ---------- | ------------------------------------------ |
| `justify-items` | Horizontal | Left–right alignment of items inside cells |
| `align-items`   | Vertical   | Top–bottom alignment of items inside cells |

---

## Example: Align All Items

### HTML

```html
<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

### CSS

```css
.grid-container {
  display: grid;

  grid-template-columns: repeat(2, 150px);
  grid-template-rows: repeat(2, 150px);

  justify-items: center;
  align-items: center;
}

.item {
  background: steelblue;
  color: white;
  padding: 10px;
}
```

### Result

Every item appears **centered inside its cell both horizontally and vertically**.

```
+---------+---------+
|    1    |    2    |
|         |         |
+---------+---------+
|    3    |    4    |
|         |         |
+---------+---------+
```

---

# 2️⃣ Single Item Alignment

## `align-self` and `justify-self`

These properties allow **one specific grid item to override the alignment rules** set by `align-items` or `justify-items`.

They apply **only to one element**.

| Property       | Direction  | Description                       |
| -------------- | ---------- | --------------------------------- |
| `justify-self` | Horizontal | Aligns a single item horizontally |
| `align-self`   | Vertical   | Aligns a single item vertically   |

---

## Example: Align One Item Differently

### CSS

```css
.grid-container {
  display: grid;

  grid-template-columns: repeat(2, 150px);
  grid-template-rows: repeat(2, 150px);

  justify-items: center;
  align-items: center;
}

.item2 {
  justify-self: end;
  align-self: start;
}
```

### HTML

```html
<div class="grid-container">
  <div class="item">1</div>
  <div class="item item2">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

### Result

All items stay centered **except item 2**.

```
+---------+---------+
|    1    |      2  |
|         |         |
+---------+---------+
|    3    |    4    |
|         |         |
+---------+---------+
```

Item **2 moves to the top-right of its cell**.

---

# 3️⃣ Grid Container Alignment

## `align-content` and `justify-content`

These properties **do NOT align items inside cells**.

Instead, they align the **entire grid structure inside the container** when there is extra space.

| Property          | Direction  | What it aligns |
| ----------------- | ---------- | -------------- |
| `justify-content` | Horizontal | The whole grid |
| `align-content`   | Vertical   | The whole grid |

---

## Example: Center the Entire Grid

### CSS

```css
.container {
  height: 500px;
  border: 2px solid black;
}

.grid-container {
  display: grid;

  grid-template-columns: repeat(2, 100px);
  grid-template-rows: repeat(2, 100px);

  justify-content: center;
  align-content: center;

  gap: 10px;
}
```

### HTML

```html
<div class="container">
  <div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
  </div>
</div>
```

### Result

The **entire grid moves to the center of the container**.

```
Container
+--------------------------------+
|                                |
|         +-----+-----+          |
|         |  1  |  2  |          |
|         +-----+-----+          |
|         |  3  |  4  |          |
|         +-----+-----+          |
|                                |
+--------------------------------+
```

---

# Visual Summary

## Level 1: Item Alignment

Controls **all items inside cells**

```
Cell
+-------+
|   1   |
+-------+
```

Properties:

```
justify-items
align-items
```

---

## Level 2: Single Item Alignment

Controls **one specific item**

```
Cell
+-------+
|      1|
+-------+
```

Properties:

```
justify-self
align-self
```

---

## Level 3: Container Alignment

Controls **the entire grid inside the container**

```
Container
+----------------------+
|   Grid moves here    |
+----------------------+
```

Properties:

```
justify-content
align-content
```

---

# Quick Comparison Table

| Alignment Level          | Properties                         | What Moves        |
| ------------------------ | ---------------------------------- | ----------------- |
| Item alignment           | `align-items`, `justify-items`     | All grid items    |
| Single item alignment    | `align-self`, `justify-self`       | One specific item |
| Grid container alignment | `align-content`, `justify-content` | The entire grid   |

---

# Easy Way to Remember

Think of **three questions**:

### 1️⃣ How should ALL items align inside cells?

Use:

```
align-items
justify-items
```

---

### 2️⃣ How should ONE item align differently?

Use:

```
align-self
justify-self
```

---

### 3️⃣ Where should the WHOLE GRID sit inside the container?

Use:

```
align-content
justify-content
```

---

✅ **Pro Tip**

A good rule developers use:

```
-items  → affects all items
-self   → affects one item
-content → affects the grid itself
```

---

# Exercises

# Exercise 1: Content Stretch

## Task

Create a grid container with:

* **Four columns** of **100px width**
* **Two rows**

Set the property:

```
place-content: stretch start
```

---

## Requirements

* Four columns each **100px**
* Two rows
* Grid content **stretches across container width**
* Grid content **aligns to the top of the container**

---

## Solution

### HTML

```html
<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```

### CSS

```css
.grid-container {
  display: grid;

  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(2, 100px);

  place-content: stretch start;

  gap: 10px;
}

.item {
  background: steelblue;
  color: white;
  padding: 20px;
  text-align: center;
}
```

---

### Explanation

* Creates **4 columns × 2 rows**
* `place-content: stretch start`

    * `stretch` → grid spreads across container width
    * `start` → grid aligns to the **top edge**

---

# Exercise 2: Centering Content

## Task

Create a grid container with:

* **Three columns** (100px each)
* **Three rows** (100px each)

Center the grid using:

```
place-content: center center
```

---

## Requirements

* Grid container must be defined
* Three rows of **100px**
* Three columns of **100px**
* Grid centered **horizontally and vertically**

---

## Solution

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

---

### CSS

```css
.grid-container {
  display: grid;

  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);

  place-content: center center;

  gap: 10px;
}

.item {
  background: coral;
  color: white;
  padding: 20px;
  text-align: center;
}
```

---

### Explanation

* Creates **3 × 3 grid**
* Each cell is **100px**
* `place-content: center center` centers the entire grid **inside the container**.

---

# Key Takeaways

* **`justify-content`** controls **horizontal alignment of the grid itself**.
* **`align-content`** controls **vertical alignment of the grid itself**.
* **`place-content`** is a shorthand for both properties.
* These properties are used when the **grid does not fill the container completely**.
* They help create **balanced layouts and responsive design structures**.

---
