
---

# Content Containers

HTML5 introduced several semantic elements that help developers create well-structured, readable, and accessible web pages. Two important content container elements are `<main>` and `<aside>`. These tags clearly define the main content of a page and any related supplementary content.

---

## 3.1 The `<main>` Tag

The `<main>` tag represents the **main content of the document**. It is used to hold the unique and central content of a webpage. Content inside `<main>` should be specific to that page and should **not repeat across multiple pages**.

### Key Characteristics of `<main>`

* **Content**

    * Holds the main content of the page
    * Content should be unique to the page

* **Placement**

    * Only **one `<main>` tag per page**
    * Must be placed **outside** repeating elements such as navigation and footer

* **Accessibility**

    * Helps assistive technologies quickly identify the primary content
    * Improves screen reader navigation

### What Should Be Inside `<main>`

* Main articles
* Page-specific content
* Core information related to the page topic

### What Should NOT Be Inside `<main>`

* Navigation menus
* Logos
* Sidebars
* Footers

---

### Syntax

```html
<main>
  <!-- Main page content -->
</main>
```

---

### Usage Example

```html
<body>
  <header>
    <h1>Website Header</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h2>Article Title</h2>
      <p>This is the main content of the article.</p>
    </article>
  </main>

  <footer>
    <p>&copy; 2024 Example Website</p>
  </footer>
</body>
```

---

### Advantages of `<main>`

* **Semantic Markup**

    * Clearly tells browsers and search engines what the main content is

* **Improved Page Structure**

    * Separates main content from headers, navigation, and footers

---

## 3.2 The `<aside>` Tag

The `<aside>` tag is used for **additional or supplementary content** that is related to the main content but not part of the main flow of the document.

### Common Uses of `<aside>`

* Sidebars
* Advertisements
* Related article links
* Author biography
* Additional resources

---

### Key Characteristics of `<aside>`

* **Content**

    * Related to the main content but not essential

* **Placement**

    * Can be placed **inside or outside `<main>`**, depending on context

* **Purpose**

    * Provides supporting or complementary information

---

### Syntax

```html
<aside>
  <!-- Additional content -->
</aside>
```

---

### Usage Example

```html
<main>
  <article>
    <h2>Article Title</h2>
    <p>This is the main content of the article.</p>
  </article>

  <aside>
    <h3>Related Articles</h3>
    <ul>
      <li><a href="#related1">Related Article 1</a></li>
      <li><a href="#related2">Related Article 2</a></li>
    </ul>

    <h3>About the Author</h3>
    <p>Short bio of the author.</p>
  </aside>
</main>
```

---

### Advantages of `<aside>`

* **Semantic Meaning**

    * Indicates auxiliary content to browsers and assistive technologies

* **Improved Organization**

    * Separates supporting information from the main content

---

## Comparison Table: `<main>` vs `<aside>`

| Feature              | `<main>`                                                          | `<aside>`                                                  |
| -------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------- |
| Purpose              | Contains the primary content of the webpage                       | Contains supplementary content related to the main content |
| Content Type         | Core, page-specific content                                       | Supporting or additional information                       |
| Importance           | Essential to understanding the page                               | Non-essential but relevant                                 |
| Typical Usage        | Articles, main page text, unique information                      | Sidebars, related links, author bios, ads                  |
| Repetition           | Should be unique on every page                                    | Can repeat across multiple pages                           |
| Number Allowed       | Only **one `<main>` per document**                                | Multiple `<aside>` elements allowed                        |
| Placement            | Inside `<body>` and outside `<header>`, `<footer>`, and `<aside>` | Can be inside or outside `<main>`                          |
| Relationship to Page | Defines what the page is mainly about                             | Provides extra context or support                          |
| Accessibility        | Helps screen readers quickly locate main content                  | Helps assistive tools identify auxiliary content           |
| Semantic Strength    | Strong semantic meaning                                           | Supporting semantic meaning                                |

---

## Exam-Style Questions (with Marking Points)

### Question 1

**Define the purpose of the `<main>` tag in HTML5.**
*(2 marks)*

**Marking Points**

* Identifies the main content of the page (1 mark)
* Content must be unique and page-specific (1 mark)

---

### Question 2

