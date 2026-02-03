
---

# 8. Elements `<source>` and `<track>`

HTML5 introduced powerful multimedia features that allow developers to embed audio and video content in a flexible, accessible, and cross-browser way. Two key elements that support this functionality are `<source>` and `<track>`.

These elements work together with `<audio>`, `<video>`, and `<picture>` to:

* Support **multiple media formats**
* Improve **browser compatibility**
* Enhance **accessibility** through subtitles and captions

---

## 8.1 The `<source>` Element

The `<source>` element specifies **alternative media resources** for multimedia elements. Browsers automatically select the **first supported format** from the list provided.

The `<source>` element is commonly used inside:

* `<video>`
* `<audio>`
* `<picture>`

---

### Syntax

```html
<source src="URL" type="MIME-type">
```

---

### Attributes

| Attribute | Description                                              |
| --------- | -------------------------------------------------------- |
| `src`     | Path to the media file                                   |
| `type`    | MIME type of the file (helps the browser decide support) |

---

### How It Works

The browser reads `<source>` elements **from top to bottom** and plays the **first format it supports**. Unsupported formats are skipped automatically.

---

### Example 1: `<source>` inside a `<video>` Element

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  <source src="movie.ogv" type="video/ogg">
  Your browser does not support video playback.
</video>
```

---

### Example 2: `<source>` inside an `<audio>` Element

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support audio playback.
</audio>
```

---

### Example 3: `<source>` inside a `<picture>` Element

```html
<picture>
  <source srcset="image-320w.jpg" media="(max-width: 320px)">
  <source srcset="image-640w.jpg" media="(max-width: 640px)">
  <source srcset="image-1280w.jpg" media="(max-width: 1280px)">
  <img src="image-1280w.jpg" alt="Responsive image example">
</picture>
```

---

### Advantages of Using `<source>`

* **Cross-browser compatibility** – supports different formats
* **Graceful fallback** – unsupported formats are ignored
* **Device optimization** – serve appropriate files based on screen size or capability
* **Cleaner HTML** – avoids browser-specific hacks

---

## 8.2 The `<track>` Element

The `<track>` element adds **text-based information** to audio and video content. It is essential for **accessibility**, multilingual support, and structured navigation.

It must be placed **inside** an `<audio>` or `<video>` element.

---

### Syntax

```html
<track src="URL" kind="type" srclang="language" label="label">
```

---

### Attributes

| Attribute | Description                        |
| --------- | ---------------------------------- |
| `src`     | Path to the text track file        |
| `kind`    | Type of text track                 |
| `srclang` | Language code (e.g., `en`, `ru`)   |
| `label`   | Human-readable label shown in menu |
| `default` | Enables this track by default      |

---

### Values for `kind`

| Value          | Purpose                        |
| -------------- | ------------------------------ |
| `subtitles`    | Translated dialogue            |
| `captions`     | Dialogue + sound descriptions  |
| `descriptions` | Audio descriptions for visuals |
| `chapters`     | Navigation points              |
| `metadata`     | Data for scripts               |

---

## Captions vs Subtitles (Simple Explanation)

| Feature                         | **Subtitles**                                          | **Captions**                  |
| ------------------------------- | ------------------------------------------------------ |-------------------------------|
| Purpose                         | Translate spoken dialogue                              | Make audio content accessible |
| Includes dialogue text          | ✅ Yes                                                 | ✅ Yes                        |
| Includes sound effects          | ❌ No                                                  | ✅ Yes                        |
| Includes speaker identification | ❌ Usually no                                          | ✅ Yes                        |
| Target audience                 | Viewers who understand the audio but not the language  | Deaf or hard-of-hearing users |
| Accessibility-focused           | ❌ Not primarily                                       | ✅ Yes                        |

---

## Subtitles

**Subtitles** are meant for viewers who **can hear the audio**, but **do not understand the language** being spoken.

### Example

A movie in English with French subtitles:

```
Hello, everyone.
Bonjour à tous.
```

Subtitles:

