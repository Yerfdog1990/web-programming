# Basic CSS Syntax

Understanding **basic CSS syntax** is essential for styling web pages correctly.
CSS works by applying **rules** to HTML elements.

---

# 3.1 CSS Rules

## What is a CSS Rule?

A CSS rule tells the browser:

👉 **Which element to style**

👉 **What style to apply**

A rule has two main parts:

1. **Selector**
2. **Declaration block**

---

## Basic Structure

```css
selector {
  property: value;
  property: value;
}
```

### Breakdown

* **Selector** → Targets HTML elements
* **Curly braces `{}`** → Contain the declarations
* **Property** → What you want to change
* **Value** → How you want it to look
* **Semicolon `;`** → Ends each declaration

---

## Example 1: Styling a Heading

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

### Explanation

* `h1` → Selector
* `color` → Property
* `blue` → Value
* `font-size` → Property
* `24px` → Value

This rule changes:

* Text color to blue
* Font size to 24 pixels

---

# 3.2 Properties and Values

CSS has many properties that control different aspects of design.

Each property must have a value.

---

# 1️⃣ Color and Background

### Common Properties

* `color` → Text color
* `background-color` → Background color

### Example

```css
div {
  color: red;
  background-color: yellow;
}
```

This makes:

* Text red
* Background yellow

---

# 2️⃣ Font Properties

### Common Properties

* `font-family`
* `font-size`
* `font-weight`

### Example

```css
h1 {
  font-family: 'Georgia', serif;
  font-size: 36px;
  font-weight: bold;
}
```

This changes:

* Font style
* Size
* Weight

---

# 3️⃣ Text Properties

### Common Properties

* `text-align`
* `text-decoration`

### Example

```css
a {
  text-align: left;
  text-decoration: none;
}
```

This:

* Aligns text left
* Removes underline from links

---

# 4️⃣ Spacing and Borders

### Common Properties

* `margin` → Outer spacing
* `padding` → Inner spacing
* `border` → Element border

### Example

```css
.container {
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #000000;
}
```

Explanation:

* `margin: 0 auto;`

    * 0px top and bottom
    * Automatic left and right (centers element)
* `padding: 20px;`

    * 20px inside spacing
* `border: 2px solid #000000;`

    * 2px thick
    * Solid line
    * Black color

---

# 5️⃣ Dimensions and Position

### Common Properties

* `width`
* `height`
* `position`
* `top`
* `left`

### Example

```css
.box {
  width: 200px;
  height: 100px;
  position: absolute;
  top: 50px;
  left: 100px;
}
```

This:

* Sets size
* Positions element 50px from top
* 100px from left

---

# Important Things to Remember

To master CSS, you must:

* Remember common properties
* Remember common values
* Understand how properties interact
* Practice regularly

CSS becomes easier with repetition and experimentation.

---

# 🧪 Exercises

---

# Exercise 1: Color and Background

## Task

Create a CSS rule for a `div` element that:

* Sets text color to red
* Sets background color to yellow

---

## Sample Solution

```css
div {
  color: red;
  background-color: yellow;
}
```

---

# Exercise 2: Margins and Borders

## Task

Create a CSS rule for an element with class `"container"` that:

* Sets external margins:

    * 0px vertically
    * auto horizontally
* Sets internal padding to 20px
* Adds a 2px black border

---

## Sample Solution

```css
.container {
  margin: 0 auto;
  padding: 20px;
  border: 2px solid black;
}
```

---

# Full HTML Example for Practice

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      margin: 0 auto;
      padding: 20px;
      border: 2px solid black;
      width: 300px;
    }

    div {
      color: red;
      background-color: yellow;
    }
  </style>
</head>
<body>

  <div class="container">
    This is inside the container.
  </div>

  <div>
    This is a normal div.
  </div>

</body>
</html>
```

---

# Summary

A CSS rule consists of:

```
Selector + { Property: Value; }
```

Example:

```css
h1 {
  color: blue;
}
```

To become confident in CSS:

✔ Practice writing rules

✔ Experiment with different properties

✔ Combine multiple properties

✔ Observe how styles interact

---

