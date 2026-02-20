# Gradients in CSS

Gradients are a powerful feature in CSS that allow you to create **smooth transitions between colors** without using image files. They are commonly used for:

* Backgrounds
* Buttons
* Hero sections
* Cards
* Decorative overlays
* Visual effects

CSS provides two main types of gradients:

1. **Linear gradients** → `linear-gradient()`
2. **Radial gradients** → `radial-gradient()`

Additionally, there are repeating versions and advanced configuration options.

---

# 5.1 Linear Gradients

A **linear gradient** creates a smooth color transition along a straight line (axis).
The direction can be horizontal, vertical, diagonal, or any custom angle.

---

## 🔹 Syntax

```css
background: linear-gradient(direction, color-stop1, color-stop2, ...);
```

---

## 🔹 Values

### 1️⃣ Direction

Defines the direction of the gradient.

You can use:

* Keywords:

    * `to right`
    * `to left`
    * `to bottom`
    * `to top`
    * `to bottom right`
* Degrees:

    * `45deg`
    * `90deg`
    * `180deg`

### 2️⃣ Color Stops

A **color stop** defines:

* The color
* Optionally, its position

Example:

```css
linear-gradient(to right, red 20%, blue 80%);
```

---

## 🔹 Usage Examples

---

### 1️⃣ Horizontal Gradient

```css
.linear-gradient-horizontal {
  width: 200px;
  height: 200px;
  background: linear-gradient(to right, red, yellow);
}
```

```html
<div class="linear-gradient-horizontal">
  Horizontal Gradient
</div>
```

### Explanation

* `to right` → gradient flows from left → right
* red transitions smoothly into yellow

---

### 2️⃣ Vertical Gradient

```css
.linear-gradient-vertical {
  width: 200px;
  height: 200px;
  background: linear-gradient(to bottom, blue, green);
}
```

```html
<div class="linear-gradient-vertical">
  Vertical Gradient
</div>
```

### Explanation

* `to bottom` → gradient flows from top → bottom
* blue transitions into green

---

### 3️⃣ Diagonal Gradient

```css
.linear-gradient-diagonal {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, purple, pink);
}
```

```html
<div class="linear-gradient-diagonal">
  Diagonal Gradient
</div>
```

### Explanation

* `45deg` → gradient flows diagonally
* purple transitions into pink

---

### 4️⃣ Multicolor Gradient

```css
.linear-gradient-multi {
  width: 200px;
  height: 200px;
  background: linear-gradient(to right, red, yellow, green, blue);
}
```

```html
<div class="linear-gradient-multi">
  Multicolor Gradient
</div>
```

### Explanation

* Multiple color stops create rainbow-like transitions
* red → yellow → green → blue

---

# 5.2 Radial Gradients

A **radial gradient** starts from a central point and expands outward in a circular or elliptical shape.

It creates a smooth transition from the center toward the edges.

---

## 🔹 Syntax

```css
background: radial-gradient(shape size at position, color-stop1, color-stop2, ...);
```

---

## 🔹 Values

### 1️⃣ Shape

* `circle`
* `ellipse` (default)

### 2️⃣ Size

* `closest-side`
* `closest-corner`
* `farthest-side`
* `farthest-corner`

### 3️⃣ Position

Where the gradient starts:

* `center`
* `top left`
* `bottom right`
* Custom values (e.g., `50% 50%`)

---

## 🔹 Usage Examples

---

### 1️⃣ Circular Gradient

```css
.radial-gradient-circle {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, red, yellow);
}
```

```html
<div class="radial-gradient-circle">
  Circular Gradient
</div>
```

### Explanation

* Creates a circular color spread
* red at center → yellow at edges

---

### 2️⃣ Elliptical Gradient

```css
.radial-gradient-ellipse {
  width: 200px;
  height: 200px;
  background: radial-gradient(ellipse, blue, green);
}
```

---

### 3️⃣ Centered Gradient

```css
.radial-gradient-at-center {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle at center, purple, pink);
}
```

* Starts from the center
* Expands outward

---

### 4️⃣ Corner Gradient

```css
.radial-gradient-at-corner {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle at top left, red, blue, green);
}
```

* Gradient begins at the top-left corner
* red → blue → green outward

---

# 5.3 Additional Gradient Settings

---

## 1️⃣ Repeating Linear Gradient

Creates repeating patterns.

```css
background: repeating-linear-gradient(
  45deg,
  red,
  yellow 10%,
  green 20%
);
```

Useful for:

* Stripes
* Patterns
* Textures

---

## 2️⃣ Repeating Radial Gradient

```css
background: repeating-radial-gradient(
  circle,
  red,
  yellow 10%,
  green 20%
);
```

Creates circular repeating patterns.

---

## 3️⃣ Transparent Color Stops

Use `rgba()` to add transparency:

```css
background: linear-gradient(
  to right,
  rgba(255, 0, 0, 0.5),
  rgba(0, 0, 255, 0.5)
);
```

This creates a semi-transparent overlay effect.

---

## 4️⃣ Multiple Gradients

You can combine gradients:

```css
background:
  linear-gradient(to right, red, yellow),
  radial-gradient(circle, blue, green);
```

The first gradient is layered on top.

---

# 🧪 Exercises

---

# Exercise 1: Linear Gradient

### Task

Create a 200x200 block:

* Linear gradient
* 45-degree angle
* Purple → Pink
* Block must be focal point

---

## ✅ Solution

### HTML

```html
<div class="exercise-linear"></div>
```

### CSS

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f4f4;
}

.exercise-linear {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, purple, pink);
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  border-radius: 10px;
}
```

---

### ✔ Requirement Check

* 200x200 size ✅
* 45-degree gradient ✅
* Purple → Pink smooth transition ✅
* Centered and highlighted with shadow ✅

---

# Exercise 2: Radial Gradient

### Task

Create a 200x200 block:

* Radial gradient
* Starts from top-left
* Red → Blue → Green
* Eye-catching design

---

## ✅ Solution

### HTML

```html
<div class="exercise-radial"></div>
```

### CSS

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #111;
}

.exercise-radial {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle at top left, red, blue, green);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255,255,255,0.3);
}
```

---

### ✔ Requirement Check

* 200x200 size ✅
* Radial gradient ✅
* Starts at top-left ✅
* Smooth red → blue → green transition ✅
* Contrasting dark background enhances visibility ✅

---

# 🔥 Key Takeaways

1. Gradients replace image backgrounds.
2. `linear-gradient()` works along a straight axis.
3. `radial-gradient()` expands from a center point.
4. Direction can be keywords or degrees.
5. Color stops control transitions.
6. Repeating gradients create patterns.
7. Multiple gradients can be layered.
8. Transparency allows overlay effects.

---

