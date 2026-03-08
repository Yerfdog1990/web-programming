# Element Distribution in CSS Grid

CSS Grid provides powerful tools for **controlling where elements appear in the grid**.
Two important properties used for positioning elements are:

* `grid-column`
* `grid-row`

These properties allow developers to **precisely place elements within rows and columns**, control how many grid cells an item occupies, and create complex layouts.

---

# 1. The `grid-column` Property

The **`grid-column`** property determines **which columns a grid item will occupy**.

Instead of simply flowing automatically into the next cell, an element can be **placed between specific grid lines**.

## Syntax

```css
.grid-item {
  grid-column: start / end;
}
```

### Parameters

| Value   | Description                            |
| ------- | -------------------------------------- |
| `start` | The grid line where the element begins |
| `end`   | The grid line where the element ends   |

A grid item occupies the space **between the two grid lines**.

---

# 2. Positioning an Element in a Specific Column

Example:

```css
.grid-item {
  grid-column: 2 / 3;
}
```

### Explanation

* The element starts at **grid line 2**
* Ends at **grid line 3**

Therefore, the element occupies **column 2**.

### Visual Representation

```
Grid Lines
1   2   3   4

Columns
| C1 | C2 | C3 |

Item placed here:
     [ Item ]
```

The element sits **between lines 2 and 3**.

---

# 3. Element Occupying Multiple Columns

A grid item can span multiple columns.

Example:

```css
.grid-item {
  grid-column: 1 / 4;
}
```

### Explanation

* Starts at **grid line 1**
* Ends at **grid line 4**

So the element occupies:

* column 1
* column 2
* column 3

### Visual Representation

```
Grid Lines
1   2   3   4

Columns
| C1 | C2 | C3 |

Item:
[-----------Item-----------]
```

This is useful for creating elements like:

* page headers
* large content sections
* banners

---

# 4. Using `span` to Cover Multiple Columns

Instead of specifying the ending grid line, you can use the **`span` keyword**.

Example:

```css
.grid-item {
  grid-column: span 2;
}
```

### Explanation

* The element spans **2 columns**
* It starts at the element’s **current position**

Example layout:

```
Columns
| C1 | C2 | C3 | C4 |

Item spans two columns:
| Item | Item |
```

This method is very useful when the **exact starting position is not fixed**.

---

# 5. The `grid-row` Property

The **`grid-row`** property controls **which rows a grid item occupies**.

It works exactly like `grid-column`, but vertically.

## Syntax

```css
.grid-item {
  grid-row: start / end;
}
```

### Parameters

| Value   | Description            |
| ------- | ---------------------- |
| `start` | Starting grid row line |
| `end`   | Ending grid row line   |

---

# 6. Positioning an Element in a Specific Row

Example:

```css
.grid-item {
  grid-row: 1 / 2;
}
```

### Explanation

The element sits between:

* grid line **1**
* grid line **2**

So it occupies **row 1**.

Visual representation:

```
Row Lines
1
2
3

Rows
Row1
Row2

Item placed here
```

---

# 7. Element Occupying Multiple Rows

Example:

```css
.grid-item {
  grid-row: 2 / 4;
}
```

### Explanation

The element starts at **row line 2** and ends at **row line 4**.

It occupies:

* row 2
* row 3

Visual representation:

```
Rows

Row1
Row2
Row3
Row4

Item spans Row2 and Row3
```

---

# 8. Using `span` with Rows

Example:

```css
.grid-item {
  grid-row: span 3;
}
```

### Explanation

The element will span **3 rows** starting from its current position.

Visual concept:

```
Row1
Row2
Row3
Row4

Item spans 3 rows
```

---

# 9. Using Negative Grid Line Values

CSS Grid also allows **negative grid lines**.

Example:

```css
.element {
  grid-row: 1 / -1;
}
```

### Explanation

* Start → **first grid line**
* End → **last grid line**

This means the element spans **the entire height of the grid**.

Example use cases:

* full-height sidebar
* background section
* page layout columns

---

# 10. Combining `grid-row` and `grid-column`

For complex layouts, both properties can be used together.

This allows elements to **occupy multiple rows and columns simultaneously**.

---

# Example: Complex Layout

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Grid Row and Column Example</title>

<style>

.container{
display:grid;
grid-template-columns:repeat(4,1fr);
grid-template-rows:repeat(4,100px);
gap:10px;
}

.item1{
background-color:lightblue;
grid-row:1 / 3;
grid-column:1 / 3;
}

.item2{
background-color:lightgreen;
grid-row:3 / 5;
grid-column:2 / 5;
}

.item3{
background-color:lightcoral;
grid-row:1 / 2;
grid-column:3 / 5;
}

</style>
</head>

<body>

<div class="container">

<div class="item1">Item 1</div>
<div class="item2">Item 2</div>
<div class="item3">Item 3</div>

</div>

</body>
</html>
```

---

# Code Explanation

### Grid Container

```css
.container{
display:grid;
grid-template-columns:repeat(4,1fr);
grid-template-rows:repeat(4,100px);
gap:10px;
}
```

This creates:

* **4 columns**
* **4 rows**
* equal column width
* rows with height **100px**

---

### Item 1

```css
.item1{
grid-row:1 / 3;
grid-column:1 / 3;
}
```

Item 1 occupies:

* rows **1–2**
* columns **1–2**

---

### Item 2

```css
.item2{
grid-row:3 / 5;
grid-column:2 / 5;
}
```

Item 2 occupies:

* rows **3–4**
* columns **2–4**

---

### Item 3

```css
.item3{
grid-row:1 / 2;
grid-column:3 / 5;
}
```

Item 3 occupies:

* row **1**
* columns **3–4**

---

# Exercise 1: Placement in a Column

## Task

Create a grid container with **three equal columns**.

Place an element in the **second column** using CSS Grid positioning.

Requirements:

* Container must be a grid container
* Three equal columns
* Element must occupy the space **between grid lines 2 and 3**

---

# Solution

### HTML

```html
<div class="container">

<div class="item">Item</div>

</div>
```

---

### CSS

```css
.container{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:10px;
}

.item{
background-color:lightblue;
padding:20px;

grid-column:2 / 3;
}
```

---

### Explanation

```css
grid-column:2 / 3;
```

Places the element between:

* line **2**
* line **3**

Which means it sits in **column 2**.

---

# Exercise 2: Several Columns

## Task

Create a grid container with **five equal columns**.

Place an element that **occupies the first three columns**.

Requirements:

* Grid container with **five columns**
* Element starts at **line 1**
* Ends at **line 4**

---

# Solution

### HTML

```html
<div class="container">

<div class="item">Grid Element</div>

</div>
```

---

### CSS

```css
.container{
display:grid;
grid-template-columns:repeat(5,1fr);
gap:10px;
}

.item{
background-color:lightgreen;
padding:20px;

grid-column:1 / 4;
}
```

---

### Explanation

```css
grid-column:1 / 4;
```

The element spans:

* column 1
* column 2
* column 3

Because it starts at **line 1** and ends at **line 4**.

---

# Key Takeaways

Important concepts about element distribution in CSS Grid:

* `grid-column` controls **horizontal placement**
* `grid-row` controls **vertical placement**
* Items are placed using **grid lines**
* `span` allows elements to cover multiple cells
* Negative grid lines allow referencing **last lines**
* Combining row and column properties creates **complex layouts**

---

