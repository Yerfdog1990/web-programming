Perfect — here are **detailed, classroom-ready lesson notes** on:

---

# HTML5 Video Events (Tracking & Analytics)

## Lesson Notes

### Topic: HTML5 Video Event (Tealium iQ / utag.js)

---

## Overview

An **HTML5 Video Event** is used to track user interactions with embedded HTML5 video elements on a web page. These events allow organizations to collect analytics data whenever a visitor:

* Plays a video
* Pauses a video
* Experiences buffering
* Reaches specific playback milestones

This data is essential for understanding:

* Video engagement
* Content performance
* User behavior
* Drop-off points
* Technical playback issues

HTML5 video events are commonly implemented using **Tealium iQ** and the **utag.js** library.

---

## Learning Objectives

By the end of this lesson, students should be able to:

* Explain what HTML5 video events are
* Identify different video event triggers
* Configure event listeners for HTML5 video
* Understand video tracking variables
* Interpret analytics data from video interactions
* Apply best practices for video analytics

---

## Requirements

To use HTML5 video events in Tealium:

* **utag.js version 4.38 or later**
* Proper configuration in Tealium iQ
* An embedded HTML5 `<video>` element
* Event listeners enabled via Tealium

---

## How HTML5 Video Events Work

### Basic Flow

1. A visitor interacts with an HTML5 video.
2. The browser fires a native video event (play, pause, etc.).
3. Tealium’s event listener detects the action.
4. A tracking call is sent with video metadata.
5. Analytics tools receive and store the event data.

### Conceptual Diagram (Text)

```
User Action → HTML5 Video Event → Tealium Listener → Tracking Call → Analytics Platform
```

---

## Event Triggers

Event triggers define **which user actions are tracked**.

### Supported HTML5 Video Event Triggers

| Trigger    | Description                                    |
| ---------- | ---------------------------------------------- |
| Play       | Fires when the video starts playing            |
| Pause      | Fires when the video is paused                 |
| Buffering  | Fires when the video is buffering              |
| Milestones | Fires when playback reaches defined thresholds |

---

## Milestones Trigger (Detailed)

Milestones are used to measure **how much of the video was watched**.

### Milestone Types

### 1. Percentage Complete

Triggers when a percentage of the video is watched.

Example values:

```
25, 50, 75
```

Meaning:

* Fire event at 25%
* Fire event at 50%
* Fire event at 75%

---

### 2. Time Viewed

Triggers after a specific number of seconds watched.

Example:

```
30
```

Meaning:

* Fire event after 30 seconds of viewing

---

## Element Selector

The **Element Selector** identifies which video element to track.

### Purpose

* Targets a specific video on the page
* Prevents tracking the wrong video

### Examples

| Selector Type | Example                    |
| ------------- | -------------------------- |
| ID            | `#promoVideo`              |
| Class         | `.hero-video`              |
| Tag           | `video`                    |
| Attribute     | `video[data-track="true"]` |

---

## Trigger Frequency

Trigger frequency controls **how often an event can fire**.

### Examples

* Once per page
* Once per session
* Every time
* Once per video

This prevents duplicate or inflated analytics data.

---

## Event Trigger Variables

Event trigger variables are data values sent with each tracking call.

They provide context about:

* Which video
* How long
* Where the user is in playback
* What action occurred

---

## Default HTML5 Video Variables

| Variable        | Description                 | Example              | Type   |
| --------------- | --------------------------- | -------------------- | ------ |
| tealium_event   | Tealium event name          | video_play           | String |
| video_id        | Video ID                    | xWlEk2i9r5Q          | String |
| video_name      | Video title                 | How to track videos  | String |
| video_length    | Total duration (sec)        | 300                  | Number |
| video_platform  | Video platform              | html5                | String |
| video_playhead  | Current playback time (sec) | 151                  | Number |
| video_milestone | Milestone reached           | 50                   | Number |
| milestone_type  | percent or time             | percent              | String |
| iq_event_id     | Event listener UID          | html5_video_events_1 | String |

---

## Play Event

### Description

Triggered when the visitor starts playing the video.

### Identifier

```
tealium_event = "video_play"
```

### Example Payload

