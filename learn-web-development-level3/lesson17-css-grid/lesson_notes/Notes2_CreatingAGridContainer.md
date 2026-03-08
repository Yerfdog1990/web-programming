# Creating a Grid Container (CSS Grid)

CSS Grid is a modern layout system that allows developers to design **structured webpage layouts using rows and columns**.
The **first and most important step** when working with CSS Grid is creating a **Grid Container**.

Once a grid container is defined, all of its **direct child elements automatically become grid items**, which can then be positioned and aligned within the grid.

---

# 1. The `display: grid` Property

The **`display: grid`** property is used to define an element as a **Grid Container**.

When applied to an element:

* It activates **CSS Grid layout**
* All **direct children become grid items**
* Grid-related properties can now be applied

### Basic Syntax

```css
.grid-container {
  display: grid;
}
```

This simple rule converts the element into a **grid layout container**.

---

# 2. Main Elements of a Grid Container

When a grid container is created, two main parts exist:

## 2.1 Grid Container

The **grid container** is the parent element that holds grid items.

Example:

```css
.grid-container {
  display: grid;
  border: 2px solid black;
}
```

Here:

* `display: grid` activates the grid layout
* `border` visually highlights the container

---

## 2.2 Grid Items

All **direct children of the grid container** automatically become **grid items**.

Example styling:

```css
.grid-item {
  background-color: #3498db;
  color: white;
  padding: 20px;
  border: 1px solid white;
  text-align: center;
}
```

These styles make the grid items visually clear.

---

# 3. Example: Basic Grid Container

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Grid Container Example</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<div class="grid-container">

<div class="grid-item">Item 1</div>
<div class="grid-item">Item 2</div>
<div class="grid-item">Item 3</div>

</div>

</body>
</html>
```

---

## CSS

```css
.grid-container {
  display: grid;
  border: 2px solid #000;
}

.grid-item {
  background-color: #3498db;
  color: white;
  padding: 20px;
  border: 1px solid #fff;
  text-align: center;
}
```

---

## Code Explanation

### `.grid-container`

```css
display: grid;
```

Defines the element as a **Grid container**.

```css
border: 2px solid #000;
```

Adds a border so the container is visually visible.

---

### `.grid-item`

```css
background-color: #3498db;
```

Sets a blue background color.

```css
padding: 20px;
```

Adds spacing inside each grid item.

```css
border: 1px solid #fff;
```

Creates a white border around items.

```css
text-align: center;
```

Centers the text inside items.

---

# 4. Nested Grid Containers

One powerful feature of CSS Grid is the ability to create **nested grids**.

A **grid item can also become a grid container**, allowing complex layouts.

Example structure:

```
Main Grid
   |
   |--- Item 1
   |--- Item 2 (contains another grid)
   |--- Item 3
```

---

## Example: Nested Grid

### CSS

```css
.grid-container {
  display: grid;
  gap: 10px;
  border: 2px solid #000;
}

.grid-item {
  background-color: #3498db;
  color: white;
  padding: 20px;
  border: 1px solid #fff;
  text-align: center;
}

.nested-grid-container {
  display: grid;
  gap: 5px;
  background-color: #2980b9;
  padding: 10px;
}

