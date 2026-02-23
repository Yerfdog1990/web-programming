# 8. Borders

Borders are an essential part of web design. They help:

* Highlight elements
* Separate content
* Improve layout clarity
* Enhance visual structure

CSS provides several properties to create and style borders, including control over:

* Width
* Style
* Color
* Rounded corners

---

# 8.1 Border Property

## Main Parameters

You can define borders using three individual properties:

* `border-width`
* `border-style`
* `border-color`

### Full Syntax

```css
element {
  border-width: width;
  border-style: style;
  border-color: color;
}
```

### Example

```css
.border-full {
  border-width: 2px;
  border-style: solid;
  border-color: red;
}
```

---

## Shorthand Property

The `border` property allows you to define width, style, and color in one line.

### Shorthand Syntax

```css
element {
  border: width style color;
}
```

### Example

```css
.border-compact {
  border: 2px solid red;
}
```

### Complete Example with HTML

```html
<!DOCTYPE html>
<html>
<head>
<style>
.border-compact {
  border: 2px solid red;
  margin: 10px;
  padding: 10px;
}

.border-full {
  border-width: 2px;
  border-style: solid;
  border-color: red;
  margin: 10px;
  padding: 10px;
}
</style>
</head>
<body>

<div class="border-compact">Shorthand</div>
<div class="border-full">Full Syntax</div>

</body>
</html>
```

---

# 8.2 Border Width: `border-width`

The `border-width` property controls how thick the border is.

## Accepted Values

* Pixels (`px`)
* Points (`pt`)
* Percentages (`%`)
* Keywords:

    * `thin`
    * `medium`
    * `thick`

### Syntax

```css
element {
  border-width: width;
}
```

### Example

```html
<!DOCTYPE html>
<html>
<head>
<style>
.border-thin {
  border: thin solid black;
  margin: 10px;
}

.border-medium {
  border: medium solid black;
  margin: 10px;
}

.border-thick {
  border: thick solid black;
  margin: 10px;
}

.border-custom {
  border-width: 5px;
  border-style: solid;
  border-color: black;
  margin: 10px;
}
</style>
</head>
<body>

<div class="border-thin">Thin Border</div>
<div class="border-medium">Medium Border</div>
<div class="border-thick">Thick Border</div>
<div class="border-custom">5px Border</div>

</body>
</html>
```

---

# 8.3 Border Style: `border-style`

The `border-style` property defines how the border looks.

## Available Styles

* `none` — no border
* `solid` — solid line
* `dotted` — dotted line
* `dashed` — dashed line
* `double` — double line
* `groove` — carved look
* `ridge` — raised look
* `inset` — pressed inward
* `outset` — raised outward

### Syntax

```css
element {
  border-style: style;
}
```

### Example

```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
  margin: 8px;
  padding: 8px;
}

.border-none { border: 3px none blue; }
.border-solid { border: 3px solid blue; }
.border-dotted { border: 3px dotted blue; }
.border-dashed { border: 3px dashed blue; }
.border-double { border: 3px double blue; }
.border-groove { border: 3px groove blue; }
.border-ridge { border: 3px ridge blue; }
.border-inset { border: 3px inset blue; }
.border-outset { border: 3px outset blue; }
</style>
</head>
<body>

<div class="border-none">None</div>
<div class="border-solid">Solid</div>
<div class="border-dotted">Dotted</div>
<div class="border-dashed">Dashed</div>
<div class="border-double">Double</div>
<div class="border-groove">Groove</div>
<div class="border-ridge">Ridge</div>
<div class="border-inset">Inset</div>
<div class="border-outset">Outset</div>

</body>
</html>
```

---

# 8.4 Border Color: `border-color`

The `border-color` property sets the color of the border.

## Supported Color Formats

* Color names (`red`, `blue`)
* Hexadecimal (`#3498db`)
* RGB (`rgb(52, 152, 219)`)
* RGBA (`rgba(52, 152, 219, 0.5)`)
* HSL (`hsl(204, 70%, 53%)`)
* HSLA

### Syntax

```css
element {
  border-color: color;
}
```

### Example

