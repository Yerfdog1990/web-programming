# 10. Advanced Techniques in CSS

Modern CSS allows developers to build **dynamic, scalable, and adaptive designs** using advanced techniques such as:

* CSS variables
* nested variables
* CSS functions like `calc()`, `min()`, `max()`, and `clamp()`
* dynamic theming
* JavaScript interaction with CSS variables
* complex gradients

These techniques make CSS more **powerful, flexible, and maintainable** for large applications.

---

# 10.1 Nested Variables and Functions

Nested variables allow CSS variables to **depend on other variables**. Combined with functions like `calc()`, they can dynamically calculate values such as font sizes, padding, margins, and layouts.

---

## 1. Nested Variables and Functions

This technique allows **dynamic scaling of element sizes**.

### CSS

```css
:root {
  --base-size: 16px;
  --scale-factor: 1.5;
  --scaled-size: calc(var(--base-size) * var(--scale-factor));
}

.container {
  font-size: var(--scaled-size);
  padding: calc(var(--scaled-size) / 2);
  margin: calc(var(--scaled-size) / 4);
}
```

### Explanation

Variables defined in `:root`:

```
--base-size = 16px
--scale-factor = 1.5
```

Calculated variable:

```
--scaled-size = base-size × scale-factor
```

Which becomes:

```
16px × 1.5 = 24px
```

Result:

* font-size → `24px`
* padding → `12px`
* margin → `6px`

### Advantages

* centralized design control
* scalable UI components
* easier maintenance

---

## 2. Theming with Dynamic Hue Changes

CSS variables combined with **JavaScript** allow dynamic color changes.

In this example, clicking a button **changes the hue value**, which updates the background color.

---

### CSS

```css
:root {
  --base-hue: 200;
  --saturation: 70%;
  --lightness: 50%;
  --primary-color: hsl(var(--base-hue), var(--saturation), var(--lightness));
}

body {
  background-color: var(--primary-color);
  transition: background-color 0.3s;
}
```

---

### HTML

```html
<button id="change-color">Change Color</button>
```

---

### JavaScript

```javascript
document.getElementById('change-color').addEventListener('click', () => {

  const root = document.documentElement;

  const newHue = Math.floor(Math.random() * 360);

  root.style.setProperty('--base-hue', newHue);

});
```

---

### How it Works

1. CSS variable `--base-hue` controls the color.
2. JavaScript generates a **random hue value (0–359)**.
3. The variable is updated using:

```
root.style.setProperty('--base-hue', newHue);
```

4. The background color updates automatically.

---

# 10.2 Complex Gradients

Gradients can be enhanced using **CSS variables and multiple color stops**.

---

## 3. Complex Multilevel Gradients

This example creates a gradient with **multiple color layers**.

### CSS

```css
:root {
  --color-stop1: hsla(200, 100%, 50%, 0.8);
  --color-stop2: hsla(340, 100%, 50%, 0.8);
  --color-stop3: hsla(120, 100%, 50%, 0.8);
  --color-stop4: hsla(60, 100%, 50%, 0.8);
}

.complex-gradient {
  background: linear-gradient(
    45deg,
    var(--color-stop1) 25%,
    var(--color-stop2) 25%,
    var(--color-stop2) 50%,
    var(--color-stop3) 50%,
    var(--color-stop3) 75%,
    var(--color-stop4) 75%
  );
}
```

### Result

This produces a **striped gradient effect** using variable color stops.

---

## 4. Creating Dynamic Adaptive Components

CSS variables combined with **media queries** allow components to adapt to screen sizes.

---

### HTML

```html
<div class="dynamic-component">Dynamic Component</div>
```

---

### CSS

```css
:root {
  --base-padding: 20px;
  --scale-factor: 1.5;
  --dynamic-padding: calc(var(--base-padding) * var(--scale-factor));
}

@media (max-width: 600px) {
  :root {
    --scale-factor: 1;
  }
}

.dynamic-component {
  padding: var(--dynamic-padding);
  background-color: hsl(calc(100 + var(--scale-factor) * 50), 100%, 50%);
}
```

### Behavior

Desktop:

```
scale-factor = 1.5
padding = 30px
```

Mobile:

```
scale-factor = 1
padding = 20px
```

This creates **responsive adaptive components**.

---

## 5. Generating Gradients Using JavaScript and CSS Variables

Gradients can be dynamically generated using JavaScript.

---

### CSS

```css
:root {
  --color1: hsl(200, 100%, 50%);
  --color2: hsl(340, 100%, 50%);
  --angle: 45deg;
}

.dynamic-gradient {
  background: linear-gradient(var(--angle), var(--color1), var(--color2));
}
```

---

### HTML

```html
<button id="generate-gradient">Generate Gradient</button>
<div class="dynamic-gradient">Content</div>
```

---

### JavaScript

