# 6 Retina Graphics

Modern devices often use **high-density displays** (for example Retina screens). These displays contain **many more pixels per inch (PPI)** than traditional monitors, allowing images and text to appear extremely sharp.

However, this also creates challenges for web developers: **standard images may appear blurry or pixelated** because one image pixel may stretch across several screen pixels.

To solve this problem, developers must provide **higher-resolution images** and allow the browser to choose the most appropriate version depending on the device's **screen size and pixel density**.

This section explains several techniques for optimizing images for high-density screens:

1. Using **`srcset` and `sizes` attributes**
2. Using **vector graphics (SVG)**
3. Using **CSS media queries**
4. Using the **`<picture>` element**

---

# 6.1 Using `srcset` and `sizes` Attributes

The **`srcset` attribute** allows you to provide multiple versions of the same image for different pixel densities.

The **`sizes` attribute** tells the browser how much screen space the image will occupy under different conditions.

The browser then automatically chooses the best image.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Optimizing for Retina Displays</title>
</head>

<body>

<img
  src="images/default.jpg"
  srcset="images/image-1x.jpg 1x,
          images/image-2x.jpg 2x,
          images/image-3x.jpg 3x"
  sizes="(max-width: 600px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
  alt="Example Image for Retina Displays">

</body>
</html>
```

## Code Explanation

### `src`

```html
src="images/default.jpg"
```

Fallback image used if the browser does not support `srcset`.

---

### `srcset`

```html
srcset="images/image-1x.jpg 1x,
        images/image-2x.jpg 2x,
        images/image-3x.jpg 3x"
```

Specifies different image versions:

| Image        | Pixel Density         |
| ------------ | --------------------- |
| image-1x.jpg | standard screens      |
| image-2x.jpg | Retina / high density |
| image-3x.jpg | ultra-high density    |

---

### `sizes`

```html
sizes="(max-width: 600px) 100vw,
       (max-width: 1200px) 50vw,
       33vw"
```

Defines how wide the image appears on the screen.

| Screen Width | Image Width      |
| ------------ | ---------------- |
| ≤ 600px      | 100% of viewport |
| ≤ 1200px     | 50% of viewport  |
| >1200px      | 33% of viewport  |

---

### How the Browser Chooses an Image

The browser considers:

1. **Screen width**
2. **Pixel density**
3. **Image display size**

Then it chooses the **best image that preserves quality while minimizing file size**.

---

# 6.2 Using Vector Graphics (SVG)

Another powerful solution for Retina displays is **SVG (Scalable Vector Graphics)**.

Unlike bitmap images (JPG, PNG), **SVG images scale infinitely without losing quality**.

This makes them perfect for:

* Logos
* Icons
* UI elements
* Simple illustrations

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Using SVG for Retina Displays</title>
</head>

<body>

<img src="images/logo.svg" alt="Logo">

</body>
</html>
```

## Code Explanation

```html
src="images/logo.svg"
```

Loads an SVG file which:

* scales to **any resolution**
* stays **perfectly sharp**
* is often **smaller in file size**

---

## Advantages of SVG

* Infinite scalability
* Small file sizes
* Ideal for icons and logos
* Easy to style with CSS

---

# 6.3 Using CSS for Retina Background Images

When images are used as **backgrounds in CSS**, `srcset` cannot be used.

Instead, we use **media queries based on device resolution**.

## Example

```css
.background {
  background-image: url('images/background-1x.jpg');
}

@media only screen and (min-resolution: 2dppx) {
  .background {
    background-image: url('images/background-2x.jpg');
  }
}

@media only screen and (min-resolution: 3dppx) {
  .background {
    background-image: url('images/background-3x.jpg');
  }
}
```

## Code Explanation

### Base Image

```css
.background {
  background-image: url('images/background-1x.jpg');
}
```

Default image used for **standard density screens**.

---

### 2x Density Screens

```css
@media only screen and (min-resolution: 2dppx)
```

Loads a **higher resolution image**.

Example devices:

* Retina displays
* many smartphones

---

### 3x Density Screens

```css
@media only screen and (min-resolution: 3dppx)
```

Loads an **even higher resolution image** for very high-density displays.

---

# 6.4 The `<picture>` Element

The `<picture>` element provides **more control over responsive images**.

It allows you to specify multiple image sources with different conditions such as:

* screen resolution
* viewport size
* device orientation
* image formats

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Using picture for Retina Displays</title>
</head>

<body>

<picture>

  <source srcset="images/image-3x.jpg" media="(min-resolution: 3dppx)">
  
  <source srcset="images/image-2x.jpg" media="(min-resolution: 2dppx)">
  
  <img src="images/image-1x.jpg" alt="Example Image for Retina Displays">

</picture>

</body>
</html>
```

## Code Explanation

### `<picture>`

Container used for multiple image sources.

---

### `<source>`

```html
<source srcset="images/image-3x.jpg" media="(min-resolution: 3dppx)">
```

Specifies an image for **3x pixel density displays**.

---

### Fallback `<img>`

```html
<img src="images/image-1x.jpg">
```

Used if the `<picture>` element is not supported.

---

# 6.5 Image Optimization Examples

## Example 1 — Responsive High-Resolution Image

```html
<img
  src="images/default.jpg"
  srcset="images/image-1x.jpg 1x,
          images/image-2x.jpg 2x,
          images/image-3x.jpg 3x"
  sizes="(max-width: 600px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
  alt="Example Image for Retina Displays">
```

### Explanation

* `srcset` defines **image versions for different pixel densities**
* `sizes` defines **how much space the image takes**

This ensures:

* small screens load smaller images
* Retina screens load higher resolution images

---

## Example 2 — Using SVG for Scalable Images

```html
<img src="images/logo.svg" alt="Logo">
```

SVG ensures:

* sharp display on any screen
* perfect scaling
* smaller file sizes

---

# Exercise 1 — srcset for Retina Displays

## Task

Add an image to the page that loads different versions depending on **screen width and pixel density**.

Requirements:

* Use `<img>`
* Provide images for **1x, 2x, 3x**
* Configure sizes:

    * up to **600px → 100vw**
    * up to **1200px → 50vw**
    * otherwise **33vw**

---

## Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Retina Image Exercise</title>
</head>

<body>

<img
  src="images/default.jpg"
  srcset="images/photo-1x.jpg 1x,
          images/photo-2x.jpg 2x,
          images/photo-3x.jpg 3x"
  sizes="(max-width: 600px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
  alt="Responsive Retina Image">

</body>
</html>
```

---

# Exercise 2 — Background Image Optimization

## Task

Create a background style that loads different images depending on **pixel density**.

Requirements:

* `.background` class
* Use **media queries**
* Provide **1x, 2x, 3x images**

---

## Solution

```css
.background {
  width: 500px;
  height: 300px;
  background-image: url("images/bg-1x.jpg");
  background-size: cover;
}

/* 2x pixel density */

@media only screen and (min-resolution: 2dppx) {
  .background {
    background-image: url("images/bg-2x.jpg");
  }
}

/* 3x pixel density */

@media only screen and (min-resolution: 3dppx) {
  .background {
    background-image: url("images/bg-3x.jpg");
  }
}
```

---

# Key Takeaways

Retina graphics techniques help ensure **sharp images on modern displays**.

Important strategies include:

### 1. `srcset` + `sizes`

Allows the browser to choose the **best image resolution automatically**.

### 2. SVG Graphics

Best for **logos and icons** because they scale infinitely.

### 3. CSS Media Queries

Useful for **background images**.

### 4. `<picture>` Element

Provides **maximum flexibility for responsive images**.

---

