
---

# 📘 Web APIs in JavaScript

---

# 🔹 7.1 Introduction to Web APIs

---

## ✅ What are Web APIs?

**Web APIs (Application Programming Interfaces)** are built-in browser features that allow web applications to:

* Interact with the **user’s device**
* Access **hardware capabilities**
* Enhance user experience with **real-world data**

---

## 🔍 Examples of Web APIs

* Geolocation API → get user location
* Notifications API → send alerts
* DeviceOrientation API → detect device movement
* Battery Status API → check battery info
* Fullscreen API → control display mode

---

# 🔹 7.2 Geolocation API

---

## ✅ What is Geolocation API?

The **Geolocation API** allows a web application to:

> 📍 Get the user’s geographic location (latitude & longitude)

---

## ⚠️ Permission Requirement

* The browser **must ask the user for permission**
* Without permission → access denied

---

## ✅ Getting Current Location

---

### 📌 Example

```javascript
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },
    (error) => {
      console.error('Error getting geolocation:', error);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
  );
} else {
  console.log('Geolocation is not supported by this browser.');
}
```

---

## 🔍 Options Explained

| Option               | Meaning               |
| -------------------- | --------------------- |
| `enableHighAccuracy` | More precise location |
| `timeout`            | Max wait time         |
| `maximumAge`         | Cached data age       |

---

# 🔄 Tracking Location Changes

---

## ✅ watchPosition()

```javascript
let watchId;

if ('geolocation' in navigator) {
  watchId = navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },
    (error) => {
      console.error('Error:', error);
    }
  );
}
```

---

## 🛑 Stop Tracking

```javascript
function stopTracking() {
  navigator.geolocation.clearWatch(watchId);
}
```

---

# 🔹 7.3 Notifications API

---

## ✅ What is Notifications API?

Allows web apps to:

> 🔔 Display system notifications (even when tab is inactive)

---

## ⚠️ Permission Required

---

### 📌 Request Permission

```javascript
if ('Notification' in window) {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Permission granted');
    } else {
      console.log('Permission denied');
    }
  });
}
```

---

## ✅ Sending Notifications

---

### 📌 Example

```javascript
if (Notification.permission === 'granted') {
  const notification = new Notification('Hello!', {
    body: 'This is a notification',
    icon: 'icon.png',
    data: { url: 'https://example.com' }
  });

  notification.onclick = (event) => {
    event.preventDefault();
    window.open(notification.data.url, '_blank');
  };
}
```

---

# 🔹 7.4 Other Useful Web APIs

---

# ✅ 1. DeviceOrientation API

---

## 📌 Purpose

* Detect device movement and orientation

---

## 📌 Example

```javascript
window.addEventListener('deviceorientation', (event) => {
  console.log(`Alpha: ${event.alpha}`);
  console.log(`Beta: ${event.beta}`);
  console.log(`Gamma: ${event.gamma}`);
});
```

---

# ✅ 2. Battery Status API

---

## 📌 Purpose

* Get battery level and charging status

---

## 📌 Example

```javascript
navigator.getBattery().then((battery) => {
  console.log(`Battery level: ${battery.level * 100}%`);
  console.log(`Charging: ${battery.charging}`);

  battery.addEventListener('levelchange', () => {
    console.log(`Battery level changed: ${battery.level * 100}%`);
  });

  battery.addEventListener('chargingchange', () => {
    console.log(`Charging state changed: ${battery.charging}`);
  });
});
```

---

# ✅ 3. Fullscreen API

---

## 📌 Purpose

* Switch webpage to full-screen mode

---

## 📌 Example

```javascript
const element = document.documentElement;

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    element.requestFullscreen().catch((err) => {
      console.error(err.message);
    });
  } else {
    document.exitFullscreen();
  }
}

document.getElementById('fullscreenButton')
        .addEventListener('click', toggleFullScreen);
```

---

# 🔹 Use Cases of Web APIs

---

✔ Navigation apps (Geolocation)

✔ Notifications & alerts

✔ Mobile apps (Device orientation)

✔ Power-aware apps (Battery API)

✔ Media apps (Fullscreen)

---

# 🧪 Exercises with Solutions

---

# ✅ Exercise 1: User Location

---

## 📝 Problem

* Request location
* Log coordinates
* Handle errors

---

## ✅ Solution

```javascript
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },
    (error) => {
      console.log('Location access denied or error occurred');
    }
  );
} else {
  console.log('Geolocation not supported');
}
```

---

# ✅ Exercise 2: Battery Status

---

## 📝 Problem

* Get battery info
* Track changes

---

## ✅ Solution

```javascript
navigator.getBattery().then((battery) => {
  console.log(`Battery level: ${battery.level * 100}%`);
  console.log(`Charging: ${battery.charging}`);

  battery.addEventListener('levelchange', () => {
    console.log(`Battery level changed: ${battery.level * 100}%`);
  });

  battery.addEventListener('chargingchange', () => {
    console.log(`Charging changed: ${battery.charging}`);
  });
});
```

---

# 🔹 Key Takeaways

---

✔ Web APIs extend browser capabilities

✔ Require **user permission** for sensitive data

✔ Enable interaction with device hardware

✔ Improve user experience

---

# 🚀 Final Insight

---

👉 Web APIs are:

> **The bridge between web applications and real-world device functionality**

---

