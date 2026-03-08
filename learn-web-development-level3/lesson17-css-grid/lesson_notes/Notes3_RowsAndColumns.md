# Defining Rows and Columns in CSS Grid

One of the most important parts of **CSS Grid Layout** is defining the **structure of the grid**. This structure is created using **rows and columns**.

Two main properties are used:

* `grid-template-columns` → defines **columns**
* `grid-template-rows` → defines **rows**

These properties allow developers to specify:

* the **number of rows and columns**
* the **size of each row or column**
* how space should be **distributed**

This provides precise control over layout design.

---

# 1. The `grid-template-columns` Property

The **`grid-template-columns`** property defines **how many columns exist in the grid and how wide each column should be**.

It accepts multiple values separated by spaces.

Each value represents the width of a column.

Example syntax:

```css
.grid-container {
  display: grid;
  grid-template-columns: value1 value2 value3;
}
```

Each value can use different units such as:

* `px` (pixels)
* `%` (percentage)
* `fr` (fractional units)
* `auto`
* `minmax()`

---

# 2. Setting Fixed Column Sizes

Fixed sizes mean the column width does **not change based on screen size**.

Example:

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 200px 100px;
}
```

### Explanation

This grid has **three columns**:

| Column   | Width |
| -------- | ----- |
| Column 1 | 100px |
| Column 2 | 200px |
| Column 3 | 100px |

Visual representation:

```
+--------+------------+--------+
| 100px  |   200px    | 100px  |
+--------+------------+--------+
```

This approach is useful for layouts with **fixed dimensions**.

---

# 3. Using Fractional Units (`fr`)

The **`fr` unit** represents a **fraction of available space**.

It allows columns to **resize automatically**.

Example:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
```

### Explanation

The grid contains **three columns**:

| Column   | Size |
| -------- | ---- |
| Column 1 | 1fr  |
| Column 2 | 2fr  |
| Column 3 | 1fr  |

Meaning:

* Column 2 is **twice as wide** as columns 1 and 3.

Visual ratio:

```
1 : 2 : 1
```

Example layout:

```
+-------+---------------+-------+
| 1fr   |      2fr      | 1fr   |
+-------+---------------+-------+
```

Fractional units are **very useful for responsive layouts**.

---

# 4. Using the `repeat()` Function

When several columns have the **same size**, the `repeat()` function simplifies the code.

Example:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

### Explanation

```
repeat(3, 1fr)
```

means:

```
1fr 1fr 1fr
```

So the grid has **three equal columns**.

Visual representation:

```
+--------+--------+--------+
|  1fr   |  1fr   |  1fr   |
+--------+--------+--------+
```

This method improves **code readability and efficiency**.

---

# 5. Setting Minimum and Maximum Sizes with `minmax()`

The **`minmax()` function** allows a column to have a **minimum size and a flexible maximum size**.

Syntax:

```
minmax(minimum, maximum)
```

Example:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
}
```

### Explanation

Each column:

* must be **at least 100px wide**
* can expand up to **1fr depending on available space**

Visual concept:

```
Minimum width → 100px
Maximum width → flexible (1fr)
```

This approach is **very common in responsive layouts**.

---

# 6. The `grid-template-rows` Property

The **`grid-template-rows`** property defines the **number and height of rows** in a grid.

It works exactly like `grid-template-columns`, but for **vertical layout**.

Syntax:

```css
.grid-container {
  display: grid;
  grid-template-rows: value1 value2 value3;
}
```

Each value defines the height of a row.

---

# 7. Setting Fixed Row Sizes

Example:

```css
.grid-container {
  display: grid;
  grid-template-rows: 50px 100px 50px;
}
```

### Explanation

The grid contains **three rows**:

| Row   | Height |
| ----- | ------ |
| Row 1 | 50px   |
| Row 2 | 100px  |
| Row 3 | 50px   |

Visual representation:

```
+----------------+
|     50px       |
+----------------+
|     100px      |
+----------------+
|     50px       |
+----------------+
```

---

# 8. Using Fractional Units for Rows

Rows can also use **fractional units (`fr`)**.

Example:

```css
.grid-container {
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
}
```

### Explanation

The grid has **three rows**:

| Row   | Height |
| ----- | ------ |
| Row 1 | 1fr    |
| Row 2 | 2fr    |
| Row 3 | 1fr    |

Meaning:

Row 2 is **twice as tall** as rows 1 and 3.

Visual ratio:

```
1 : 2 : 1
```

---

# 9. Using `repeat()` for Rows

Example:

```css
.grid-container {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
}
```

This creates **three equal-height rows**.

Equivalent to:

```
1fr 1fr 1fr
```

---

# 10. Using `minmax()` for Rows

Example:

```css
.grid-container {
  display: grid;
  grid-template-rows: repeat(3, minmax(50px, 1fr));
}
```

Each row:

* has a **minimum height of 50px**
* can expand to **1fr**

This makes layouts **flexible and adaptive**.

---

# 11. Combining Rows and Columns

The **`grid-template-columns`** and **`grid-template-rows`** properties can be used together to define a full grid structure.

Example:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100px 200px;
}
```

