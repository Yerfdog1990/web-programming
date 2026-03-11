# State Pseudo-classes

State pseudo-classes allow you to **style elements based on their interaction with users or their current state**. These pseudo-classes are commonly used to provide **visual feedback**, making interfaces more interactive and user-friendly.

For example, when a user **hovers over a button**, **clicks a link**, or **focuses on an input field**, the appearance of the element can change to indicate its current state.

State pseudo-classes are widely used in:

* Navigation menus
* Buttons
* Forms
* Interactive UI elements

---

# 2.1 Pseudo-class `:hover`

The `:hover` pseudo-class is applied when the **user moves the mouse cursor over an element**.

It is often used to create **interactive effects** such as:

* Changing colors
* Adding borders
* Displaying underlines
* Animating buttons

---

## Syntax

```css
selector:hover {
  property: value;
}
```

---

## Example

In this example:

* A link changes color and becomes underlined when hovered.
* A button changes its background and text color.

```css
/* Styling link on hover */

a:hover {
  color: red;
  text-decoration: underline;
}

/* Styling button on hover */

button:hover {
  background-color: #3498db;
  color: white;
}
```

### Explanation

* `a:hover` activates when the cursor is placed over a link.
* `button:hover` activates when the cursor moves over a button.

This provides **visual feedback** to users, indicating that the element is interactive.

---

# 2.2 Pseudo-class `:focus`

The `:focus` pseudo-class is applied when an element **receives focus**.

Focus occurs when:

* A user **clicks on an input field**
* A user navigates using the **Tab key**
* A form element becomes **active for typing**

This pseudo-class is very important for **form usability and accessibility**.

---

## Syntax

```css
selector:focus {
  property: value;
}
```

---

## Example

```css
/* Styling input on focus */

input:focus {
  border-color: blue;
  outline: none;
}

/* Styling textarea on focus */

textarea:focus {
  background-color: #f0f0f0;
}
```

### Explanation

* `input:focus` changes the border color when the input is selected.
* `textarea:focus` changes the background color when the user clicks inside the textarea.

This helps users **identify which field they are currently interacting with**.

---

# 2.3 Pseudo-class `:active`

The `:active` pseudo-class is applied **at the exact moment an element is activated**, such as when the **mouse button is pressed down**.

This pseudo-class is often used to create **pressing or clicking effects**.

---

## Syntax

```css
selector:active {
  property: value;
}
```

---

## Example

```css
/* Styling link on press */

a:active {
  color: green;
}

/* Styling button on press */

button:active {
  background-color: #2980b9;
  transform: scale(0.98);
}
```

### Explanation

* `a:active` changes the color while the link is being clicked.
* `button:active` slightly shrinks the button using `transform: scale(0.98)` to create a **pressing effect**.

This makes the interface feel **more responsive and interactive**.

---

# 2.4 Pseudo-class `:visited`

The `:visited` pseudo-class targets **links that a user has already visited**.

Browsers allow visited links to be styled differently to help users **identify pages they have previously opened**.

---

## Syntax

```css
selector:visited {
  property: value;
}
```

---

## Example

```css
/* Styling visited link */

a:visited {
  color: purple;
}
```

### Explanation

* When a user clicks a link and later returns to the page, the link appears **purple**.
* This visually distinguishes **visited links from unvisited links**.

---

# 2.5 Combining Pseudo-classes

Multiple state pseudo-classes can be combined to define **different visual styles depending on link states**.

A common pattern is styling links using the following states:

1. Default state
2. Visited state
3. Hover state
4. Active state

---

## Complete Example

```css
/* Base style for links */

a {
  color: blue;
  text-decoration: none;
}

/* Styling visited link */

a:visited {
  color: purple;
}

/* Styling link on hover */

a:hover {
  color: red;
  text-decoration: underline;
}

/* Styling link on press */

a:active {
  color: green;
}
```

---

## Explanation

| State       | Description                       |
| ----------- | --------------------------------- |
| `a`         | Default style for links           |
| `a:visited` | Style applied to visited links    |
| `a:hover`   | Style when mouse hovers over link |
| `a:active`  | Style when link is being clicked  |

These combinations create a **complete interactive experience for links**.

---

## The Correct Order of Link Pseudo-classes (LVHA Rule)

When styling links using multiple pseudo-classes, **the order of the CSS rules matters**. If the order is incorrect, some styles may **not work as expected** because CSS follows the **cascade and specificity rules**.

Developers follow a standard rule called the **LVHA rule** to ensure link styles behave correctly.

### LVHA stands for:

| Order | Pseudo-class | Meaning                                 |
| ----- | ------------ | --------------------------------------- |
| **L** | `:link`      | Unvisited links                         |
| **V** | `:visited`   | Links that have already been visited    |
| **H** | `:hover`     | When the mouse pointer is over the link |
| **A** | `:active`    | When the link is being clicked          |

The correct order is:

