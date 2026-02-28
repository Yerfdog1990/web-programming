# 3. Relative Positioning (`position: relative`)

Relative positioning allows you to move an element **relative to its original position** in the normal document flow.

When you apply:

```css
position: relative;
```

The element:

* ✅ Stays in the normal document flow
* ✅ Keeps its original space
* ✅ Can be shifted using `top`, `right`, `bottom`, and `left`
* ❗ Only the element itself moves — surrounding elements behave as if it never moved

This makes relative positioning ideal for:

* Small layout adjustments
* Overlapping elements
* Nudging elements without breaking layout
* Creating positioning context for absolutely positioned children

---

# 3.1 Basic Principles of Relative Positioning

With `position: relative`:

* The element starts in its normal position.
* It is then shifted visually.
* Other elements remain positioned relative to the element’s **original location**, not the shifted one.

---

## Syntax

```css id="a8f2k1"
.element {
  position: relative;
  top: value;
  right: value;
  bottom: value;
  left: value;
}
```

### Property Behavior

| Property | Effect                  |
| -------- | ----------------------- |
| `top`    | Moves element **down**  |
| `right`  | Moves element **left**  |
| `bottom` | Moves element **up**    |
| `left`   | Moves element **right** |

`value` can be:

* `px`
* `%`
* `em`
* `rem`
* or any valid CSS length unit

---

# 3.2 The `top` Property

The `top` property shifts the element **downward** from its normal position.

---

## Example: Using `top`

### CSS

```css id="b2n6u4"
.container {
  min-height: 200px;
}

.box {
  padding: 20px;
}

.static-box {
  background-color: lightgray;
}

.relative-top {
  position: relative;
  top: 20px;
  background-color: lightblue;
}
```

### HTML

```html id="k7m3p2"
<div class="container">
  <div class="box static-box">This is a standard block</div>
  <div class="box relative-top">This block will be shifted down by 20px.</div>
  <div class="box static-box">This is a standard block</div>
</div>
```

### Explanation

* The second box moves down by 20px.
* The third box remains positioned based on the second box’s **original position**, not its shifted one.

---

# 3.3 The `right` Property

The `right` property shifts the element **to the left** from its normal position.

---

## Example: Using `right`

### CSS

```css id="p9t4x1"
.container {
  min-height: 200px;
}

.box {
  padding: 20px;
}

.static-box {
  background-color: lightgray;
}

.relative-right {
  position: relative;
  right: 20px;
  background-color: lightgreen;
}
```

### HTML

```html id="z5w8l6"
<div class="container">
  <div class="box static-box">This is a standard block</div>
  <div class="box relative-right">This block will be shifted left by 20px.</div>
  <div class="box static-box">This is a standard block</div>
</div>
```

### Explanation

* The second box moves 20px to the left.
* It still occupies its original space in layout.

---

# 3.4 The `bottom` Property

The `bottom` property shifts the element **upward** from its normal position.

---

## Example: Using `bottom`

### CSS

```css id="v4k8r9"
.container {
  min-height: 200px;
}

.box {
  padding: 20px;
}

.static-box {
  background-color: lightgray;
}

.relative-bottom {
  position: relative;
  bottom: 20px;
  background-color: lightcoral;
}
```

### HTML

```html id="q3j7d1"
<div class="container">
  <div class="box static-box">This is a standard block</div>
  <div class="box relative-bottom">This block will be shifted up by 20px.</div>
  <div class="box static-box">This is a standard block</div>
</div>
```

### Explanation

* The second box moves up by 20px.
* Other elements behave as if it did not move.

---

# 3.5 The `left` Property

The `left` property shifts the element **to the right** from its original position.

---

## Example: Using `left`

### CSS

```css id="t6f1s8"
.container {
  min-height: 200px;
}

.box {
  padding: 20px;
}

.static-box {
  background-color: lightgray;
}

.relative-left {
  position: relative;
  left: 20px;
  background-color: lightgoldenrodyellow;
}
```

### HTML

```html id="m8c2b4"
<div class="container">
  <div class="box static-box">This is a standard block</div>
  <div class="box relative-left">This block will be shifted right by 20px.</div>
  <div class="box static-box">This is a standard block</div>
</div>
```

---

# 3.6 Interaction with Adjacent Elements

One of the most important characteristics of relative positioning:

> The element keeps its original space in the normal flow.

This means:

* Other elements do not shift to fill the gap.
* Layout remains stable.
* Overlapping effects are possible.

---

## Example

### CSS

```css id="c9d4h7"
.container {
  border: 2px solid #000;
  padding: 10px;
}

.box {
  position: relative;
  background-color: #e74c3c;
  color: white;
  padding: 20px;
  margin: 10px;
  width: 200px;
}

.box1 {
  top: 20px;
}

.box2 {
  left: 20px;
}
```

### HTML

```html id="n5g8y3"
<div class="container">
  <div class="box box1">Element 1 (shifted down)</div>
  <div class="box box2">Element 2 (shifted right)</div>
  <div class="box">Element 3 (normal position)</div>
</div>
```

---

### Code Explanation

* `.box1` moves down 20px.
* `.box2` moves right 20px.
* Both still reserve their original layout space.
* Element 3 is positioned according to their original positions.

---

# Exercise 1: Relative Positioning with `top` and `left`

## Task

Create a `<div>` element with the class `relative-box` that:

* Is shifted 30px down
* Is shifted 40px right
* Remains in normal document flow
* Does not affect placement of other elements
* Uses `position: relative`, `top`, and `left`

---

## Solution

### CSS

```css id="r2l9k6"
.relative-box {
  position: relative;
  top: 30px;
  left: 40px;
  background-color: lightblue;
  padding: 20px;
  width: 200px;
}
```

### HTML

```html id="u4w7p1"
<div>This is a normal element above</div>

<div class="relative-box">
  I am shifted 30px down and 40px right.
</div>

<div>This is a normal element below</div>
```

### Explanation

* The element moves visually.
* The elements above and below remain positioned based on its original location.
* Layout structure is preserved.

---

# Exercise 2: Using `left` and `bottom`

## Task

Create a `<div>` element with class `relative-left-bottom-box` that:

* Moves 50px up
* Moves 50px right
* Maintains its place in normal document flow
* Uses `left` and `bottom`

---

## Solution

### CSS

```css id="x7m3v2"
.relative-left-bottom-box {
  position: relative;
  bottom: 50px;
  left: 50px;
  background-color: lightcoral;
  padding: 20px;
  width: 200px;
}
```

### HTML

```html id="y8k4t9"
<div>This is a normal element above</div>

<div class="relative-left-bottom-box">
  I am shifted 50px up and 50px right.
</div>

<div>This is a normal element below</div>
```

### Explanation

* `bottom: 50px` moves the element up.
* `left: 50px` moves the element right.
* Other elements behave as if it never moved.

---

# Key Takeaways

* ✔ `position: relative` keeps element in normal flow
* ✔ The element’s original space is preserved
* ✔ `top` moves down
* ✔ `right` moves left
* ✔ `bottom` moves up
* ✔ `left` moves right
* ✔ Only the element itself shifts
* ✔ Useful for layout tweaks and positioning context

Relative positioning is one of the safest and most commonly used positioning techniques because it preserves layout while allowing visual adjustments.

---