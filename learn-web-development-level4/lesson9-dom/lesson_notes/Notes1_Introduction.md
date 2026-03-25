### Introduction to DOM 

#### 1.1 Basic DOM Concepts

**What is the DOM?**

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a **tree of nodes**, where each node is a part of the document—such as an element, text, comment, etc. Understanding the DOM and its nodes is fundamental to working with web technologies.

The DOM is a hierarchical structure that describes the content of an HTML document. It lets programs and scripts dynamically access and modify the document’s structure, style, and content.

**Nodes and Elements**

In the DOM, every part of a document is a node. Node types include:
- **Element nodes** – represent HTML tags (e.g., `<body>`, `<h1>`)
- **Text nodes** – represent the text inside element nodes
- **Comment nodes** – represent HTML comments (`<!-- comment -->`)
- **Document node** – represents the document itself (the root)

**Node Tree**

The DOM is tree-like; each node can have child nodes. The root is the `document` object, which represents the entire HTML document.

*Example of DOM Structure*

HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Title</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

DOM tree:
```
document
└── html
    ├── head
    │   └── title
    │       └── #text: "Document Title"
    └── body
        ├── h1
        │   └── #text: "Hello, World!"
        └── p
            └── #text: "This is a paragraph."
```

#### 1.2 Types of Nodes

**1. Element Nodes**

Correspond to HTML tags.

*Example*
```html
<body>
  <h1>Hello, World!</h1>
</body>
```
Here `<body>` and `<h1>` are element nodes.

**2. Text Nodes**

Contain the text inside element nodes and are children of those elements.

*Example*
```html
<h1>Hello, World!</h1>
```
The text `"Hello, World!"` is a text node, child of the `<h1>` element node.

**3. Comment Nodes**

Represent HTML comments (`<!-- ... -->`).

*Example*
```html
<!-- This is a comment -->

<p>This is a paragraph.</p>
```
`<!-- This is a comment -->` is a comment node.

**4. Document Node**

The root node of the DOM tree; parent of all other nodes.

*Example*
```js
console.log(document);
```
`document` is the document node.

#### 1.3 Interacting with DOM Nodes

**1. Getting Node Information**

Use node properties to inspect a node.

*Example*
```html
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```
```js
const heading = document.querySelector('h1');

console.log(heading.nodeName); // Output: H1
console.log(heading.nodeType); // Output: 1 (Element node)
console.log(heading.textContent); // Output: "Hello, World!"
```

**2. Modifying Node Content**

Change node content with properties.

*Example*
```js
const paragraph = document.querySelector('p');
paragraph.textContent = 'Updated text content';
```

**3. Working with Child Nodes**

Access a node’s children.

*Example*
```html
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <ul>
      <li>About Us</li>
      <li>Career</li>
      <li>Contact</li>
    </ul>
  </body>
</html>
```
```js
const list = document.querySelector('ul');
const firstItem = list.firstElementChild;
const lastItem = list.lastElementChild;

console.log(firstItem.textContent); // Output the text of the first list item
console.log(lastItem.textContent); // Output the text of the last list item
```

#### 1.4 Useful Properties

**1. `nodeName` and `nodeType`**
- `nodeName` → the name of a node
- `nodeType` → the type of a node (1 = element, 3 = text)

*Example*
```html
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```
```js
const element = document.querySelector('h1');

console.log(element.nodeName); // Output: H1
console.log(element.nodeType); // Output: 1
```

**2. `textContent` and `innerHTML`**
- `textContent` → gets or sets the textual content of a node
- `innerHTML` → gets or sets the HTML content of a node

*Example*
```html
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <p>A really <b>interesting</b> and <b>useful</b> paragraph!</p>
  </body>
</html>
```
```js
const element = document.querySelector('p');

console.log(element.textContent); // Output: A really interesting and useful paragraph!
console.log(element.innerHTML); // Output: A really <b>interesting</b> and <b>useful</b> paragraph!
```

**3. `parentNode`, `childNodes`, `firstChild`, `lastChild`**
- `parentNode` → the parent node
- `childNodes` → collection of all child nodes
- `firstChild` → the first child node
- `lastChild` → the last child node

*Example*
```html
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <ul>
      <li>About Us</li>
      <li>Career</li>
      <li>Contact</li>
    </ul>
  </body>
</html>
```
```js
const element = document.querySelector('ul');

console.log(element.parentNode); // Output the parent node
console.log(element.childNodes); // Output the collection of child nodes
console.log(element.firstChild); // Output the first child node
console.log(element.lastChild); // Output the last child node
```
*Sample console output*
```
<body>
        
  
    <title>My Website</title>
  
  
    <ul>
      <li>About Us</li>
      <li>Career</li>
      <li>Contact</li>
    </ul>
  

        <script>const element = document.querySelector('ul');

console.log(element.parentNode); // Output the parent node
console.log(element.childNodes); // Output the collection of child nodes
console.log(element.firstChild); // Output the first child node
console.log(element.lastChild); // Output the last child node</script></body>
{"0": 
      , "1": <li>About Us</li>, "2": 
      , "3": <li>Career</li>, "4": 
      , "5": <li>Contact</li>, "6": 
    , "entries": [Function: entries], "keys": [Function: keys], "values": [Function: values], "forEach": [Function: forEach], "length": 7, "item": [Function: item], "constructor": [Function: NodeList]}
```

---

#### Exercises with Solutions

**Exercise 1 – First Paragraph**

*Requirements*
- Create an HTML document with several `<p>` paragraphs.
- Write a script that finds the first paragraph using `document.querySelector`.
- Log its `nodeName`, `nodeType`, and `textContent`.

*Solution*

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>First Paragraph</title>
</head>
<body>
  <p>First paragraph text.</p>
  <p>Second paragraph text.</p>
  <p>Third paragraph text.</p>

  <script>
    const firstPara = document.querySelector('p');
    console.log(firstPara.nodeName);    // "P"
    console.log(firstPara.nodeType);    // 1
    console.log(firstPara.textContent); // "First paragraph text."
  </script>
</body>
</html>
```

**Exercise 2 – New List Item**

*Requirements*
- Create an HTML document with an unordered list `<ul>` and several `<li>` items.
- Write a script that adds a new `<li>` with the text “New Item” to the end of the list using `innerHTML`.
- The script should run on page load.

*Solution*

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New List Item</title>
</head>
<body>
  <ul>
    <li>About Us</li>
    <li>Career</li>
    <li>Contact</li>
  </ul>

  <script>
    const list = document.querySelector('ul');
    list.innerHTML += '<li>New Item</li>';
  </script>
</body>
</html>
```

After the script runs, the list will show:
- About Us
- Career
- Contact
- New Item

---