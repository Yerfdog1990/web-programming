# Variables in Media Queries

CSS Variables (Custom Properties) and Media Queries are powerful tools used together to create **responsive and maintainable web designs**. CSS variables allow developers to store reusable values, while media queries allow styles to **adapt based on screen size, device characteristics, or user preferences**.

Combining these two techniques makes it easier to manage responsive styles because you can **change variable values instead of rewriting multiple CSS rules**.

---

# 4.1 Basic Concepts

## CSS Variables

CSS variables (custom properties) are reusable values defined in CSS using a double dash (`--`). They are accessed using the `var()` function.

### Syntax

```css
selector {
  --variable-name: value;
}
```

### Example

```css
:root {
  --main-bg-color: #f0f0f0;
  --main-text-color: #333;
  --primary-color: #3498db;
  --font-size: 16px;
}
```

Variables defined in `:root` are **global variables**, meaning they can be used throughout the entire stylesheet.

---

## Using Variables

To use a variable, the `var()` function is used.

### Syntax

```css
selector {
  property: var(--variable-name);
}
```

### Example

```css
body {
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
  font-size: var(--font-size);
}

a {
  color: var(--primary-color);
}
```

---

## Media Queries

Media queries allow CSS to apply styles depending on **device characteristics**, such as:

* Screen width
* Screen height
* Device orientation
* User color scheme preferences

### Syntax

```css
@media (condition) {
   CSS rules
}
```

---

## Using CSS Variables in Media Queries

Variables can be **redefined inside media queries**, allowing styles to automatically update across the page.

### Example

```css
:root {
  --main-bg-color: #f0f0f0;
  --main-text-color: #333;
  --primary-color: #3498db;
  --font-size: 16px;
}

body {
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
  font-size: var(--font-size);
}

a {
  color: var(--primary-color);
}

@media (max-width: 600px) {
  :root {
    --main-bg-color: #e0e0e0;
    --font-size: 14px;
  }
}

@media (min-width: 601px) and (max-width: 1200px) {
  :root {
    --main-bg-color: #d0d0d0;
    --font-size: 15px;
  }
}

@media (min-width: 1201px) {
  :root {
    --main-bg-color: #f0f0f0;
    --font-size: 16px;
  }
}
```

### HTML

```html
<body>
  <p>This is a paragraph with a link to <a href="#">Example.com</a>.</p>
</body>
```

### Explanation

Variable values change depending on screen width:

| Screen Width | Background  | Font Size |
| ------------ | ----------- | --------- |
| ≤ 600px      | darker gray | 14px      |
| 601px–1200px | medium gray | 15px      |
| ≥ 1201px     | light gray  | 16px      |

This approach avoids repeating the same styles for multiple elements.

---

# 4.2 Examples of Variables in Media Queries

## Example 1: Responsive Padding and Font Sizes

Variables can control layout spacing and typography for different screen sizes.

### CSS

```css
:root {
  --padding: 20px;
  --font-size: 16px;
}

.container {
  padding: var(--padding);
  font-size: var(--font-size);
}

@media (max-width: 600px) {
  :root {
    --padding: 10px;
    --font-size: 14px;
  }
}

@media (min-width: 601px) and (max-width: 1200px) {
  :root {
    --padding: 15px;
    --font-size: 15px;
  }
}

@media (min-width: 1201px) {
  :root {
    --padding: 20px;
    --font-size: 16px;
  }
}
```

### HTML

```html
<div class="container">
  <p>This is a responsive container with adaptive padding and font size.</p>
</div>
```

### Explanation

The `.container` element adjusts automatically:

| Screen Width | Padding | Font Size |
| ------------ | ------- | --------- |
| Small        | 10px    | 14px      |
| Medium       | 15px    | 15px      |
| Large        | 20px    | 16px      |

---

## Example 2: Theming a Site with Variables and Media Queries

CSS variables can also adapt to **user preferences**, such as dark mode.

### CSS

```css
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
  --link-color: #3498db;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

a {
  color: var(--link-color);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #000000;
    --text-color: #ffffff;
    --link-color: #9b59b6;
  }
}
```

### HTML

```html
<body>
  <p>This text and link will adapt to the user's preferred color scheme. 
  Visit <a href="#">Example.com</a>.</p>
</body>
```

### Explanation

If the user’s device prefers **dark mode**:

| Element    | Light Theme | Dark Theme |
| ---------- | ----------- | ---------- |
| Background | white       | black      |
| Text       | black       | white      |
| Link       | blue        | purple     |

The browser automatically switches styles.

---

# 4.3 Responsive Grid

CSS variables can control **grid layouts** across different screen sizes.

### CSS

```css
:root {
  --columns: 1fr;
  --gap: 10px;
}

.grid-container {
  display: grid;
  grid-template-columns: var(--columns);
  gap: var(--gap);
}

@media (min-width: 600px) {
  :root {
    --columns: 1fr 1fr;
  }
}

@media (min-width: 900px) {
  :root {
    --columns: 1fr 1fr 1fr;
  }
}
```

### HTML

```html
<div class="grid-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

### Explanation

The number of columns changes based on screen width:

| Screen Width  | Columns   |
| ------------- | --------- |
| < 600px       | 1 column  |
| 600px – 899px | 2 columns |
| ≥ 900px       | 3 columns |

This technique makes responsive layouts easier to maintain.

---

# Exercise 1: Paddings and Fonts by Screen

## Task

Define CSS variables for padding (`--padding`) and font size (`--font-size`).
Use media queries to adjust their values for different screen sizes.

---

## Solution

### CSS

```css
:root {
  --padding: 20px;
  --font-size: 16px;
}

div {
  padding: var(--padding);
}

p {
  font-size: var(--font-size);
}

@media (max-width: 600px) {
  :root {
    --padding: 10px;
    --font-size: 14px;
  }
}

@media (min-width: 601px) and (max-width: 1200px) {
  :root {
    --padding: 15px;
    --font-size: 15px;
  }
}

@media (min-width: 1201px) {
  :root {
    --padding: 20px;
    --font-size: 16px;
  }
}
```

### HTML

```html
<div>
  <p>This paragraph adjusts padding and font size based on screen width.</p>
</div>
```

### Behavior

| Screen Width | Padding | Font Size |
| ------------ | ------- | --------- |
| ≤ 600px      | 10px    | 14px      |
| 601–1200px   | 15px    | 15px      |
| ≥ 1201px     | 20px    | 16px      |

---

# Exercise 2: Color Scheme and Preferences

## Task

Define CSS variables for background color, text color, and link color, then change them for dark mode.

---

## Solution

### CSS

```css
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
  --link-color: #3498db;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

a {
  color: var(--link-color);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #000000;
    --text-color: #ffffff;
    --link-color: #9b59b6;
  }
}
```

### HTML

```html
<body>
  <p>
    This website changes theme automatically.
    Visit <a href="#">Example.com</a>.
  </p>
</body>
```

### Result

When a device is set to **dark mode**:

* Background becomes dark
* Text becomes light
* Links change color

---

# Key Takeaways

1. **CSS variables centralize style values** making CSS easier to maintain.
2. **Media queries allow responsive design** for different screen sizes.
3. Variables can be **redefined inside media queries**, updating styles everywhere they are used.
4. This approach **reduces code repetition** and simplifies responsive layouts.
5. Variables also support **user preference features like dark mode**.

---

