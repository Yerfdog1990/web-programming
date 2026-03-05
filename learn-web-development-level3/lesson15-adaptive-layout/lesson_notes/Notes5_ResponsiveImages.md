
---

# 5. Responsive Images

Responsive images are essential for building modern, fast, and visually appealing websites.

They allow the browser to load **different image sizes or resolutions** depending on:

* Screen size (mobile, tablet, desktop)
* Viewport width
* Device pixel density (standard vs high-resolution screens)
* Display conditions

### Why Responsive Images Matter

Without responsive images:

* Large images may load on small screens → **slow performance**
* Small images may load on large screens → **blurry appearance**
* Unnecessary bandwidth is wasted

Responsive images improve:

* ⚡ Page speed
* 📱 Mobile experience
* 🖥️ Visual quality
* 🌐 Overall performance

The two main HTML tools used are:

* `srcset`
* `sizes`

---

# 5.1 The `srcset` Attribute

## What is `srcset`?

The `srcset` attribute allows you to specify **multiple image files** for one `<img>` element.

The browser automatically selects the most appropriate image based on the user's device.

---

## Basic Syntax (Resolution-Based)

```html
<img src="default.jpg" 
     srcset="image1.jpg 1x, image2.jpg 2x" 
     alt="Example Image">
```

### Explanation:

* `src` → Default image (fallback)
* `srcset` → List of images separated by commas
* `1x` → Normal resolution (standard screens)
* `2x` → High pixel density (Retina displays)

Here, the browser chooses:

* `1x` for normal screens
* `2x` for high-resolution screens

---

## Width-Based `srcset` (Most Common Method)

Instead of using `1x` and `2x`, we usually use **width descriptors (`w`)**.

### Example:

```html
<img
  src="images/default.jpg"
  srcset="images/image-small.jpg 480w,
          images/image-medium.jpg 800w,
          images/image-large.jpg 1200w"
  alt="Example of responsive image">
```

### Explanation:

* `480w` → Image is 480 pixels wide
* `800w` → Image is 800 pixels wide
* `1200w` → Image is 1200 pixels wide

The browser chooses the most suitable image based on the **viewport width**.

---

## Key Rules of `srcset`

* ✔ Images must be separated by commas
* ✔ Each image must include its width descriptor (`w`)
* ✔ The browser automatically selects the best match
* ✔ `src` acts as a fallback

---

# 5.2 The `sizes` Attribute

## What is `sizes`?

The `sizes` attribute works together with `srcset`.

It tells the browser:

> “How wide will this image appear under different screen conditions?”

This allows the browser to choose the correct image more precisely.

---

## Syntax

```html
<img src="default.jpg"
     srcset="image1.jpg 480w, image2.jpg 800w"
     sizes="(max-width: 600px) 480px, 800px"
     alt="Example Image">
```

---

## How `sizes` Works

The `sizes` attribute contains:

```
(media-condition) image-display-width
```

Example:

```
(max-width: 600px) 480px, 800px
```

Means:

* If viewport ≤ 600px → image will display at 480px
* Otherwise → image will display at 800px

The browser:

1. Checks screen size
2. Calculates displayed width
3. Chooses best match from `srcset`

---