```javascript
document.getElementById('generate-gradient').addEventListener('click', () => {

  const root = document.documentElement;

  const newColor1 = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
  const newColor2 = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;

  const newAngle = `${Math.floor(Math.random() * 360)}deg`;

  root.style.setProperty('--color1', newColor1);
  root.style.setProperty('--color2', newColor2);
  root.style.setProperty('--angle', newAngle);

});
```

---

### Result

Each button click creates a **new random gradient**.

---

# 10.3 Using CSS Variables for Dynamic Themes

CSS variables make it easy to implement **dynamic theme systems**.

---

## Example 1: Dynamic Theme Switching

A theme system switches between **light and dark themes**.

---

### CSS

```css
:root {
  --background-color: #ffffff;
  --text-color: #000000;
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}

.container {
  padding: 20px;
}

button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--secondary-color);
}

.content {
  margin-top: 20px;
}
```

---

### HTML

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Dynamic Theme Switching</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<div class="container">

<button onclick="switchTheme()">Switch Theme</button>

<div class="content">
<h1>Title</h1>
<p>Example text for dynamic theme switching.</p>
</div>

</div>

<script src="script.js"></script>

</body>
</html>
```

---

### JavaScript

```javascript
const themes = {

  light: {
    '--background-color': '#ffffff',
    '--text-color': '#000000',
    '--primary-color': '#3498db',
    '--secondary-color': '#2ecc71'
  },

  dark: {
    '--background-color': '#2c3e50',
    '--text-color': '#ecf0f1',
    '--primary-color': '#e74c3c',
    '--secondary-color': '#8e44ad'
  }

};

let currentTheme = 'light';

function switchTheme() {

  currentTheme = currentTheme === 'light' ? 'dark' : 'light';

  const theme = themes[currentTheme];

  for (let [variable, value] of Object.entries(theme)) {

    document.documentElement.style.setProperty(variable, value);

  }

}
```

---

# Example 2: Responsive Design with `calc()`, `min()`, `max()`, and `clamp()`

These CSS functions help create **responsive layouts without many media queries**.

---

### CSS

```css
:root {
  --base-font-size: 16px;
  --base-padding: 10px;

  --min-font-size: 14px;
  --max-font-size: 24px;
  --preferred-font-size: 2vw;

  --min-padding: 8px;
  --max-padding: 20px;
  --preferred-padding: 1.5vw;
}

body {
  font-size: clamp(var(--min-font-size), var(--preferred-font-size), var(--max-font-size));
  padding: clamp(var(--min-padding), var(--preferred-padding), var(--max-padding));
  transition: font-size 0.3s, padding 0.3s;
}

.responsive-container {
  margin: 0 auto;
  max-width: 800px;
  padding: calc(var(--base-padding) * 2);
  text-align: center;
}

h1 {
  font-size: clamp(calc(var(--base-font-size) * 1.5), 3vw, 36px);
}

p {
  font-size: clamp(var(--base-font-size), 2vw, 24px);
}
```

---

### HTML

```html
<div class="responsive-container">
  <h1>Responsive Title</h1>
  <p>This text adapts to the viewport size.</p>
</div>
```

---

# Exercise 1 — Dynamic Styles with `calc()`

### Task

Create dynamic styles using CSS variables.

### Requirements

* Class: `dynamic-styles`
* Define:

    * base font size
    * scale factor
* Use `calc()` to compute:

    * font size
    * padding
    * margin

---

### Solution

### CSS

```css
:root {
  --base-font-size: 16px;
  --scale-factor: 1.5;
}

.dynamic-styles {
  font-size: calc(var(--base-font-size) * var(--scale-factor));
  padding: calc(var(--base-font-size) * 1);
  margin: calc(var(--base-font-size) / 2);
}
```

---

# Exercise 2 — HSL Theme Toggle with JavaScript

### Requirements

* Class: `theme-toggle`
* Use CSS variable `--base-hue`
* Change hue using JavaScript
* Update background color dynamically

---

### HTML

```html
<button id="toggle">Change Theme</button>
<div class="theme-toggle">Theme Example</div>
```

---

### CSS

```css
:root {
  --base-hue: 200;
}

.theme-toggle {
  padding: 20px;
  background-color: hsl(var(--base-hue), 70%, 50%);
  color: white;
}
```

---

### JavaScript

```javascript
document.getElementById("toggle").addEventListener("click", () => {

  const root = document.documentElement;

  const newHue = Math.floor(Math.random() * 360);

  root.style.setProperty("--base-hue", newHue);

});
```

---

# Key Benefits of Advanced CSS Techniques

### 1. Dynamic Styling

CSS variables allow styles to **change dynamically**.

### 2. Better Maintainability

Centralized variables make styles easier to update.

### 3. Responsive Design

Functions like `clamp()` and `calc()` improve responsiveness.

### 4. JavaScript Integration

JavaScript can modify CSS variables in real time.

### 5. Modern UI Effects

Complex gradients and animations enhance visual appeal.

---

