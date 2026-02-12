# Lesson Notes: Microdata (Structured Data) in HTML

---

# 9.1 What is Microdata?

## Definition

**Microdata (Structured Data)** is a way to add extra information (metadata) to HTML documents so that search engines and other services can better understand webpage content.

It helps describe:

* The type of content (article, product, event, organization)
* The author
* Publication date
* Rating
* Price
* Contact information
* And more

---

## Why is Microdata Important?

Search engines normally read visible text.

Microdata provides **structured meaning** behind that content.

This can result in:

* Rich snippets in search results
* Better search engine understanding
* Improved visibility
* Support for voice search
* Integration with services like Google Knowledge Graph

---

# Types of Structured Data

There are three main ways to implement structured data:

### 1. Schema.org

A vocabulary (standard set of types and properties) supported by:

* Google
* Bing
* Yahoo
* Yandex

### 2. JSON-LD

A JSON format for encoding structured data.
Recommended by Google.

### 3. Microdata

Structured data embedded directly into HTML using special attributes.

---

# 9.2 Schema.org

## What is Schema.org?

Schema.org provides a vocabulary of:

* Types (Article, Product, Event, Organization, etc.)
* Properties (name, author, datePublished, price, etc.)

It standardizes how structured data is written.

---

## Example 1: Article (JSON-LD)

### HTML Content

```html
<article>
  <h1>Article Title</h1>
  <p>Author: Author Name</p>
  <p>Publication Date: January 1, 2024</p>
  <img src="https://example.com/image.jpg" alt="Example Image">
  <p>Article text...</p>
</article>
```

---

### Structured Data (JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "datePublished": "2024-01-01",
  "image": "https://example.com/image.jpg",
  "publisher": {
    "@type": "Organization",
    "name": "Publisher",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  }
}
</script>
```

---

## Example 2: Product (JSON-LD)

### HTML Content

```html
<h1>Product Name</h1>
<img src="https://example.com/product.jpg" alt="Product Image">
<p>Product Description</p>
<p>Price: $29.99</p>
```

---

### Structured Data

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "image": "https://example.com/product.jpg",
  "description": "Product Description",
  "sku": "0446310786",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "29.99",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock",
    "url": "https://example.com/product"
  }
}
</script>
```

---

## Benefits of Schema.org

* Improved visibility in search results
* Rich snippets (ratings, price, dates)
* Better ranking potential
* Standardized format supported worldwide

---

# 9.3 JSON-LD

## What is JSON-LD?

JSON-LD stands for:

> JavaScript Object Notation for Linked Data

It is structured data written in JSON format and placed inside:

```html
<script type="application/ld+json">
```

Google recommends JSON-LD because:

* It is clean
* It does not mix with HTML
* It is easy to maintain

---

## Example: Organization

### HTML Content

```html
<h1>Company Name</h1>
<p>Company Description</p>
<div>Contacts</div>
```

---

### JSON-LD Structured Data

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-555-1212",
    "contactType": "Customer Service"
  }
}
</script>
```

---

# 9.4 Microdata (Embedded in HTML)

Unlike JSON-LD, Microdata is written directly inside HTML elements.

It uses special attributes:

| Attribute   | Purpose                             |
| ----------- | ----------------------------------- |
| `itemscope` | Defines a new item                  |
| `itemtype`  | Specifies the type (Schema.org URL) |
| `itemprop`  | Defines a property                  |

---

## Example: Event (Microdata Format)

```html
<div itemscope itemtype="https://schema.org/Event">
  
  <h1 itemprop="name">Tech Conference 2024</h1>

  <p>
    Date:
    <time itemprop="startDate" datetime="2024-05-01T19:00">
      May 1, 2024, 7:00 PM
    </time>
  </p>

  <div itemprop="location" itemscope itemtype="https://schema.org/Place">
    <span itemprop="name">Grand Hall</span>

    <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
      <span itemprop="streetAddress">123 Main Street</span>
      <span itemprop="addressLocality">New York</span>
      <span itemprop="postalCode">10001</span>
      <span itemprop="addressCountry">USA</span>
    </div>
  </div>

</div>
```

---

## Benefits of Microdata

* Rich search results
* Better content interpretation
* Voice search optimization
* Integration with search engine services

---

# 🧪 Exercise 1: Organization with JSON-LD

## Task

Create a webpage that:

* Displays company name in `<h1>`
* Includes JSON-LD structured data
* Uses `"@type": "Organization"`
* Includes:

    * URL
    * Logo
    * Contact information

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
  <title>Company Page</title>
</head>
<body>

<h1>Bright Future Tech</h1>
<p>We build innovative web solutions.</p>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bright Future Tech",
  "url": "https://brightfuturetech.com",
  "logo": "https://brightfuturetech.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-123-4567",
    "contactType": "Customer Support"
  }
}
</script>

</body>
</html>
```

---

# 🧪 Exercise 2: Microdata for an Event

## Task

Create a webpage describing:

* Event name
* Event date (ISO 8601 format)
* Event location
* Proper nesting using Microdata attributes

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
  <title>Event Page</title>
</head>
<body>

<div itemscope itemtype="https://schema.org/Event">

  <h1 itemprop="name">Web Development Workshop</h1>

  <time itemprop="startDate" datetime="2024-10-10T19:00">
    October 10, 2024, 7:00 PM
  </time>

  <div itemprop="location" itemscope itemtype="https://schema.org/Place">

    <span itemprop="name">Innovation Center</span>

    <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
      <span itemprop="streetAddress">456 Tech Street</span>
      <span itemprop="addressLocality">San Francisco</span>
      <span itemprop="postalCode">94103</span>
      <span itemprop="addressCountry">USA</span>
    </div>

  </div>

</div>

</body>
</html>
```

---

# Summary

Microdata and structured data help search engines understand your content.

### JSON-LD

* Recommended by Google
* Clean separation from HTML
* Easy to maintain

### Microdata (HTML embedded)

* Uses `itemscope`, `itemtype`, `itemprop`
* Structured directly in HTML

### Schema.org

* Standard vocabulary
* Supported globally
* Enables rich snippets

---

