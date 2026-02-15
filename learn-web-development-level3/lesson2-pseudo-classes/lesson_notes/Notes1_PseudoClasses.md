# 7. Pseudo-classes in CSS

## 7.1 Introduction to Pseudo-classes

**Pseudo-classes** in CSS are special keywords added to selectors to define the **state** of an element or its **position** in the document structure.

They allow you to style elements dynamically — without adding extra classes or JavaScript.

### Syntax

```css
selector:pseudo-class {
  property: value;
  property: value;
}
```

Pseudo-classes are written using a **colon (:)** followed by the pseudo-class name.

---

## Main Categories of Pseudo-classes

1. **State pseudo-classes**
2. **Structural pseudo-classes**
3. **Form pseudo-classes**
4. **Navigation pseudo-classes**

---

# 7.2 State Pseudo-classes

State pseudo-classes style elements based on their current interaction state.

### Common State Pseudo-classes

| Pseudo-class | Description                           |
| ------------ | ------------------------------------- |
| `:hover`     | When mouse pointer is over an element |
| `:active`    | When element is being clicked         |
| `:focus`     | When element receives focus           |
| `:visited`   | For visited links                     |
| `:link`      | For unvisited links                   |

---

# 7.3 The `:hover` Pseudo-class

The `:hover` pseudo-class is applied when a user moves the mouse pointer over an element.

It is commonly used for:

* Links
* Buttons
* Cards
* Navigation menus

---

## Example 1: Styling Links on Hover

### HTML

```html
<a href="#">Placeholder Link</a>
```

### CSS

```css
a:hover {
  color: red;
  text-decoration: underline;
}
```

### What Happens?

When the user hovers over the link:

* Text becomes **red**
* Text becomes **underlined**

---

## Why Use `:hover`?

* Improves user experience
* Provides visual feedback
* Makes websites feel interactive

---

## Example 2: Styling Buttons on Hover

### HTML

```html
<button type="button">Click Me</button>
```

### CSS

```css
button:hover {
  background-color: darkblue;
  color: white;
}
```

---

# 7.4 The `:focus` Pseudo-class

The `:focus` pseudo-class applies when an element receives focus.

Focus can occur when:

* Clicking an input field
* Using the Tab key
* Selecting form controls

---

## Example: Styling Input on Focus

### HTML

```html
<input type="text" name="text" id="text">
```

### CSS

```css
input:focus {
  border-color: blue;
  outline: none;
}
```

---

## What Happens?

When the input is focused:

* Border becomes **blue**
* Default browser outline is removed

---

## Why Use `:focus`?

* Improves accessibility
* Helps keyboard users navigate
* Makes forms easier to use

---

# 7.5 The `:nth-child()` Pseudo-class

The `:nth-child()` pseudo-class selects elements based on their position among siblings.

### Syntax

```css
selector:nth-child(n) {
  property: value;
}
```

### The value `n` can be:

* A number → `2`
* A keyword → `odd`, `even`
* An expression → `2n`, `3n+1`

---

## Example: Styling List Items

### HTML

```html
<ul>
  <li>Element 1</li>
  <li>Element 2</li>
  <li>Element 3</li>
  <li>Element 4</li>
  <li>Element 5</li>
  <li>Element 6</li>
  <li>Element 7</li>
</ul>
```

### CSS

```css
/* Odd items */
li:nth-child(odd) {
  background-color: lightgray;
}

/* Even items */
li:nth-child(even) {
  background-color: lightblue;
}

/* Second item */
li:nth-child(2) {
  color: red;
}
```

---

## Practical Use Cases

* Styling table rows
* Creating striped lists
* Alternating backgrounds
* Targeting specific elements without classes

---

# 7.6 Styling Even Table Rows

### HTML

```html
<table>
  <tr>
    <th>Name</th>
    <th>Quantity</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Product 1</td>
    <td>5</td>
    <td>10 units</td>
  </tr>
  <tr>
    <td>Product 2</td>
    <td>3</td>
    <td>15 units</td>
  </tr>
  <tr>
    <td>Product 3</td>
    <td>8</td>
    <td>7 units</td>
  </tr>
</table>
```

### CSS

```css
tr:nth-child(even) {
  background-color: #f2f2f2;
}
```

This creates a **striped table effect**.

---

# 7.7 The `:not()` Pseudo-class

The `:not()` pseudo-class excludes elements from selection.

### Example

### HTML

```html
<ul>
  <li class="list-item">Element 1</li>
  <li class="list-item">Element 2</li>
  <li class="list-item">Element 3</li>
  <li class="list-item">Element 4</li>
  <li class="list-item">Element 5</li>
</ul>
```

### CSS

```css
.list-item:not(:last-child) {
  border-bottom: 1px solid #ddd;
}
```

This applies a border to all items **except the last one**.

---

# 7.8 Combining Pseudo-classes

You can combine pseudo-classes:

```css
button:hover,
button:focus {
  background-color: darkblue;
  color: white;
}
```

This ensures:

* Mouse users (hover)
* Keyboard users (focus)

get the same visual feedback.

---

# Exercises

---

## Exercise 1: Hover Pseudo-class

### Task

Use the `:hover` pseudo-class to:

* Change link text color to **red**
* Underline the link
* Apply styles only on hover

---

### Sample HTML

```html
<a href="#">Learn More</a>
```

---

### Sample Solution

```css
a:hover {
  color: red;
  text-decoration: underline;
}
```

---

## Exercise 2: Focus Pseudo-class

### Task

Use the `:focus` pseudo-class to:

* Change input border color to blue
* Remove default outline

---

### Sample HTML

```html
<input type="text" placeholder="Enter your name">
```

---

### Sample Solution

```css
input:focus {
  border: 2px solid blue;
  outline: none;
}
```

---

## Exercise 3: Zebra Striping a List

### Task

* Make odd list items light gray
* Make even list items white

---

### Sample HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
```

---

### Sample Solution

```css
li:nth-child(odd) {
  background-color: lightgray;
}

li:nth-child(even) {
  background-color: white;
}
```

---

## Exercise 4: Exclude the Last Element

### Task

Add a bottom border to all list items except the last one.

---

### Sample Solution

```css
li:not(:last-child) {
  border-bottom: 1px solid black;
}
```

---

# Key Takeaways

* ✔ Pseudo-classes allow styling based on **state or position**
* ✔ `:hover` improves interaction
* ✔ `:focus` improves accessibility
* ✔ `:nth-child()` helps style repeated elements
* ✔ `:not()` excludes specific elements
* ✔ They reduce the need for extra classes

---

