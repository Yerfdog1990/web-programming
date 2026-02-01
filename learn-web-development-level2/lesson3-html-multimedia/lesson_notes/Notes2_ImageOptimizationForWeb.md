
---

# 2. Image Optimization for the Web

Image optimization for the web is the process of reducing image file sizes **without noticeable loss of visual quality**. Optimized images load faster, use less bandwidth, improve user experience, and help websites rank better in search engines (SEO).

This is especially important in today’s mobile-first world, where slow-loading images can cause users to leave a website.

Image optimization involves:

* Choosing the correct image format
* Compressing images
* Resizing images to correct dimensions
* Using HTML attributes properly
* Applying performance best practices

---

## 2.1 Choosing the Right Image Format

Selecting the right image format is the **first and most important step** in optimization. Different formats are designed for different types of images.

### JPEG (.jpg / .jpeg)

**Use Case:**

* Photographs
* Images with many colors and gradients

**Benefits:**

* High lossy compression
* Small file sizes
* Widely supported

**Drawbacks:**

* Quality decreases with repeated saving
* No transparency support

---

### PNG (.png)

**Use Case:**

* Images with transparency
* Logos
* Graphics with sharp edges or text

**Benefits:**

* Lossless compression
* High image quality
* Supports transparency

**Drawbacks:**

* Larger file sizes than JPEG

---

### GIF (.gif)

**Use Case:**

* Simple animations
* Images with limited colors

**Benefits:**

* Supports animation
* Supports transparency

**Drawbacks:**

* Limited to 256 colors
* Not suitable for photos

---

### WebP (.webp)

**Use Case:**

* Modern replacement for JPEG and PNG

**Benefits:**

* Supports lossy and lossless compression
* Supports transparency and animation
* Smaller file sizes than JPEG and PNG

**Drawbacks:**

* Not supported in all very old browsers (support is now very good in modern browsers)

---

### SVG (.svg)

**Use Case:**

* Logos
* Icons
* Vector graphics
* Simple illustrations

**Benefits:**

* Scalable without quality loss
* Very small file sizes
* Perfect for responsive design

**Drawbacks:**

* Not suitable for photographs

---

### Summary Table

| Format | Best For                  | Compression    | Transparency | Animation |
| ------ | ------------------------- | -------------- | ------------ | --------- |
| JPEG   | Photos                    | Lossy          | ❌ No         | ❌ No      |
| PNG    | Logos, text, transparency | Lossless       | ✅ Yes        | ❌ No      |
| GIF    | Simple animations         | Lossy          | ✅ Yes        | ✅ Yes     |
| WebP   | Modern web images         | Lossy/Lossless | ✅ Yes        | ✅ Yes     |
| SVG    | Icons, logos (vector)     | Vector         | ✅ Yes        | ❌ No      |

---

## 2.2 Image Compression

Image compression reduces file size while maintaining acceptable visual quality.

### Lossy Compression

Lossy compression removes some image data to reduce file size.

**Used by:**

* JPEG
* WebP (lossy mode)

**Pros:**

* Much smaller file sizes

**Cons:**

* Some quality loss

**Popular Tools:**

* TinyPNG / TinyJPG (online)
* Squoosh (by Google)
* ImageOptim (macOS)

---

### Lossless Compression

Lossless compression reduces file size **without removing image data**.

**Used by:**

* PNG
* WebP (lossless mode)

**Pros:**

* No quality loss

**Cons:**

* Larger file sizes than lossy

**Popular Tools:**

* OptiPNG (command line)
* PNGGauntlet (Windows)
* ImageOptim (macOS)

---

## 2.3 Resizing Images

Images should always be resized to the **exact size needed** before uploading to a website.

Uploading a very large image and shrinking it in HTML wastes bandwidth and slows down page loads.

### Tools for Resizing

* Adobe Photoshop
* GIMP (free)
* Online image resizers

---

### Using Width and Height in HTML

Specifying `width` and `height` helps browsers reserve space for images before they load. This prevents **layout shifts** (content jumping around).

### Example

```html
<img 
  src="images/photo.jpg" 
  alt="Nature photo" 
  width="800" 
  height="600">
```

✅ This improves page stability and user experience.

---

## 2.4 Practical Recommendations

### Lazy Loading

Lazy loading loads images **only when they are about to appear on screen**.

### Example

```html
<img 
  src="example.jpg" 
  alt="Image description" 
  loading="lazy">
```

Benefits:

* Faster initial page load
* Saves bandwidth
* Better performance on long pages

---

### Caching Images

Caching allows browsers to store images locally so repeat visits load faster.

This is usually configured on the **server**, not in HTML.
(You will learn more about this when studying HTTP and servers.)

---

## Best Practices for Image Optimization

* Use JPEG for photos
* Use PNG for transparency and text
* Use SVG for logos and icons
* Use WebP when possible
* Compress all images
* Resize before uploading
* Always include `alt` text
* Use lazy loading for large pages

---

# Exercises

## Exercise 1: Image Format

### Task

Insert an image using the most appropriate image format.

### Requirements

* Must include an `<img>` tag
* Must include `src`
* Must include `alt`
* Choose correct format:

    * JPEG for photos
    * PNG for transparency
    * GIF for animation
    * WebP for modern optimized images
    * SVG for vector graphics

### Sample Solution (Photo using JPEG)

```html
<img 
  src="images/landscape.jpg" 
  alt="Mountain landscape photo">
```

### Sample Solution (Logo using SVG)

```html
<img 
  src="images/logo.svg" 
  alt="Company logo">
```

---

## Exercise 2: Image Resizing

### Task

Create an HTML document that displays an image with:

* Width = 800 pixels
* Height = 600 pixels

### Requirements

* Must include `<img>`
* Must include `src`
* Must include `width="800"`
* Must include `height="600"`
* Must be inside `<body>`

### Sample Solution

```html
<!DOCTYPE html>
<html>
<head>
  <title>Image Resizing</title>
</head>
<body>

  <h2>Optimized Image</h2>

  <img 
    src="images/photo.jpg" 
    alt="Optimized photo" 
    width="800" 
    height="600">

</body>
</html>
```

---

## Challenge Exercise (Optional)

1. Take one large photo.
2. Save it as JPEG and WebP.
3. Compress both using an online tool.
4. Compare file sizes.
5. Note which format is smaller and still looks good.

---

## Key Takeaways for Students

* Image optimization improves speed and SEO
* Always choose the correct image format
* Compress and resize images
* Use width and height attributes
* Use lazy loading for better performance
* Write meaningful alt text for accessibility

---

