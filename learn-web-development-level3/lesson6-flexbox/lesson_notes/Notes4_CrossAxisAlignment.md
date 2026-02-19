# 8. Cross Axis Alignment in Flexbox

In Flexbox, alignment does not only happen along the main axis.
You can also control how items are positioned **perpendicular to the main axis** — this is called the **cross axis**.

Flexbox provides two key properties for cross axis alignment:

* `align-items` → Aligns all flex items inside the container
* `align-self` → Aligns an individual flex item

---

# 8.1 Understanding the Cross Axis

The **cross axis** depends on the value of `flex-direction`.

| flex-direction          | Main Axis  | Cross Axis |
| ----------------------- | ---------- | ---------- |
| row / row-reverse       | Horizontal | Vertical   |
| column / column-reverse | Vertical   | Horizontal |

So:

* If `flex-direction: row` → `align-items` controls **vertical alignment**
* If `flex-direction: column` → `align-items` controls **horizontal alignment**

---

# 8.2 The `align-items` Property

The `align-items` property aligns all flex items along the **cross axis** inside a flex container.

## Syntax

```css
.container {
  display: flex;
  align-items: value;
}
```

---

## Values of `align-items`

---

### 1️⃣ `stretch` (Default)

* Items stretch to fill the container along the cross axis.
* Works only if the item does not have a fixed height/width on the cross axis.

```css
.container {
  display: flex;
  align-items: stretch;
}
```

---

### 2️⃣ `flex-start`

* Items align at the **start of the cross axis**.
* Top (if row)
* Left (if column)

```css
.container {
  display: flex;
  align-items: flex-start;
}
```

---

### 3️⃣ `flex-end`

* Items align at the **end of the cross axis**.
* Bottom (if row)
* Right (if column)

```css
.container {
  display: flex;
  align-items: flex-end;
}
```

---

### 4️⃣ `center`

* Items are centered along the cross axis.

```css
.container {
  display: flex;
  align-items: center;
}
```

---

### 5️⃣ `baseline`

* Items align according to the **baseline of their text**.
* Useful when items contain text of different font sizes.

```css
.container {
  display: flex;
  align-items: baseline;
}
```

---

# 8.3 Base Styling for Demonstrations

```css
.container {
  display: flex;
  height: 200px;
  border: 2px solid #000;
  padding: 10px;
  margin-bottom: 20px;
}

.item {
  background-color: #3498db;
  color: white;
  padding: 10px;
  margin: 5px;
}
```

---

# 8.4 The `align-self` Property

The `align-self` property allows you to override `align-items` for a specific flex item.

It is applied directly to the item.

## Syntax

```css
.item {
  align-self: value;
}
```

---

## Values of `align-self`

| Value      | Description                     |
| ---------- | ------------------------------- |
| auto       | Inherits from parent (default)  |
| stretch    | Stretches the item              |
| flex-start | Aligns item at cross-axis start |
| flex-end   | Aligns item at cross-axis end   |
| center     | Centers the item                |
| baseline   | Aligns to text baseline         |

---

## Example: Overriding Alignment

### CSS

```css
.container {
  display: flex;
  height: 200px;
  border: 2px solid black;
  align-items: flex-start;
}

.item {
  background: #3498db;
  color: white;
  padding: 10px;
  margin: 5px;
}

.self-flex-end {
  align-self: flex-end;
}

.self-center {
  align-self: center;
}

.self-baseline {
  align-self: baseline;
}
```

### HTML

```html
<div class="container">
  <div class="item self-flex-end">Item 1</div>
  <div class="item self-center">Item 2</div>
  <div class="item self-baseline">Item 3</div>
</div>
```

### Explanation

* `.self-flex-end` → aligns to bottom
* `.self-center` → vertically centered
* `.self-baseline` → aligns based on text baseline

---

# 8.5 Centering Items Horizontally and Vertically

Flexbox makes it extremely easy to center content both ways.

You combine:

* `justify-content` → Main axis alignment
* `align-items` → Cross axis alignment

---

## Example: Perfect Centering

### CSS

```css
.center-container {
  display: flex;
  justify-content: center; /* horizontal centering */
  align-items: center;     /* vertical centering */
  height: 300px;
  border: 2px solid #000;
}

.center-item {
  background-color: #3498db;
  color: white;
  padding: 20px;
}
```

### HTML

```html
<div class="center-container">
  <div class="center-item">Centered item</div>
</div>
```

### Explanation

* `justify-content: center;` → centers horizontally
* `align-items: center;` → centers vertically
* Result → Perfectly centered element

---

# 8.6 Practical Exercises

---

# 🔹 Exercise 1 – Using `align-items: stretch`

### Requirements

* Create a Flex container.
* Use `align-items: stretch`.
* Container must have unique styling.
* Each item must have unique styling.

---

## ✅ Solution

### CSS

```css
.stretch-container {
  display: flex;
  align-items: stretch;
  height: 250px;
  border: 3px dotted #333;
  background-color: #f1f8ff;
  padding: 15px;
}

.stretch1 {
  background-color: #ff6b6b;
  color: white;
  margin: 5px;
  padding: 10px;
}

.stretch2 {
  background-color: #4dabf7;
  color: white;
  margin: 5px;
  padding: 10px;
}

.stretch3 {
  background-color: #51cf66;
  color: white;
  margin: 5px;
  padding: 10px;
}
```

### HTML

```html
<div class="stretch-container">
  <div class="stretch1">Item 1</div>
  <div class="stretch2">Item 2</div>
  <div class="stretch3">Item 3</div>
</div>
```

---

# 🔹 Exercise 2 – Using `flex-start` and `flex-end`

### Requirements

* Create two Flex containers.
* First container → `align-items: flex-start`
* Second container → `align-items: flex-end`

---

## ✅ Solution

### CSS

```css
.start-container {
  display: flex;
  align-items: flex-start;
  height: 200px;
  border: 2px solid #28a745;
  background-color: #e9f7ef;
  padding: 15px;
  margin-bottom: 20px;
}

.end-container {
  display: flex;
  align-items: flex-end;
  height: 200px;
  border: 2px solid #dc3545;
  background-color: #fdecea;
  padding: 15px;
}

.box-a { background: #ff8787; padding: 10px; margin: 5px; color: white; }
.box-b { background: #74c0fc; padding: 10px; margin: 5px; color: white; }
.box-c { background: #69db7c; padding: 10px; margin: 5px; color: white; }
```

### HTML

```html
<div class="start-container">
  <div class="box-a">Item 1</div>
  <div class="box-b">Item 2</div>
  <div class="box-c">Item 3</div>
</div>

<div class="end-container">
  <div class="box-a">Item 1</div>
  <div class="box-b">Item 2</div>
  <div class="box-c">Item 3</div>
</div>
```

---

# 8.7 Summary Table

| Property    | Controls                | Applies To           |
| ----------- | ----------------------- | -------------------- |
| align-items | All items on cross axis | Flex container       |
| align-self  | One item on cross axis  | Individual flex item |

---

# Key Takeaways

* Cross axis alignment depends on `flex-direction`.
* `align-items` controls all items.
* `align-self` overrides alignment for one item.
* Combine `justify-content` and `align-items` for perfect centering.
* Essential for creating balanced, responsive layouts.

Mastering cross axis alignment gives you precise control over vertical and horizontal positioning in modern CSS layouts.

---