* Translate dialogue
* Assume the viewer can hear background sounds
* Do **not** describe music or sound effects

### HTML Example

```html
<track kind="subtitles" srclang="fr" label="French">
```

---

## Captions

**Captions** are designed for users who **cannot hear the audio clearly or at all**.

Captions include:

* Spoken dialogue
* Sound effects
* Music cues
* Speaker identification

### Example

```
[Door slams]
SARAH: We need to leave now!
[Thunder rumbling]
```

Captions:

* Describe **what is heard**, not just what is said
* Are essential for accessibility standards (WCAG)

### HTML Example

```html
<track kind="captions" srclang="en" label="English Captions">
```

---

## Key Difference in One Sentence

> **Subtitles translate speech; captions describe sound.**

---

## When to Use Each

* Use **subtitles** when offering multiple languages
* Use **captions** when aiming for accessibility
* Ideally, provide **both** in professional websites and media platforms

---

### Example 1: Video with Subtitles

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="subtitles_es.vtt" kind="subtitles" srclang="es" label="Español">
  Your browser does not support video playback.
</video>
```

---

### Example 2: Captions for Deaf or Hard of Hearing Users

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <track src="captions_en.vtt" kind="captions" srclang="en" label="English Captions" default>
  Your browser does not support video playback.
</video>
```

---

### Advantages of Using `<track>`

* **Improved accessibility**
* **Support for multiple languages**
* **Better usability in noisy or silent environments**
* **Structured navigation using chapters**
* **Compliance with accessibility standards**

---

## 8.3 File Format for Text Tracks (WebVTT)

Most browsers support **WebVTT (Web Video Text Tracks)** format for subtitles and captions.

### Characteristics of WebVTT

* Human-readable
* Time-coded
* Easy to edit
* Widely supported

---

### Example WebVTT File (`subtitles_en.vtt`)

```text
WEBVTT

1
00:00:00.000 --> 00:00:05.000
Welcome to our video presentation.

2
00:00:05.000 --> 00:00:10.000
We hope you find this informative and enjoyable.
```

---

## 8.4 Comprehensive Example: `<source>` + `<track>`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Video with Sources and Tracks</title>
</head>
<body>

<h1>Video with Multiple Sources and Text Tracks</h1>

<video controls width="600" poster="posterimage.jpg">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  <source src="movie.ogv" type="video/ogg">

  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" default>
  <track src="subtitles_es.vtt" kind="subtitles" srclang="es" label="Spanish">
  <track src="captions_en.vtt" kind="captions" srclang="en" label="English Captions">
  <track src="descriptions_en.vtt" kind="descriptions" srclang="en" label="English Descriptions">

  Your browser does not support the video element.
</video>

</body>
</html>
```

---

# Practical Exercises

---

## Exercise 1: Video and Sources

### Task

Create an HTML document that includes a video with **multiple sources** to ensure cross-browser compatibility.

### Requirements

* Use a `<video>` tag
* Include **three `<source>` elements** (MP4, WebM, OGG)
* Each `<source>` must have `src` and `type`
* Enable playback controls
* Include fallback text

---

### Sample Solution

```html
<video controls width="600">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogv" type="video/ogg">
  Your browser does not support the video element.
</video>
```

---

## Exercise 2: Video and Subtitles

### Task

Create an HTML document with a video that includes **two subtitle tracks**: English and Russian.

### Requirements

* Use `<video>` with `controls`
* Add two `<track>` elements
* Use `srclang="en"` and `srclang="ru"`
* Provide appropriate labels

---

### Sample Solution

```html
<video controls width="600">
  <source src="movie.mp4" type="video/mp4">

  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" default>
  <track src="subtitles_ru.vtt" kind="subtitles" srclang="ru" label="Russian">

  Your browser does not support the video element.
</video>
```

---

## Key Takeaways

* `<source>` enables format flexibility and compatibility
* `<track>` enhances accessibility and usability
* WebVTT is the standard subtitle format
* Always provide fallback text
* Accessibility is a core part of modern web development

---