# 📏 Units of Measurement in CSS

Units of measurement in CSS are essential for creating **flexible**, **scalable**, and **responsive** layouts. Instead of relying only on fixed values like `px`, modern CSS uses **percentages (%)**, **em**, and **rem** units to allow elements to adapt to screen size and user settings.

---

# 4.1 Percentage Values (%)

## 🔹 What Are Percentage Values?

Percentage (`%`) values are **relative units**.
They set sizes **relative to the parent element’s size**.

This makes layouts flexible and responsive.

---

## ✅ Example: Using %

### CSS

```css
.container {
  width: 80%;
  margin: 0 auto;
  background-color: #f4f4f4;
}

.box {
  width: 50%;
  padding-top: 25%; /* Aspect ratio 1:2 */
  background-color: #3498db;
  color: white;
  text-align: center;
  position: relative;
}

.box::before {
  content: "";
  display: block;
  padding-top: 50%; /* Aspect ratio 2:1 */
}
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example of using %</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="box">Content</div>
  </div>
</body>
</html>
```

---

## 🔎 Code Explanation

### `.container`

```css
width: 80%;
margin: 0 auto;
```

* `80%` → Container takes 80% of its parent’s width.
* `margin: 0 auto;` → Centers the container horizontally.

### `.box`

```css
width: 50%;
```

* Takes 50% of the container’s width.

```css
padding-top: 25%;
```

* Vertical padding in % is calculated based on **width**.
* This technique is often used to maintain **aspect ratio**.

---

## 🎯 Why Use %?

* ✔ Flexible layouts
* ✔ Responsive design
* ✔ Works well with fluid containers

---

# 4.2 Relative Units: `em` and `rem`

## 🔹 The `em` Unit

`em` is relative to the **font size of the parent element**.

If the parent font size changes, `em` values automatically adjust.

---

## ✅ Example: Using `em`

### CSS

```css
.parent {
  font-size: 16px;
}

.child {
  font-size: 1.5em; /* 1.5 × 16px = 24px */
  padding: 1em;     /* 1 × 16px = 16px */
}
```

---

## 🔎 How It Works

If:

```css
.parent {
  font-size: 16px;
}
```

Then:

* `1em = 16px`
* `1.5em = 24px`
* `2em = 32px`

⚠ Important:
If nested elements also use `em`, sizes can **compound (cascade)**.

---

## 🔹 The `rem` Unit

`rem` = **Root EM**

It is relative to the **root element (`html`) font size**, not the parent.

This makes it **more predictable**.

---

## ✅ Example: Using `rem`

### HTML

```html
<div class="container">
  Some text inside the container
  <div class="box">
    Some text inside the box
  </div>
</div>
```

### CSS

```css
html {
  font-size: 16px;
}

.container {
  font-size: 1rem;  /* 16px */
  padding: 2rem;    /* 32px */
}

.box {
  font-size: 1.5rem; /* 24px */
  margin: 1rem;      /* 16px */
}
```

---

## 🔎 Why `rem` Is Better for Layout Scaling

If you change:

```css
html {
  font-size: 20px;
}
```

Everything using `rem` scales automatically.

* ✔ Predictable
* ✔ Easy global scaling
* ✔ Great for responsive typography

---

# 📊 Comparing `em` vs `rem`

| Unit  | Based On                | Behavior                       |
| ----- | ----------------------- | ------------------------------ |
| `em`  | Parent font size        | Can cascade in nested elements |
| `rem` | Root (`html`) font size | Always consistent              |

---

# 4.3 Combined Use of % + Relative Units

Using `%` for layout structure and `rem` for spacing and typography creates clean responsive designs.

---

## ✅ Example: Combined Layout

### CSS

```css
html {
  font-size: 16px;
}

.container {
  width: 80%;
  margin: 0 auto;
}

.header, .footer {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

.content {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.sidebar {
  flex: 1 1 30%;
  background-color: #f4f4f4;
  padding: 1rem;
}

.main {
  flex: 1 1 70%;
  background-color: #e4e4e4;
  padding: 1rem;
}
```

---

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Combined Use of % and Relative Units</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="header">Header</div>
    <div class="content">
      <div class="sidebar">Sidebar</div>
      <div class="main">Main Content</div>
    </div>
    <div class="footer">Footer</div>
  </div>
</body>
</html>
```

---

## 🔎 Explanation

* `%` → Controls layout width
* `rem` → Controls padding and spacing
* `flex` → Makes columns responsive

This combination ensures:

✔ Responsive width
✔ Scalable typography
✔ Consistent spacing

---

# 📝 Exercises (With Solutions)

---

# 🧪 Exercise 1: Using `em`

## 🧾 Requirements

* Parent font size = 16px
* Child inside parent
* Child:

    * font-size: 1.5em
    * margin: 2em
* Change parent font size to 20px

---

## ✅ Solution

### HTML

```html
<div class="parent">
  Parent element
  <div class="child">
    Child element
  </div>
</div>
```

### CSS

```css
.parent {
  font-size: 16px;
}

.child {
  font-size: 1.5em;
  margin: 2em;
  background-color: lightblue;
}
```

---

## 🔄 Now Change Parent Font Size

```css
.parent {
  font-size: 20px;
}
```

### 🔎 Result:

* `1.5em` → 1.5 × 20px = 30px
* `2em` → 2 × 20px = 40px

✔ Child updates automatically.

---

# 🧪 Exercise 2: Using `rem`

## 🧾 Requirements

* Container:

    * font-size: 1rem
    * padding: 2rem
* Three blocks:

    * 1.25rem
    * 1.5rem
    * 1.75rem
* Change root font size

---

## ✅ Solution

### HTML

```html
<div class="container">
  <div class="box one">Box 1</div>
  <div class="box two">Box 2</div>
  <div class="box three">Box 3</div>
</div>
```

---

### CSS

```css
html {
  font-size: 16px;
}

.container {
  font-size: 1rem;
  padding: 2rem;
}

.box {
  margin: 1rem 0;
  padding: 1rem;
  color: white;
}

.one {
  background: #3498db;
  font-size: 1.25rem;
}

.two {
  background: #2ecc71;
  font-size: 1.5rem;
}

.three {
  background: #e74c3c;
  font-size: 1.75rem;
}
```

---

## 🔄 Now Change Root Size

```css
html {
  font-size: 20px;
}
```

### 🔎 Result:

Everything scales proportionally:

* 1rem → 20px
* 1.25rem → 25px
* 1.5rem → 30px
* 1.75rem → 35px

✔ Entire layout scales consistently.

---

# 🎯 Final Summary

## Use `%` When:

* Defining widths
* Creating fluid layouts
* Working with flexible containers

## Use `em` When:

* You want sizing relative to parent
* Creating modular components

## Use `rem` When:

* You want predictable scaling
* Creating global typography systems
* Making responsive designs easier

---

# 🚀 Best Practice

💡 Combine:

* `%` → Layout structure
* `rem` → Spacing & typography
* `em` → Component-level adjustments

This creates modern, scalable, and responsive web designs.

---