```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
  border: 2px solid;
  margin: 10px;
  padding: 10px;
}

.border-red { border-color: red; }
.border-blue { border-color: blue; }
.border-green { border-color: green; }
.border-rgba { border-color: rgba(255, 0, 0, 0.5); }
</style>
</head>
<body>

<div class="border-red">Red Border</div>
<div class="border-blue">Blue Border</div>
<div class="border-green">Green Border</div>
<div class="border-rgba">Semi-transparent Red Border</div>

</body>
</html>
```

---

# 8.5 Rounded Corners with `border-radius`

The `border-radius` property creates rounded corners.

## Syntax

```css
element {
  border-radius: radius;
}
```

## Values

### Single Value

```css
border-radius: 10px;
```

Applies the same radius to all corners.

---

### Two Values

```css
border-radius: 10px 20px;
```

* First value → top-left & bottom-right
* Second value → top-right & bottom-left

---

### Four Values

```css
border-radius: 10px 20px 30px 40px;
```

* Top-left
* Top-right
* Bottom-right
* Bottom-left

---

### Example

```html
<!DOCTYPE html>
<html>
<head>
<style>
.radius-all {
  border: 2px solid black;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
}

.radius-top {
  border: 2px solid red;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px;
  margin: 10px;
}

.radius-bottom {
  border: 2px solid blue;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 10px;
  margin: 10px;
}

.radius-mixed {
  border: 2px solid green;
  border-radius: 10px 20px 30px 40px;
  padding: 10px;
  margin: 10px;
}
</style>
</head>
<body>

<div class="radius-all">Round All Corners</div>
<div class="radius-top">Round Top Corners</div>
<div class="radius-bottom">Round Bottom Corners</div>
<div class="radius-mixed">Mixed Round Corners</div>

</body>
</html>
```

---

# Exercises

---

# 📝 Exercise 1: Border Styles

### Task

Create several elements demonstrating these styles:

* solid
* dotted
* dashed
* double
* groove
* ridge
* inset
* outset

Requirements:

* Border width: 3px
* Border color: blue
* All elements must be visible

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
  margin: 8px;
  padding: 8px;
}

.solid { border: 3px solid blue; }
.dotted { border: 3px dotted blue; }
.dashed { border: 3px dashed blue; }
.double { border: 3px double blue; }
.groove { border: 3px groove blue; }
.ridge { border: 3px ridge blue; }
.inset { border: 3px inset blue; }
.outset { border: 3px outset blue; }
</style>
</head>
<body>

<div class="solid">Solid</div>
<div class="dotted">Dotted</div>
<div class="dashed">Dashed</div>
<div class="double">Double</div>
<div class="groove">Groove</div>
<div class="ridge">Ridge</div>
<div class="inset">Inset</div>
<div class="outset">Outset</div>

</body>
</html>
```

---

# 📝 Exercise 2: Border Color Formats

### Task

Create an element with:

* Border width: 3px
* Style: solid
* Colors in formats:

    * Hexadecimal `#3498db`
    * RGB `rgb(52, 152, 219)`
    * RGBA `rgba(52, 152, 219, 0.5)`
    * HSL `hsl(204, 70%, 53%)`

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
<style>
.hex {
  border: 3px solid #3498db;
  margin: 10px;
  padding: 10px;
}

.rgb {
  border: 3px solid rgb(52, 152, 219);
  margin: 10px;
  padding: 10px;
}

.rgba {
  border: 3px solid rgba(52, 152, 219, 0.5);
  margin: 10px;
  padding: 10px;
}

.hsl {
  border: 3px solid hsl(204, 70%, 53%);
  margin: 10px;
  padding: 10px;
}
</style>
</head>
<body>

<div class="hex">Hex Color Border</div>
<div class="rgb">RGB Color Border</div>
<div class="rgba">RGBA Color Border</div>
<div class="hsl">HSL Color Border</div>

</body>
</html>
```

---

# Final Summary

CSS borders allow you to control:

* Width (`border-width`)
* Style (`border-style`)
* Color (`border-color`)
* Rounded corners (`border-radius`)
* All at once using shorthand (`border`)

Borders improve structure, emphasize content, and enhance overall web page design. When combined with padding and margin, they become powerful tools for layout and visual presentation.

---