```css
:link → :visited → :hover → :active
```

---

# Why Order Matters

CSS applies rules based on **the cascade**. If a rule appears later and has the same specificity, it **overrides earlier rules**.

If `:hover` appears before `:visited`, for example, the hover style might not apply properly.

Correct ordering ensures:

* Hover styles work
* Active styles work
* Visited styles remain visible

---

# Correct Example (Using LVHA)

```css
/* Unvisited link */
a:link {
  color: blue;
}

/* Visited link */
a:visited {
  color: purple;
}

/* Hovered link */
a:hover {
  color: red;
  text-decoration: underline;
}

/* Active link */
a:active {
  color: green;
}
```

### Behavior

| State          | Result          |
| -------------- | --------------- |
| Default link   | Blue            |
| Visited link   | Purple          |
| Hover          | Red + underline |
| While clicking | Green           |

---

# Visual Timeline of Link Interaction

When a user interacts with a link, the states occur roughly like this:

```
Default → Hover → Active → Visited
```

Example user flow:

1. User sees **blue link** (`:link`)
2. Moves mouse over link → **red** (`:hover`)
3. Clicks link → **green** (`:active`)
4. Returns later → **purple** (`:visited`)

---

# Complete Example with HTML

### HTML

```html
<div class="nav">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</div>
```

### CSS

```css
.nav a:link {
  color: blue;
}

.nav a:visited {
  color: purple;
}

.nav a:hover {
  color: red;
  text-decoration: underline;
}

.nav a:active {
  color: green;
}
```

---

# Developer Tip (Memory Trick)

A common way developers remember the order is:

**"LoVe HAte"**

```
L → link
V → visited
H → hover
A → active
```

So the rule becomes:

**LoVe HAte**

---

# Common Mistake

Incorrect order:

```css
a:hover {
  color: red;
}

a:visited {
  color: purple;
}
```

Problem:

* The `:visited` rule may override `:hover`
* The hover style might not appear correctly

---

# Best Practice

When styling links, always write them in this order:

```css
a:link {}
a:visited {}
a:hover {}
a:active {}
```

This guarantees that **all states behave correctly**.

---

# Quick Exercise

### Task

Style links inside `.menu` so that:

* Unvisited links are **blue**
* Visited links are **purple**
* Hovered links are **orange**
* Active links are **red**

---

### HTML

```html
<div class="menu">
  <a href="#">Home</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</div>
```

---

### Solution

```css
.menu a:link {
  color: blue;
}

.menu a:visited {
  color: purple;
}

.menu a:hover {
  color: orange;
}

.menu a:active {
  color: red;
}
```

---

✅ **Key Takeaway**

Always follow the **LVHA rule** when styling links:

```
:link → :visited → :hover → :active
```

This ensures link interactions **work consistently across browsers**.

---

Below are **six powerful pseudo-classes developers frequently use in modern CSS projects**. These selectors make CSS **cleaner, more flexible, and more powerful**, especially when building complex interfaces.

---

# Useful Modern CSS Pseudo-classes

## 1. `:focus-visible`

The `:focus-visible` pseudo-class applies styles **only when focus should be visible to the user**, typically when navigating using the **keyboard (Tab key)**.

This improves **accessibility** by preventing unnecessary focus styles when clicking with a mouse.

### Syntax

```css
selector:focus-visible {
  property: value;
}
```

### Example

```css
button:focus-visible {
  outline: 3px solid blue;
}
```

### Explanation

* When navigating with **keyboard**, the button shows a blue outline.
* When clicking with the mouse, the outline may not appear.

This creates **cleaner UI while maintaining accessibility**.

---

# 2. `:not()` (Negation Pseudo-class)

The `:not()` pseudo-class selects **elements that do NOT match a specific selector**.

It is very useful for excluding elements from styling.

### Syntax

```css
selector:not(condition) {
  property: value;
}
```

### Example

```css
p:not(.highlight) {
  color: gray;
}
```

### Explanation

* Selects **all paragraphs except those with class `.highlight`**.

### Example HTML

```html
<p>This text is gray.</p>
<p class="highlight">This text keeps its normal style.</p>
```

---

# 3. `:is()` (Selector List Simplifier)

The `:is()` pseudo-class allows you to **group multiple selectors together** and apply the same style.

It helps **reduce repetitive CSS**.

### Syntax

```css
:is(selector1, selector2, selector3) {
  property: value;
}
```

### Example

```css
:is(h1, h2, h3) {
  color: darkblue;
}
```

### Explanation

Instead of writing:

```css
h1 {
  color: darkblue;
}

h2 {
  color: darkblue;
}

h3 {
  color: darkblue;
}
```

You can write a **single rule** using `:is()`.

---

# 4. `:where()`

The `:where()` pseudo-class works similarly to `:is()`, but it has **zero specificity**.

This means its styles are **easier to override later**.

### Syntax

