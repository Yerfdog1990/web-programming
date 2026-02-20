# Multi-Level Background in CSS

## 4.1 Basic Principles

CSS allows you to apply **multiple background images** to a single element. This feature enables you to create complex visual effects such as overlays, decorative corners, layered textures, and transparent image combinations — all without extra HTML elements.

### 🔹 Syntax

To add multiple background images, separate each image with a comma:

```css
element {
  background-image: url(image1.png), url(image2.png), url(image3.png);
}
```

Each background layer can have its own configuration using comma-separated values in related properties.

---

## Properties That Support Multiple Values

When using multiple backgrounds, the following properties also accept **comma-separated values**, applied in the same order as the images:

* `background-image`
* `background-position`
* `background-size`
* `background-repeat`
* `background-origin`
* `background-clip`
* `background-attachment`

Example:

```css
element {
  background-image: url(img1.png), url(img2.png);
  background-position: center, top left;
  background-repeat: no-repeat, repeat;
}
```

---

## 🔹 Layer Order

The order of images is very important:

* The **first image** is placed on top (closest to the user).
* The **last image** is placed at the bottom (furthest back).

```css
background-image: url(top-image.png), url(bottom-image.png);
```

Here:

* `top-image.png` appears above `bottom-image.png`.

---

# 4.2 Overlaying Images

One common use case is overlaying one image on top of another.

### Example: Simple Image Overlay

### HTML

```html
<div class="multi-bg"></div>
```

### CSS

```css
.multi-bg {
  width: 300px;
  height: 300px;
  background-image: url('./img/emoji-alien.jpg'),
                    url('./img/emoji-baby-chick.jpg');
  background-position: center, top left;
  background-repeat: no-repeat, no-repeat;
  border: 1px solid #000;
}
```

### Explanation

* Two background images are applied.
* The first image (alien) is centered.
* The second image (chick) appears in the top-left corner.
* Both images do not repeat.

Because of layering:

* The alien image appears above the chick image.

---

# 4.3 Using Multiple Images with Different Sizes

You can control the size of each image independently using `background-size`.

### Example: Different Image Sizes

### HTML

```html
<div class="multi-bg-sizes"></div>
```

### CSS

```css
.multi-bg-sizes {
  width: 300px;
  height: 300px;
  background-image: url('./img/emoji-alien.jpg'),
                    url('./img/emoji-baby-chick.jpg');
  background-position: top left, bottom right;
  background-repeat: no-repeat, no-repeat;
  background-size: 60% 60%, 50% 50%;
  border: 1px solid #000;
}
```

### Explanation

```css
background-size: 60% 60%, 50% 50%;
```

* First image = 60% width and 60% height of the element.
* Second image = 50% width and 50% height.
* Images are positioned in opposite corners.
* No repetition occurs.

---

# 4.4 Transparent Background Using Multiple Images

Applying `opacity` directly to an element affects **everything** (text + background).
To make only the background transparent, use a pseudo-element like `::before`.

---

## Example: Transparent Background with ::before

### HTML

```html
<div class="multi-bg-opacity">
  There’s some very long and interesting text here!
  Note: its background doesn’t cover it 👽🐤
</div>
```

### CSS

```css
.multi-bg-opacity {
  width: 600px;
  height: 300px;
  border: 1px solid #000;
  position: relative;
  padding: 20px;
}

.multi-bg-opacity::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-image: url('./img/emoji-alien.jpg'),
                    url('./img/emoji-baby-chick.jpg');
  background-position: top left, top right;
  background-repeat: no-repeat, no-repeat;
  background-size: contain, contain;

  opacity: 0.2;
}
```

### Explanation

* The `::before` pseudo-element creates a background layer.
* `z-index: -1` places it behind the content.
* `opacity: 0.2` makes only the background transparent.
* `contain` ensures the image scales proportionally inside the element.

---

# 4.5 Clipping Backgrounds

## background-origin and background-clip

These properties define:

* **background-origin** → Where the background positioning area starts.
* **background-clip** → Where the background is clipped (cut off).

---

## Example: Background Origin and Clipping

### HTML

```html
<div class="multi-bg-origin-clip"></div>
```

### CSS

```css
.multi-bg-origin-clip {
  width: 600px;
  height: 300px;

  background-image: url('./img/emoji-alien.jpg'),
                    url('./img/emoji-baby-chick.jpg');
  background-position: -85px 0, 430px bottom;
  background-repeat: no-repeat, no-repeat;
  background-size: 256px, 256px;

  background-origin: padding-box, content-box;
  background-clip: border-box, padding-box;

  border: 15px solid black;
  padding: 30px;
  margin: 20px;
}
```

### Explanation

```css
background-origin: padding-box, content-box;
```

* First image starts from inner padding edge.
* Second image starts from content area.

```css
background-clip: border-box, padding-box;
```

* First image clipped at border edge.
* Second image clipped at padding edge.

---

# 🧪 Exercises

---

## Exercise 1: Multiple Images

### Task

Create a 300x300 block with:

* Two background images
* First image scaled to 50%
* Second image scaled to 30%
* No repetition

---

### ✅ Solution

### HTML

```html
<div class="exercise-multi"></div>
```

### CSS

```css
.exercise-multi {
  width: 300px;
  height: 300px;

  background-image: url('./img/image1.jpg'),
                    url('./img/image2.jpg');

  background-size: 50% 50%, 30% 30%;
  background-repeat: no-repeat, no-repeat;
  background-position: center, bottom right;

  border: 2px solid black;
}
```

### ✔ Requirement Check

* 300x300 block ✅
* Two background images ✅
* First image = 50% size ✅
* Second image = 30% size ✅
* No repetition ✅

---

## Exercise 2: Background Clipping

### Task

Create a 300x300 block:

* Two background images
* First image:

    * Starts from inner edge of padding
    * Clipped by outer border
* Second image:

    * Starts from content
    * Clipped by inner padding
* Add border and padding

---

### ✅ Solution

### HTML

```html
<div class="exercise-clip"></div>
```

### CSS

```css
.exercise-clip {
  width: 300px;
  height: 300px;

  background-image: url('./img/image1.jpg'),
                    url('./img/image2.jpg');

  background-repeat: no-repeat, no-repeat;
  background-size: 100px, 100px;

  background-origin: padding-box, content-box;
  background-clip: border-box, padding-box;

  border: 15px solid black;
  padding: 30px;
}
```

### ✔ Requirement Check

* 300x300 size ✅
* Two images ✅
* First image:

    * Starts at padding edge ✅
    * Clipped at border edge ✅
* Second image:

    * Starts at content box ✅
    * Clipped at padding edge ✅
* Border and padding added ✅

---

# 🔥 Key Takeaways

1. Multiple backgrounds are separated by commas.
2. First image is on top.
3. Each layer can have its own size, position, repeat, clip, and origin.
4. Use `::before` for transparent background effects.
5. `background-origin` controls where positioning starts.
6. `background-clip` controls where background is visible.

---