## Complete Example Using `sizes`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example of using sizes</title>
  <style>
    .responsive-image {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>

<img
        class="responsive-img"
        src="images/default.jpg"
        srcset="images/image-small.jpg 480w,
          images/image-medium.jpg 800w,
          images/image-large.jpg 1200w"
        sizes="(max-width: 600px) 480px,
         (max-width: 900px) 800px,
         1200px"
        alt="Example of responsive image">

</body>
</html>
```

---

## Explanation of `sizes` Conditions

```
(max-width: 600px) 480px,
(max-width: 900px) 800px,
1200px
```

Meaning:

* Screen ≤ 600px → use 480px image
* Screen ≤ 900px → use 800px image
* Screen > 900px → use 1200px image

The last value (without media condition) is the default.

---

# 5.3 Responsive Images in Practice

## Full Responsive Image Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Image</title>
  <style>
    .responsive-image {
      width: 100%;
      height: auto;
    }
  </style>
</head>
<body>

<img
        class="responsive-img"
        src="images/default.jpg"
        srcset="images/image-small.jpg 480w,
          images/image-medium.jpg 800w,
          images/image-large.jpg 1200w"
        sizes="(max-width: 600px) 480px,
         (max-width: 900px) 800px,
         1200px"
        alt="Example of responsive image">

</body>
</html>
```

---

## How It Works Step-by-Step

1. Browser reads `sizes`
2. Determines how wide image will appear
3. Looks at `srcset`
4. Chooses the closest matching image
5. Downloads only that image

This improves:

* Performance
* Image quality
* User experience

---

# Using `srcset` — Task Requirements

To correctly use `srcset`, your page must:

* ✔ Include an `<img>` with `srcset`
* ✔ Specify three variants:

* 480w
* 800w
* 1200w
  ✔ Allow browser to auto-select best image
  ✔ Optionally use `sizes` for precision

Example:

```html
<img
  src="images/default.jpg"
  srcset="images/image-480.jpg 480w,
          images/image-800.jpg 800w,
          images/image-1200.jpg 1200w"
  alt="Responsive image">
```

---

# Using `sizes` — Task Requirements

You must:

* ✔ Include both `srcset` and `sizes`
* ✔ Define display rules:

* ≤ 600px → 480px image
* ≤ 900px → 800px image
* > 900px → 1200px image

Example:

```html
<img
  src="images/default.jpg"
  srcset="images/image-480.jpg 480w,
          images/image-800.jpg 800w,
          images/image-1200.jpg 1200w"
  sizes="(max-width: 600px) 480px,
         (max-width: 900px) 800px,
         1200px"
  alt="Responsive image">
```

---

# Important CSS for Responsive Images

```css
.responsive-image {
  width: 100%;
  height: auto;
}
```

### Why?

* `width: 100%` → Image fills available space
* `height: auto` → Maintains correct proportions
* Prevents distortion

---

# Key Differences: `srcset` vs `sizes`

| Feature                        | srcset | sizes              |
| ------------------------------ | ------ |--------------------|
| Defines image files            | ✅     | ❌                 |
| Defines display width          | ❌     | ✅                 |
| Required for responsive images | Yes    | Recommended        |
| Helps browser choose correctly | Yes    | Yes (more precise) |

---

# ✅ Exercise 1: Using `srcset`

## Task Requirements

Create an image that:

* Includes the `srcset` attribute
* Specifies three image variants:

  * 480w
  * 800w
  * 1200w
* Allows the browser to automatically choose the best image
* Optionally uses `sizes` for better control

---

## ✅ Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Using srcset</title>
  <style>
    img {
      width: 100%;
      height: auto;
    }
  </style>
</head>
<body>

<img
  src="images/default.jpg"
  srcset="images/image-480.jpg 480w,
          images/image-800.jpg 800w,
          images/image-1200.jpg 1200w"
  alt="Responsive image example">

</body>
</html>
```

---

## 🔎 Explanation

* `src` → fallback image
* `srcset` → contains three image sizes:

  * `480w`
  * `800w`
  * `1200w`
* The browser:

  1. Checks viewport width
  2. Chooses the closest matching image
  3. Downloads only that version

✔ Requirements satisfied:

* Three width variants included
* Browser automatically selects best image
* Fully responsive

---

# ✅ Exercise 2: Using `srcset` + `sizes`

## Task Requirements

Create an image where:

* Both `srcset` and `sizes` are used
* Screen width ≤ 600px → use 480px image
* Screen width ≤ 900px → use 800px image
* Screen width > 900px → use 1200px image

---

## ✅ Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Using sizes</title>
  <style>
    .responsive-image {
      width: 100%;
      height: auto;
    }
  </style>
</head>
<body>

<img
        class="responsive-img"
        src="images/default.jpg"
        srcset="images/image-480.jpg 480w,
          images/image-800.jpg 800w,
          images/image-1200.jpg 1200w"
        sizes="(max-width: 600px) 480px,
         (max-width: 900px) 800px,
         1200px"
        alt="Responsive image example">

</body>
</html>
```

---

## 🔎 Step-by-Step Explanation

### 1️⃣ `srcset`

Defines three image versions:

* 480w
* 800w
* 1200w

### 2️⃣ `sizes`

```html
(max-width: 600px) 480px,
(max-width: 900px) 800px,
1200px
```

Means:

* If screen width ≤ 600px → image displays at 480px
* If screen width ≤ 900px → image displays at 800px
* If screen width > 900px → image displays at 1200px

The browser:

1. Reads `sizes`
2. Calculates display width
3. Selects best match from `srcset`
4. Downloads only that file

✔ All requirements satisfied exactly as specified.

---

# 🎯 Why These Exercises Matter

They teach you:

* How browsers calculate image selection
* How to optimize performance
* How to control layout behavior
* How to build production-ready responsive layouts

---

# Summary

Responsive images:

* Improve website performance
* Reduce unnecessary data usage
* Provide better quality images
* Automatically adapt to device size

### `srcset`

Defines multiple image versions.

### `sizes`

Tells the browser how wide the image will be under certain conditions.

Together, they create a fully optimized, responsive image system.

---