```css
:where(selector) {
  property: value;
}
```

### Example

```css
:where(section, article, aside) {
  margin-bottom: 20px;
}
```

### Explanation

All these elements get the same margin, but **other CSS rules can override them easily**.

Developers often use `:where()` in **CSS frameworks and resets**.

---

# 5. `:has()` (Parent Selector)

The `:has()` pseudo-class allows CSS to select **elements that contain specific children**.

This is often called **the parent selector**, something CSS could not do for many years.

### Syntax

```css
selector:has(child-selector) {
  property: value;
}
```

### Example

```css
.card:has(img) {
  border: 2px solid blue;
}
```

### Explanation

* Selects `.card` elements **only if they contain an image**.

### Example HTML

```html
<div class="card">
  <img src="image.jpg">
</div>

<div class="card">
  <p>No image here</p>
</div>
```

Only the **first card** gets the blue border.

---

# 6. `:focus-within`

The `:focus-within` pseudo-class applies styles when **an element OR any of its children receives focus**.

It is especially useful for **forms and input groups**.

### Syntax

```css
selector:focus-within {
  property: value;
}
```

### Example

```css
.form-group:focus-within {
  border: 2px solid blue;
}
```

### Example HTML

```html
<div class="form-group">
  <label>Name</label>
  <input type="text">
</div>
```

### Explanation

When the user clicks inside the input field, the **entire `.form-group` container gets highlighted**.

This improves **form usability and visual clarity**.

---

# Summary of Modern Pseudo-classes

| Pseudo-class     | Purpose                                           |
| ---------------- | ------------------------------------------------- |
| `:focus-visible` | Shows focus styles mainly for keyboard navigation |
| `:not()`         | Selects elements that do NOT match a condition    |
| `:is()`          | Groups multiple selectors into one                |
| `:where()`       | Same as `:is()` but with zero specificity         |
| `:has()`         | Selects elements that contain specific children   |
| `:focus-within`  | Styles a parent when a child element has focus    |

---

# Mini Exercise

### Task

Apply styles using modern pseudo-classes:

1. Make all headings (`h1`, `h2`, `h3`) **dark green** using `:is()`.
2. Style all paragraphs **except `.intro`** using `:not()`.
3. Highlight `.form-group` when an input inside it receives focus using `:focus-within`.

---

### Example HTML

```html
<div class="content">
  <h1>Title</h1>
  <h2>Subtitle</h2>

  <p class="intro">Introduction paragraph</p>
  <p>Regular paragraph</p>

  <div class="form-group">
    <input type="text" placeholder="Name">
  </div>
</div>
```

---

### Solution

```css
:is(h1, h2, h3) {
  color: darkgreen;
}

p:not(.intro) {
  color: gray;
}

.form-group:focus-within {
  border: 2px solid blue;
}
```

---

✅ **Key Takeaway**

Modern pseudo-classes allow developers to:

* Write **cleaner CSS**
* Reduce **repetition**
* Create **smarter selectors**
* Improve **accessibility and user interaction**

---

# Exercise 1: Visited Links

## Task

Inside a container with class `.content`, change the **color of visited links to purple**.

---

## Requirements

* Target only **links (`<a>`)**
* Apply styles only inside **`.content`**
* Use the **`:visited` pseudo-class**

---

## Example HTML

```html
<div class="content">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Services</a>
</div>
```

---

## Solution

```css
.content a:visited {
  color: purple;
}
```

---

## Explanation

* `.content` selects the container.
* `a` selects links inside the container.
* `:visited` applies styling **only after the link has been visited**.

Result: Visited links inside `.content` appear **purple**.

---

# Exercise 2: Hover on Links

## Task

Inside the container `.nav`, change the **text color of links to green and add an underline when hovered**.

---

## Requirements

* Only apply styles to links inside `.nav`
* Change text color to **green**
* Add **underline**
* Use the **`:hover` pseudo-class**

---

## Example HTML

```html
<div class="nav">
  <a href="#">Home</a>
  <a href="#">Blog</a>
  <a href="#">Contact</a>
</div>
```

---

## Solution

```css
.nav a:hover {
  color: green;
  text-decoration: underline;
}
```

---

## Explanation

* `.nav` targets the navigation container.
* `a` selects links inside the container.
* `:hover` activates when the mouse cursor is placed over the link.

Result: Links become **green and underlined when hovered**.

---

# Key Takeaways

* **State pseudo-classes** style elements based on **user interaction or element state**.
* They improve **user experience and interactivity**.
* Common state pseudo-classes include:

| Pseudo-class | Description                       |
| ------------ | --------------------------------- |
| `:hover`     | When the mouse is over an element |
| `:focus`     | When an element receives focus    |
| `:active`    | When an element is being clicked  |
| `:visited`   | When a link has been visited      |

These pseudo-classes are essential for creating **interactive buttons, links, forms, and navigation menus**.

---

