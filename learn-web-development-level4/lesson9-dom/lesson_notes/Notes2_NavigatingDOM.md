### Navigating the DOM 

Navigating the DOM (Document Object Model) is essential when you need to find, read, or change elements on a page. JavaScript gives you methods to locate elements and properties to move between nodes.

#### 2.1 Methods for Accessing Elements

**1. `getElementById()`**
Returns the element whose `id` matches the value. Fast and the most common selector.

*Example*
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <div id="content">This is the content</div>

    <script>
      const contentDiv = document.getElementById('content');
      console.log(contentDiv.textContent); // Outputs: This is the content
    </script>
  </body>
</html>
```

**2. `getElementsByClassName()`**
Returns a **live** HTMLCollection of all elements with the specified class. It updates automatically if the DOM changes.

*Example*
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <p class="text">Paragraph 1</p>
    <p class="text">Paragraph 2</p>
    <p class="text">Paragraph 3</p>

    <script>
      const paragraphs = document.getElementsByClassName('text');
      console.log(paragraphs.length); // Outputs: 3
    </script>
  </body>
</html>
```

**3. `getElementsByTagName()`**
Returns a **live** HTMLCollection of all elements with the specified tag name.

*Example*
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>

    <script>
      const paragraphs = document.getElementsByTagName('p');
      console.log(paragraphs.length); // Outputs: 3
    </script>
  </body>
</html>
```

**4. `querySelector()`**
Returns the **first** element that matches a CSS selector. Very flexible.

*Example*
```html
<!DOCTYPE html>
<html>
<head><title>Document</title></head>
  <body>
    <div class="container">
      <p>Paragraph 1</p>
      <p class="highlight">Paragraph 2</p>
      <p>Paragraph 3</p>
    </div>

    <script>
      const highlightedParagraph = document.querySelector('.highlight');
      console.log(highlightedParagraph.textContent); // Outputs: Paragraph 2
    </script>
  </body>
</html>
```

**5. `querySelectorAll()`**
Returns a **static** NodeList of all elements that match the CSS selector (it doesn’t update if the DOM changes later).

*Example*
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <div class="container">
      <p>Paragraph 1</p>
      <p class="highlight">Paragraph 2</p>
      <p>Paragraph 3</p>
    </div>

    <script>
      const paragraphs = document.querySelectorAll('.container p');
      console.log(paragraphs.length); // Outputs: 3
    </script>
  </body>
</html>
```

#### 2.2 Node Navigation

These properties let you move relative to the current node.

**1. `parentNode`**
Returns the parent node of the current node.

*Example*
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <div id="container">
      <p>Paragraph</p>
    </div>

    <script>
      const paragraph = document.querySelector('p');
      const parent = paragraph.parentNode;
      console.log(parent.id); // Outputs: container
    </script>
  </body>
</html>
```

**2. `childNodes`**
Returns a collection of **all** child nodes, including text nodes (whitespace, line breaks).

*Example*
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <script>
      const list = document.getElementById('list');
      const children = list.childNodes;
      console.log(children.length); // Outputs the number of all child nodes, including text nodes
    </script>
  </body>
</html>
```
Why 7? The line breaks and spaces between `<li>` elements are text nodes, so you get 3 `<li>` elements + 4 text nodes.

Use `children` instead if you only want element nodes:
```html
<script>
  const list = document.getElementById('list');
  const children = list.children;
  console.log(children.length); // 3
</script>
```

**3. `firstChild` and `lastChild`**
Return the first and last child nodes (which may be text nodes).

*Example*
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <script>
      const list = document.getElementById('list');
      const first = list.firstChild;
      const last = list.lastChild;
      console.log(first.textContent);
      console.log(last.textContent);
    </script>
  </body>
</html>
```
You might see blank lines in the console because the first/last child can be a text node containing a newline.

**4. `nextSibling` and `previousSibling`**
Return the next or previous node at the same level.

*Example*
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <script>
      const secondItem = document.querySelector('li:nth-child(2)');
      const next = secondItem.nextSibling;
      const prev = secondItem.previousSibling;
      console.log(next.textContent); // Outputs: Item 3
      console.log(prev.textContent); // Outputs: Item 1 (if you skip text nodes)
    </script>
  </body>
</html>
```

#### 2.3 Element Node Navigation

These properties skip text/comment nodes and work only with elements.

**1. `nextElementSibling` and `previousElementSibling`**
Return the next or previous element sibling.

*Example*
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <script>
      const secondItem = document.querySelector('li:nth-child(2)');
      const next = secondItem.nextElementSibling;
      const prev = secondItem.previousElementSibling;
      console.log(next.textContent); // Outputs: Item 3
      console.log(prev.textContent); // Outputs: Item 1
    </script>
  </body>
</html>
```

**2. `firstElementChild` and `lastElementChild`**
Return the first and last child **element** nodes.

*Example*
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <script>
      const list = document.getElementById('list');
      const first = list.firstElementChild;
      const last = list.lastElementChild;
      console.log(first.textContent); // Outputs: Item 1
      console.log(last.textContent);  // Outputs: Item 3
    </script>
  </body>
</html>
```

#### Exercises with Solutions

**Exercise 1 – Paragraph Count**

*Requirements*
- HTML with `<div class="container">` containing several `<p>` paragraphs.
- Use `querySelectorAll` to find all `<p>` inside the container.
- Log the count.

*Solution*
```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Paragraph Count</title></head>
<body>
  <div class="container">
    <p>One</p>
    <p>Two</p>
    <p>Three</p>
  </div>

  <script>
    const paragraphs = document.querySelectorAll('.container p');
    console.log(paragraphs.length); // 3
  </script>
</body>
</html>
```

**Exercise 2 – First and Last Nodes**

*Requirements*
- HTML with an unordered list `<ul>` and several `<li>` elements.
- Get the first and last child nodes of the list using `firstElementChild` and `lastElementChild`.
- Log their text content.

*Solution*
```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>First and Last Nodes</title></head>
<body>
  <ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <script>
    const list = document.getElementById('list');
    const first = list.firstElementChild;
    const last = list.lastElementChild;
    console.log(first.textContent); // Item 1
    console.log(last.textContent);  // Item 3
  </script>
</body>
</html>
```

---