```json
{
  "tealium_event": "video_play",
  "video_id": "xWlEk2i9r5Q",
  "video_name": "How to track videos in Tealium",
  "video_length": "300",
  "video_platform": "html5",
  "video_playhead": "1",
  "iq_event_id": "html5_video_events_1"
}
```

### Use Case

* Track video starts
* Measure total video views
* Funnel analysis

---

## Pause Event

### Description

Triggered when the visitor pauses the video.

### Identifier

```
tealium_event = "video_pause"
```

### Example Payload

```json
{
  "tealium_event": "video_pause",
  "video_id": "xWlEk2i9r5Q",
  "video_name": "How to track videos in Tealium",
  "video_length": "300",
  "video_platform": "html5",
  "video_playhead": "30",
  "iq_event_id": "html5_video_events_2"
}
```

### Use Case

* Detect disengagement
* Analyze pause behavior
* UX optimization

---

## Buffering Event

### Description

Triggered when video playback is interrupted due to buffering.

### Identifier

```
tealium_event = "video_buffer"
```

### Example Payload

```json
{
  "tealium_event": "video_buffer",
  "video_id": "xWlEk2i9r5Q",
  "video_name": "How to track videos in Tealium",
  "video_length": "300",
  "video_platform": "html5",
  "video_playhead": "50",
  "iq_event_id": "html5_video_events_3"
}
```

### Use Case

* Detect performance issues
* Network quality monitoring
* CDN and streaming optimization

---

## Milestone Event

### Description

Triggered when the visitor reaches a milestone.

### Identifier

```
tealium_event = "video_milestone"
```

### Example Payload

```json
{
  "tealium_event": "video_milestone",
  "video_milestone": "50",
  "milestone_type": "percent",
  "video_id": "xWlEk2i9r5Q",
  "video_name": "How to track videos in Tealium",
  "video_length": "300",
  "video_platform": "html5",
  "video_playhead": "151",
  "iq_event_id": "html5_video_events_4"
}
```

### Use Case

* Measure content engagement
* Identify drop-off points
* Calculate completion rates

---

## Event Configuration (Based on UI)

From the configuration screen (as shown in the image), you can:

* Select triggers (Play, Pause, Buffering, Milestones)
* Set platform variable (e.g., html5)
* Configure event-specific variables
* Assign `tealium_event` values
* Control which variables fire per trigger

---

## Best Practices

### Technical

* Always use specific element selectors
* Avoid tracking multiple videos with one selector unless intended
* Use proper trigger frequency
* Test events in Tealium debug mode

### Analytics

* Track milestones at meaningful points (25, 50, 75, 100)
* Monitor buffering to detect UX issues
* Use video_playhead for session analysis
* Standardize naming for video_name and video_id

---

## Common Use Cases

* Marketing video performance
* Training video completion tracking
* E-learning engagement analysis
* Product demo effectiveness
* Streaming quality monitoring

---

## Summary

HTML5 Video Events provide powerful insight into how users interact with video content. By tracking:

* Play
* Pause
* Buffering
* Milestones

organizations can optimize content, improve user experience, and make data-driven decisions.

When combined with Tealium iQ and utag.js, HTML5 video events form a critical part of modern digital analytics and personalization strategies.

---

# Real-World Implementation Code

## HTML5 Video Event Tracking (HTML5 + Tealium)

---

## 1. Basic HTML5 Video Markup

Start with a properly identified HTML5 video element.

