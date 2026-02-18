# Text Wrapping in CSS

Text wrapping and overflow control are very important in web design, especially when working with:

* Small containers
* Responsive layouts
* Long words or long sentences
* Limited width elements

CSS provides three key properties for controlling text behavior:

* `text-overflow`
* `white-space`
* `overflow-wrap` (formerly `word-wrap`)

---

# 8.1 The `text-overflow` Property

The `text-overflow` property controls how text is displayed when it exceeds the container’s boundaries.

⚠ Important:
`text-overflow` only works when used together with:

```css
white-space: nowrap;
overflow: hidden;
```

---

## Syntax

```css
selector {
  text-overflow: value;
}
```

---

## Values

| Value      | Description                           |
| ---------- | ------------------------------------- |
| `clip`     | Cuts off overflowing text             |
| `ellipsis` | Adds `...` at the end of clipped text |

---

## Example: Clipped Text

### CSS

```css
.container {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  border: 1px solid black;
}

.clip {
  text-overflow: clip;
}
```

### HTML

```html
<div class="container clip">
  This text will be clipped at the container's border.
</div>
```

---

## Example: Ellipsis Effect

### CSS

```css
.ellipsis {
  text-overflow: ellipsis;
}
```

### HTML

```html
<div class="container ellipsis">
  This text will be clipped and replaced with an ellipsis.
</div>
```

---

## How It Works

```css
white-space: nowrap;   /* Prevents wrapping */
overflow: hidden;      /* Hides overflowing content */
text-overflow: ellipsis; /* Adds "..." */
```

---

# 8.2 The `white-space` Property

The `white-space` property controls:

* How spaces are handled
* Whether text wraps
* Whether line breaks are preserved

---

## Syntax

```css
selector {
  white-space: value;
}
```

---

## Values

| Value          | Description                            |
| -------------- | -------------------------------------- |
| `normal`       | Default behavior (text wraps normally) |
| `nowrap`       | No wrapping, single line               |
| `pre`          | Preserves spaces and line breaks       |
| `pre-wrap`     | Preserves spaces, allows wrapping      |
| `pre-line`     | Preserves line breaks only             |
| `break-spaces` | Preserves spaces and allows wrapping   |

---

## Example: Normal Wrapping

```css
.normal {
  white-space: normal;
}
```

```html
<div class="normal">
  This text will wrap to the next line if needed.
</div>
```

---

## Example: No Wrapping

```css
.nowrap {
  white-space: nowrap;
}
```

```html
<div class="nowrap">
  This text will stay on a single line.
</div>
```

---

## Example: Preserving Spaces

```css
.pre {
  white-space: pre;
}
```

```html
<div class="pre">
  This text     preserves

  spaces and line breaks.
</div>
```

---

## Example: Pre-wrap

```css
.pre-wrap {
  white-space: pre-wrap;
}
```

```html
<div class="pre-wrap">
  This text preserves spacing
  but still wraps when needed.
</div>
```

---

# 8.3 The `overflow-wrap` Property

The `overflow-wrap` property (formerly `word-wrap`) controls how long words behave.

It prevents containers from breaking due to long, unbreakable words.

---

## Syntax

```css
selector {
  overflow-wrap: value;
}
```

---

## Values

| Value        | Description                     |
| ------------ | ------------------------------- |
| `normal`     | Words break normally            |
| `break-word` | Long words will break if needed |

---

## Example

### CSS

```css
.container {
  width: 200px;
  border: 1px solid black;
}

.normal {
  overflow-wrap: normal;
}

.break-word {
  overflow-wrap: break-word;
}
```

### HTML

```html
<div class="container normal">
  This text will wrap normally.
</div>

<div class="container break-word">
  ThislongwordWILLbreakontoanewlineifthereisnotenoughspace.
</div>
```

---

## Explanation

```css
overflow-wrap: normal;
```

* Words break using standard rules.
* Very long words may overflow.

```css
overflow-wrap: break-word;
```

* Long words break and wrap to the next line.
* Prevents layout breaking.

---

# 8.4 Combining Properties

Often, these properties are used together to control trimming and wrapping.

---

## Example: Text Trimming with Ellipsis

### CSS

```css
.container {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  border: 1px solid black;
}
```

### HTML

```html
<div class="container">
  This text will be clipped and replaced with an ellipsis if there is not enough space.
</div>
```

---

## Code Breakdown

```css
white-space: nowrap;   /* Keeps text on one line */
overflow: hidden;      /* Hides overflow */
text-overflow: ellipsis; /* Adds ... */
overflow-wrap: break-word; /* Breaks long words */
```

---

# Exercise 1: Text Trimming (Ellipsis)

## Requirements

* Create a container with:

    * width: 200px
    * border: 1px solid black
* Prevent wrapping
* Hide overflow
* Add ellipsis when text exceeds container width

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      width: 200px;
      border: 1px solid black;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  </style>
</head>
<body>

  <div class="container">
    This is a very long sentence that will not fit inside the container.
  </div>

</body>
</html>
```

---

# Exercise 2: Text Wrapping

## Requirements

* Create a container with width 200px
* Use `overflow-wrap: break-word`
* Prevent layout breaking by long words

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      width: 200px;
      border: 1px solid black;
      overflow-wrap: break-word;
    }
  </style>
</head>
<body>

  <div class="container">
    ThislongwordSHOULDbreakontoanewlineifthereisnotenoughspace.
  </div>

</body>
</html>
```

---

# Summary

| Property        | Purpose                                |
| --------------- | -------------------------------------- |
| `text-overflow` | Controls how clipped text is displayed |
| `white-space`   | Controls wrapping and space handling   |
| `overflow-wrap` | Controls breaking of long words        |

Understanding text wrapping ensures:

* Clean layouts
* Responsive behavior
* No broken containers
* Professional text presentation

Mastering these properties is essential for modern frontend development.

---