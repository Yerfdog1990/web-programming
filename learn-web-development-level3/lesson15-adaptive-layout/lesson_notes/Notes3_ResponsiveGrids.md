# Responsive Grids

Responsive grids allow us to build flexible layouts that automatically adapt to different screen sizes. Two powerful tools for creating responsive grids in modern web design are:

* **Flexbox** (one-dimensional layout)
* **CSS Grid** (two-dimensional layout)

Both technologies help control positioning, spacing, and alignment of elements across devices.

---

# 3.1 Flexbox

**Flexbox (Flexible Box Layout Module)** is designed for one-dimensional layouts — either in a row or a column.

It is ideal when you need to:

* Align items horizontally or vertically
* Distribute space evenly
* Control item resizing
* Build responsive rows or columns

---

## Main Flexbox Concepts

### 1️⃣ Flex Container

An element becomes a flex container when:

```css
display: flex;
```

All direct children become **flex items**.

---

### 2️⃣ Flex Items

Child elements inside the flex container.

---

## Flex Container Properties

### `display: flex`

Defines the element as a flex container.

### `flex-direction`

Controls layout direction:

```css
flex-direction: row;          /* default */
flex-direction: column;
flex-direction: row-reverse;
flex-direction: column-reverse;
```

### `justify-content`

Aligns items along the **main axis**:

```css
justify-content: flex-start;
justify-content: flex-end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
```

### `align-items`

Aligns items along the **cross axis**:

```css
align-items: stretch;
align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: baseline;
```

---

## Flex Item Properties

### `flex-grow`

Controls how much an item can grow.

### `flex-shrink`

Controls how much an item can shrink.

### `flex-basis`

Defines initial size before space distribution.

### `align-self`

Overrides container alignment for a specific item.

---

## Example: Responsive Three Columns

```html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
}

.flex-item {
  flex: 1 1 200px;
  margin: 10px;
  padding: 20px;
  background-color: #f4f4f4;
  text-align: center;
}
</style>
</head>
<body>

<div class="flex-container">
  <div class="flex-item">Column 1</div>
  <div class="flex-item">Column 2</div>
  <div class="flex-item">Column 3</div>
</div>

</body>
</html>
```

---

## Code Explanation

`.flex-container`

* `display: flex;`
* `justify-content: space-between;` distributes space evenly
* `flex-wrap: wrap;` allows wrapping on small screens

`.flex-item`

* `flex: 1 1 200px;`

    * grow: 1
    * shrink: 1
    * basis: 200px (minimum width)
* Ensures responsiveness automatically

---

# 3.2 CSS Grid

**CSS Grid** is a two-dimensional layout system.

Unlike Flexbox (row OR column), Grid works with rows AND columns at the same time.

Perfect for:

* Page layouts
* Complex dashboards
* Structured grids

---

## Main CSS Grid Concepts

### Grid Container

```css
display: grid;
```

### Grid Items

Direct children of the grid container.

---

## Grid Container Properties

### `grid-template-columns`

Defines number and size of columns:

```css
grid-template-columns: repeat(3, 1fr);
```

### `grid-template-rows`

Defines rows:

```css
grid-template-rows: repeat(2, 1fr);
```

### `gap`

Controls spacing:

```css
gap: 10px;
```

### `justify-items` and `align-items`

Control alignment inside cells.

---

## Grid Item Properties

### `grid-column`

Controls column span:

```css
grid-column: span 2;
```

### `grid-row`

Controls row span.

### `justify-self` / `align-self`

Override alignment per item.

---

## Example: 3 Columns × 2 Rows

```html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
}

.grid-item {
  padding: 20px;
  background-color: #e4e4e4;
  text-align: center;
}
</style>
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

* 3 equal columns
* 2 equal rows
* Each item occupies one grid cell
* Layout adapts naturally to screen size

---

# Exercise 1: Flexbox Cards

## Requirements Recap

* At least 4 cards
* > 1000px → single row
* 600px–1000px → two rows
* < 600px → single column
* Use `flex-direction` and `justify-content`

---

## ✅ Solution

```html
<div class="cards">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>
```

```css
.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card {
  background: #ddd;
  padding: 20px;
  margin: 10px;
  flex: 1 1 200px;
  text-align: center;
}

/* Large screens */
@media (min-width: 1000px) {
  .cards {
    flex-direction: row;
  }
}

/* Medium screens */
@media (min-width: 600px) and (max-width: 999px) {
  .cards {
    flex-direction: row;
  }
  .card {
    flex: 1 1 45%;
  }
}

/* Small screens */
@media (max-width: 599px) {
  .cards {
    flex-direction: column;
    justify-content: center;
  }
}
```

---

## How It Works

* `flex-wrap` allows wrapping
* Large → single row
* Medium → two cards per row
* Small → column layout
* `justify-content: space-between` distributes space evenly

---

# Exercise 2: Flexible Grid

## Requirements Recap

* First element:

    * Entire first row
    * Fixed width in first column
* Remaining elements flexible
* Use `grid-template-columns` and `grid-column`

---

## ✅ Solution

```html
<div class="layout">
  <div class="item header">Header</div>
  <div class="item">Content 1</div>
  <div class="item">Content 2</div>
  <div class="item">Content 3</div>
</div>
```

```css
.layout {
  display: grid;
  grid-template-columns: 300px 1fr 1fr;
  gap: 10px;
}

.header {
  grid-column: 1 / -1;
  background: #ccc;
  padding: 20px;
}

.item {
  background: #eee;
  padding: 20px;
}
```

---

## Explanation

* `grid-template-columns: 300px 1fr 1fr;`

    * First column fixed at 300px
    * Remaining columns flexible
* `grid-column: 1 / -1;`

    * Header spans entire row
* Other items fill available flexible space

Grid adapts while preserving fixed and flexible areas.

---

# Flexbox vs Grid Summary

| Feature    | Flexbox         | Grid              |
| ---------- | --------------- | ----------------- |
| Dimension  | One-dimensional | Two-dimensional   |
| Best for   | Rows OR columns | Full page layouts |
| Complexity | Simpler         | More powerful     |
| Responsive | Excellent       | Excellent         |

---

# Final Thoughts

Responsive grids are essential in modern web development.

Use:

* **Flexbox** for flexible rows and alignment.
* **CSS Grid** for structured page layouts.
* Combine both for advanced responsive systems.

---