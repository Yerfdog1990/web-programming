# 7. Pseudo-elements for Text Styling

CSS provides special pseudo-elements that allow developers to style **specific parts of text** without modifying the HTML structure. Two of the most useful pseudo-elements for typography are:

* `::first-letter`
* `::first-line`

These pseudo-elements help improve **readability, visual hierarchy, and typography aesthetics** on web pages.

They are commonly used in:

* Blog articles
* News websites
* Magazines
* Editorial layouts

---

# 7.1 Pseudo-element `::first-letter`

The **`::first-letter` pseudo-element** allows you to style the **first letter of a block of text**.

It is frequently used to create **decorative typography effects**, such as **drop caps**, where the first letter is enlarged and styled differently from the rest of the text.

---

## Syntax

```css
selector::first-letter {
  /* styles */
}
```

---

## Example: Basic `::first-letter` Styling

In this example, the first letter of a paragraph becomes **larger, bold, and blue**.

### CSS

```css
/* Styling the first letter of a paragraph */

p::first-letter {
  font-size: 2em;
  font-weight: bold;
  color: #3498db;
  float: left;
  margin-right: 0.1em;
}
```

### Explanation

* `font-size: 2em` enlarges the letter
* `font-weight: bold` makes it bold
* `color` changes its color
* `float: left` creates the **drop cap effect**
* `margin-right` creates space between the letter and text

---

## Supported Properties for `::first-letter`

The `::first-letter` pseudo-element supports several CSS properties:

| Property        | Purpose                 |
| --------------- | ----------------------- |
| font            | Controls font styling   |
| color           | Changes text color      |
| background      | Adds background color   |
| margin          | Adds spacing            |
| padding         | Adds internal spacing   |
| border          | Adds borders            |
| float           | Allows drop cap effect  |
| text-transform  | Changes text case       |
| text-decoration | Adds underline/overline |

These properties allow flexible styling of the first letter.

---

## Advanced Example of `::first-letter`

This example adds **additional visual effects** such as a **text shadow**.

### CSS

```css
/* Advanced first letter styling */

p::first-letter {
  font-size: 3em;
  font-weight: bold;
  color: #e74c3c;
  float: left;
  margin-right: 0.2em;
  line-height: 1;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
}
```

### Result

The first letter becomes:

* Large
* Bold
* Red
* With a subtle shadow effect

This style is commonly used in **editorial websites and blogs**.

---

# 7.2 Pseudo-element `::first-line`

The **`::first-line` pseudo-element** allows developers to style the **first line of a block of text**.

This is often used to:

* Emphasize opening lines
* Improve readability
* Create typographic contrast

---

## Syntax

```css
selector::first-line {
  /* styles */
}
```

---

## Example of Using `::first-line`

This example makes the first line:

* Bold
* Green
* With a gray background

### CSS

```css
/* Styling the first line of a paragraph */

p::first-line {
  font-weight: bold;
  color: #2ecc71;
  background-color: #f0f0f0;
}
```

### Explanation

* `font-weight: bold` emphasizes the line
* `color` changes the text color
* `background-color` highlights the line

---

## Supported Properties for `::first-line`

The `::first-line` pseudo-element supports several properties:

| Property        | Purpose                          |
| --------------- | -------------------------------- |
| font            | Controls typography              |
| color           | Changes text color               |
| background      | Adds background color            |
| margin          | Adds spacing                     |
| padding         | Adds spacing                     |
| border          | Adds borders                     |
| line-height     | Adjusts spacing between lines    |
| text-transform  | Changes text case                |
| text-decoration | Adds underline                   |
| letter-spacing  | Controls spacing between letters |
| word-spacing    | Controls spacing between words   |

---

## Advanced Example of `::first-line`

This example applies **additional typographic effects**.

### CSS

```css
/* Advanced first line styling */

p::first-line {
  font-weight: bold;
  color: #e67e22;
  background-color: #f9f9f9;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  word-spacing: 0.2em;
}
```

### Effects

The first line becomes:

* Uppercase
* Bold
* Orange
* With increased letter spacing
* With increased word spacing

This improves **visual emphasis**.

---

# 7.3 Combined Use of `::first-letter` and `::first-line`

These pseudo-elements can be used together to create **rich typographic effects**.

This combination is common in **magazine-style layouts**.

---

## Combined Usage Example

### CSS

```css
/* Styling first letter */

p::first-letter {
  font-size: 2.5em;
  font-weight: bold;
  color: #3498db;
  float: left;
  margin-right: 0.1em;
}

/* Styling first line */

p::first-line {
  font-weight: bold;
  color: #2ecc71;
  background-color: #f0f0f0;
}
```

### Result

* First letter: **large blue drop cap**
* First line: **bold and green with gray background**

This produces an **editorial-style paragraph layout**.

---

# Complete Example

### CSS

```css
/* Styling first letter */

p::first-letter {
  font-size: 2.5em;
  font-weight: bold;
  color: #3498db;
  float: left;
  margin-right: 0.1em;
}

/* Styling first line */

p::first-line {
  font-weight: bold;
  color: #2ecc71;
  background-color: #f0f0f0;
}
```

---

### HTML

```html
<!DOCTYPE html>
<html>
<head>
<title>First Letter and First Line Example</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Curabitur blandit tempus porttitor.
</p>

</body>
</html>
```

---

# Exercises

# Exercise 1: First Line Styling

### Task

Style the **first line of each paragraph**.

### Requirements

* Text must be **uppercase**
* `letter-spacing` must be **0.1em**
* `word-spacing` must be **0.2em**
* Text color must be **#34495e**
* Background must be **#ecf0f1**

---

## Solution

```css
p::first-line {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  word-spacing: 0.2em;
  color: #34495e;
  background-color: #ecf0f1;
}
```

### Explanation

* `text-transform: uppercase` converts letters to uppercase
* `letter-spacing` increases spacing between letters
* `word-spacing` increases spacing between words
* `color` sets dark blue text
* `background-color` adds light gray background

---

# Exercise 2: Combined Styling

### Task

Style both the **first letter** and the **first line**.

### Requirements

First letter:

* Font size **2em**
* Bold
* Color **#e74c3c**
* Right margin **0.1em**

First line:

* Bold
* Color **#e67e22**
* Background **#fffde7**

---

## Solution

```css
/* First letter */

p::first-letter {
  font-size: 2em;
  font-weight: bold;
  color: #e74c3c;
  margin-right: 0.1em;
}

/* First line */

p::first-line {
  font-weight: bold;
  color: #e67e22;
  background-color: #fffde7;
}
```

---

# Summary

Pseudo-elements **`::first-letter`** and **`::first-line`** are powerful tools for enhancing **text styling and typography**.

### `::first-letter`

Used to style the **first letter of a block of text**.

Common uses:

* Drop caps
* Decorative typography
* Emphasized paragraph openings

---

### `::first-line`

Used to style the **first line of a text block**.

Common uses:

* Highlighting introduction lines
* Improving readability
* Creating typographic emphasis

---

### Key Benefits

Using these pseudo-elements helps developers:

* Create **professional typography**
* Improve **visual hierarchy**
* Enhance **user readability**
* Maintain **clean HTML markup**

They are widely used in **editorial websites, blogs, and modern web design**.

---

