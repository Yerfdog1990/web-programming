# Responsive Fonts

Responsive fonts are an essential part of **responsive web design**. They ensure that text adjusts automatically to different screen sizes so that it remains **readable and visually balanced** on devices such as smartphones, tablets, laptops, and large desktop monitors.

One of the most effective ways to create responsive typography is by using **viewport-based units** like:

* `vw`
* `vh`
* `vmin`
* `vmax`

These units allow the font size to **scale dynamically with the browser viewport**.

---

# 7.1 Main Principles of Responsive Fonts

Responsive fonts rely on **relative units** rather than fixed units like `px`.

Traditional example:

```css
body {
  font-size: 16px;
}
```

Problem:
`px` is **fixed**, so the text size does not adjust automatically to screen size.

Responsive example:

```css
body {
  font-size: 2vw;
}
```

Now the text size **changes depending on the viewport width**.

---

## Viewport Units

### 1. `vw` (Viewport Width)

`vw` represents **1% of the viewport width**.

Example:

```
1vw = 1% of the browser width
```

If the viewport width is **1000px**:

```
1vw = 10px
2vw = 20px
```

---

### 2. `vh` (Viewport Height)

`vh` represents **1% of the viewport height**.

Example:

```
1vh = 1% of the viewport height
```

If the viewport height is **800px**:

```
1vh = 8px
```

---

### 3. `vmin`

`vmin` equals **1% of the smaller viewport dimension**.

Example:

```
Viewport width = 1000px
Viewport height = 800px
```

The smaller dimension is **800px**, so:

```
1vmin = 8px
```

---

### 4. `vmax`

`vmax` equals **1% of the larger viewport dimension**.

Using the same example:

```
Viewport width = 1000px
Viewport height = 800px
```

The larger dimension is **1000px**, so:

```
1vmax = 10px
```

---

# Benefits of Responsive Fonts

### 1. Improved Readability

Font sizes adjust automatically for different devices, ensuring comfortable reading on:

* mobile phones
* tablets
* desktops
* large monitors

---

### 2. Design Flexibility

Responsive typography keeps a **balanced layout** as screen sizes change.

---

### 3. Consistent Responsive Design

Using viewport units ensures that **all elements scale proportionally**, maintaining visual harmony.

---

# 7.2 Using `vw` and `vh` for Responsive Fonts

## Example 1: Using `vw`

Here the font size depends on the **viewport width**.

### CSS

```css
body {
  font-size: 2vw;
}

h1 {
  font-size: 4vw;
}
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Responsive Font Using vw</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<h1>Responsive Heading</h1>

<p>This text resizes based on the viewport width.</p>

</body>
</html>
```

### Code Explanation

```
body { font-size: 2vw; }
```

The text inside `<body>` becomes **2% of the viewport width**.

```
h1 { font-size: 4vw; }
```

The heading becomes **4% of the viewport width**, making it larger than normal text.

As the browser width changes, the font size **automatically adjusts**.

---

## Example 2: Using `vh`

Here the font size depends on the **viewport height**.

### CSS

```css
body {
  font-size: 2vh;
}

h1 {
  font-size: 4vh;
}
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Responsive Font Using vh</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<h1>Responsive Heading</h1>

<p>This text resizes based on the viewport height.</p>

</body>
</html>
```

### Code Explanation

```
body { font-size: 2vh; }
```

The font size becomes **2% of the viewport height**.

```
h1 { font-size: 4vh; }
```

The heading becomes **4% of the viewport height**.

If the **browser height changes**, the font size changes accordingly.

---

# 7.3 Using `vmin` and `vmax`

## Example 1: Using `vmin`

The font size depends on the **smaller viewport dimension**.

### CSS

```css
body {
  font-size: 2vmin;
}

h1 {
  font-size: 4vmin;
}
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Responsive Font Using vmin</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<h1>Responsive Heading</h1>

<p>This text resizes based on the smaller viewport dimension.</p>

</body>
</html>
```

### Code Explanation

```
body { font-size: 2vmin; }
```

Font size becomes **2% of the smaller viewport dimension**.

```
h1 { font-size: 4vmin; }
```

Heading becomes **4% of the smaller viewport dimension**.

This approach works well for **maintaining readability across portrait and landscape layouts**.

---

## Example 2: Using `vmax`

The font size depends on the **larger viewport dimension**.

### CSS

```css
body {
  font-size: 2vmax;
}

h1 {
  font-size: 4vmax;
}
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Responsive Font Using vmax</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<h1>Responsive Heading</h1>

<p>This text resizes based on the larger viewport dimension.</p>

</body>
</html>
```

### Code Explanation

```
body { font-size: 2vmax; }
```

Font size becomes **2% of the larger viewport dimension**.

```
h1 { font-size: 4vmax; }
```

Heading becomes **4% of the larger viewport dimension**.

---

# Exercise 1 — Using `vh`

## Task

Set the font size:

* body text → **2% of viewport height**
* `h1` heading → **4% of viewport height**

The font size should change when the browser **height changes**.

---

## Solution

### CSS

```css
body {
  font-size: 2vh;
}

h1 {
  font-size: 4vh;
}
```

### HTML

```html
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Using vh</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<h1>Responsive Heading</h1>

<p>This text adjusts based on viewport height.</p>

</body>
</html>
```

---

# Exercise 2 — Using `vmax`

## Task

Set font sizes using `vmax`.

Requirements:

* body text → **2% of the larger viewport dimension**
* `h1` heading → **4% of the larger viewport dimension**
* font size must change when **window size changes**

---

## Solution

### CSS

```css
body {
  font-size: 2vmax;
}

h1 {
  font-size: 4vmax;
}
```

### HTML

```html
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Using vmax</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<h1>Responsive Heading</h1>

<p>This text adjusts based on the larger viewport dimension.</p>

</body>
</html>
```

---

# Key Takeaways

* **Responsive fonts** adapt to different screen sizes automatically.
* Viewport units are useful for responsive typography:

    * `vw` → viewport width
    * `vh` → viewport height
    * `vmin` → smaller viewport dimension
    * `vmax` → larger viewport dimension
* These units allow text to **scale dynamically** across devices.
* Responsive fonts improve **readability, flexibility, and design consistency**.

---

