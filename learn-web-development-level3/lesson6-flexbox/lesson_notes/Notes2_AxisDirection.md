# 6. Axis Direction in Flexbox

Flexbox is a powerful layout system that uses **axes** to control how items are arranged inside a container. Understanding axis direction is essential for building responsive layouts.

In Flexbox, there are two important axes:

* **Main Axis** → Controlled by `flex-direction`
* **Cross Axis** → Perpendicular to the main axis

The direction of the main axis determines how Flex items are positioned.

---

# 6.1 The `flex-direction` Property

The `flex-direction` property defines the **direction of the main axis**, meaning how Flex items are laid out inside the Flex container.

## Syntax

```css
.container {
  display: flex;
  flex-direction: value;
}
```

---

## Values of `flex-direction`

### 1️⃣ `row` (Default)

* Main axis: Horizontal
* Direction: Left → Right
* Items are placed side by side.

```
Item1  Item2  Item3
```

---

### 2️⃣ `row-reverse`

* Main axis: Horizontal
* Direction: Right → Left

```
Item3  Item2  Item1
```

---

### 3️⃣ `column`

* Main axis: Vertical
* Direction: Top → Bottom

```
Item1
Item2
Item3
```

---

### 4️⃣ `column-reverse`

* Main axis: Vertical
* Direction: Bottom → Top

```
Item3
Item2
Item1
```

---

## Horizontal Layout Example

### CSS

```css
.container-row {
  display: flex;
  flex-direction: row;
  border: 2px solid #000;
  padding: 10px;
}

.container-row-reverse {
  display: flex;
  flex-direction: row-reverse;
  border: 2px solid #000;
  padding: 10px;
}

.item {
  background-color: #3498db;
  color: white;
  padding: 10px;
  margin: 5px;
}
```

### HTML

```html
<div class="container-row">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>

<div class="container-row-reverse">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

### Explanation

* `.container-row` → Items arranged left to right.
* `.container-row-reverse` → Items arranged right to left.

---

## Vertical Layout Example

### CSS

```css
.container-column {
  display: flex;
  flex-direction: column;
  border: 2px solid #000;
  padding: 10px;
}

.container-column-reverse {
  display: flex;
  flex-direction: column-reverse;
  border: 2px solid #000;
  padding: 10px;
}
```

### HTML

```html
<div class="container-column">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>

<div class="container-column-reverse">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

### Explanation

* `.container-column` → Items arranged top to bottom.
* `.container-column-reverse` → Items arranged bottom to top.

---

# 6.2 The `flex-wrap` Property

The `flex-wrap` property determines whether Flex items stay on a single line or wrap onto new lines when there is not enough space.

## Syntax

```css
.container {
  display: flex;
  flex-wrap: value;
}
```

---

## Values of `flex-wrap`

### 1️⃣ `nowrap` (Default)

* Items stay in one line.
* Items may overflow the container.

```css
.container-nowrap {
  display: flex;
  flex-wrap: nowrap;
  width: 300px;
}
```

---

### 2️⃣ `wrap`

* Items move to the next line when needed.

```css
.container-wrap {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
}
```

---

### 3️⃣ `wrap-reverse`

* Items wrap onto new lines.
* Wrapping order is reversed.

```css
.container-wrap-reverse {
  display: flex;
  flex-wrap: wrap-reverse;
  width: 300px;
}
```

---

## Wrap Demonstration Example

### CSS

```css
.container-nowrap,
.container-wrap,
.container-wrap-reverse {
  border: 2px solid #000;
  padding: 10px;
  width: 300px;
  margin-bottom: 20px;
}

.container-nowrap { display: flex; flex-wrap: nowrap; background: #fce4ec; }
.container-wrap { display: flex; flex-wrap: wrap; background: #e0f7fa; }
.container-wrap-reverse { display: flex; flex-wrap: wrap-reverse; background: #f1f8e9; }

.item {
  width: 100px;
  background-color: #3498db;
  color: white;
  padding: 10px;
  margin: 5px;
}
```

### HTML

```html
<div class="container-nowrap">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>

<div class="container-wrap">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>

<div class="container-wrap-reverse">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>
```

---

# 6.3 Using `flex-direction` and `flex-wrap` Together

You can combine both properties using the shorthand:

## `flex-flow`

### Syntax

```css
.container {
  display: flex;
  flex-flow: [flex-direction] [flex-wrap];
}
```

---

### Example

```css
.container {
  display: flex;
  flex-flow: row wrap;
  border: 2px solid #000;
  padding: 10px;
  width: 300px;
}
```

### HTML

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
</div>
```

### Explanation

* `row` → Items arranged horizontally.
* `wrap` → Items move to the next line when needed.

---

# 🔹 Exercise 1: Flex Direction

### Requirements

* Create a Flex container with four elements.
* Use `flex-direction` values:

    * `row`
    * `row-reverse`
    * `column`
    * `column-reverse`
* Assign unique styles to each container.

---

## ✅ Solution

### CSS

```css
.flex-container {
  display: flex;
  border: 2px solid black;
  padding: 10px;
  margin-bottom: 20px;
}

.row { flex-direction: row; background: #f8f9fa; }
.row-reverse { flex-direction: row-reverse; background: #e3f2fd; }
.column { flex-direction: column; background: #e8f5e9; }
.column-reverse { flex-direction: column-reverse; background: #fff3e0; }

.item {
  background: #3498db;
  color: white;
  padding: 10px;
  margin: 5px;
}
```

### HTML

```html
<div class="flex-container row">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>

<div class="flex-container row-reverse">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>

<div class="flex-container column">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>

<div class="flex-container column-reverse">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>
```

---

# 🔹 Exercise 2: Flex Wrap

### Requirements

* Create a Flex container with five items.
* Apply:

    * `nowrap`
    * `wrap`
    * `wrap-reverse`
* Assign unique styles.
* Ensure items overflow container width.

---

## ✅ Solution

### CSS

```css
.wrap-container {
  display: flex;
  width: 300px;
  border: 2px solid black;
  padding: 10px;
  margin-bottom: 20px;
}

.nowrap { flex-wrap: nowrap; background: #fce4ec; }
.wrap { flex-wrap: wrap; background: #e0f7fa; }
.wrap-reverse { flex-wrap: wrap-reverse; background: #f1f8e9; }

.item {
  width: 100px;
  background: #3498db;
  color: white;
  padding: 10px;
  margin: 5px;
}
```

### HTML

```html
<div class="wrap-container nowrap">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
</div>

<div class="wrap-container wrap">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
</div>

<div class="wrap-container wrap-reverse">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
</div>
```

---

# Final Summary

| Property       | Controls            | Values                                   |
| -------------- | ------------------- | ---------------------------------------- |
| flex-direction | Main axis direction | row, row-reverse, column, column-reverse |
| flex-wrap      | Wrapping behavior   | nowrap, wrap, wrap-reverse               |
| flex-flow      | Shorthand           | direction + wrap                         |

Understanding axis direction and wrapping is essential for building modern, responsive layouts using Flexbox.

---