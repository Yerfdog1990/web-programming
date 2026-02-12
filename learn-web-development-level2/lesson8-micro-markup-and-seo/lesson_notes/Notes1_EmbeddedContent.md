# Lesson Notes: Embedded Content in HTML

## 7.0 Introduction to Embedded Content

Embedded content allows you to display external resources such as web pages, videos, maps, and documents inside your own web page.

In HTML, this is mainly done using the `<iframe>` element.

An **iframe (inline frame)** creates a rectangular area within a web page where another HTML document is displayed.

---

# 7.1 The `<iframe>` Element

## Definition

The `<iframe>` element is used to embed another HTML document within the current document.

The embedded page:

* Loads from a specified URL
* Works independently from the main page
* Can display videos, maps, documents, or entire websites

---

## Basic Syntax

```html
<iframe src="URL"></iframe>
```

---

## Example

```html
<iframe 
    src="https://www.example.com" 
    width="600" 
    height="400" 
    title="Sample iframe">
</iframe>
```

---

## Important Attributes

| Attribute         | Description                         |
| ----------------- | ----------------------------------- |
| `src`             | URL of the document to display      |
| `width`           | Width of the frame (pixels or %)    |
| `height`          | Height of the frame (pixels or %)   |
| `title`           | Description for accessibility       |
| `name`            | Name used for targeting links/forms |
| `sandbox`         | Applies security restrictions       |
| `allow`           | Specifies permitted features        |
| `allowfullscreen` | Enables fullscreen mode             |
| `loading`         | Controls loading behavior           |

---

# 7.2 The `allowfullscreen` Attribute

## Purpose

The `allowfullscreen` attribute allows content inside the `<iframe>` (such as videos) to be viewed in fullscreen mode.

Without it, fullscreen mode will not work.

---

## Syntax

```html
<iframe src="URL" allowfullscreen></iframe>
```

---

## Example: Embedding a YouTube Video

```html
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    allowfullscreen>
</iframe>
```

### Why it matters:

* Improves user experience
* Allows video playback in fullscreen

---

# 7.3 The `allow` Attribute

## Purpose

The `allow` attribute specifies which features the embedded content can access.

### Syntax

```html
allow="geolocation; microphone; camera; fullscreen"
```

---

## Example

```html
<iframe
    src="https://www.example.com"
    allow="geolocation; microphone; camera; fullscreen">
</iframe>
```

---

## Advantages

* Control over functionality
* Permission management
* Restricts access to sensitive APIs

---

# 7.4 The `sandbox` Attribute

## Purpose

The `sandbox` attribute applies security restrictions to the embedded content.

It prevents potentially harmful actions like:

* Running scripts
* Opening pop-ups
* Submitting forms
* Redirecting the top page

---

## Syntax

```html
sandbox="allow-scripts allow-same-origin"
```

---

## Common Sandbox Values

| Value                  | Description                   |
| ---------------------- | ----------------------------- |
| `allow-forms`          | Allows form submission        |
| `allow-modals`         | Allows modal windows          |
| `allow-popups`         | Allows pop-ups                |
| `allow-scripts`        | Allows script execution       |
| `allow-same-origin`    | Treats content as same origin |
| `allow-top-navigation` | Allows top-level navigation   |

---

## Example

```html
<iframe
    src="https://www.example.com"
    sandbox="allow-scripts allow-same-origin">
</iframe>
```

---

## Advantages

* Increased security
* Fine-grained access control
* Prevents malicious scripts

---

# 7.5 The `loading` Attribute

## Purpose

The `loading` attribute controls when the iframe loads.

---

## Values

| Value   | Description             |
| ------- | ----------------------- |
| `lazy`  | Loads only when visible |
| `eager` | Loads immediately       |

---

## Example

```html
<iframe
    src="https://www.example.com"
    width="600"
    height="400"
    loading="lazy">
</iframe>
```

---

## Benefits

* Faster page load
* Reduced data usage
* Improved performance

---

# Practical Exercises

---

# Exercise 1: Embedding a Web Page

### Task

Create a web page that:

* Includes an `<iframe>`
* Width = 600px
* Height = 400px
* Includes `title`
* Includes `src` pointing to another website

---

## Sample Solution

```html
<!DOCTYPE html>
<html>
<head>
    <title>Embedding a Web Page</title>
</head>
<body>

<h2>Embedded Website Example</h2>

<iframe 
    src="https://www.example.com"
    width="600"
    height="400"
    title="Example website homepage">
</iframe>

</body>
</html>
```

---

# Exercise 2: Embedding a YouTube Video

### Task

Create a web page that:

* Embeds a YouTube video
* Includes `allowfullscreen`
* Has width and height attributes
* Uses correct embed URL format
* Correctly closes the `<iframe>`

---

## Important Note

YouTube embed URLs follow this format:

```
https://www.youtube.com/embed/VIDEO_ID
```

---

## Sample Solution

```html
<!DOCTYPE html>
<html>
<head>
    <title>Embedding a Video</title>
</head>
<body>

<h2>Embedded YouTube Video</h2>

<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    allowfullscreen>
</iframe>

</body>
</html>
```

---

# Bonus Challenge

Modify the video example to:

* Add `loading="lazy"`
* Add an `allow` attribute that permits fullscreen and microphone access
* Add a meaningful `title`

---

## Bonus Solution

```html
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="Music Video"
    allow="fullscreen; microphone"
    allowfullscreen
    loading="lazy">
</iframe>
```

---

# Summary

The `<iframe>` element allows you to:

✔ Embed web pages

✔ Embed videos

✔ Control permissions

✔ Improve performance

✔ Enhance security

Key attributes to remember:

* `src`
* `width` and `height`
* `title`
* `allowfullscreen`
* `allow`
* `sandbox`
* `loading`

---
