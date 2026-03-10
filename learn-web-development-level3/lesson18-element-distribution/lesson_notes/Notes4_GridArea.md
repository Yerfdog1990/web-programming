# Grid Areas in CSS Grid

CSS Grid Layout provides powerful tools for creating **complex layouts easily**. One of the most useful features is **Grid Areas**, which allow developers to design layouts by assigning **names to sections of the grid**.

Instead of positioning items using **row and column numbers**, you can use **named layout areas** that describe the page structure. This makes the layout:

* easier to **read**
* easier to **maintain**
* easier to **modify later**

A common page layout using grid areas might include sections such as:

* Header
* Sidebar
* Main content
* Footer

---

# 9.1 The `grid-template-areas` Property

The **`grid-template-areas` property** is used to define **named layout regions in a grid container**.

Each named region represents a **rectangular group of grid cells**.

Once areas are defined, elements can be placed into them using the **`grid-area` property**.

---

## Main Concepts of `grid-template-areas`

### 1. Defining Areas

The `grid-template-areas` property allows developers to **assign names to different parts of the grid**.

Each name represents **one layout section**.

Example layout structure:

```id="9zju0e"
Header
Sidebar | Main Content
Footer
```

---

### 2. Using Named Areas

Once the layout areas are defined, elements can be placed into them using:

```id="4t3b9q"
grid-area
```

This connects a **CSS class to a named grid area**.

---

## Syntax of `grid-template-areas`

### Grid Container

```css
.container {
  display: grid;

  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
```

### Grid Elements

```css
.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
```

---

## Explanation

Important rules:

* Each **line represents a row**
* Each **word represents a grid cell**
* Repeating a name means the area **spans multiple columns**
* Dots (`.`) represent **empty cells**

Visual structure of the example:

```
header  header  header
sidebar main    main
footer  footer  footer
```

---

# 9.2 Example of Using `grid-template-areas`

## CSS Implementation

```css
.grid-container {
  display: grid;

  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";

  grid-gap: 10px;
}

.header {
  grid-area: header;
  background-color: #2ecc71;
  padding: 20px;
  text-align: center;
}

.sidebar {
  grid-area: sidebar;
  background-color: #3498db;
  padding: 20px;
  text-align: center;
}

.main {
  grid-area: main;
  background-color: #9b59b6;
  padding: 20px;
  text-align: center;
}

.footer {
  grid-area: footer;
  background-color: #e74c3c;
  padding: 20px;
  text-align: center;
}
```

---

## HTML Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Grid Areas Example</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<div class="grid-container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
  <div class="footer">Footer</div>
</div>

</body>
</html>
```

---

## Layout Visualization

```
+----------------------------+
|          HEADER            |
+-------------+--------------+
|  SIDEBAR    |     MAIN     |
|             |              |
+-------------+--------------+
|           FOOTER           |
+----------------------------+
```

---

## Code Explanation

### `.grid-container`

* Creates a **CSS Grid container**
* Uses `grid-template-areas` to define the layout structure
* Defines **three rows**
* Adds spacing using `grid-gap`

Layout rows:

1️⃣ Header

2️⃣ Sidebar + Main content

3️⃣ Footer

---

### Grid Elements

Each element is connected to the grid layout using `grid-area`.

Example:

```css
.header {
  grid-area: header;
}
```

This tells CSS:

> Place this element inside the **header area** of the grid.

---

# 9.3 Managing Empty Areas

Sometimes layouts require **empty spaces**.
CSS Grid allows empty grid cells using the **dot (`.`)** symbol.

The dot represents **unused or empty grid cells**.

---

## Example with Empty Areas

### CSS

```css
.grid-container {
  display: grid;

  grid-template-areas:
    "header header header"
    ". main ."
    "footer footer footer";

  grid-gap: 10px;
}

.header {
  grid-area: header;
  background-color: #2ecc71;
  padding: 20px;
  text-align: center;
}

.main {
  grid-area: main;
  background-color: #9b59b6;
  padding: 20px;
  text-align: center;
}

.footer {
  grid-area: footer;
  background-color: #e74c3c;
  padding: 20px;
  text-align: center;
}
```

---

### HTML

```html
<div class="grid-container">
  <div class="header">Header</div>
  <div class="main">Main Content</div>
  <div class="footer">Footer</div>
</div>
```

---

## Layout Visualization

```
+----------------------------+
|          HEADER            |
+-----------+------+---------+
|           | MAIN |         |
+-----------+------+---------+
|           FOOTER           |
+----------------------------+
```

The dots (`.`) create **empty spaces on both sides of the main content**.

---

# Exercises

# Exercise 1: Empty Areas

## Task

Create a grid container with:

* **3 rows**
* **3 columns**

Define areas for:

* Header
* Main content
* Footer

Leave empty spaces on both sides of the main content.

---

## Requirements

* Use `grid-template-areas`
* Use **dots (`.`)** to create empty spaces
* Place **main content in the center of the second row**

---

## Solution

### CSS

```css
.grid-container {
  display: grid;

  grid-template-areas:
    "header header header"
    ". main ."
    "footer footer footer";

  gap: 10px;
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
```

---

### HTML

```html
<div class="grid-container">
  <div class="header">Header</div>
  <div class="main">Main</div>
  <div class="footer">Footer</div>
</div>
```

---

# Exercise 2: Positioning with `grid-area`

## Task

Create a grid container with:

* **4 rows**
* **3 columns**

Define areas for:

* Header
* Sidebar Left
* Sidebar Right
* Main content
* Footer

---

## Requirements

* Use `grid-template-areas`
* Define CSS classes for:

    * header
    * sidebar-left
    * sidebar-right
    * main
    * footer
* Assign elements to areas using `grid-area`

---

## Solution

### CSS

```css
.grid-container {
  display: grid;

  grid-template-areas:
    "header header header"
    "sidebar-left main sidebar-right"
    "sidebar-left main sidebar-right"
    "footer footer footer";

  gap: 10px;
}

.header {
  grid-area: header;
}

.sidebar-left {
  grid-area: sidebar-left;
}

.sidebar-right {
  grid-area: sidebar-right;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
```

---

### HTML

```html
<div class="grid-container">
  <div class="header">Header</div>
  <div class="sidebar-left">Left Sidebar</div>
  <div class="main">Main Content</div>
  <div class="sidebar-right">Right Sidebar</div>
  <div class="footer">Footer</div>
</div>
```

---

## Layout Visualization

```
+---------------------------------+
|            HEADER               |
+-------------+-------+-----------+
| SIDEBAR L   | MAIN  | SIDEBAR R |
| SIDEBAR L   | MAIN  | SIDEBAR R |
+-------------+-------+-----------+
|            FOOTER               |
+---------------------------------+
```

---

# Key Takeaways

* `grid-template-areas` defines **named layout regions** in a grid.
* Each **row is written as a string**.
* Repeated names allow areas to **span multiple columns or rows**.
* The **`grid-area` property assigns elements to layout regions**.
* A **dot (`.`)** represents an **empty grid cell**.
* Grid areas make layouts **easier to understand and maintain**.

---
