# CSS Gradients (Linear and Radial)

Gradients in CSS allow developers to create **smooth transitions between two or more colors**. Instead of using a single background color or an image, gradients generate color transitions dynamically using CSS.

Gradients are commonly used for:

* Backgrounds
* Buttons
* Cards
* Headers
* UI elements

They add **visual depth, smooth color transitions, and modern design effects**.

There are two main types of gradients in CSS:

1. **Linear Gradients (`linear-gradient`)**
2. **Radial Gradients (`radial-gradient`)**

---

# 8.1 Linear Gradients (`linear-gradient`)

A **linear gradient** creates a smooth color transition **along a straight line**.

The gradient can move:

* Left → Right
* Top → Bottom
* Diagonally
* At any angle

---

## Syntax

```css
background: linear-gradient(direction, color-stop1, color-stop2, ...);
```

### Parameters

| Parameter  | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| direction  | Direction of gradient (e.g., `to right`, `to bottom`, `45deg`) |
| color-stop | Defines colors and their positions in the gradient             |

---

# Example 1: Simple Linear Gradient

This example creates a gradient from **red to blue from left to right**.

### HTML

```html
<div class="background"></div>
```

### CSS

```css
.background {
  min-height: 200px;
  background: linear-gradient(to right, red, blue);
}
```

### Explanation

* Gradient direction: **left → right**
* Color transition: **red → blue**

---

# Example 2: Linear Gradient with an Angle

Gradients can also be defined using **angles**.

### HTML

```html
<div class="background"></div>
```

### CSS

```css
.background {
  min-height: 200px;
  background: linear-gradient(45deg, yellow, green);
}
```

### Explanation

* The gradient moves diagonally at **45 degrees**
* Color transition: **yellow → green**

---

# Example 3: Linear Gradient with Multiple Colors

Gradients can include **multiple colors**.

### HTML

```html
<div class="background"></div>
```

### CSS

```css
.background {
  min-height: 200px;
  background: linear-gradient(to bottom, red, yellow, green, blue);
}
```

### Explanation

The gradient flows from **top to bottom** through four colors:

* red
* yellow
* green
* blue

---

# Example 4: Linear Gradient with Control Points

Control points allow developers to **define exactly where each color appears**.

### HTML

```html
<div class="background"></div>
```

### CSS

```css
.background {
  min-height: 200px;
  background: linear-gradient(to right, red 0%, yellow 50%, green 100%);
}
```

### Explanation

Color positions:

| Color  | Position |
| ------ | -------- |
| Red    | 0%       |
| Yellow | 50%      |
| Green  | 100%     |

This gives precise control over the gradient.

---

# 8.2 Radial Gradients (`radial-gradient`)

A **radial gradient** creates a color transition **radiating outward from a central point**.

The gradient expands in a **circular or elliptical shape**.

---

## Syntax

```css
background: radial-gradient(shape size at position, color-stop1, color-stop2, ...);
```

### Parameters

| Parameter  | Description                          |
| ---------- | ------------------------------------ |
| shape      | `circle` or `ellipse`                |
| size       | Defines how far the gradient spreads |
| position   | Center point of the gradient         |
| color-stop | Colors used in the gradient          |

---

# Example 1: Simple Radial Gradient

### HTML

```html
<div class="background"></div>
```

### CSS

```css
.background {
  min-height: 200px;
  background: radial-gradient(circle, red, blue);
}
```

### Explanation

* Gradient shape: **circle**
* Center: **middle**
* Colors: **red → blue**

---

# Example 2: Radial Gradient with Position

The center of the gradient can be moved.

### HTML

```html
<div class="background"></div>
```

### CSS

```css
.background {
  min-height: 200px;
  background: radial-gradient(circle at top left, yellow, green);
}
```

### Explanation

The gradient starts from the **top-left corner**.

---

# Example 3: Radial Gradient with Multiple Colors

### HTML