### Explanation

Columns:

| Column   | Size |
| -------- | ---- |
| Column 1 | 1fr  |
| Column 2 | 2fr  |

Rows:

| Row   | Height |
| ----- | ------ |
| Row 1 | 100px  |
| Row 2 | 200px  |

This creates a **2 × 2 grid**.

---

# 12. Full Implementation Example

### CSS

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100px 200px;
  gap: 10px;
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

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CSS Grid Example</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<div class="grid-container">

<div class="grid-item">Item 1</div>
<div class="grid-item">Item 2</div>
<div class="grid-item">Item 3</div>
<div class="grid-item">Item 4</div>

</div>

</body>
</html>
```

---

# Code Explanation

### `.grid-container`

```css
display: grid;
```

Creates the grid layout.

```
grid-template-columns: 1fr 2fr;
```

Defines two columns where the second column is **twice as wide**.

```
grid-template-rows: 100px 200px;
```

Creates two rows with fixed heights.

```
gap: 10px;
```

Adds spacing between grid items.

---

### `.grid-item`

```css
background-color: #3498db;
color: white;
padding: 20px;
text-align: center;
border: 1px solid #fff;
```

These properties style the items inside the grid.

---

# Exercise 1: Flexible Columns

## Task

Create a grid container with **three columns using fractional units**.

Requirements:

* First column → `1fr`
* Second column → `2fr`
* Third column → `1fr`
* Place **six elements inside**
* Each element should:

    * have a **background color**
    * have **padding**
    * occupy **one cell**

---

# Solution

### HTML

```html
<div class="grid-container">

<div class="grid-item">Item 1</div>
<div class="grid-item">Item 2</div>
<div class="grid-item">Item 3</div>
<div class="grid-item">Item 4</div>
<div class="grid-item">Item 5</div>
<div class="grid-item">Item 6</div>

</div>
```

---

### CSS

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 10px;
}

.grid-item {
  background-color: lightblue;
  padding: 20px;
}
```

---

### Layout Result

```
Row 1 → Item1  Item2  Item3
Row 2 → Item4  Item5  Item6
```

Column width ratio:

```
1 : 2 : 1
```

---

# Exercise 2: Repeat for Rows

## Task

Create a grid container with **five rows of equal height** using `repeat()`.

Requirements:

* Container must use **CSS Grid**
* Use `repeat()` to create **five rows**
* Each row height → **100px**
* Place **ten elements**
* Each element should have:

    * background color
    * padding
* Each element occupies **one cell**

---

# Solution

### HTML

```html
<div class="grid-container">

<div class="grid-item">1</div>
<div class="grid-item">2</div>
<div class="grid-item">3</div>
<div class="grid-item">4</div>
<div class="grid-item">5</div>
<div class="grid-item">6</div>
<div class="grid-item">7</div>
<div class="grid-item">8</div>
<div class="grid-item">9</div>
<div class="grid-item">10</div>

</div>
```

---

### CSS

```css
.grid-container {
  display: grid;
  grid-template-rows: repeat(5, 100px);
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.grid-item {
  background-color: lightgreen;
  padding: 20px;
}
```

---

### Layout Result

```
Row1 → 1  2
Row2 → 3  4
Row3 → 5  6
Row4 → 7  8
Row5 → 9 10
```

Each row height:

```
100px
```

---

# Key Takeaways

Important concepts when defining rows and columns in CSS Grid:

1. **`grid-template-columns`** defines column number and width.
2. **`grid-template-rows`** defines row number and height.
3. **`fr` units** distribute available space proportionally.
4. **`repeat()`** simplifies repeating sizes.
5. **`minmax()`** sets flexible minimum and maximum sizes.
6. Rows and columns can be **combined to create complex layouts**.

---

