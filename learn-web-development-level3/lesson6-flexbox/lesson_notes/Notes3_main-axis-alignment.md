# 7. Main Axis Alignment in Flexbox

Flexbox provides powerful alignment tools for controlling how items are positioned inside a Flex container.

One of the most important properties for **main axis alignment** is:

## `justify-content`

The `justify-content` property controls how Flex items are distributed **along the main axis** of the Flex container.

---

## 7.1 Understanding the Main Axis

The **main axis direction** depends on the value of `flex-direction`.

* If `flex-direction: row` or `row-reverse`
  → Main axis is **horizontal**

* If `flex-direction: column` or `column-reverse`
  → Main axis is **vertical**

So `justify-content` aligns items:

* Left ↔ Right (for rows)
* Top ↕ Bottom (for columns)

---

# 7.2 The `justify-content` Property

## Syntax

```css
.container {
  display: flex;
  justify-content: value;
}
```

---

# 7.3 Values of `justify-content`

---

## 1️⃣ `flex-start` (Default)

Items are aligned at the **start of the container**.

* Left side (if row)
* Top side (if column)

### CSS

```css
.container {
  display: flex;
  justify-content: flex-start;
}
```

### HTML

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

---

## 2️⃣ `flex-end`

Items are aligned at the **end of the container**.

* Right side (if row)
* Bottom (if column)

### CSS

```css
.container {
  display: flex;
  justify-content: flex-end;
}
```

---

## 3️⃣ `center`

Items are centered inside the container along the main axis.

### CSS

```css
.container {
  display: flex;
  justify-content: center;
}
```

---

## 4️⃣ `space-between`

Items are evenly distributed with **equal space between them**.

* First item touches the start.
* Last item touches the end.
* No space at container edges.

### CSS

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

---

## 5️⃣ `space-around`

Items are distributed with **space around each item**.

* Space between items is **twice** the space at the edges.

### CSS

```css
.container {
  display: flex;
  justify-content: space-around;
}
```

---

## 6️⃣ `space-evenly`

Items are distributed with **equal spacing everywhere**.

* Equal space between items.
* Equal space at the edges.

### CSS

```css
.container {
  display: flex;
  justify-content: space-evenly;
}
```

---

# 7.4 Base Styling for Examples

```css
.container {
  display: flex;
  border: 2px solid #000;
  padding: 10px;
  margin-bottom: 20px;
  height: 120px;
}

.item {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  margin: 5px;
}
```

---

# 7.5 Real-World Example – Centering a Navigation Menu

Flexbox is commonly used to center navigation menus.

### CSS

```css
.nav {
  display: flex;
  justify-content: center;
  background-color: #333;
  padding: 10px;
}

.nav-item {
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}

.nav-item:hover {
  background-color: #575757;
}
```

### HTML

```html
<nav class="nav">
  <a href="#" class="nav-item">Home</a>
  <a href="#" class="nav-item">About Us</a>
  <a href="#" class="nav-item">Services</a>
  <a href="#" class="nav-item">Contact</a>
</nav>
```

### Explanation

* `.nav` → Flex container
* `justify-content: center;` → Centers all menu links
* `.nav-item` → Individual Flex items

---

# 7.6 Practical Exercises

---

# 🔹 Exercise 1 – Using `flex-start`

### Requirements

* Create a Flex container with three elements.
* Use `justify-content: flex-start`
* Apply unique styles to the container.
* Apply unique styles to each item.

---

## ✅ Solution

### CSS

```css
.flex-start-container {
  display: flex;
  justify-content: flex-start;
  background-color: #f8f9fa;
  border: 3px dashed #333;
  padding: 20px;
}

.box1 { background-color: #e74c3c; padding: 15px; color: white; }
.box2 { background-color: #2ecc71; padding: 15px; color: white; }
.box3 { background-color: #9b59b6; padding: 15px; color: white; }
```

### HTML

```html
<div class="flex-start-container">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
  <div class="box3">Box 3</div>
</div>
```

---

# 🔹 Exercise 2 – Using `flex-end` and `center`

### Requirements

* Create two Flex containers.
* First container → `justify-content: flex-end`
* Second container → `justify-content: center`
* Each container contains three elements.

---

## ✅ Solution

### CSS

```css
.flex-end-container {
  display: flex;
  justify-content: flex-end;
  background-color: #fff3cd;
  border: 2px solid #856404;
  padding: 20px;
  margin-bottom: 20px;
}

.center-container {
  display: flex;
  justify-content: center;
  background-color: #d1ecf1;
  border: 2px solid #0c5460;
  padding: 20px;
}

.item-a { background-color: #ff6b6b; padding: 10px 20px; color: white; margin: 5px; }
.item-b { background-color: #4dabf7; padding: 10px 20px; color: white; margin: 5px; }
.item-c { background-color: #51cf66; padding: 10px 20px; color: white; margin: 5px; }
```

### HTML

```html
<div class="flex-end-container">
  <div class="item-a">Item 1</div>
  <div class="item-b">Item 2</div>
  <div class="item-c">Item 3</div>
</div>

<div class="center-container">
  <div class="item-a">Item 1</div>
  <div class="item-b">Item 2</div>
  <div class="item-c">Item 3</div>
</div>
```

---

# 7.7 Summary Table

| Value         | Alignment Behavior        |
| ------------- | ------------------------- |
| flex-start    | Align items at start      |
| flex-end      | Align items at end        |
| center        | Center items              |
| space-between | Equal space between items |
| space-around  | Equal space around items  |
| space-evenly  | Equal space everywhere    |

---

# Final Key Points

* `justify-content` controls alignment along the **main axis**.
* The main axis direction depends on `flex-direction`.
* It is essential for creating:

    * Centered layouts
    * Evenly spaced content
    * Professional navigation bars
    * Balanced UI designs

Mastering main axis alignment is a major step toward building responsive and flexible layouts with CSS Flexbox.

---