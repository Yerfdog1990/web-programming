
# WebVTT: The Web Video Text Tracks Format

These notes are structured for teaching, reference, and practical use, and are aligned with W3C standards and real-world usage in HTML5 video.

---

# WebVTT: The Web Video Text Tracks Format

## Lesson Notes

## Abstract

WebVTT [(Web Video Text Tracks)](https://www.w3.org/TR/webvtt1/#conformance) is a standardized text format used to display time-synchronized text with video or audio content on the web. It is most commonly used to provide:

* Captions (for accessibility)
* Subtitles (for translation)
* Descriptions (for visually impaired users)
* Chapters (for navigation)
* Metadata (for time-aligned data)

WebVTT is designed to be used with the HTML `<track>` element and is maintained by the W3C (World Wide Web Consortium).

---

## Learning Objectives

By the end of this lesson, students should be able to:

* Explain what WebVTT is and why it is used
* Understand the structure of a WebVTT file
* Create basic caption files
* Use advanced features like styling, regions, and voice tags
* Integrate WebVTT with HTML video
* Understand chapters and metadata use cases
* Apply accessibility best practices

---

## 1. Introduction to WebVTT

### What is WebVTT?

WebVTT stands for:

> Web Video Text Tracks

It is a plain-text format used to add time-aligned text to media such as:

* `<video>`
* `<audio>`

### Main Uses

WebVTT supports:

| Feature      | Purpose                                |
| ------------ | -------------------------------------- |
| Captions     | Accessibility for deaf/hard of hearing |
| Subtitles    | Language translation                   |
| Descriptions | Narration of visual content            |
| Chapters     | Navigation markers                     |
| Metadata     | Time-aligned data (e.g., JSON)         |

---

## 2. Using WebVTT with HTML

WebVTT is connected to video using the `<track>` element.

### Basic HTML Example

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" srclang="en" label="English" default>
</video>
```

### Common `kind` Values

| kind         | Description            |
| ------------ | ---------------------- |
| captions     | Accessibility captions |
| subtitles    | Translated dialogue    |
| descriptions | Audio descriptions     |
| chapters     | Navigation             |
| metadata     | Scripted or app data   |

---

## 3. Basic WebVTT File Structure

### Required Header

Every WebVTT file must start with:

```
WEBVTT
```

### Basic Cue Structure

```
start_time --> end_time
Cue text here
```

### Example

```
WEBVTT

00:00:01.000 --> 00:00:04.000
Hello and welcome.
```

---

## 4. WebVTT Cues

A **cue** is a time-aligned text segment.

### Cue Components

| Part                  | Description               |
| --------------------- | ------------------------- |
| Identifier (optional) | Label for the cue         |
| Timing                | Start and end timestamps  |
| Settings (optional)   | Position, size, alignment |
| Payload               | The displayed text        |

### Example with Identifier

```
intro1
00:00:01.000 --> 00:00:04.000
Welcome to the show.
```

---

## 5. Multiple Lines in Cues

Line breaks are respected.

```
00:00:05.000 --> 00:00:09.000
— Hello!
— Hi there!
```

Best Practice:

* Use one line where possible
* Add line breaks only when necessary

---

## 6. Styling WebVTT Captions

### CSS Styling via HTML

You can style captions using CSS:

```css
video::cue {
  background: black;
  color: white;
  font-size: 1.2em;
}
```

### Targeting Specific Elements

```css
video::cue(b) {
  color: yellow;
}
```

---

## 7. Styling Inside WebVTT (STYLE Blocks)

WebVTT supports embedded styles.

### STYLE Block Example

```
WEBVTT

STYLE
::cue {
  color: white;
  background-color: black;
}

00:00:00.000 --> 00:00:05.000
Hello world.
```

Rules:

* STYLE must appear before first cue
* No blank lines inside STYLE
* Cannot contain `-->`

---

## 8. Voice Spans and Speaker Identification

Voice tags show who is speaking.

### Example

```
00:00:01.000 --> 00:00:04.000
<v John>Hello there!</v>
```

### With Classes

```
<v.loud.first John>Hello!</v>
```

### Styling by Speaker

```css
::cue(v[voice="John"]) {
  color: cyan;
}
```

---

## 9. Cue Settings (Positioning)

You can control where captions appear.

### Common Settings

| Setting  | Purpose              |
| -------- | -------------------- |
| align    | left, right, center  |
| position | Horizontal placement |
| line     | Vertical placement   |
| size     | Width of cue box     |

### Example

```
00:00:01.000 --> 00:00:04.000 position:10% align:left size:35%
Where did he go?
```

---

## 10. Regions (Roll-up Captions)

Regions allow scrolling captions for live TV style.

### Region Definition

```
REGION
id:fred
width:40%
lines:3
scroll:up
```

### Using a Region

```
00:00:00.000 --> 00:00:10.000 region:fred
<v Fred>Hello!</v>
```

Use Case:

* Live broadcasts
* News-style rolling captions

---

## 11. Chapters in WebVTT

Used for navigation in videos.

### Chapter File Example

```
WEBVTT

00:00:00.000 --> 00:05:00.000
Introduction

00:05:00.000 --> 00:10:00.000
Main Topic
```

HTML:

```html
<track kind="chapters" src="chapters.vtt">
```

---

## 12. Metadata Tracks

Metadata is time-aligned data (not displayed).

### Example (JSON Metadata)

```
00:00:10.000 --> 00:00:15.000
{
  "type": "location",
  "lat": "36.19",
  "long": "137.23"
}
```

Use Case:

* Interactive apps
* Synchronizing data with video

---

## 13. Comments (NOTE Blocks)

Used for author notes.

```
NOTE This is a comment.
```

Multi-line:

```
NOTE
This file was created by Jill.
Timing may be approximate.
```

Rules:

* Begin with NOTE
* End at blank line
* Not shown to users

---

## 14. Accessibility Best Practices

### For Captions

* Include speaker identification
* Describe important sounds

Example:

```
[Door slams]
[Audience cheering]
```

### Use Proper Timing

* No gaps during speech
* Avoid overlapping cues
* Keep reading speed reasonable

---

## 15. Conformance and Standards

WebVTT is maintained by:

* W3C Timed Text Working Group

Key requirements:

* Valid timestamps
* Proper UTF-8 encoding
* Correct parsing of cues and regions

---

## 16. Key Benefits of WebVTT

| Benefit              | Explanation                       |
| -------------------- | --------------------------------- |
| Accessibility        | Legal & ethical compliance        |
| SEO                  | Search engines can index text     |
| UX                   | Better navigation & understanding |
| Internationalization | Easy subtitle translation         |
| Interactivity        | Metadata enables rich apps        |

---

## Summary

WebVTT is a powerful, flexible standard for time-aligned text in web media. It supports:

* Captions & subtitles
* Styling with CSS
* Speaker identification
* Regions & roll-up captions
* Chapters & metadata
* Accessibility compliance

It is essential for modern, professional video delivery on the web.

---

