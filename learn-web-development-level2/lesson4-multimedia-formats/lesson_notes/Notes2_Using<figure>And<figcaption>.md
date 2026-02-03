
---

# 7. Using `<figure>` and `<figcaption>`

Modern HTML encourages the use of **semantic elements**—tags that clearly describe the meaning of their content. Two such elements are `<figure>` and `<figcaption>`. They provide a meaningful way to group images, videos, charts, tables, or code snippets together with explanatory captions.

Using these elements improves:

* **Accessibility**
* **Search engine optimization (SEO)**
* **Content structure and readability**

---

## 7.1 The `<figure>` Element

The `<figure>` element represents **self-contained, standalone content** that illustrates or supports the main flow of the document. This content can be moved elsewhere in the document without affecting the main meaning.

### Common Use Cases

* Images with captions
* Diagrams and charts
* Tables
* Videos or audio clips
* Code snippets with explanations

### Syntax

```html
<figure>
  <!-- Standalone content such as an image, table, video, etc. -->
</figure>
```

---

### Example 1: Image with a Caption

```html
<figure>
  <img src="example.jpg" alt="Example image">
  <figcaption>Caption explaining the content of the image</figcaption>
</figure>
```

---

### Example 2: Table with a Caption

```html
<figure>
  <table>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </table>
  <figcaption>Caption for the table</figcaption>
</figure>
```

---

## 7.2 The `<figcaption>` Element

The `<figcaption>` element provides a **caption or description** for the content inside a `<figure>`. It helps users understand **what the figure represents** and why it is relevant.

### Key Points

* Must be inside a `<figure>` element
* Can appear **before or after** the content
* Only one `<figcaption>` is allowed per `<figure>`

---

### Syntax

```html
<figure>
  <!-- Content -->
  <figcaption>Caption text</figcaption>
</figure>
```

---

### Example 1: Caption After the Image

```html
<figure>
  <img src="landscape.jpg" alt="Landscape">
  <figcaption>Beautiful landscape with mountains and a lake</figcaption>
</figure>
```

---

### Example 2: Caption Before the Image

```html
<figure>
  <figcaption>Beautiful landscape with mountains and a lake</figcaption>
  <img src="landscape.jpg" alt="Landscape">
</figure>
```

---

## 7.3 Accessibility and SEO Benefits

Using `<figure>` and `<figcaption>` improves both **accessibility** and **search engine understanding** of your content.

### Accessibility

* Screen readers associate captions with images or media
* Users with visual impairments get better context
* Captions complement (but do not replace) the `alt` attribute

### SEO

* Search engines understand content relationships
* Captions add descriptive text for indexing
* Improves content clarity and structure

---

### Examples in Different Contexts

#### Example 1: Chart with Caption

```html
<figure>
  <img src="chart.png" alt="Chart showing sales growth">
  <figcaption>Chart showing sales growth for the last quarter</figcaption>
</figure>
```

---

#### Example 2: Video with Caption

```html
<figure>
  <video controls>
    <source src="example.mp4" type="video/mp4">
    Your browser does not support video.
  </video>
  <figcaption>Example video demonstrating product functionality</figcaption>
</figure>
```

---

#### Example 3: Code Snippet with Explanation

```html
<figure>
  <pre>
    <code>
function helloWorld() {
  console.log('Hello, world!');
}
    </code>
  </pre>
  <figcaption>
    JavaScript function that outputs "Hello, world!" to the console
  </figcaption>
</figure>
```

---

## 7.4 Styling `<figure>` and `<figcaption>` with CSS

CSS allows you to visually enhance figures and captions while keeping semantic HTML clean.

### Example CSS

```css
figure {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 20px auto;
  text-align: center;
  max-width: 600px;
}

figcaption {
  font-style: italic;
  color: #555;
  margin-top: 10px;
}
```

### Example HTML

```html
<figure>
  <img src="nature.jpg" alt="Nature">
  <figcaption>Beautiful view of nature</figcaption>
</figure>
```

---

## Key Takeaways

* `<figure>` groups standalone content
* `<figcaption>` explains that content
* Improves accessibility and SEO
* Works with images, videos, tables, and code
* Style freely with CSS without losing semantics

---

# Practical Exercises

---

## Exercise 1: Image and Caption

### Task

Create an HTML document that includes an image and a caption using `<figure>` and `<figcaption>`.
The image must be centered and have a border. The caption must be italicized and placed below the image.

### Requirements

* Use `<figure>` to group content
* Include `<img>` and `<figcaption>`
* Center the image using CSS
* Add a border to the image
* Italicize the caption

---

### Sample Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Image with Caption</title>
  <style>
    img {
      display: block;
      margin: auto;
      border: 2px solid #333;
    }

    figcaption {
      font-style: italic;
      text-align: center;
      margin-top: 8px;
    }
  </style>
</head>
<body>

  <figure>
    <img src="image.jpg" alt="Sample image">
    <figcaption>This is a sample image caption</figcaption>
  </figure>

</body>
</html>
```

---

## Exercise 2: Video and Caption

### Task

Create an HTML document that includes a video and a caption using `<figure>` and `<figcaption>`.
The video must support **multiple formats** and display playback controls.

### Requirements

* Use `<figure>` as a container
* Use `<video>` with `controls`
* Include multiple `<source>` elements (MP4, WebM, Ogg)
* Place the caption below the video
* Style the caption using CSS

---

### Sample Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Video with Caption</title>
  <style>
    figure {
      max-width: 640px;
      margin: auto;
      text-align: center;
    }

    figcaption {
      font-style: italic;
      color: #555;
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <figure>
    <video controls width="600">
      <source src="video.mp4" type="video/mp4">
      <source src="video.webm" type="video/webm">
      <source src="video.ogv" type="video/ogg">
      Your browser does not support the video tag.
    </video>
    <figcaption>Demonstration video with multiple format support</figcaption>
  </figure>

</body>
</html>
```

---


