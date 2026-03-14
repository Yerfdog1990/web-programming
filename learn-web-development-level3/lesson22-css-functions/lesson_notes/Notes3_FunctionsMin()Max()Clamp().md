# Functions `min()`, `max()`, and `clamp()` in CSS

CSS provides several mathematical functions that help developers create **flexible and responsive layouts**. Among the most useful are:

* `min()`
* `max()`
* `clamp()`

These functions allow CSS to **choose values based on conditions**, making designs adaptive without writing many media queries.

They are widely used in modern CSS for:

* Responsive widths
* Adaptive font sizes
* Layout constraints
* Flexible spacing

---

# 7.1 `min()` Function

The **`min()` function** returns the **smallest value** from a list of arguments.

It is useful when you want to **limit a value so that it never becomes larger than a certain size**.

---

## Syntax

```css
selector {
  property: min(value1, value2, ...);
}
```

The browser evaluates the values and uses the **smallest one**.

---

## Usage Example

In this example, the block width **will not exceed 300px**, but if the parent width is smaller, the element will take **100% of the parent width**.

```css
/* The block width is no more than 300px, but no less than 100% of parent */

.block {
  width: min(300px, 100%);
}
```

### Explanation

* If parent width = **500px**

    * 100% = 500px
    * `min(300px, 500px)` → **300px**

* If parent width = **250px**

    * 100% = 250px
    * `min(300px, 250px)` → **250px**

This ensures the block **never grows beyond 300px**.

---

## Example 2: Limiting Font Size

This example restricts font size.

```css
.text {
  font-size: min(2em, 5vw);
}
```

### Explanation

* Font size is **no more than 2em**
* If **5vw** becomes smaller, that value will be used instead.

This helps prevent text from becoming **too large on big screens**.

---

# 7.2 `max()` Function

The **`max()` function** returns the **largest value** from a list of arguments.

It is useful when you want to ensure that a value **never becomes smaller than a certain limit**.

---

## Syntax

```css
selector {
  property: max(value1, value2, ...);
}
```

The browser selects the **largest value**.

---

## Usage Example

In this example, the block width **will be at least 200px**, but if 50% of the parent width is larger, that value will be used.

```css
/* The block width is no less than 200px, but can be more */

.block {
  width: max(200px, 50%);
}
```

### Explanation

* If parent width = **300px**

    * 50% = 150px
    * `max(200px, 150px)` → **200px**

* If parent width = **1000px**

    * 50% = 500px
    * `max(200px, 500px)` → **500px**

This ensures the element **never becomes smaller than 200px**.

---

## Example 2: Minimum Font Size

```css
.title {
  font-size: max(1.5em, 2vw);
}
```

### Explanation

* Font size **never goes below 1.5em**
* If **2vw becomes larger**, that value will be used.

This helps maintain **readability on small screens**.

---

# 7.3 `clamp()` Function

The **`clamp()` function** restricts a value between a **minimum and maximum range**.

It takes **three arguments**:

1. Minimum value
2. Preferred value
3. Maximum value

---

## Syntax

```css
selector {
  property: clamp(min, expression, max);
}
```

Where:

* **min** → smallest allowed value
* **expression** → preferred or flexible value
* **max** → largest allowed value

---

## Usage Example

This example creates responsive text.

```css
/* Font size from 12px to 24px, depending on screen width */

.text {
  font-size: clamp(12px, 2vw, 24px);
}
```

### Explanation

* Minimum font size → **12px**
* Preferred size → **2vw**
* Maximum font size → **24px**

Behavior:

| Screen Size   | Result |
| ------------- | ------ |
| Small screen  | 12px   |
| Medium screen | 2vw    |
| Large screen  | 24px   |

This makes typography **fully responsive without media queries**.

---

## Example 2: Limiting Block Width

```css
.box {
  width: clamp(200px, 50%, 600px);
}
```

### Explanation

* Minimum width → **200px**
* Preferred width → **50%**
* Maximum width → **600px**

This ensures the element:

* Never shrinks below **200px**
* Never grows beyond **600px**

---

# 7.4 Full Implementation Example

The following example demonstrates the use of **min(), max(), and clamp() together**.

---

## CSS

```css
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.box {
  background-color: #3498db;
  color: white;
  padding: 10px;
  text-align: center;
  width: clamp(200px, 50%, 600px);
}

.text {
  font-size: clamp(1em, 2vw, 2em);
}

.sidebar {
  background-color: #2ecc71;
  color: white;
  padding: 10px;
  text-align: center;
  width: max(200px, 30%);
}

.text-small {
  font-size: min(2em, 5vw);
}
```

---

## HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Example of using min(), max(), and clamp() functions</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<div class="container">

<div class="box">
Width: clamp(200px, 50%, 600px)
</div>

<p class="text">
Font size: clamp(1em, 2vw, 2em)
</p>

<div class="sidebar">
Width: max(200px, 30%)
</div>

<p class="text-small">
Font size: min(2em, 5vw)
</p>

</div>

</body>
</html>
```

---

# Exercises

# Exercise 1: Width with `clamp()`

### Task

Create an element with class **`clamp-width-block`**.

Use the `clamp()` function so that:

* Minimum width = **200px**
* Preferred width = **50%**
* Maximum width = **600px**

Add:

* Background
* Padding

---

## Solution

### CSS

```css
.clamp-width-block {
  width: clamp(200px, 50%, 600px);
  background: lightblue;
  padding: 20px;
}
```

### HTML

```html
<div class="clamp-width-block">
  Clamp width block
</div>
```

---

# Exercise 2: Font Size with `clamp()`

### Task

Create an element with class **`clamp-font-size`**.

Font size requirements:

* Minimum = **14px**
* Preferred = **2vw**
* Maximum = **24px**

Add styles to make the element visible.

---

## Solution

### CSS

```css
.clamp-font-size {
  font-size: clamp(14px, 2vw, 24px);
  background: lightyellow;
  padding: 15px;
  border: 2px solid black;
}
```

### HTML

```html
<p class="clamp-font-size">
  Responsive font using clamp()
</p>
```

---

# Summary

| Function  | Purpose                                       |
| --------- | --------------------------------------------- |
| `min()`   | Chooses the smallest value                    |
| `max()`   | Chooses the largest value                     |
| `clamp()` | Restricts value between a minimum and maximum |

### Key Benefits

* Improves **responsive design**
* Reduces **media queries**
* Creates **flexible layouts**
* Controls **element size limits**

These functions are widely used in modern **CSS responsive design and fluid typography**.

---