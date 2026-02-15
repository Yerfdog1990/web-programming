# 8. Pseudo-elements in CSS

## 8.1 Introduction to Pseudo-elements

**Pseudo-elements** in CSS allow you to style specific parts of an element, such as:

* The first letter
* The first line
* Content before an element
* Content after an element

Unlike pseudo-classes (which define states), pseudo-elements define **specific parts of an element**.

### Important Rule

Pseudo-elements use **double colons (`::`)**

### General Syntax

```css
selector::pseudo-element {
  property: value;
}
```

---

# Main Types of Pseudo-elements

1. `::before`
2. `::after`
3. `::first-letter`
4. `::first-line`

---

# 8.2 The `::before` Pseudo-element

The `::before` pseudo-element inserts content **before** the actual content of an element.

It is commonly used for:

* Decorative icons
* Symbols
* Extra labels
* Visual indicators

---

## Syntax

```css
selector::before {
  content: "" | "text" | url() | counter | attr();
  property: value;
}
```

The **`content` property is required**.
Without it, the pseudo-element will not appear.

The `content` property can contain:

* Text → `"Hello"`
* Empty string → `""`
* Image → `url(image.png)`
* Attribute value → `attr(title)`

---

## Example: Adding an Arrow Before List Items

### HTML

```html
<ul>
  <li>First list item</li>
  <li>Second list item</li>
  <li>Third list item</li>
</ul>
```

### CSS

```css
li::before {
  content: "→ ";
  color: red;
}
```

### Result

Each list item will display:

* → First list item
* → Second list item
* → Third list item

---

## Why Use `::before`?

* ✔ Adds decoration without changing HTML
* ✔ Keeps HTML clean
* ✔ Improves maintainability

---

# 8.3 The `::after` Pseudo-element

The `::after` pseudo-element inserts content **after** an element's content.

---

## Syntax

```css
selector::after {
  content: "";
  property: value;
}
```

---

## Example: Adding a Dot After List Items

### HTML

```html
<ul>
  <li>First list item</li>
  <li>Second list item</li>
  <li>Third list item</li>
</ul>
```

### CSS

```css
li::after {
  content: " •";
  color: blue;
}
```

### Result

First list item •
Second list item •
Third list item •

---

## Common Uses of `::after`

* Decorative separators
* Clearfix techniques
* Adding icons
* Adding badges

---

# 8.4 The `::first-letter` Pseudo-element

The `::first-letter` pseudo-element targets the **first letter** of a block-level element.

It is commonly used in:

* Articles
* News websites
* Books
* Magazine-style layouts

---

## Syntax

```css
selector::first-letter {
  property: value;
}
```

---

## Example: Styling First Letter

### HTML

```html
<p>This is a paragraph example.</p>
<p>Here's another paragraph example.</p>
```

### CSS

```css
p::first-letter {
  font-size: 2em;
  color: green;
}
```

### Result

The first letter of each paragraph becomes:

* Twice as large
* Green in color

---

# 8.5 The `::first-line` Pseudo-element

The `::first-line` pseudo-element styles only the **first line** of text inside a block-level element.

⚠ Important: The first line depends on screen width.

---

## Syntax

```css
selector::first-line {
  property: value;
}
```

---

## Example

### HTML

```html
<p>
This is a paragraph text example that contains enough text to break into multiple lines, demonstrating how the ::first-line pseudo-element works.
</p>
```

### CSS

```css
p::first-line {
  color: navy;
  font-weight: bold;
}
```

### Result

* Only the first line becomes bold and navy.
* The rest of the paragraph remains unchanged.

---

# Comparison: Pseudo-classes vs Pseudo-elements

| Pseudo-classes       | Pseudo-elements           |
| -------------------- | ------------------------- |
| Use single colon `:` | Use double colon `::`     |
| Define element state | Define part of an element |
| Example: `:hover`    | Example: `::before`       |

---

# Exercises

---

## Exercise 1: Add Arrow Before List Items

### Task

Use the `::before` pseudo-element to:

* Add a red arrow (→)
* Place it before each `<li>`
* Keep the HTML unchanged

---

### Sample HTML

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

---

### Sample Solution

```css
li::before {
  content: "→ ";
  color: red;
}
```

* ✔ Arrow appears before each item
* ✔ Arrow is red
* ✔ No HTML modification needed

---

## Exercise 2: Style the First Letter of Paragraphs

### Task

Use `::first-letter` to:

* Make first letter green
* Make it twice the size of the rest of the text

---

### Sample HTML

```html
<p>This is the first paragraph.</p>
<p>This is the second paragraph.</p>
```

---

### Sample Solution

```css
p::first-letter {
  color: green;
  font-size: 2em;
}
```

* ✔ First letter is green
* ✔ First letter is twice as large

---

## Exercise 3: Add Decorative Symbol After Paragraph

### Task

Add a blue star (★) after every paragraph using `::after`.

---

### Sample Solution

```css
p::after {
  content: " ★";
  color: blue;
}
```

---

## Exercise 4: Highlight First Line

### Task

Make the first line of every paragraph bold and dark blue.

---

### Sample Solution

```css
p::first-line {
  font-weight: bold;
  color: darkblue;
}
```

---

# Best Practices

* ✔ Always include `content` for `::before` and `::after`
* ✔ Use pseudo-elements for decorative content only
* ✔ Do not place important information only in CSS
* ✔ Keep HTML clean and semantic

---

# Key Takeaways

* Pseudo-elements style **parts of elements**
* They use **double colons (`::`)**
* `::before` adds content before an element
* `::after` adds content after an element
* `::first-letter` styles the first letter
* `::first-line` styles the first line
* They reduce the need to modify HTML

---
