# Indents (Padding and Margin in CSS)

In CSS, **indents** refer to spacing inside and outside elements.
They are controlled using:

* **Padding** → internal indent (inside the element)
* **Margin** → external indent (outside the element)

Understanding indents is essential for controlling layout, spacing, and visual balance on a webpage.

---

# 2.1 Internal Padding (padding)

## Definition

**Padding** defines the space between the content of an element and its border.

It creates internal breathing room so content does not stick to the edges.

---

## Padding Can Be Set:

* For all sides at once
* For each side individually:

    * `padding-top`
    * `padding-right`
    * `padding-bottom`
    * `padding-left`

---

## Basic Usage Example

### CSS

```css
.padding {
  background-color: #e0e0e0;
  padding: 20px;
  border: 2px solid #000;
}
```

### HTML

```html
<div class="padding">
  This is an element with internal padding.
</div>
```

### Explanation

* Content: the text
* Padding: 20px on all sides
* Border: 2px black border around the padding

The padding increases the total size of the element.

---

## Setting Different Padding on Each Side

```css
.box {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}
```

Or shorthand:

```css
padding: 10px 20px 30px 40px;
/* top right bottom left */
```

---

# 2.2 External Margins (margin)

## Definition

**Margin** defines the space between an element and neighboring elements.

Margins control the spacing outside the border.

---

## Basic Usage Example

### CSS

```css
.margin {
  background-color: #e0e0e0;
  border: 2px solid #000;
  margin: 20px;
}
```

### HTML

```html
<div class="margin">
  This is an element with external margins.
</div>
```

### Explanation

* Margin creates space around the element
* It pushes other elements away
* Margins are transparent (no background color)

---

## Setting Different Margins

```css
margin-top: 30px;
margin-right: 40px;
margin-bottom: 50px;
margin-left: 60px;
```

Shorthand:

```css
margin: 30px 40px 50px 60px;
/* top right bottom left */
```

---

# 2.3 Block Model Component Interaction

The four box model components work together:

1. Content
2. Padding
3. Border
4. Margin

Together they determine:

* The total width
* The total height
* The spacing between elements

---

## Example

### CSS

```css
.box {
  background-color: #e0e0e0;
  padding: 20px;
  border: 5px solid #000;
  margin: 30px;
  width: 200px;
}
```

### HTML

```html
<div class="box">
  This is an element with external and internal padding.
</div>
```

---

## Code Explanation

* **Content** → text inside
* **Padding (20px)** → space inside border
* **Border (5px)** → surrounds padding
* **Margin (30px)** → space outside border
* **Width (200px)** → content width only (default box model)

Total actual width becomes larger because padding and border are added.

---

# 2.4 Negative Margins

Margins can have **negative values**.

Negative margins cause elements to move and possibly overlap.

---

## Example

### CSS

```css
.negative-margin {
  background-color: #e0e0e0;
  padding: 20px;
  border: 2px solid #000;
  margin-top: -12px;
}
```

### HTML

```html
<div>
  This is a regular element
</div>

<div class="negative-margin">
  This is an element with negative top margin.
</div>
```

### What Happens?

* The second element moves upward
* It overlaps the first element

Negative margins should be used carefully.

---

# 2.5 Margin Collapse

## What Is Margin Collapse?

When two vertical margins meet, they **collapse into one margin**.

The resulting margin equals the **larger value**.

---

## Example

### CSS

```css
.box1 {
  background-color: #e0e0e0;
  padding: 20px;
  border: 2px solid #000;
  margin-bottom: 30px;
}

.box2 {
  background-color: #d0d0d0;
  padding: 20px;
  border: 2px solid #000;
  margin-top: 20px;
}
```

### HTML

```html
<div class="box1">
  This is the first element.
</div>

<div class="box2">
  This is the second element.
</div>
```

---

### What Happens?

* box1 has margin-bottom: 30px
* box2 has margin-top: 20px
* They collapse into 30px (not 50px)

Important:

* Only vertical margins collapse
* Horizontal margins do not collapse

---

# 🧪 Exercise 1: Padding

## Requirements

* Padding:

    * Top: 10px
    * Right: 20px
    * Bottom: 30px
    * Left: 40px
* Background color to highlight padding
* Border for clarity

---

## Solution

### CSS

```css
.padding-exercise {
  background-color: lightblue;
  padding: 10px 20px 30px 40px;
  border: 2px solid black;
}
```

### HTML

```html
<div class="padding-exercise">
  This element demonstrates different padding on each side.
</div>
```

---

## Explanation

Padding order:

```
padding: top right bottom left;
```

So:

* Top → 10px
* Right → 20px
* Bottom → 30px
* Left → 40px

The background color makes the padding area visible.

---

# 🧪 Exercise 2: External Margins

## Requirements

* Margin:

    * Top: 30px
    * Right: 40px
    * Bottom: 50px
    * Left: 60px
* Background color
* Border for clarity

---

## Solution

### CSS

```css
.margin-exercise {
  background-color: lightgreen;
  margin: 30px 40px 50px 60px;
  border: 2px solid black;
}
```

### HTML

```html
<div class="margin-exercise">
  This element demonstrates external margins.
</div>
```

---

## Explanation

Margin order:

```
margin: top right bottom left;
```

The background color highlights the element itself, while the margin creates space around it.

---

# Key Takeaways

1. Padding = space inside the element.
2. Margin = space outside the element.
3. Padding increases total element size.
4. Margin creates separation between elements.
5. Negative margins can cause overlapping.
6. Vertical margins can collapse.

---

# Why Indents Matter

Proper use of padding and margin helps:

* Improve readability
* Create balanced layouts
* Avoid crowded designs
* Prevent overlapping elements
* Build professional UI spacing

---

