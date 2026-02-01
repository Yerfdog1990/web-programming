
---

# 4. Video Insertion: `<video>`

HTML5 introduced the `<video>` element to allow developers to embed video content directly into web pages without requiring external plugins. This makes it possible to display tutorials, advertisements, demonstrations, and other multimedia content directly in the browser.

The `<video>` element supports multiple video formats and provides built-in controls for user interaction.

---

## 4.1 Basics of the `<video>` Tag

The `<video>` tag is used to embed video files into a web page.

### Key Features

* Built-in video player
* Supports multiple video formats
* Provides playback controls
* Supports accessibility and fallback content
* Can be controlled with attributes and JavaScript

---

## Simple Example

The simplest way to use `<video>` is with the `src` attribute and the `controls` attribute.

```html
<video src="videofile.mp4" controls></video>
```

### Explanation

* `src` specifies the video file path
* `controls` shows Play, Pause, and Volume controls
* The closing `</video>` tag is required

---

## Example with Multiple Sources

To ensure compatibility across different browsers, use multiple `<source>` elements.

```html
<video controls>
  <source src="videofile.mp4" type="video/mp4">
  <source src="videofile.webm" type="video/webm">
  <source src="videofile.ogv" type="video/ogg">
  Your browser does not support the video element.
</video>
```

### How This Works

* The browser checks each source in order
* The first supported format is played
* Fallback text appears if none are supported

---

## `<video>` Tag Attributes

| Attribute  | Description                 |
| ---------- | --------------------------- |
| `src`      | Path to video file          |
| `controls` | Displays playback controls  |
| `autoplay` | Plays video automatically   |
| `loop`     | Repeats video after it ends |
| `muted`    | Starts video muted          |
| `preload`  | Controls how video loads    |
| `width`    | Width of video player       |
| `height`   | Height of video player      |
| `poster`   | Placeholder image           |

---

## 4.2 Key Attributes

### 1. Autoplay

Starts the video automatically when the page loads.

⚠️ **Note:** Modern browsers (like Chrome, Firefox, and Safari) block autoplay videos with sound to prevent a poor user experience. To ensure `autoplay` works, you should almost always include the `muted` attribute.

```html
<video src="videofile.mp4" autoplay muted></video>
```

---

### 2. Loop

Repeats the video continuously.

```html
<video src="videofile.mp4" loop></video>
```

---

### 3. Muted

Mutes the video on load.

```html
<video src="videofile.mp4" muted></video>
```

---

### 4. Preload

Controls how the browser loads the video.

| Value      | Meaning         |
| ---------- | --------------- |
| `none`     | Do not preload  |
| `metadata` | Load basic info |
| `auto`     | Load full video |

```html
<video src="videofile.mp4" preload="auto"></video>
```

---

### 5. Poster

Displays an image before the video starts.

```html
<video src="videofile.mp4" poster="posterimage.jpg"></video>
```

---

### 6. Width and Height

Set the size of the video player.

```html
<video src="videofile.mp4" width="600" height="400" controls></video>
```

---

## 4.3 Supported Video Formats

To ensure cross-browser compatibility, provide multiple video formats.

---

### MP4 Format

* Most widely supported
* Good quality and small file size
* Uses lossy compression

```html
<video src="videofile.mp4" type="video/mp4"></video>
```

---

### WebM Format

* Open format for the web
* Supported by modern browsers

```html
<video src="videofile.webm" type="video/webm"></video>
```

---

### OGG (OGV) Format

* Open video format
* Alternative to MP4 and WebM

```html
<video src="videofile.ogv" type="video/ogg"></video>
```

---

## Example: Multiple Formats for Compatibility

```html
<video width="600" controls autoplay muted>
  <source src="videofile.mp4" type="video/mp4">
  <source src="videofile.webm" type="video/webm">
  <source src="videofile.ogv" type="video/ogg">
  Your browser does not support the video element.
</video>
```

---

## Accessibility Best Practices

* Always include fallback text
* Provide captions using `<track>` (advanced topic)
* Use `poster` to give visual context
* Avoid autoplay with sound

---

# Exercises

## Exercise 1: Video with Controls

### Task

Create an HTML document that plays a video file and shows playback controls.

### Requirements

* Must include `<video>` tag
* Must include `controls`
* Must include `<source>` with `src`
* Must include `type` attribute (e.g., `video/mp4`)

### Sample Solution

```html
<!DOCTYPE html>
<html>
<head>
  <title>Video with Controls</title>
</head>
<body>

  <h2>My Video Player</h2>

  <video controls width="600">
    <source src="videofile.mp4" type="video/mp4">
    Your browser does not support the video element.
  </video>

</body>
</html>
```

---

## Exercise 2: Autoplay Video

### Task

Create an HTML document where the video starts playing automatically.

### Requirements

* Must include `<video>` tag
* Must include `autoplay`
* Must include `src` or multiple `<source>` tags
* May include multiple formats for compatibility

### Sample Solution

```html
<!DOCTYPE html>
<html>
<head>
  <title>Autoplay Video</title>
</head>
<body>

  <h2>Autoplay Video</h2>

  <video autoplay muted width="600">
    <source src="videofile.mp4" type="video/mp4">
    <source src="videofile.webm" type="video/webm">
    Your browser does not support the video element.
  </video>

</body>
</html>
```

⚠️ Note:
Modern browsers often require `muted` for autoplay to work.

---

## Challenge Exercise (Optional)

1. Add a `poster` image to your video.
2. Add `loop` to make the video repeat.
3. Change `preload` values and observe loading behavior.
4. Add multiple formats and test on different browsers.

---

## Key Takeaways for Students

* `<video>` embeds video directly in HTML
* Always use `controls` for usability
* Provide multiple formats for compatibility
* Use `poster` for better UX
* Use `autoplay` carefully
* Always include fallback text

---

