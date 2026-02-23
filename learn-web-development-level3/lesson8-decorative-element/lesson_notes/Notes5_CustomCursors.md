# 10. Custom Cursors

## 10.1 The `cursor` Property

CSS allows you to change the appearance of the mouse pointer when hovering over elements using the `cursor` property. This improves **interactivity**, enhances **user experience (UX)**, and makes web pages more visually engaging.

The `cursor` property defines what the mouse cursor looks like when it is positioned over an element.

Values can be:

* **Predefined cursor types**
* **Custom images**

---

## Syntax

```css
element {
   cursor: value;
}
```

---

# Predefined Cursor Values

The `cursor` property supports many predefined values.

### Common Predefined Values

| Value         | Description                                            |
| ------------- | ------------------------------------------------------ |
| `default`     | The default arrow cursor                               |
| `pointer`     | Hand cursor (usually for links and clickable elements) |
| `text`        | I-shaped text cursor                                   |
| `move`        | Move cursor (four-direction arrow)                     |
| `wait`        | Hourglass / loading cursor                             |
| `help`        | Question mark cursor                                   |
| `crosshair`   | Crosshair cursor                                       |
| `not-allowed` | Forbidden sign (circle with slash)                     |
| `grab`        | Indicates draggable item                               |
| `grabbing`    | Indicates item being dragged                           |

---

## Example: Using Predefined Values

### CSS

```css
.default-cursor {
  cursor: default;
  padding: 10px;
  border: 1px solid black;
}

.pointer-cursor {
  cursor: pointer;
  padding: 10px;
  border: 1px solid black;
}

.text-cursor {
  cursor: text;
  padding: 10px;
  border: 1px solid black;
}
```

### HTML

```html
<div class="default-cursor">Default cursor</div>
<div class="pointer-cursor">Pointer cursor</div>
<div class="text-cursor">Text cursor</div>
```

---

## Code Explanation

* `.default-cursor` → shows the normal arrow cursor
* `.pointer-cursor` → shows a hand cursor (indicates clickable element)
* `.text-cursor` → shows an I-shaped text cursor

Each element also includes:

* `padding: 10px`
* `border: 1px solid black`

---

# 10.2 Custom Values (Custom Cursors)

The `cursor` property also supports **custom images**.

You use the `url()` function to define a custom cursor image.

---

## Syntax

```css
element {
  cursor: url("custom-cursor.png"), fallback;
}
```

### Where:

* `url("custom-cursor.png")` → path to the image
* `fallback` → predefined cursor if the image fails to load

---

## Example: Custom Cursor

### CSS

```css
.custom-cursor {
  cursor: url('https://via.placeholder.com/32'), auto;
  padding: 10px;
  border: 1px solid black;
}
```

### HTML

```html
<div class="custom-cursor">Custom cursor</div>
```

---

## Code Explanation

* Sets a custom image as the cursor.
* Uses `auto` as a fallback.
* Adds padding and border for styling.

---

# Specifications and Limitations of Custom Cursors

## 1️⃣ Supported Image Formats

Custom cursors support:

* `.cur`
* `.png`
* `.jpg`
* `.gif`
* `.svg` (commonly used)

It is recommended to use formats with **transparency support**, such as **PNG**, so the cursor looks good on any background.

---

## 2️⃣ Recommended Image Size

* Recommended size: **32 × 32 pixels or smaller**
* Large images may:

    * Not display correctly
    * Be scaled improperly
    * Affect performance

---

## 3️⃣ Click Point Coordinates (Hotspot)

By default, the click point (hotspot) is at:

```
(0, 0)
```

This means the **top-left corner** of the image is the click point.

You can customize this by specifying coordinates.

---

# 10.3 Specifying Focus (Hotspot) Coordinates

You can define the exact click point inside the image.

---

## Syntax

```css
element {
  cursor: url("custom-cursor.png") x y, fallback;
}
```

### Where:

* `x` → horizontal coordinate
* `y` → vertical coordinate
* Coordinates are measured from the top-left corner.

---

## Example: Custom Cursor with Focus Coordinates

### CSS

```css
.custom-cursor-focus {
  cursor: url('https://via.placeholder.com/32') 16 16, auto;
  padding: 10px;
  border: 1px solid black;
}
```

### HTML

```html
<div class="custom-cursor-focus">
  Custom cursor with focus
</div>
```

---

## Code Explanation

* `url('https://via.placeholder.com/32')` → custom image
* `16 16` → sets the center of the 32×32 image as the hotspot
* `auto` → fallback cursor
* Padding and border added for visibility

---

# Practical Uses of Custom Cursors

### 1️⃣ Improving UI/UX

Custom cursors make interfaces more intuitive and engaging.

### 2️⃣ Interactive Elements

Useful for:

* Buttons
* Links
* Icons
* Drag-and-drop elements

### 3️⃣ Games and Applications

Custom cursors help:

* Create atmosphere
* Enhance branding
* Improve immersion

---

# Exercises

---

# Exercise 1: Predefined Cursors

## Requirements

* Create three `<div>` elements:

    * `"default-cursor"`
    * `"pointer-cursor"`
    * `"text-cursor"`
* Apply appropriate cursor values.
* Add padding and border.

---

## ✅ Solution

### HTML

```html
<div class="default-cursor">Default cursor</div>
<div class="pointer-cursor">Pointer cursor</div>
<div class="text-cursor">Text cursor</div>
```

### CSS

```css
.default-cursor {
  cursor: default;
  padding: 10px;
  border: 1px solid black;
}

.pointer-cursor {
  cursor: pointer;
  padding: 10px;
  border: 1px solid black;
}

.text-cursor {
  cursor: text;
  padding: 10px;
  border: 1px solid black;
}
```

---

# Exercise 2: Custom Cursor with Focus

## Requirements

* Create a `<div>` with class `"custom-cursor-focus"`.
* Use image:
  `https://via.placeholder.com/32`
* Set click point to `(16, 16)`
* Set fallback to `"auto"`
* Add padding and border.

---

## ✅ Solution

### HTML

```html
<div class="custom-cursor-focus">
  Custom cursor with focus
</div>
```

### CSS

```css
.custom-cursor-focus {
  cursor: url('https://via.placeholder.com/32') 16 16, auto;
  padding: 10px;
  border: 1px solid black;
}
```

---

# Summary

The `cursor` property allows you to:

* ✔ Use predefined cursor styles
* ✔ Create fully custom cursors
* ✔ Define hotspot coordinates
* ✔ Improve UI/UX
* ✔ Enhance games and applications

Key Best Practices:

* Use PNG or CUR format.
* Keep images 32×32 or smaller.
* Always define a fallback value.
* Use hotspot coordinates for accuracy.

Custom cursors are powerful tools that make web interfaces more interactive, intuitive, and visually appealing.

---