.nested-grid-item {
  background-color: #1abc9c;
  padding: 10px;
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
<title>Nested Grid Containers</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<div class="grid-container">

<div class="grid-item">Item 1</div>

<div class="grid-item">

<div class="nested-grid-container">
<div class="nested-grid-item">Nested Item 1</div>
<div class="nested-grid-item">Nested Item 2</div>
</div>

</div>

<div class="grid-item">Item 3</div>

</div>

</body>
</html>
```

---

## Code Explanation

### `.nested-grid-container`

```css
display: grid;
```

Creates another grid **inside the main grid item**.

```css
gap: 5px;
```

Adds spacing between nested items.

```css
padding: 10px;
```

Adds internal spacing.

---

### `.nested-grid-item`

Defines styles for items inside the nested grid.

```css
background-color: #1abc9c;
padding: 10px;
border: 1px solid white;
```

---

# 5. Managing Grid Container Behavior

CSS Grid also provides properties that control how items are **automatically placed**.

One such property is **`grid-auto-flow`**.

---

## The `grid-auto-flow` Property

This property controls **how items are placed automatically inside the grid**.

Example:

```css
.grid-container {
  display: grid;
  grid-auto-flow: row;
  gap: 10px;
  border: 2px solid #000;
}
```

### Meaning

```css
grid-auto-flow: row;
```

Items are placed **row by row**.

Example layout:

```
Item1  Item2  Item3
Item4  Item5
```

---

## Complete Example

### HTML

```html
<div class="grid-container">

<div class="grid-item">Item 1</div>
<div class="grid-item">Item 2</div>
<div class="grid-item">Item 3</div>
<div class="grid-item">Item 4</div>
<div class="grid-item">Item 5</div>

</div>
```

---

### CSS

```css
.grid-container {
  display: grid;
  grid-auto-flow: row;
  gap: 10px;
  border: 2px solid #000;
}

.grid-item {
  background-color: #3498db;
  color: white;
  padding: 20px;
  border: 1px solid #fff;
  text-align: center;
}
```

---

# 6. Using Flexbox Inside a Grid Container

CSS Grid and Flexbox can work **together**.

Often:

* **Grid** controls overall page layout
* **Flexbox** controls layout inside components

---

## Example: Flexbox Inside a Grid Item

### CSS

```css
.grid-container {
  display: grid;
  gap: 10px;
  border: 2px solid #000;
}

.grid-item {
  background-color: #3498db;
  color: white;
  padding: 20px;
  border: 1px solid #fff;
  text-align: center;
}

.flex-container {
  display: flex;
  gap: 10px;
}

.flex-item {
  background-color: #1abc9c;
  padding: 10px;
  flex: 1;
  text-align: center;
}
```

---

### HTML

```html
<div class="grid-container">

<div class="grid-item flex-container">
<div class="flex-item">Flex Item 1</div>
<div class="flex-item">Flex Item 2</div>
</div>

<div class="grid-item">Item 2</div>
<div class="grid-item">Item 3</div>

</div>
```

---

## Explanation

### `.flex-container`

```css
display: flex;
```

Turns the grid item into a **Flexbox container**.

### `.flex-item`

```css
flex: 1;
```

Each flex item takes **equal space**.

---

# Exercise 1: Basic Grid Container

## Task

Create a grid container using `display: grid`.

Requirements:

* Use `display: grid`
* Place **three elements inside**
* Each element should have:

    * background color
    * padding
    * border
* The container should have a **visible border**

---

## Solution

### HTML

```html
<div class="grid-container">

<div class="grid-item">Item 1</div>
<div class="grid-item">Item 2</div>
<div class="grid-item">Item 3</div>

</div>
```

---

### CSS

```css
.grid-container {
  display: grid;
  border: 2px solid black;
  gap: 10px;
}

.grid-item {
  background-color: lightblue;
  padding: 20px;
  border: 1px solid black;
}
```

---

# Exercise 2: Nested Grid

## Task

Create a grid container with **three elements**.

Requirements:

* One element should contain a **nested grid**
* Nested grid must contain **two elements**
* Styles for both containers should be **visually distinct**

---

## Solution

### HTML

```html
<div class="grid-container">

<div class="grid-item">Item 1</div>

<div class="grid-item">

<div class="nested-grid-container">

<div class="nested-grid-item">Nested Item 1</div>
<div class="nested-grid-item">Nested Item 2</div>

</div>

</div>

<div class="grid-item">Item 3</div>

</div>
```

---

### CSS

```css
.grid-container {
  display: grid;
  gap: 10px;
  border: 2px solid black;
}

.grid-item {
  background-color: #3498db;
  color: white;
  padding: 20px;
  border: 1px solid white;
}

.nested-grid-container {
  display: grid;
  gap: 5px;
  background-color: #2980b9;
  padding: 10px;
}

.nested-grid-item {
  background-color: #1abc9c;
  padding: 10px;
  border: 1px solid white;
}
```

---

# Key Takeaways

Important points about creating a Grid container:

1. **`display: grid`** converts an element into a grid container.

2. **All direct children become grid items automatically.**

3. Grid containers can be **nested** to create complex layouts.

4. Properties like **`grid-auto-flow`** control automatic item placement.

5. **Grid and Flexbox can work together**, where Grid handles overall layout and Flexbox handles internal alignment.

---