```html
<div class="background"></div>
```

### CSS

```css
.background {
  min-height: 200px;
  background: radial-gradient(circle, red, yellow, green, blue);
}
```

### Explanation

The gradient spreads from the center through:

* red
* yellow
* green
* blue

---

# Example 4: Radial Gradient with Control Points

Control points allow precise color placement.

### HTML

```html
<div class="background"></div>
```

### CSS

```css
.background {
  min-height: 200px;
  background: radial-gradient(circle at center, red 0%, yellow 25%, green 50%, blue 100%);
}
```

### Explanation

Color positions:

| Color  | Position |
| ------ | -------- |
| Red    | 0%       |
| Yellow | 25%      |
| Green  | 50%      |
| Blue   | 100%     |

---

# 8.3 Complex Gradient Examples

Gradients can also include **transparency, shapes, and UI styling**.

---

# Example 1: Linear Gradient with Transparency

This example uses **RGBA colors with transparency**.

### HTML

```html
<div class="background"></div>
```

### CSS

```css
.background {
  min-height: 200px;
  background: linear-gradient(
    to right,
    rgba(255, 0, 0, 0.5),
    rgba(0, 0, 255, 0.5)
  );
}
```

### Explanation

* Red with **50% transparency**
* Blue with **50% transparency**

---

# Example 2: Radial Gradient with Size

### HTML

```html
<div class="background"></div>
```

### CSS

```css
.background {
  min-height: 200px;
  background: radial-gradient(ellipse closest-side, red, blue);
}
```

### Explanation

* Shape: **ellipse**
* Size: **closest side**

---

# Example 3: Gradient Buttons

Gradients are commonly used in **buttons to create depth and visual appeal**.

### HTML

```html
<button type="button" class="button">Button</button>
```

### CSS

```css
.button {
  background: linear-gradient(to bottom, #4caf50, #2e7d32);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
}
```

### Explanation

* Gradient flows **top → bottom**
* Creates a **3D button appearance**

---

# Benefits of Using Gradients

### 1. Visual Appeal

Gradients create **smooth color transitions**, making interfaces more visually attractive.

---

### 2. Flexibility

Gradients can be customized to create:

* simple backgrounds
* complex color blends
* UI effects

---

### 3. Responsive Design Support

Gradients scale automatically with screen size, making them ideal for **responsive web design**.

---

# Exercises

# Exercise 1: Linear Gradient 45°

### Task

Create an element with class **`linear-gradient-45`**.

Requirements:

* Gradient angle: **45°**
* Colors: **yellow → green**
* Must display **diagonally**

---

## Solution

### CSS

```css
.linear-gradient-45 {
  min-height: 200px;
  background: linear-gradient(45deg, yellow, green);
}
```

### HTML

```html
<div class="linear-gradient-45"></div>
```

---

# Exercise 2: Complex Radial Gradient

### Task

Create an element with class **`complex-radial-gradient`**.

Requirements:

* Gradient starts at **center**
* Colors and positions:

| Color  | Position |
| ------ | -------- |
| Red    | 0%       |
| Yellow | 25%      |
| Green  | 50%      |
| Blue   | 100%     |

---

## Solution

### CSS

```css
.complex-radial-gradient {
  min-height: 200px;
  background: radial-gradient(
    circle at center,
    red 0%,
    yellow 25%,
    green 50%,
    blue 100%
  );
}
```

### HTML

```html
<div class="complex-radial-gradient"></div>
```

---

# Summary

| Gradient Type       | Description                            |
| ------------------- | -------------------------------------- |
| `linear-gradient()` | Color transition along a straight line |
| `radial-gradient()` | Color transition from a central point  |

### Key Features

* Smooth color transitions
* Custom directions and angles
* Multiple color stops
* Transparency support
* Responsive design compatibility

Gradients are widely used in modern web design to create **beautiful backgrounds, interactive buttons, and dynamic UI components**.

---