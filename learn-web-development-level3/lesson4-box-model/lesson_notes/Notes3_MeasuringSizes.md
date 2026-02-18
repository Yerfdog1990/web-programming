# Measuring Sizes in CSS

Understanding how to measure and control element sizes is essential for building structured, responsive layouts.

CSS provides several key properties for controlling block dimensions:

* `width`
* `height`
* `max-width`
* `max-height`

These properties determine how elements display and interact with surrounding content.

---

# 3.1 The `width` Property

## Definition

The `width` property sets the **horizontal size** of an element.

It controls the width of the **content area** (by default, in the standard box model).

---

## Possible Values

### 1️⃣ Automatic Value

```css
width: auto;
```

* The browser calculates the width automatically.
* Default behavior for most block elements.

---

### 2️⃣ Absolute Units

* `px` (pixels)
* `pt`
* `cm`
* `mm`
* `in`

Example:

```css
width: 200px;
```

---

### 3️⃣ Relative Units

* `%` → relative to parent element
* `em` → relative to font size of element
* `rem` → relative to root font size
* `vw` → viewport width
* `vh` → viewport height

Example:

```css
width: 50%;
```

---

## Example: Fixed vs Percentage Width

### CSS

```css
.box {
  background-color: #3498db;
  color: white;
  padding: 10px;
  margin: 10px;
}

.box-fixed {
  width: 200px;
}

.box-percentage {
  width: 50%;
}
```

### HTML

```html
<div class="box box-fixed">Fixed width (200px)</div>
<div class="box box-percentage">Width percentage (50%)</div>
```

---

## Code Explanation

* `.box-fixed` → always 200px wide
* `.box-percentage` → 50% of its parent element

---

# 3.2 The `height` Property

## Definition

The `height` property sets the **vertical size** of an element.

Like width, it accepts various units.

---

## Values

### Automatic

```css
height: auto;
```

Height adjusts to content.

---

### Absolute Units

```css
height: 150px;
```

---

### Relative Units

```css
height: 50%;
height: 50vh;
```

⚠ Important:
Percentage height only works if the parent element has a defined height.

---

## Example

### CSS

```css
.container {
  height: 300px;
}

.box {
  color: white;
  padding: 10px;
}

.box-fixed-height {
  height: 150px;
  background-color: #2ecc71;
}

.box-percentage-height {
  height: 50%;
  background-color: #7a5c71;
}
```

### HTML

```html
<div class="container">
  <div class="box box-fixed-height">Fixed height (150px)</div>
  <div class="box box-percentage-height">Height percentage (50%)</div>
</div>
```

---

## Code Explanation

* `.box-fixed-height` → 150px tall
* `.box-percentage-height` → 50% of parent height (300px → 150px)

---

# 3.3 The `max-width` Property

## Definition

`max-width` sets the **maximum allowed width** of an element.

It prevents elements from expanding beyond a certain size.

---

## Values

* `none` → no limit
* Absolute units → px, cm, etc.
* Relative units → %, em, rem, vw, vh

---

## Why Use `max-width`?

It is extremely useful for:

* Responsive layouts
* Limiting content width
* Preventing large screens from stretching content too wide

---

## Example

### CSS

```css
.box {
  background-color: #e74c3c;
  color: white;
  padding: 10px;
  margin: 10px;
}

.box-max-width {
  width: 100%;
  max-width: 300px;
}
```

### HTML

```html
<div class="box">Width 100% (default)</div>
<div class="box box-max-width">Max width 300px</div>
```

---

## Code Explanation

* Width: 100% → tries to fill parent
* Max-width: 300px → cannot exceed 300px

Even if parent is 1000px wide, the box stops at 300px.

---

# 3.4 The `max-height` Property

## Definition

`max-height` sets the **maximum vertical size** of an element.

If content exceeds this size, overflow behavior determines what happens.

---

## Example

### CSS

```css
.box {
  background-color: #9b59b6;
  color: white;
  padding: 10px;
  max-height: 35px;
  overflow: auto;
}
```

### HTML

```html
<div class="box">
  <p>
    Extra text for scroll demonstration.<br>
    Extra text for scroll demonstration.<br>
    Extra text for scroll demonstration.
  </p>
</div>
```

---

## Code Explanation

* `max-height: 35px` → limits height
* `overflow: auto` → adds scrollbars when content exceeds limit

---

# 🧪 Exercise 1: Block Width

## Requirements

* Block 1 → width: 250px
* Block 2 → width: 75% of parent
* Block 3 → width: 10em
* Each block must:

    * Have different background color
    * Contain text
    * 75% block must have a parent container

---

## Solution

### CSS

```css
.parent {
  width: 600px;
  border: 2px solid black;
  padding: 10px;
}

.block1 {
  width: 250px;
  background-color: #3498db;
  color: white;
  margin: 10px 0;
}

.block2 {
  width: 75%;
  background-color: #2ecc71;
  color: white;
  margin: 10px 0;
}

.block3 {
  width: 10em;
  background-color: #e74c3c;
  color: white;
  margin: 10px 0;
}
```

### HTML

```html
<div class="parent">
  <div class="block1">Fixed width: 250px</div>
  <div class="block2">Width: 75% of parent</div>
  <div class="block3">Width: 10em</div>
</div>
```

---

## Explanation

* Block 1 → fixed size
* Block 2 → 75% of 600px parent
* Block 3 → width depends on font size (10 × current font size)

---

# 🧪 Exercise 2: Maximum Height with Scroll

## Requirements

* max-height: 150px
* overflow: auto
* Enough content to scroll
* Background color
* Border

---

## Solution

### CSS

```css
.scroll-box {
  max-height: 150px;
  overflow: auto;
  background-color: #f39c12;
  border: 2px solid black;
  padding: 10px;
}
```

### HTML

```html
<div class="scroll-box">
  <p>
    This is a demonstration of max-height.<br>
    This content continues.<br>
    More lines to force scrolling.<br>
    More lines to force scrolling.<br>
    More lines to force scrolling.<br>
    More lines to force scrolling.<br>
    More lines to force scrolling.
  </p>
</div>
```

---

# Key Takeaways

1. `width` controls horizontal size.
2. `height` controls vertical size.
3. `%` values depend on parent size.
4. `max-width` is essential for responsive design.
5. `max-height` + `overflow` enables scrolling areas.
6. Fixed units (px) are predictable.
7. Relative units (% , em , rem , vw , vh) enable flexibility.

---

# Why Measuring Sizes Matters

Proper size control allows you to:

* Build responsive layouts
* Prevent overflow issues
* Control readability
* Design adaptive components
* Maintain consistent UI structure

---

