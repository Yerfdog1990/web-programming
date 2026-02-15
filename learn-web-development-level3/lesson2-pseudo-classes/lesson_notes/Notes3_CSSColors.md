# 9. Colors in CSS

## 9.1 Ways to Specify Color in CSS

Color is a fundamental part of web design. It improves:

* Visual appeal
* Readability
* User experience
* Brand identity

CSS provides multiple ways to define colors.

### Main Ways to Specify Colors in CSS

1. Named colors
2. Hexadecimal (HEX) colors
3. RGB and RGBA
4. HSL and HSLA
5. Gradients
6. Transparency

---

# 9.2 Named Colors

CSS supports predefined color names such as:

```css
color: red;
color: blue;
color: green;
color: aliceblue;
```

### Example

```css
h1 {
  color: blue;
}
```

* ✔ Easy to read
* ✔ Good for basic styling
* ✖ Limited flexibility

---

# 9.3 RGB Color Model

RGB stands for:

* **R** – Red
* **G** – Green
* **B** – Blue

Each color value ranges from:

```
0 to 255
```

Important:

1. One byte contains **256 values** → from 0 to 255
2. 0 = minimum intensity
3. 255 = maximum intensity

---

## Syntax

```css
color: rgb(red, green, blue);
```

---

## Basic RGB Examples

```css
color: rgb(255, 0, 0);   /* Red */
color: rgb(0, 255, 0);   /* Green */
color: rgb(0, 0, 255);   /* Blue */
```

---

## Example: Setting Background Color

```css
body {
  background-color: rgb(240, 248, 255); /* aliceblue */
}
```

---

## RGB Exercise

### Task

Use RGB to:

* Set page background to aliceblue → rgb(240, 248, 255)
* Set all `<h1>` text to red → rgb(255, 0, 0)
* Set all `<p>` text to green → rgb(0, 128, 0)

---

### Sample Solution

```css
body {
  background-color: rgb(240, 248, 255);
}

h1 {
  color: rgb(255, 0, 0);
}

p {
  color: rgb(0, 128, 0);
}
```

* ✔ Background becomes aliceblue
* ✔ Headings become red
* ✔ Paragraphs become green

---

# 9.4 HEX Color Model

HEX (Hexadecimal) represents colors using:

```
#RRGGBB
```

Each pair (RR, GG, BB) ranges from:

```
00 to FF
```

Important:

In hexadecimal:

* 00 = minimum (0)
* FF = maximum (255)

---

## Syntax

```css
color: #ff0000;  /* Red */
color: #00ff00;  /* Green */
color: #0000ff;  /* Blue */
```

---

## Example

```css
h1 {
  color: #4CAF50;
}
```

---

## HEX Shorthand

If values repeat, you can shorten:

```
#ffffff → #fff
#000000 → #000
```

---

# 9.5 HSL Color Model

HSL stands for:

* **H** – Hue (0–360 degrees)
* **S** – Saturation (0%–100%)
* **L** – Lightness (0%–100%)

---

## Syntax

```css
color: hsl(hue, saturation, lightness);
```

---

## Examples

```css
color: hsl(0, 100%, 50%);    /* Red */
color: hsl(120, 100%, 50%);  /* Green */
color: hsl(240, 100%, 50%);  /* Blue */
```

---

## Example

```css
p {
  color: hsl(210, 100%, 50%);
}
```

---

## Why Use HSL?

* ✔ Easier to adjust brightness
* ✔ Easier to create color variations
* ✔ Better for design systems

---

# 9.6 Transparency: RGBA and HSLA

To add transparency, we use:

* RGBA
* HSLA

They add a fourth value:

```
Alpha (opacity)
```

Alpha ranges from:

```
0 → fully transparent
1 → fully opaque
```

---

# RGBA Model

RGBA = Red, Green, Blue, Alpha

---

## Syntax

```css
color: rgba(red, green, blue, alpha);
```

---

## Examples

```css
color: rgba(255, 0, 0, 0.5);
color: rgba(0, 255, 0, 0.3);
color: rgba(0, 0, 255, 0.7);
```

---

## Example

```css
div {
  background-color: rgba(255, 99, 71, 0.6);
}
```

---

# RGBA Exercise

### Task

Use RGBA to:

* Set `<div>` background to semi-transparent tomato → rgba(255, 99, 71, 0.6)
* Set `<button>` background to semi-transparent green → rgba(0, 128, 0, 0.5)

---

### Sample Solution

```css
div {
  background-color: rgba(255, 99, 71, 0.6);
}

button {
  background-color: rgba(0, 128, 0, 0.5);
}
```

* ✔ Div becomes semi-transparent tomato
* ✔ Button becomes semi-transparent green

---

# HSLA Model

HSLA = Hue, Saturation, Lightness, Alpha

---

## Syntax

```css
color: hsla(hue, saturation, lightness, alpha);
```

---

## Examples

```css
color: hsla(0, 100%, 50%, 0.5);
color: hsla(120, 100%, 50%, 0.3);
color: hsla(240, 100%, 50%, 0.7);
```

---

# 9.7 Gradients in CSS

Gradients allow smooth transitions between colors.

---

## Linear Gradient

```css
background: linear-gradient(red, blue);
```

---

## Example

```css
body {
  background: linear-gradient(to right, red, yellow);
}
```

---

## Multiple Colors

```css
background: linear-gradient(to bottom, red, orange, yellow);
```

---

# 9.8 Transparency Using Opacity

You can also use:

```css
opacity: 0.5;
```

⚠ Warning:

`opacity` affects the entire element, including text.

RGBA/HSLA affects only the specific color.

---

# Comparison of Color Models

| Model | Easy          | Supports Transparency | Best Use             |
| ----- | ------------- | --------------------- | -------------------- |
| Named | Very Easy     | No                    | Simple designs       |
| HEX   | Easy          | No                    | Precise color values |
| RGB   | Easy          | No                    | Basic color mixing   |
| RGBA  | Easy          | Yes                   | Transparent colors   |
| HSL   | Very Flexible | No                    | Adjusting brightness |
| HSLA  | Flexible      | Yes                   | Transparent HSL      |

---

# Best Practices

* ✔ Use HSL for design systems
* ✔ Use RGBA for overlays
* ✔ Avoid too many bright colors
* ✔ Maintain good contrast for readability
* ✔ Test colors for accessibility

---

# Key Takeaways

* CSS supports multiple color formats
* RGB uses values from 0 to 255
* HEX uses hexadecimal values from 00 to FF
* HSL uses hue, saturation, and lightness
* RGBA and HSLA support transparency
* Gradients create smooth color transitions

---
