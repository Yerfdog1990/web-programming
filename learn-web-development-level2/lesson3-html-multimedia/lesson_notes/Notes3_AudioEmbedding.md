
---

# 3. Audio Embedding: `<audio>`

HTML5 introduced the `<audio>` element to allow developers to embed sound directly into web pages without relying on external plugins. This makes it easy to add music, sound effects, voice recordings, and other audio content to websites.

The `<audio>` element supports multiple audio formats and provides built-in controls for users to play, pause, and adjust volume.

Using `<audio>` improves interactivity and enriches multimedia experiences on modern websites.

---

## 3.1 Basics of the `<audio>` Tag

The `<audio>` tag is used to embed audio files in a web page.

### Key Features

* Built-in playback controls
* Supports multiple audio formats
* Allows fallback text for unsupported browsers
* Supports accessibility features

---

## Simple Example

The simplest way to use `<audio>` is with the `src` attribute and the `controls` attribute.

```html
<audio src="audiofile.mp3" controls></audio>
```

### Explanation

* `src` specifies the path to the audio file
* `controls` displays Play, Pause, and Volume controls
* The closing `</audio>` tag is required

---

## Example with Multiple Sources

To support different browsers and formats, you can use multiple `<source>` elements.

```html
<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
  <source src="audiofile.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

### How This Works

* The browser checks each `<source>` in order
* The first supported format is used
* If none are supported, fallback text is shown

---

## Attributes of the `<audio>` Tag

| Attribute  | Description                  |
| ---------- | ---------------------------- |
| `src`      | Path to the audio file       |
| `controls` | Shows playback controls      |
| `autoplay` | Plays audio automatically    |
| `loop`     | Repeats audio after it ends  |
| `muted`    | Starts audio muted           |
| `preload`  | Controls how audio is loaded |

---

## 3.2 Examples of Using Attributes

### Controls Attribute

Adds Play, Pause, and Volume controls.

```html
<audio src="audiofile.mp3" controls></audio>
```

---

### Autoplay Attribute

Automatically starts playing when the page loads.

⚠️ Use carefully — unexpected audio can annoy users.

```html
<audio src="audiofile.mp3" autoplay></audio>
```

---

### Loop Attribute

Repeats the audio continuously.

```html
<audio src="audiofile.mp3" autoplay loop></audio>
```

---

### Muted Attribute

Starts the audio muted.

```html
<audio src="audiofile.mp3" muted></audio>
```

---

### Preload Attribute

Controls how the browser loads the audio.

| Value      | Meaning                      |
| ---------- | ---------------------------- |
| `none`     | Do not preload               |
| `metadata` | Load duration and basic info |
| `auto`     | Load entire audio file       |

```html
<audio src="audiofile.mp3" preload="auto"></audio>
```

---

## 3.3 Supported Audio Formats

Different browsers support different formats. To maximize compatibility, provide multiple formats.

---

### MP3 Format

* Most widely supported
* Uses lossy compression
* Small file size

```html
<audio src="audiofile.mp3" type="audio/mpeg"></audio>
```

---

### OGG Format

* Open-source format
* Good quality
* Supported by many modern browsers

```html
<audio src="audiofile.ogg" type="audio/ogg"></audio>
```

---

### WAV Format

* Uncompressed, very high quality
* Large file sizes
* Less common for the web

```html
<audio src="audiofile.wav" type="audio/wav"></audio>
```

---

## 3.4 Format Compatibility (Multi-Format)

To ensure audio plays in most browsers, provide multiple formats.

```html
<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
  <source src="audiofile.ogg" type="audio/ogg">
  <source src="audiofile.wav" type="audio/wav">
  Your browser does not support the audio element.
</audio>
```

---

## Accessibility Best Practices

Always include fallback text and, if possible, a download link.

```html
<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
  <source src="audiofile.ogg" type="audio/ogg">
  <source src="audiofile.wav" type="audio/wav">

  Your browser does not support the audio element.
  You can download the audio file 
  <a href="audiofile.mp3">here</a>.
</audio>
```

Why this matters:

* Helps users on unsupported browsers
* Supports assistive technologies
* Improves usability

---

# Exercises

## Exercise 1: Audio with Controls

### Task

Create an HTML document that plays an audio file and shows playback controls.

### Requirements

* Must include `<audio>` tag
* Must include `controls` attribute
* Must include at least one audio source
* Audio must be in a supported format (MP3 or OGG)
* Must include fallback text inside `<audio>`

### Sample Solution

```html
<!DOCTYPE html>
<html>
<head>
  <title>Audio with Controls</title>
</head>
<body>

  <h2>Audio Player</h2>

  <audio controls>
    <source src="audiofile.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

</body>
</html>
```

---

## Exercise 2: Audio with Multiple Formats

### Task

Create an HTML document that uses multiple audio formats for cross-browser compatibility.

### Requirements

* Must include `<audio controls>`
* Must include MP3, OGG, and WAV sources
* Each `<source>` must have `src` and `type`
* Must include fallback text

### Sample Solution

```html
<!DOCTYPE html>
<html>
<head>
  <title>Multi-Format Audio</title>
</head>
<body>

  <h2>Audio with Multiple Formats</h2>

  <audio controls>
    <source src="audiofile.mp3" type="audio/mpeg">
    <source src="audiofile.ogg" type="audio/ogg">
    <source src="audiofile.wav" type="audio/wav">
    Your browser does not support the audio element.
  </audio>

</body>
</html>
```

---

## Challenge Exercise (Optional)

1. Add `loop` to make the audio repeat.
2. Add `muted` and test unmuting.
3. Change `preload` between `none`, `metadata`, and `auto`.
4. Observe how loading behavior changes.

---

## Key Takeaways for Students

* `<audio>` embeds sound in web pages
* Always use `controls` for user control
* Provide multiple formats for compatibility
* Use `autoplay` carefully
* Include fallback text for accessibility
* Optimize audio files for web delivery

---

