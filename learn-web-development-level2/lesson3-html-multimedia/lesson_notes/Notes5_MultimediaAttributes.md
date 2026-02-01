
---

# 5. Multimedia Element Attributes

HTML5 multimedia elements such as `<audio>` and `<video>` provide many additional attributes and APIs that allow developers to fine-tune playback behavior, improve accessibility, and create interactive multimedia experiences.

Understanding these advanced attributes and features helps you build more professional, accessible, and user-friendly web applications.

This topic covers:

* Additional multimedia attributes
* The `<source>` and `<track>` elements
* Controlling multimedia with JavaScript
* Multimedia events

---

## 5.1 Additional Attributes

### The `crossorigin` Attribute

The `crossorigin` attribute controls how the browser handles **cross-origin (different domain)** requests for media files.

It is important when:

* Loading media from a CDN
* Using media with a `<canvas>`
* Accessing media data with JavaScript

### Possible Values

| Value             | Meaning                          |
| ----------------- | -------------------------------- |
| `anonymous`       | No credentials are sent          |
| `use-credentials` | Cookies and credentials are sent |

### Examples

```html
<audio 
  src="https://example.com/audiofile.mp3" 
  controls 
  crossorigin="anonymous">
</audio>
```

```html
<video 
  src="https://example.com/videofile.mp4" 
  controls 
  crossorigin="use-credentials" 
  width="800" 
  height="450">
</video>
```

---

## The `<source>` Attributes

The `<source>` element is used inside `<audio>` and `<video>` to provide **multiple media formats**.

This improves cross-browser compatibility.

### Key `<source>` Attributes

| Attribute | Description            |
| --------- | ---------------------- |
| `src`     | Path to media file     |
| `type`    | MIME type of the media |

### Example

```html
<video controls width="600">
  <source src="videofile.mp4" type="video/mp4">
  <source src="videofile.webm" type="video/webm">
  <source src="videofile.ogv" type="video/ogg">
  Your browser does not support the video element.
</video>
```

---

## Attributes and Properties for Subtitles and Text Tracks

### The `<track>` Element

The `<track>` element is used to add:

* Subtitles
* Captions
* Descriptions
* Chapters
* Metadata

This improves **accessibility** and usability for users who:

* Are hearing impaired
* Speak different languages
* Need textual descriptions

### Key `<track>` Attributes

| Attribute | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| `src`     | Path to .vtt subtitle file                                            |
| `kind`    | Type of track (subtitles, captions, descriptions, chapters, metadata) |
| `srclang` | Language code (e.g., en, es, fr)                                      |
| `label`   | Human-readable track name                                             |
| `default` | Makes this track the default                                          |

### Example

```html
<video controls width="600">
  <source src="videofile.mp4" type="video/mp4">

  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" default>
  <track src="subtitles_es.vtt" kind="subtitles" srclang="es" label="Spanish">

  Your browser does not support the video element.
</video>
```

---

## 5.2 Controlling Multimedia Elements with JavaScript

HTML5 multimedia elements expose a JavaScript API that allows you to:

* Play and pause media
* Stop and restart playback
* Jump to specific times
* Build custom media controls

---

### Example: Custom Controls with JavaScript

#### HTML

```html
<video id="myVideo" src="videofile.mp4" controls width="600"></video>

<button onclick="playVideo()">Play</button>
<button onclick="pauseVideo()">Pause</button>
<button onclick="stopVideo()">Stop</button>
<button onclick="increaseSound()">Volume Up</button>
<button onclick="decreaseSound()">Volume Down</button>
```

#### JavaScript

```html
<script>
const video = document.getElementById("myVideo");

function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}

function stopVideo() {
  video.pause();
  video.currentTime = 0;
}

function increaseSound() {
  if (video.volume < 1.0) {
    video.volume = Math.min(1.0, video.volume + 0.1);
  }
}

function decreaseSound() {
  if (video.volume > 0.0) {
    video.volume = Math.max(0.0, video.volume - 0.1);
  }
}
</script>
```

### Explanation

* `play()` starts playback
* `pause()` pauses playback
* `currentTime = 0` resets the video
* `volume` adjusts the audio (range: 0.0 to 1.0)

---

## 5.3 Multimedia Element Events

Multimedia elements fire events that let you detect changes in playback state.

### Common Events

| Event        | When It Occurs       |
| ------------ | -------------------- |
| `play`       | Playback starts      |
| `pause`      | Playback is paused   |
| `ended`      | Media finishes       |
| `timeupdate` | Current time changes |

---

### Example: Listening for Events

#### HTML

```html
<video id="myVideo" src="videofile.mp4" controls width="600"></video>
```

#### JavaScript

```html
<script>
const video = document.getElementById("myVideo");

video.addEventListener('play', function() {
  console.log('Video started playing');
});

video.addEventListener('pause', function() {
  console.log('Video paused');
});

video.addEventListener('ended', function() {
  console.log('Video ended');
});

video.addEventListener('timeupdate', function() {
  console.log('Current time: ' + video.currentTime);
});
</script>
```

---

# Exercises

## Exercise 1: Multimedia Sources

### Task

Create an HTML document that plays a video using multiple video sources.

### Requirements

* Must include `<video>` tag
* Must include multiple `<source>` tags
* Each `<source>` must have `src` and `type`
* Must include fallback text
* Must include `controls`

### Sample Solution

```html
<!DOCTYPE html>
<html>
<head>
  <title>Multiple Video Sources</title>
</head>
<body>

  <h2>Video with Multiple Sources</h2>

  <video controls width="600">
    <source src="videofile.mp4" type="video/mp4">
    <source src="videofile.webm" type="video/webm">
    <source src="videofile.ogv" type="video/ogg">
    Your browser does not support the video element.
  </video>

</body>
</html>
```

---

## Exercise 2: Subtitles for Video

### Task

Create an HTML document that adds multiple subtitle tracks to a video.

### Requirements

* Must include `<video>` tag
* Must include multiple `<track>` tags
* Each `<track>` must include:

    * `src`
    * `kind="subtitles"`
    * `srclang`
    * `label`
* All `<track>` must be inside `<video>`
* Should include `controls`

### Sample Solution

```html
<!DOCTYPE html>
<html>
<head>
  <title>Video with Subtitles</title>
</head>
<body>

  <h2>Accessible Video</h2>

  <video controls width="600">
    <source src="videofile.mp4" type="video/mp4">

    <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" default>
    <track src="subtitles_es.vtt" kind="subtitles" srclang="es" label="Spanish">

    Your browser does not support the video element.
  </video>

</body>
</html>
```

---

## Challenge Exercise (Optional)

1. Add a `chapters` track using `<track kind="chapters">`.
2. Add JavaScript to log when the video ends.
3. Create custom Play, Pause, and Volume buttons.
4. Load a video from another domain using `crossorigin="anonymous"`.

---

## Key Takeaways for Students

* Multimedia elements have powerful extra attributes
* Use `<source>` for cross-browser compatibility
* Use `<track>` for subtitles and accessibility
* JavaScript can control media playback
* Media events allow you to respond to user actions
* Advanced attributes improve usability and accessibility

---