**State two differences between `<main>` and `<aside>`.**
*(4 marks)*

**Marking Points** (any two)

* `<main>` contains core content, `<aside>` contains supplementary content (2 marks)
* Only one `<main>` per page, multiple `<aside>` allowed (2 marks)
* `<main>` is essential content, `<aside>` is non-essential (2 marks)

---

### Question 3

**Where should navigation menus and footers be placed in relation to the `<main>` tag? Explain why.**
*(3 marks)*

**Marking Points**

* Navigation and footer must be outside `<main>` (1 mark)
* They repeat across pages (1 mark)
* `<main>` must contain only unique content (1 mark)

---

### Question 4

**Give two examples of content suitable for an `<aside>` element.**
*(2 marks)*

**Marking Points** (any two)

* Related articles (1 mark)
* Author biography (1 mark)
* Advertisements (1 mark)
* Additional resources (1 mark)

---

## Full Semantic Page Layout

(Using All HTML5 Content Containers)

### HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML5 Content Containers</title>
</head>
<body>

  <header>
    <h1>My Web Learning Site</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#articles">Articles</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="home">
      <h2>Welcome</h2>
      <p>This section introduces the website.</p>
    </section>

    <section id="articles">
      <h2>Latest Article</h2>

      <article>
        <header>
          <h3>Understanding HTML5 Semantics</h3>
          <p>Published on July 6, 2024</p>
        </header>

        <p>
          HTML5 semantic elements help create meaningful and accessible web pages.
        </p>

        <footer>
          <p>Author: Jane Doe</p>
        </footer>
      </article>
    </section>
  </main>

  <aside>
    <h3>Related Resources</h3>
    <ul>
      <li><a href="#html">HTML Basics</a></li>
      <li><a href="#css">CSS Fundamentals</a></li>
    </ul>

    <h3>About the Author</h3>
    <p>Jane Doe is a web developer and technical writer.</p>
  </aside>

  <footer>
    <p>&copy; 2024 Web Learning Platform</p>
  </footer>

</body>
</html>
```

---

### How This Layout Works (Exam-Friendly Summary)

* **`<header>`**: Contains site title and navigation
* **`<nav>`**: Groups navigation links
* **`<main>`**: Holds the primary, unique content
* **`<section>`**: Divides content into thematic areas
* **`<article>`**: Represents independent content
* **`<aside>`**: Holds related, supplementary information
* **`<footer>`**: Contains closing or legal information

---

## Exercise 1: Main Container

### Task

Create a web page that includes a header, navigation menu, main content, and footer. The main content must be placed inside the `<main>` tag, while the navigation menu and footer must be outside the `<main>` tag.

### Requirements

* The document must include a `<main>` tag
* The header must be outside the `<main>` tag
* The navigation menu must be outside the `<main>` tag
* The main content must be inside the `<main>` tag
* The footer must be outside the `<main>` tag

---

### Sample Solution

```html
<body>
  <header>
    <h1>My Website</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>Welcome</h2>
    <p>This is the main content of the webpage.</p>
  </main>

  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
```

---

## Exercise 2: Sidebar

### Task

Create a webpage with the main content inside a `<main>` tag and a sidebar inside an `<aside>` tag. The sidebar should include links to related articles and a brief biography of the author.

### Requirements

* The document must include a `<main>` tag
* The document must include an `<aside>` tag
* The `<aside>` tag must contain links to related articles
* The `<aside>` tag must include a brief author biography
* The `<main>` and `<aside>` tags must be at the same hierarchy level

---

### Sample Solution

```html
<body>

  <main>
    <article>
      <h2>Understanding HTML5</h2>
      <p>This article explains modern HTML5 semantic elements.</p>
    </article>
  </main>

  <aside>
    <h3>Related Articles</h3>
    <ul>
      <li><a href="#html">HTML Basics</a></li>
      <li><a href="#css">CSS Fundamentals</a></li>
    </ul>

    <h3>About the Author</h3>
    <p>The author is a web developer with experience in HTML and CSS.</p>
  </aside>

</body>
```

---

### Exam Tip for Students

* Use `<main>` for **core, unique content**
* Use `<aside>` for **supporting or related information**
* Never place navigation or footers inside `<main>`

---