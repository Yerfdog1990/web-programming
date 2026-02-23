# 7. Text Shadow

## 7.1 The `text-shadow` Property

The **`text-shadow`** property in CSS allows you to add shadow effects to text. It can create depth, glow effects, or 3D-like appearances, improving the visual presentation of text on a webpage.

This property gives you control over:

* Horizontal offset
* Vertical offset
* Blur radius
* Shadow color

It adds a visual highlight to text elements and can range from subtle shadows to complex multi-layered effects.

---

## Syntax

```css
element {
  text-shadow: offset-x offset-y blur-radius spread-radius color;
}
```

> Note: In practice, `text-shadow` uses:
>
> ```
> text-shadow: offset-x offset-y blur-radius color;
> ```
>
> The blur-radius and color are optional.

---

## Parameters Explained

### 1️⃣ `offset-x`

* Controls horizontal shadow movement.
* Positive → moves shadow to the right.
* Negative → moves shadow to the left.

### 2️⃣ `offset-y`

* Controls vertical shadow movement.
* Positive → moves shadow downward.
* Negative → moves shadow upward.

### 3️⃣ `blur-radius` (Optional)

* Defines how blurred the shadow is.
* Higher value → more blur.
* Default: `0` (sharp shadow).

### 4️⃣ `color` (Optional)

* Sets the shadow color.
* If not specified, the text color is used.

---

## Usage Examples

### Basic Shadow

```css
.shadow-basic {
  font-size: 24px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}
```

```html
<p class="shadow-basic">Basic Shadow</p>
```

### Explanation:

* 2px horizontal offset
* 2px vertical offset
* 2px blur radius
* Semi-transparent black color

---

### More Blur

```css
.shadow-blur {
  font-size: 24px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
```

```html
<p class="shadow-blur">Blurred Shadow</p>
```

### Explanation:

* Increased blur (5px)
* Creates a softer shadow effect

---

### Colored Shadow

```css
.shadow-color {
  font-size: 24px;
  text-shadow: 2px 2px 2px red;
}
```

```html
<p class="shadow-color">Colored Shadow</p>
```

### Explanation:

* Applies a red shadow
* Same offset and blur as basic example

---

### Multiple Shadows

You can apply multiple shadows by separating them with commas.

```css
.shadow-multiple {
  font-size: 24px;
  text-shadow: 
    2px 2px 2px rgba(0, 0, 0, 0.5),
    -2px -2px 2px rgba(0, 0, 0, 0.3);
}
```

```html
<p class="shadow-multiple">Multiple Shadows</p>
```

### Explanation:

* First shadow: bottom-right direction
* Second shadow: top-left direction
* Creates a layered 3D-style effect

---

# 7.2 Additional Examples

---

## 1️⃣ Soft Shadow (Glow Effect)

```css
.soft-shadow {
  font-size: 24px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```

```html
<p class="soft-shadow">Soft Text Shadow</p>
```

### Explanation:

* No horizontal or vertical offset (0 0)
* Large blur (10px)
* Creates a glowing effect around text

---

## 2️⃣ Bright Shadow

```css
.colorful-shadow {
  font-size: 24px;
  text-shadow: 3px 3px 5px blue;
}
```

```html
<p class="colorful-shadow">Bright Color Shadow</p>
```

### Explanation:

* 3px offset horizontally and vertically
* 5px blur radius
* Blue shadow creates a bright, noticeable effect

---

## 3️⃣ Advanced Multiple Shadows

```css
.multi-shadow {
  font-size: 24px;
  text-shadow:
    2px 2px 2px rgba(0, 0, 0, 0.5),
    -2px -2px 5px rgba(255, 0, 0, 0.5);
}
```

```html
<p class="multi-shadow">Text with Multiple Shadows</p>
```

### Explanation:

* First shadow: small offset, small blur, black
* Second shadow: opposite direction, larger blur, red
* Produces a complex layered visual effect

---

# 7.3 Key Points

## ✅ Browser Compatibility

The `text-shadow` property is supported in all modern browsers:

* Chrome
* Firefox
* Safari
* Edge
* Opera

However, always test in older browser versions if cross-browser compatibility is required.

---

## ✅ Performance Considerations

* Complex shadows with multiple layers and heavy blur can affect performance.
* This is especially noticeable on mobile devices.
* Optimize shadow usage and test across devices.

---

## ✅ Accessibility

* Shadows should not reduce text readability.
* Maintain sufficient contrast between text and background.
* Avoid excessive blur that makes text hard to read.
* Always prioritize clarity over decoration.

---

# Why Use `text-shadow`?

The `text-shadow` property:

* Adds depth and dimension
* Creates glow effects
* Enhances visual appeal
* Improves design aesthetics

From simple shadows to complex multi-layered effects, `text-shadow` is a powerful CSS tool when used responsibly.

---

# Exercises

---

## 📝 Exercise 1: Text Shadow

### Task

Create an element with:

* Font size: 24px
* Shadow offset: 2px horizontally and vertically
* Blur radius: 2px
* Shadow color: rgba(0, 0, 0, 0.5)
* Element must appear on the page

---

### ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
<style>
.text-shadow-example {
  font-size: 24px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}
</style>
</head>
<body>

<p class="text-shadow-example">
  This text has a shadow applied.
</p>

</body>
</html>
```

✔ Requirements satisfied:

* Font size = 24px
* Offset = 2px 2px
* Blur = 2px
* Color = rgba(0, 0, 0, 0.5)
* Element is placed on the page

---

## 📝 Exercise 2: Multiple Shadows

### Task

Create an element with:

* Font size: 24px
* First shadow: 2px 2px 2px rgba(0, 0, 0, 0.5)
* Second shadow: -2px -2px 5px rgba(255, 0, 0, 0.5)
* Element must appear on the page

---

### ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
<style>
.multi-shadow-example {
  font-size: 24px;
  text-shadow:
    2px 2px 2px rgba(0, 0, 0, 0.5),
    -2px -2px 5px rgba(255, 0, 0, 0.5);
}
</style>
</head>
<body>

<p class="multi-shadow-example">
  This text has multiple shadows applied.
</p>

</body>
</html>
```

✔ Requirements satisfied:

* Font size = 24px
* First shadow correctly applied
* Second shadow correctly applied
* Element appears on the page

---

# Final Summary

The `text-shadow` property is a powerful CSS feature that:

* Controls shadow position using offsets
* Adds blur for softness
* Allows color customization
* Supports multiple layered shadows

When used carefully, it enhances visual perception and depth while maintaining readability, performance, and accessibility.

---