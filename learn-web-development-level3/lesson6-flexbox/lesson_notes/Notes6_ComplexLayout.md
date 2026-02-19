# 10. Complex Layouts with Flexbox

Flexbox is not only useful for alignment and spacing — it is also powerful enough to build complete layout structures such as grids, centered layouts, navigation menus, and product card systems.

In this section, we explore practical real-world layout patterns using Flexbox.

---

# 10.1 Simple Grid Layout

Flexbox can be used to create a responsive grid system by combining:

* `display: flex`
* `flex-wrap: wrap`
* `flex-basis`
* `flex` shorthand

---

## Example: Creating a 3-Column Grid

### CSS

```css
.flex-container {
  display: flex;
  flex-wrap: wrap; /* Allows items to move to new rows */
  background-color: lightgrey;
  padding: 10px;
}

.flex-item {
  background-color: deepskyblue;
  margin: 10px;
  padding: 20px;
  color: white;
  font-size: 20px;
  flex: 1 1 calc(33.333% - 40px);
  box-sizing: border-box;
}
```

### HTML

```html
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
  <div class="flex-item">Item 4</div>
  <div class="flex-item">Item 5</div>
  <div class="flex-item">Item 6</div>
</div>
```

---

## Explanation

* `flex-wrap: wrap;`
  Allows items to move to a new row.

* `flex: 1 1 calc(33.333% - 40px);`

    * `1` → grow
    * `1` → shrink
    * `calc(33.333% - 40px)` → each item takes one-third of the container width minus margins

* `calc()` allows mathematical calculations inside CSS.

Result:

* 3 columns
* 2 rows
* Fully responsive

---

# 10.2 Centering Elements

Flexbox makes vertical and horizontal centering extremely simple.

---

## Example: Full-Screen Centered Element

### CSS

```css
.flex-container {
  display: flex;
  justify-content: center; /* Horizontal */
  align-items: center;     /* Vertical */
  height: 100vh;
  background-color: lightgrey;
}

.flex-item {
  background-color: deepskyblue;
  padding: 20px;
  color: white;
  font-size: 20px;
}
```

### HTML

```html
<div class="flex-container">
  <div class="flex-item">Centered Item</div>
</div>
```

---

## Explanation

* `justify-content: center;` → centers along main axis
* `align-items: center;` → centers along cross axis
* `height: 100vh;` → container fills entire screen

This is one of the most common real-world uses of Flexbox.

---

# 10.3 Navigation Menu

Flexbox is perfect for building horizontal menus.

---

## Example: Horizontal Navigation Menu

### CSS

```css
.nav-container {
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 10px;
}

.nav-item {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
}

.nav-item:hover {
  background-color: #575757;
}
```

### HTML

```html
<div class="nav-container">
  <a href="#" class="nav-item">Home</a>
  <a href="#" class="nav-item">About</a>
  <a href="#" class="nav-item">Services</a>
  <a href="#" class="nav-item">Contact</a>
</div>
```

---

## Explanation

* `display: flex;` → makes items horizontal
* `justify-content: space-around;` → equal spacing
* Items are automatically aligned in one row

---

# 10.4 Product Cards Layout

Flexbox allows building responsive card-based layouts.

---

## Example: Product Card System

### CSS

```css
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.product-item {
  flex: 1 1 calc(33.333% - 40px);
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #fff;
  text-align: center;
}

.product-item img {
  max-width: 100%;
  height: auto;
}

.product-title {
  font-size: 1.2em;
  margin: 10px 0;
}

.product-price {
  font-size: 1.5em;
  color: #e74c3c;
}
```

### HTML

```html
<div class="product-list">
  <div class="product-item">
    <img src="https://via.placeholder.com/150" alt="Product Image">
    <h3 class="product-title">Product 1</h3>
    <p class="product-price">$99.99</p>
  </div>

  <div class="product-item">
    <img src="https://via.placeholder.com/150" alt="Product Image">
    <h3 class="product-title">Product 2</h3>
    <p class="product-price">$79.99</p>
  </div>

  <div class="product-item">
    <img src="https://via.placeholder.com/150" alt="Product Image">
    <h3 class="product-title">Product 3</h3>
    <p class="product-price">$89.99</p>
  </div>
</div>
```

---

## Explanation

* `.product-list` → flex container with wrapping
* `.product-item` → flexible card width
* Cards automatically wrap on smaller screens
* Responsive by default

---

# 🔹 Exercise 1: Creating a Simple Grid

## Requirements

* 6 elements
* 3 columns
* 2 rows
* Each element occupies 33.333%
* Responsive layout

---

## ✅ Solution

### CSS

```css
.grid-container {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  background-color: #f0f0f0;
}

.grid-item {
  flex: 1 1 33.333%;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid #ccc;
  text-align: center;
  background-color: #3498db;
  color: white;
}
```

### HTML

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```

---

## Why This Works

* `flex-wrap: wrap;` creates multiple rows
* `33.333%` creates three equal columns
* Layout adjusts automatically on resize

---

# 🔹 Exercise 2: Navigation Menu

## Requirements

* Horizontal menu
* Even spacing
* Centered inside container
* All items aligned horizontally

---

## ✅ Solution

### CSS

```css
.menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #222;
  padding: 15px;
}

.menu a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.menu a:hover {
  color: #e74c3c;
}
```

### HTML

```html
<div class="menu">
  <a href="#">Home</a>
  <a href="#">Products</a>
  <a href="#">Blog</a>
  <a href="#">Contact</a>
</div>
```

---

## Explanation

* `display: flex;` → horizontal layout
* `justify-content: space-evenly;` → equal spacing
* `align-items: center;` → vertical alignment
* Clean, responsive navigation menu

---

# Summary

Flexbox allows you to create:

1. [ ] ✔ Responsive grid systems
2. [ ] ✔ Perfect centering (vertical + horizontal)
3. [ ] ✔ Navigation menus
4. [ ] ✔ Card-based layouts
5. [ ] ✔ Dynamic product displays

By combining:

* `flex-wrap`
* `flex-basis`
* `justify-content`
* `align-items`
* `flex` shorthand

You can build complex layouts with very little CSS.

Flexbox is one of the most powerful layout tools in modern web development.

---