# Background Positioning

## 2.1 The `background-position` Property

The **`background-position`** property in CSS is used to set the starting position of a background image inside an element. It allows you to precisely control where the image appears within its container.

This property is especially useful for:

* Fine-tuning the appearance of background images
* Creating visually balanced layouts
* Designing more complex backgrounds
* Controlling alignment without modifying the image itself

---

## Syntax of `background-position`

```css
background-position: horizontal-position vertical-position;
```

* The **first value** sets the horizontal position.
* The **second value** sets the vertical position.
* If only **one value** is specified, the second value defaults to `center`.

Example:

```css
background-position: center;
```

This means:

```css
background-position: center center;
```

---

## Possible Values for Horizontal and Vertical Position

### 1️⃣ Keywords

#### Horizontal Alignment:

* `left` – aligns the image to the left edge
* `center` – centers the image horizontally
* `right` – aligns the image to the right edge

#### Vertical Alignment:

* `top` – aligns the image to the top edge
* `center` – centers the image vertically
* `bottom` – aligns the image to the bottom edge

---

## 2.2 Using Keywords

Keywords are the simplest way to position background images.

### 🔹 Image Positioned in the Top Left Corner

```css
div {
  background-image: url('path/to/image.jpg');
  background-position: left top;  /* Image is positioned in the top left corner */
}
```

---

### 🔹 Image Centered

```css
div {
  background-image: url('path/to/image.jpg');
  background-position: center center;  /* Image is centered */
}
```

You can also write:

```css
background-position: center;
```

---

### 🔹 Image Positioned in the Bottom Right Corner

```css
div {
  background-image: url('path/to/image.jpg');
  background-position: right bottom;  /* Image is positioned in the bottom right corner */
}
```

---

## 2.3 Using Percentage Values

Percentage values position the image relative to the **element’s dimensions**, not the image itself.

### Important Rule:

Percentages refer to the size of the container element.

### 🔹 Image Centered

```css
div {
  background-image: url('path/to/image.jpg');
  background-position: 50% 50%;  /* Image is centered */
}
```

---

### 🔹 Image Positioned in the Top Left Corner

```css
div {
  background-image: url('path/to/image.jpg');
  background-position: 0% 0%;  /* Image is positioned in the top left corner */
}
```

---

### 🔹 Image Positioned in the Bottom Right Corner

```css
div {
  background-image: url('path/to/image.jpg');
  background-position: 100% 100%;  /* Image is positioned in the bottom right corner */
}
```

---

## 2.4 Absolute Units (px, em, rem)

Absolute units allow **precise positioning** of the image.

### Using Pixels (px)

```css
div {
  background-image: url('path/to/image.jpg');
  background-position: 10px 20px;  
  /* Image is positioned 10 pixels to the right 
     and 20 pixels down from the top left corner */
}
```

This means:

* Move 10px from the left edge
* Move 20px down from the top edge

---

### Using em Units

```css
div {
  background-image: url('path/to/image.jpg');
  background-position: 2em 3em;  
  /* Image is positioned 2em to the right 
     and 3em down */
}
```

`em` values are relative to the font size of the element.

---

## 2.5 Combining Values

You can combine keywords with absolute units for more precise control.

### Example:

```css
div {
  background-image: url('path/to/image.jpg');
  background-position: left 20px top 10px;  
  /* Image is positioned 20 pixels to the right 
     and 10 pixels down from the top left corner */
}
```

This allows detailed positioning while still referencing edges.

---

# Practical Exercises

---

## ✅ Background Position (Using Keywords)

### Task:

Create three blocks and set a background image for each using keyword positioning.

### Requirements:

* Create three blocks
* Each block must contain a background image
* Use keyword positioning

### Example:

```css
.block1 {
  background-image: url('path/to/image.jpg');
  background-position: top left;
  background-repeat: no-repeat;
}

.block2 {
  background-image: url('path/to/image.jpg');
  background-position: center;
  background-repeat: no-repeat;
}

.block3 {
  background-image: url('path/to/image.jpg');
  background-position: bottom right;
  background-repeat: no-repeat;
}
```

### Expected Results:

* Block 1 → Image aligned to top left
* Block 2 → Image centered
* Block 3 → Image aligned to bottom right

---

## ✅ Background Position (Using Pixels and em)

### Task:

Create two blocks using pixel and em values for positioning.

### Requirements:

* Create two blocks
* Each must have a background image
* Use precise values for positioning

### Example:

```css
.block1 {
  background-image: url('path/to/image.jpg');
  background-position: 10px 20px;
  background-repeat: no-repeat;
}

.block2 {
  background-image: url('path/to/image.jpg');
  background-position: 2em 3em;
  background-repeat: no-repeat;
}
```

### Expected Results:

* Block 1 → Image positioned 10px right and 20px down
* Block 2 → Image positioned 2em right and 3em down

---

# Summary

The `background-position` property allows you to control where a background image appears inside an element.

You can position images using:

* ✅ Keywords (`top`, `left`, `center`, etc.)
* ✅ Percentages (`50% 50%`)
* ✅ Absolute units (`px`, `em`, `rem`)
* ✅ Combined values (`left 20px top 10px`)

Understanding this property gives you full control over layout alignment and visual design when working with background images.

---