# Text Decoration in CSS

CSS provides several properties for styling and decorating text on web pages. The main properties covered in this section are:

* `text-decoration` → Adds decorative lines to text
* `text-transform` → Changes letter case
* `text-shadow` → Adds shadow effects to text

These properties make text more expressive, visually appealing, and easier to read.

---

# 7.1 The `text-decoration` Property

The `text-decoration` property controls decorative lines applied to text, such as:

* Underlines
* Overlines
* Strikethrough (line-through)

It also allows you to control:

* Decoration color
* Decoration style
* Decoration thickness

---

## Syntax

```css
selector {
  text-decoration: value;
}
```

---

## Basic Values

| Value          | Description                             |
| -------------- | --------------------------------------- |
| `none`         | Removes all decorations                 |
| `underline`    | Adds a line below the text              |
| `overline`     | Adds a line above the text              |
| `line-through` | Adds a strikethrough line               |
| `blink`        | Makes text blink (not widely supported) |

---

## Additional Decoration Properties

| Property                    | Description                                           |
| --------------------------- | ----------------------------------------------------- |
| `text-decoration-color`     | Sets the color of the line                            |
| `text-decoration-style`     | Sets line style (solid, double, dotted, dashed, wavy) |
| `text-decoration-thickness` | Sets line thickness                                   |

---

## Usage Example

### CSS

```css
.underline {
  text-decoration: underline;
}

.overline {
  text-decoration: overline;
}

.line-through {
  text-decoration: line-through;
}

.custom-decoration {
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
```

### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .underline { text-decoration: underline; }
    .overline { text-decoration: overline; }
    .line-through { text-decoration: line-through; }
    .custom-decoration {
      text-decoration: underline;
      text-decoration-style: wavy;
      text-decoration-color: red;
    }
  </style>
</head>
<body>

  <p class="underline">This text is underlined.</p>
  <p class="overline">This text has a line above it.</p>
  <p class="line-through">This text is struck through.</p>
  <p class="custom-decoration">
    This text is underlined with a wavy red line.
  </p>

</body>
</html>
```

---

# 7.2 The `text-transform` Property

The `text-transform` property changes the case of text automatically using CSS.

It is useful for:

* Headings
* Buttons
* Labels
* Formatting consistency

---

## Syntax

```css
selector {
  text-transform: value;
}
```

---

## Values of `text-transform`

| Value        | Description                                              |
| ------------ | -------------------------------------------------------- |
| `none`       | No change (default)                                      |
| `capitalize` | First letter of each word uppercase                      |
| `uppercase`  | All letters uppercase                                    |
| `lowercase`  | All letters lowercase                                    |
| `full-width` | Converts text to full-width characters (limited support) |

---

## Usage Example

### CSS

```css
.capitalize {
  text-transform: capitalize;
}

.uppercase {
  text-transform: uppercase;
}

.lowercase {
  text-transform: lowercase;
}
```

### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .capitalize { text-transform: capitalize; }
    .uppercase { text-transform: uppercase; }
    .lowercase { text-transform: lowercase; }
  </style>
</head>
<body>

  <p class="capitalize">
    this text will have each word capitalized.
  </p>

  <p class="uppercase">
    this text will be all uppercase.
  </p>

  <p class="lowercase">
    THIS TEXT WILL BE ALL LOWERCASE.
  </p>

</body>
</html>
```

---

# 7.3 The `text-shadow` Property

The `text-shadow` property adds shadow effects to text.

It enhances:

* Visual design
* Readability on backgrounds
* Creative typography effects

---

## Syntax

```css
selector {
  text-shadow: offset-x offset-y blur-radius color;
}
```

---

## Values Explained

| Value         | Description                |
| ------------- | -------------------------- |
| `offset-x`    | Horizontal shadow position |
| `offset-y`    | Vertical shadow position   |
| `blur-radius` | Optional blur amount       |
| `color`       | Shadow color               |

---

## Single Shadow Example

```css
.text-shadow {
  text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);
}
```

Explanation:

* 2px → horizontal offset
* 3px → vertical offset
* 4px → blur radius
* rgba(0,0,0,0.5) → semi-transparent black

---

## Multiple Shadows Example

```css
.multiple-shadows {
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.5),
   -2px -2px 4px rgba(255, 255, 255, 0.5);
}
```

This creates layered shadow effects for a more complex look.

---

# Exercise 1: Text Decoration

## Requirements

Create styles for:

* `.underline`
* `.overline`
* `.line-through`
* `.custom-decoration`

### Conditions:

* `.underline` → `text-decoration: underline`
* `.overline` → `text-decoration: overline`
* `.line-through` → `text-decoration: line-through`
* `.custom-decoration` → underline with wavy red line

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .underline {
      text-decoration: underline;
    }

    .overline {
      text-decoration: overline;
    }

    .line-through {
      text-decoration: line-through;
    }

    .custom-decoration {
      text-decoration: underline;
      text-decoration-style: wavy;
      text-decoration-color: red;
    }
  </style>
</head>
<body>

  <p class="underline">Underlined text.</p>
  <p class="overline">Overlined text.</p>
  <p class="line-through">Strikethrough text.</p>
  <p class="custom-decoration">
    Underline with wavy red line.
  </p>

</body>
</html>
```

---

# Exercise 2: Text Transformation

## Requirements

Create styles for:

* `.capitalize`
* `.uppercase`
* `.lowercase`

### Conditions:

* `.capitalize` → `text-transform: capitalize`
* `.uppercase` → `text-transform: uppercase`
* `.lowercase` → `text-transform: lowercase`

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .capitalize {
      text-transform: capitalize;
    }

    .uppercase {
      text-transform: uppercase;
    }

    .lowercase {
      text-transform: lowercase;
    }
  </style>
</head>
<body>

  <p class="capitalize">
    this text will have each word capitalized.
  </p>

  <p class="uppercase">
    this text will be all uppercase.
  </p>

  <p class="lowercase">
    THIS TEXT WILL BE ALL LOWERCASE.
  </p>

</body>
</html>
```

---

# Summary

| Property          | Purpose                                    |
| ----------------- | ------------------------------------------ |
| `text-decoration` | Adds underline, overline, or strikethrough |
| `text-transform`  | Changes letter case                        |
| `text-shadow`     | Adds shadow effects                        |

Mastering these properties allows you to create visually rich and professionally styled text in web design.

---