
---

# **2. Date: Formatting Dates and Numbers**

Working with **dates and numbers** is essential in web development. JavaScript provides built-in tools like the `Date` object and formatting methods to handle them efficiently.

---

# **2.1 The Date Object**

The **`Date` object** represents a specific moment in time (date + time).

---

## **Creating a Date Object**

### **1. Current Date and Time**

If no arguments are passed, it returns the current date and time.

```javascript
const now = new Date();
console.log(now);
```

---

### **2. Specific Date (String Format)**

```javascript
const specificDate = new Date('2024-07-07T10:00:00');
console.log(specificDate);
```

✔ Uses ISO-like string format

---

### **3. Using Numeric Values**

```javascript
const anotherDate = new Date(2024, 6, 7, 10, 0, 0);
console.log(anotherDate);
```

⚠️ Important:

* Month is **zero-based**

    * 0 = January
    * 6 = July

---

# **2.2 Date Object Methods**

## **Getting Date Components**

```javascript
const now = new Date();

console.log(now.getFullYear()); // Year
console.log(now.getMonth());    // Month (0–11)
console.log(now.getDate());     // Day (1–31)
console.log(now.getHours());    // Hours (0–23)
console.log(now.getMinutes());  // Minutes (0–59)
console.log(now.getSeconds());  // Seconds (0–59)
```

---

## **Setting Date Components**

```javascript
const date = new Date();

date.setFullYear(2025);
date.setMonth(0); // January
date.setDate(15);
date.setHours(12);
date.setMinutes(30);
date.setSeconds(45);

console.log(date.toString());
```

✔ You can modify any part of a date

---

# **2.3 Formatting Dates**

JavaScript provides several methods to convert dates into readable strings.

---

## **1. toLocaleDateString()**

Formats **date only** based on locale.

```javascript
const now = new Date();

console.log(now.toLocaleDateString('en-US')); // MM/DD/YYYY
console.log(now.toLocaleDateString('en-GB')); // DD/MM/YYYY
console.log(now.toLocaleDateString('ru-RU')); // DD.MM.YYYY
```

---

## **2. toLocaleTimeString()**

Formats **time only**.

```javascript
const now = new Date();

console.log(now.toLocaleTimeString('en-CA'));
console.log(now.toLocaleTimeString('en-GB'));
```

---

## **3. toLocaleString()**

Formats **date + time together**.

```javascript
const now = new Date();

console.log(now.toLocaleString('en-CA'));
console.log(now.toLocaleString('en-GB'));
```

---

## **4. toISOString()**

Returns date in **ISO 8601 format** (standard format used in APIs).

```javascript
const now = new Date();

console.log(now.toISOString());
// Example: "2026-03-20T01:53:57.109Z"
```

✔ Always in UTC (ends with `Z`)

---

# **2.4 Formatting Numbers**

---

## **1. Number.toLocaleString()**

Formats numbers according to locale.

```javascript
const number = 1234567.89;

console.log(number.toLocaleString());        // Default locale
console.log(number.toLocaleString('de-DE')); // German format
```

---

## **2. Intl.NumberFormat**

Provides more control over formatting.

```javascript
const number = 1234567.89;

const usFormatter = new Intl.NumberFormat('en-US');
console.log(usFormatter.format(number));

const deFormatter = new Intl.NumberFormat('de-DE');
console.log(deFormatter.format(number));
```

---

### **Currency Formatting**

```javascript
const customFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

console.log(customFormatter.format(number)); // "$1,234,567.89"
```

✔ Supports currencies, percentages, and more

---

# **3. Exercises with Solutions**

---

## **Exercise 1: Current Date and Time**

### **Problem**

Create a function `getCurrentDateTime` that:

* Returns the current date and time
* Uses ISO 8601 format

---

### **Solution**

```javascript
function getCurrentDateTime() {
  const now = new Date();
  return now.toISOString();
}

// Example usage
console.log(getCurrentDateTime());
// Output: "2026-03-20T01:53:57.109Z"
```

---

### **Explanation**

* `new Date()` → current date/time
* `toISOString()` → converts to standard format

---

## **Exercise 2: Date Components**

### **Problem**

Create a function `setAndGetDateComponents` that:

* Sets date to **January 15, 2025, 12:30:45**
* Returns all components

---

### **Solution**

```javascript
function setAndGetDateComponents() {
  const date = new Date();

  // Set date
  date.setFullYear(2025);
  date.setMonth(0); // January
  date.setDate(15);

  // Set time
  date.setHours(12);
  date.setMinutes(30);
  date.setSeconds(45);

  // Return components
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  };
}

// Example usage
console.log(setAndGetDateComponents());
```

---

### **Explanation**

* Uses setter methods to define date/time
* Uses getter methods to extract values
* Returns results as an object

---

# **4. Summary**

### ✔ Key Takeaways

* `Date` object handles date and time
* Ways to create dates:

    * Current → `new Date()`
    * String → ISO format
    * Numeric → year, month (0-based), etc.
* Important methods:

    * Get → `getFullYear()`, `getMonth()`, etc.
    * Set → `setFullYear()`, `setMonth()`, etc.
* Formatting methods:

    * `toLocaleDateString()` → date
    * `toLocaleTimeString()` → time
    * `toLocaleString()` → both
    * `toISOString()` → standard format
* Number formatting:

    * `toLocaleString()`
    * `Intl.NumberFormat`

---

