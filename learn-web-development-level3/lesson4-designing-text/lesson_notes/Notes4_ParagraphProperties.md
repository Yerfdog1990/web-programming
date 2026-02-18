# Paragraph Properties in CSS

Paragraph properties help control the structure, readability, and visual formatting of text blocks.

Two important paragraph properties are:

* `text-indent` → controls the indentation of the first line
* `text-align-last` → controls the alignment of the last line

These properties are especially useful in long-form content such as articles, blog posts, and documents.

---

# 9.1 The `text-indent` Property

The `text-indent` property sets the indentation of the **first line** of a block element (like `<p>`).

It is commonly used to:

* Create traditional paragraph formatting
* Improve readability
* Visually separate paragraphs

---

## Syntax

```css
selector {
  text-indent: value;
}
```

---

## Values of `text-indent`

### 1️⃣ Absolute Values

Fixed units such as:

* `px`
* `pt`
* `cm`
* `em`
* `rem`

Example:

```css
text-indent: 20px;
```

---

### 2️⃣ Percentage Values

Relative to the **width of the containing block**.

Example:

```css
text-indent: 5%;
```

If the container is 400px wide:

```
5% of 400px = 20px
```

---

### 3️⃣ Negative Values

Moves the first line **outside** the container’s left boundary.

Example:

```css
text-indent: -20px;
```

Useful for:

* Hanging indents
* Special formatting styles

---

## Example Usage

### CSS

```css
.indent-20px {
  text-indent: 20px;
}

.indent-5percent {
  text-indent: 5%;
}

.indent-negative {
  text-indent: -20px;
}
```

### HTML

```html
<p class="indent-20px">
  This is a paragraph with the first line indented by 20 pixels.
</p>

<p class="indent-5percent">
  This is a paragraph with the first line indented by 5 percent.
</p>

<p class="indent-negative">
  This paragraph has a negative indent.
</p>
```

---

# 9.2 The `text-align-last` Property

The `text-align-last` property controls how the **last line of a paragraph** is aligned.

It is most commonly used with:

```css
text-align: justify;
```

Because justified text often leaves the last line uneven.

---

## Syntax

```css
selector {
  text-align-last: value;
}
```

---

## Values

| Value     | Description              |
| --------- | ------------------------ |
| `auto`    | Default alignment        |
| `left`    | Align last line to left  |
| `right`   | Align last line to right |
| `center`  | Center the last line     |
| `justify` | Justify the last line    |

---

## Example Usage

### CSS

```css
.justify-left {
  text-align: justify;
  text-align-last: left;
}

.justify-right {
  text-align: justify;
  text-align-last: right;
}

.justify-center {
  text-align: justify;
  text-align-last: center;
}

.justify-justify {
  text-align: justify;
  text-align-last: justify;
}
```

### HTML

```html
<p class="justify-left">
  This paragraph is justified, but the last line is aligned left.
</p>

<p class="justify-right">
  This paragraph is justified, but the last line is aligned right.
</p>

<p class="justify-center">
  This paragraph is justified, but the last line is centered.
</p>

<p class="justify-justify">
  This paragraph is justified, and the last line is also justified.
</p>
```

---

# 9.3 Using `text-indent` and `text-align-last` Together

These properties can be combined to create structured, professional text formatting.

---

## Example

### CSS

```css
.styled-paragraph {
  text-indent: 30px;
  text-align: justify;
  text-align-last: right;
  width: 300px;
  border: 1px solid black;
  padding: 10px;
}
```

### HTML

```html
<p class="styled-paragraph">
  This paragraph has a 30-pixel first line indent, justified text,
  and the last line aligned to the right. This demonstrates
  using text-indent and text-align-last together.
</p>
```

---

## Code Explanation

```css
text-indent: 30px;
```

→ Indents first line by 30 pixels.

```css
text-align: justify;
```

→ Spreads text evenly across width.

```css
text-align-last: right;
```

→ Aligns only the last line to the right.

```css
width: 300px;
```

→ Defines container width.

```css
border: 1px solid black;
```

→ Adds visible border.

```css
padding: 10px;
```

→ Adds internal spacing.

---

# Exercise 1: First Line Indent

## Requirements

* Add three paragraphs.
* First paragraph → indent 20px.
* Second paragraph → indent 5%.
* Third paragraph → indent -20px.

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .indent-20 {
      text-indent: 20px;
    }

    .indent-5 {
      text-indent: 5%;
    }

    .indent-negative {
      text-indent: -20px;
    }
  </style>
</head>
<body>

  <p class="indent-20">
    First paragraph with 20px indent.
  </p>

  <p class="indent-5">
    Second paragraph with 5 percent indent.
  </p>

  <p class="indent-negative">
    Third paragraph with negative 20px indent.
  </p>

</body>
</html>
```

---

# Exercise 2: Aligning the Last Line

## Requirements

* Create four justified paragraphs.
* Align last line:

    * First → left
    * Second → right
    * Third → center
    * Fourth → justify

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .left-last {
      text-align: justify;
      text-align-last: left;
    }

    .right-last {
      text-align: justify;
      text-align-last: right;
    }

    .center-last {
      text-align: justify;
      text-align-last: center;
    }

    .justify-last {
      text-align: justify;
      text-align-last: justify;
    }
  </style>
</head>
<body>

  <p class="left-last">
    This paragraph is justified, but the last line is aligned left.
  </p>

  <p class="right-last">
    This paragraph is justified, but the last line is aligned right.
  </p>

  <p class="center-last">
    This paragraph is justified, but the last line is centered.
  </p>

  <p class="justify-last">
    This paragraph is justified and the last line is also justified.
  </p>

</body>
</html>
```

---

# Summary

| Property          | Purpose                             |
| ----------------- | ----------------------------------- |
| `text-indent`     | Controls first line indentation     |
| `text-align-last` | Controls alignment of the last line |

These paragraph properties allow you to create:

* Traditional document formatting
* Clean justified text layouts
* Structured and professional typography

They are essential tools for advanced text styling in frontend development.

---