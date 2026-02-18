# Text Alignment in CSS

Text alignment is one of the most important aspects of styling web pages. It controls how text is positioned inside containers.

CSS provides two main properties for text alignment:

* `text-align` → controls **horizontal alignment**
* `vertical-align` → controls **vertical alignment**

---

# 6.1 The `text-align` Property

The `text-align` property controls the **horizontal alignment** of text inside a block-level element (like `<p>`, `<div>`, `<h1>`, etc.).

It determines how text is positioned relative to the element’s left and right borders.

---

## Syntax

```css
selector {
  text-align: value;
}
```

---

## Values of `text-align`

| Value     | Description                                          |
| --------- | ---------------------------------------------------- |
| `left`    | Aligns text to the left (default for LTR text)       |
| `right`   | Aligns text to the right                             |
| `center`  | Centers the text                                     |
| `justify` | Aligns text to both left and right edges             |
| `start`   | Aligns text to the start (depends on text direction) |
| `end`     | Aligns text to the end (depends on text direction)   |

---

## Explanation of Common Values

### 1️⃣ `left`

Text is aligned to the left edge of the container.

### 2️⃣ `right`

Text is aligned to the right edge of the container.

### 3️⃣ `center`

Text is placed in the center of the container.

### 4️⃣ `justify`

Text stretches to fit the full width of the container. Extra spacing is added between words.

---

## Usage Example

### CSS

```css
.left {
  text-align: left;
}

.right {
  text-align: right;
}

.center {
  text-align: center;
}

.justify {
  text-align: justify;
}
```

### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .left { text-align: left; }
    .right { text-align: right; }
    .center { text-align: center; }
    .justify { text-align: justify; }
  </style>
</head>
<body>

  <p class="left">This text is aligned to the left.</p>
  <p class="right">This text is aligned to the right.</p>
  <p class="center">This text is centered.</p>
  <p class="justify">
    This text is justified. It will stretch so the text occupies
    the full width of the container.
  </p>

</body>
</html>
```

---

# 6.2 The `vertical-align` Property

The `vertical-align` property controls the **vertical alignment of inline or inline-block elements** relative to their parent.

⚠ Important:
It does **not** work on block elements the same way as flexbox or grid alignment. It is mainly used for:

* Inline elements (`<span>`)
* Images inside text
* Table cells

---

## Syntax

```css
selector {
  vertical-align: value;
}
```

---

## Values of `vertical-align`

| Value         | Description                          |
| ------------- | ------------------------------------ |
| `baseline`    | Default. Aligns to parent’s baseline |
| `sub`         | Displays as subscript                |
| `super`       | Displays as superscript              |
| `text-top`    | Aligns to top of parent's font       |
| `text-bottom` | Aligns to bottom of parent's font    |
| `middle`      | Aligns to the middle of parent       |
| `top`         | Aligns to top of container           |
| `bottom`      | Aligns to bottom of container        |
| `percentage`  | Offsets relative to line-height      |

---

## Usage Example

### CSS

```css
.container {
  height: 100px;
  border: 1px solid black;
}

.baseline {
  vertical-align: baseline;
}

.sub {
  vertical-align: sub;
}

.super {
  vertical-align: super;
}

.text-top {
  vertical-align: text-top;
}

.text-bottom {
  vertical-align: text-bottom;
}

.middle {
  vertical-align: middle;
}

.top {
  vertical-align: top;
}

.bottom {
  vertical-align: bottom;
}

.percent-50 {
  vertical-align: 50%;
}
```

### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      height: 100px;
      border: 1px solid black;
      font-size: 20px;
    }

    .baseline { vertical-align: baseline; }
    .sub { vertical-align: sub; }
    .super { vertical-align: super; }
    .text-top { vertical-align: text-top; }
    .text-bottom { vertical-align: text-bottom; }
    .middle { vertical-align: middle; }
    .top { vertical-align: top; }
    .bottom { vertical-align: bottom; }
    .percent-50 { vertical-align: 50%; }
  </style>
</head>
<body>

  <div class="container">
    <span class="baseline">baseline</span>
    <span class="sub">sub</span>
    <span class="super">super</span>
    <span class="text-top">text-top</span>
    <span class="text-bottom">text-bottom</span>
    <span class="middle">middle</span>
    <span class="top">top</span>
    <span class="bottom">bottom</span>
    <span class="percent-50">50%</span>
  </div>

</body>
</html>
```

---

# Exercise 1: Horizontal Alignment

## Requirements

* Create styles for:

    * `.left`
    * `.right`
    * `.center`
    * `.justify`
* Apply correct `text-align` values.

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .left {
      text-align: left;
    }

    .right {
      text-align: right;
    }

    .center {
      text-align: center;
    }

    .justify {
      text-align: justify;
    }
  </style>
</head>
<body>

  <p class="left">Left aligned paragraph.</p>
  <p class="right">Right aligned paragraph.</p>
  <p class="center">Centered paragraph.</p>
  <p class="justify">
    This paragraph is justified so that the text stretches evenly
    between the left and right edges of the container.
  </p>

</body>
</html>
```

---

# Exercise 2: Vertical Alignment

## Requirements

Create styles for:

* `.baseline`
* `.sub`
* `.super`
* `.text-top`
* `.text-bottom`
* `.middle`
* `.top`
* `.bottom`
* `.percent-50`

Assign correct `vertical-align` values.

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      height: 100px;
      border: 1px solid black;
      font-size: 20px;
    }

    .baseline { vertical-align: baseline; }
    .sub { vertical-align: sub; }
    .super { vertical-align: super; }
    .text-top { vertical-align: text-top; }
    .text-bottom { vertical-align: text-bottom; }
    .middle { vertical-align: middle; }
    .top { vertical-align: top; }
    .bottom { vertical-align: bottom; }
    .percent-50 { vertical-align: 50%; }
  </style>
</head>
<body>

  <div class="container">
    <span class="baseline">baseline</span>
    <span class="sub">sub</span>
    <span class="super">super</span>
    <span class="text-top">text-top</span>
    <span class="text-bottom">text-bottom</span>
    <span class="middle">middle</span>
    <span class="top">top</span>
    <span class="bottom">bottom</span>
    <span class="percent-50">50%</span>
  </div>

</body>
</html>
```

---

# Summary

| Property         | Controls                              |
| ---------------- | ------------------------------------- |
| `text-align`     | Horizontal alignment of text          |
| `vertical-align` | Vertical alignment of inline elements |

Understanding these properties helps you properly position text and inline elements, improving layout structure and visual presentation in web design.

---