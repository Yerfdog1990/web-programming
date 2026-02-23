# 9. Decorative Pseudo-elements

## 9.1 Pseudo-elements `::before` and `::after`

Pseudo-elements `::before` and `::after` are powerful tools in CSS that allow you to add **decorative elements** before or after the content of an element **without modifying the HTML structure**.

They are widely used for:

* Creating visual effects
* Enhancing the user interface
* Adding icons or symbols
* Framing content with decorative elements
* Adding animated effects

---

## Description

* `::before` → Adds a pseudo-element **before** the content of an element
* `::after` → Adds a pseudo-element **after** the content of an element

These pseudo-elements do not exist in the HTML file. They are generated purely with CSS.

---

## Syntax

```css
element::before {
  /* styles for before pseudo-element */
}

element::after {
  /* styles for after pseudo-element */
}
```

---

## Main Properties

Pseudo-elements `::before` and `::after` can use almost any CSS properties, including:

* `color`
* `background`
* `width`
* `height`
* `position`
* `margin`
* `padding`
* `box-shadow`
* `animation`
* `transform`

However, to make a pseudo-element **visible**, you must define:

### 1️⃣ `content`

Specifies what appears inside the pseudo-element.

It can be:

* Text → `"Hello"`
* An image → `url('image.png')`
* An empty string → `""` (used for decorative shapes)

### 2️⃣ `display`

Defines how the pseudo-element behaves:

* `block`
* `inline`
* `inline-block`

### 3️⃣ `position`

Used for advanced placement:

* `relative`
* `absolute`

### 4️⃣ `width` and `height`

Required when creating decorative blocks or shapes.

---

# 9.2 Adding Text

Using the `content` property, you can add text before or after any element.

### CSS

```css
.example::before {
  content: "Start: ";
  color: blue;
}

.example::after {
  content: " :End";
  color: red;
}
```

### HTML

```html
<body>
  <p class="example">This is an example text</p>
</body>
```

---

### Code Explanation

* `.example::before`
  Adds `"Start: "` before the paragraph text and colors it **blue**.

* `.example::after`
  Adds `" :End"` after the paragraph text and colors it **red**.

---

# 9.3 Decorative Lines

You can use pseudo-elements to frame content with decorative lines.

### CSS

```css
.decorative-line::before,
.decorative-line::after {
  content: "";
  display: block;
  height: 2px;
  background: black;
  margin: 10px 0;
}
```

### HTML

```html
<body>
  <div class="decorative-line">
    Text with decorative lines
  </div>
</body>
```

---

### Code Explanation

* `content: ""`
  Creates an empty pseudo-element.

* `display: block`
  Makes it behave like a block element.

* `height: 2px`
  Sets the thickness of the decorative line.

* `background: black`
  Colors the line black.

* `margin: 10px 0`
  Adds space above and below the line.

The result:
A black 2px line appears **before and after** the text.

---

# 9.4 Inserting Icons

Pseudo-elements can insert icons using images.

### CSS

```css
.icon::before {
  content: url('https://via.placeholder.com/20');
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
```

### HTML

```html
<body>
  <p class="icon">Text with icon</p>
</body>
```

---

### Code Explanation

* `content: url(...)`
  Inserts an image before the text.

* `display: inline-block`
  Allows sizing and alignment control.

* `vertical-align: middle`
  Aligns the icon with the text.

* `margin-right: 5px`
  Adds space between the icon and text.

---

# 9.5 Complex Decorative Elements

You can create advanced decorative shapes using gradients and positioning.

### CSS

```css
.complex-decor::before {
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #f06, transparent);
  position: absolute;
  top: -10px;
  left: -10px;
}

.complex-decor {
  position: relative;
  padding: 20px;
  background: #eee;
  margin: 20px;
}
```

### HTML

```html
<body>
  <div class="complex-decor">
    Element with a decorative corner
  </div>
</body>
```

---

### Code Explanation

* `.complex-decor`
  Uses `position: relative` so the pseudo-element can be positioned relative to it.

* `.complex-decor::before`

    * Creates a 50×50px decorative element
    * Uses a `linear-gradient` background
    * Positions it at the top-left corner
    * Overlaps slightly using negative values

This creates a decorative corner effect.

---

# 9.6 Using Animations

Pseudo-elements can also be animated.

### CSS

```css
.animated::before {
  content: "";
  display: block;
  width: 100px;
  height: 100px;
  background: red;
  animation: rotate 5s infinite;
  margin: 20px auto;
}

@keyframes rotate {
  0%   { transform: rotate(0deg); }
  50%  { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
}
```

### HTML

```html
<body>
  <div class="animated"></div>
</body>
```

---

### Code Explanation

* `.animated::before`
  Creates a red square.

* `animation: rotate 5s infinite`
  Applies a 5-second infinite rotation.

* `@keyframes rotate`
  Defines the rotation animation from 0° to 360°.

---

# Practical Exercises

---

## Exercise 1: Text with Pseudo-elements

### Requirements

* Create a `<p>` element with class `"example"`.
* Use `::before` to add `"Start: "` (blue).
* Use `::after` to add `" :End"` (red).

---

### ✅ Solution

#### HTML

```html
<p class="example">This is an example text</p>
```

#### CSS

```css
.example::before {
  content: "Start: ";
  color: blue;
}

.example::after {
  content: " :End";
  color: red;
}
```

---

## Exercise 2: Decorative Lines

### Requirements

* Create a `<div>` with class `"decorative-line"`.
* Add black decorative lines.
* Lines must be 2px thick.
* Lines must have 10px margin from content (top and bottom).

---

### ✅ Solution

#### HTML

```html
<div class="decorative-line">
  Text with decorative lines
</div>
```

#### CSS

```css
.decorative-line::before,
.decorative-line::after {
  content: "";
  display: block;
  height: 2px;
  background: black;
  margin-top: 10px;
  margin-bottom: 10px;
}
```

---

# Summary

Pseudo-elements `::before` and `::after` allow you to:

* ✔ Add decorative text
* ✔ Insert icons
* ✔ Create shapes
* ✔ Add decorative lines
* ✔ Build complex design elements
* ✔ Apply animations
* ✔ Enhance UI without changing HTML

They are essential tools for modern CSS design and help keep HTML clean while adding powerful visual effects.

---