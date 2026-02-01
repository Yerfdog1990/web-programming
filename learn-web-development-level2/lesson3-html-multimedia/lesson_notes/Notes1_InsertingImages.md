
---

# 1. Inserting Images in HTML

Multimedia in HTML plays a crucial role in enhancing the visual appeal and user experience of web pages. Images help communicate ideas, illustrate content, and make websites more engaging.

In HTML, images are added using the `<img>` element. Understanding how to correctly use this element and its attributes is essential for building professional and accessible web pages.

---

## 1.1 The `<img>` Element

The `<img>` element is used to embed images into a web page.

### Key Characteristics of `<img>`

* It is an **empty (void) element**
* It does **not have a closing tag**
* All information is provided using **attributes**

### Basic Syntax

```html
<img src="Image_URL" alt="Description" width="Width" height="Height">
```

### Example

```html
<img src="images/photo.jpg" alt="Image description" width="500" height="300">
```

---

## Attributes of the `<img>` Element

The most important attributes of the `<img>` element are:

* `src` — source of the image
* `alt` — alternative text description
* `width` — width of the image
* `height` — height of the image

---

## 1.2 The `src` Attribute (Source)

The full name of `src` is **source**.

The `src` attribute specifies the **path to the image file** that should be displayed on the page.

### Types of Image Paths

### 1. Absolute URL

An absolute URL includes the full web address.

```html
<img src="https://example.com/images/photo.jpg" alt="Online photo">
```

Includes:

* Protocol (`https://`)
* Domain name
* Full path to the file

---

### 2. Relative Path

A relative path points to a file within your project.

```html
<img src="images/photo.jpg" alt="Local photo">
```

✅ Best Practice:
Use relative paths for local project images.

---

## 1.3 The `alt` Attribute (Alternative Text)

The full name of `alt` is **alternative text**.

The `alt` attribute provides a **text description** of the image.

### Why `alt` Is Important

* Displayed if the image fails to load
* Used by screen readers (accessibility)
* Helps with SEO (search engines)
* Required for valid, professional HTML

### Example

```html
<img src="images/sunset.jpg" alt="Photo of a beautiful sunset">
```

### Good vs Bad Alt Text

| Bad Alt   | Good Alt                             |
| --------- | ------------------------------------ |
| `"image"` | `"Photo of a beautiful sunset"`      |
| `"pic"`   | `"Students studying in a classroom"` |

---

## 1.4 The `width` Attribute

The `width` attribute sets the **width of the image in pixels**.

If `height` is not specified, the browser automatically scales the height to maintain the aspect ratio.

### Example

```html
<img src="images/photo.jpg" alt="Sample photo" width="500">
```

---

## 1.5 The `height` Attribute

The `height` attribute sets the **height of the image in pixels**.

If `width` is not specified, the browser automatically scales the width to maintain the aspect ratio.

### Example

```html
<img src="images/photo.jpg" alt="Sample photo" height="300">
```

---

## Using Width and Height Together

When both attributes are used, the browser displays the image at exactly those dimensions.

### Example

```html
<img 
  src="images/sunset.jpg" 
  alt="Photo of a beautiful sunset" 
  width="500" 
  height="300">
```

### Explanation

* Image loads from `images/sunset.jpg`
* Displayed at 500px wide and 300px high
* If image fails, alt text is shown

⚠️ Warning for Students:
If width and height do not match the original image ratio, the image may look **stretched or squashed**.

---

## Responsive Design Note (Teacher Tip)

Modern websites usually control image size using **CSS**, not fixed HTML attributes, for better responsiveness.

Example with CSS:

```html
<img src="images/photo.jpg" alt="Responsive image" style="max-width: 100%; height: auto;">
```

---

# Exercises

## Exercise 1: Image with `src` and `alt`

### Task

Create an HTML document with an image using the `src` attribute and the `alt` attribute.

### Requirements

* Must include an `<img>` tag
* Must include a `src` attribute
* Must include an `alt` attribute
* The `<img>` tag must be correctly written
* Image must display correctly when path is valid

### Sample Solution

```html
<!DOCTYPE html>
<html>
<head>
  <title>Image Example</title>
</head>
<body>

  <h2>My First Image</h2>

  <img src="images/photo.jpg" alt="A sample photo from my project">

</body>
</html>
```

---

## Exercise 2: Image Dimensions

### Task

Create an HTML document that displays an image with:

* Width = 500 pixels
* Height = 300 pixels

### Requirements

* Must include an `<img>` tag
* Must include `src`
* Must include `width="500"`
* Must include `height="300"`
* Width and height must both be present

### Sample Solution

```html
<!DOCTYPE html>
<html>
<head>
  <title>Image Dimensions</title>
</head>
<body>

  <h2>Image with Dimensions</h2>

  <img 
    src="images/sunset.jpg" 
    alt="Photo of a beautiful sunset" 
    width="500" 
    height="300">

</body>
</html>
```

---

## Challenge Exercise (Optional)

1. Add two images on one page.
2. Give each image a different `alt` description.
3. Set one image using only `width`, and the other using only `height`.
4. Observe how the browser keeps the image proportions.

---

## Key Takeaways for Students

* `<img>` is a self-closing (void) element
* `src` is required to load the image
* `alt` is required for accessibility
* `width` and `height` control image size
* Always write meaningful alt text

---