```html
<video 
  id="training-video"
  class="tracked-video"
  width="640"
  controls
  preload="metadata"
>
  <source src="training.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

Why this matters:

* `id` allows Tealium to target the element
* `controls` enables user interaction
* `preload="metadata"` allows duration detection

---

## 2. Element Selector in Tealium

In Tealium iQ Event Configuration:

```
#training-video
```

or

```
.tracked-video
```

This ensures only the intended video is tracked.

---

## 3. Manual JavaScript Event Listener (Real-World Fallback)

Even when using Tealium’s built-in HTML5 Video Event, many teams also add **explicit listeners** for reliability and custom logic.

### Full JavaScript Example

```html
<script>
document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("training-video");

  if (!video) return;

  function sendTealiumEvent(eventName, extraData) {
    if (window.utag && typeof utag.link === "function") {
      utag.link(Object.assign({
        tealium_event: eventName,
        video_id: video.id,
        video_name: "Employee Training Video",
        video_length: Math.round(video.duration || 0),
        video_platform: "html5",
        video_playhead: Math.round(video.currentTime || 0)
      }, extraData || {}));
    }
  }

  // PLAY
  video.addEventListener("play", function () {
    sendTealiumEvent("video_play");
  });

  // PAUSE
  video.addEventListener("pause", function () {
    sendTealiumEvent("video_pause");
  });

  // BUFFERING
  video.addEventListener("waiting", function () {
    sendTealiumEvent("video_buffer");
  });

  // ENDED (optional but common)
  video.addEventListener("ended", function () {
    sendTealiumEvent("video_complete", {
      video_playhead: Math.round(video.duration || 0)
    });
  });

});
</script>
```

---

## 4. Milestone Tracking (25%, 50%, 75%)

Milestones are often implemented manually to ensure accuracy.

### Milestone Logic Example

```html
<script>
document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("training-video");
  if (!video) return;

  var milestones = [25, 50, 75];
  var firedMilestones = {};

  video.addEventListener("timeupdate", function () {
    if (!video.duration) return;

    var percentPlayed = Math.floor((video.currentTime / video.duration) * 100);

    milestones.forEach(function (milestone) {
      if (percentPlayed >= milestone && !firedMilestones[milestone]) {
        firedMilestones[milestone] = true;

        if (window.utag && typeof utag.link === "function") {
          utag.link({
            tealium_event: "video_milestone",
            video_milestone: milestone,
            milestone_type: "percent",
            video_id: video.id,
            video_name: "Employee Training Video",
            video_length: Math.round(video.duration),
            video_platform: "html5",
            video_playhead: Math.round(video.currentTime)
          });
        }
      }
    });
  });
});
</script>
```

---

## 5. Example Real-World Data Layer Payloads

### Play Event

```js
utag.link({
  tealium_event: "video_play",
  video_id: "training-video",
  video_name: "Employee Training Video",
  video_length: 300,
  video_platform: "html5",
  video_playhead: 1
});
```

---

### Pause Event

```js
utag.link({
  tealium_event: "video_pause",
  video_id: "training-video",
  video_name: "Employee Training Video",
  video_length: 300,
  video_platform: "html5",
  video_playhead: 45
});
```

---

### Buffering Event

```js
utag.link({
  tealium_event: "video_buffer",
  video_id: "training-video",
  video_name: "Employee Training Video",
  video_length: 300,
  video_platform: "html5",
  video_playhead: 120
});
```

---

### Milestone Event (50%)

```js
utag.link({
  tealium_event: "video_milestone",
  video_milestone: 50,
  milestone_type: "percent",
  video_id: "training-video",
  video_name: "Employee Training Video",
  video_length: 300,
  video_platform: "html5",
  video_playhead: 151
});
```

---

## 6. How This Maps to Tealium UI

| UI Setting        | Code Equivalent                        |
| ----------------- | -------------------------------------- |
| Play trigger      | video.addEventListener("play")         |
| Pause trigger     | video.addEventListener("pause")        |
| Buffering trigger | video.addEventListener("waiting")      |
| Milestones        | timeupdate + percent logic             |
| Element Selector  | document.getElementById / CSS selector |
| Event Variables   | utag.link() object                     |

---

## 7. Common Production Enhancements

In real systems, teams often add:

* Debouncing to prevent duplicate events
* Session IDs for correlation
* User IDs for personalization
* CDN + buffering correlation
* Completion rate tracking (ended)

---

## 8. Classroom Practical Exercise

### Task for Students

1. Add an HTML5 `<video>` element
2. Implement play/pause tracking
3. Add 25%, 50%, 75% milestones
4. Log events to console instead of utag (for testing)

### Console-Only Version (for labs)

```js
console.log("video_play", {
  video_playhead: video.currentTime
});
```

---

## Key Teaching Takeaway

In real-world analytics:

* Built-in Tealium listeners are convenient
* Manual JS gives maximum control
* Milestones almost always need custom logic
* Clean, consistent data layer = better analytics

---

