### Creating and Removing DOM Elements 

Working with the DOM isn’t just about reading existing elements; you also create new elements, insert them into the page, clone them, and remove them.

#### 3.1 Creating Elements

**`document.createElement()`**

The main way to create a new element. You pass the tag name and get back an empty element node.

*Example*
```js
const newDiv = document.createElement('div');
```

**Adding Content to an Element**

After creation, add text or HTML.

*Using `textContent`*
```js
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element';
```

*Using `innerHTML`*
```js
const newDiv = document.createElement('div');
newDiv.innerHTML = '<strong>This is a new div element with bold text</strong>';
```

#### 3.2 Inserting Elements into the DOM

Once created, you must insert the element into the document.

**1. `appendChild()`**

Adds the element as the last child of a parent.

*Example*
```html
<html>
  <head><title>Document</title></head>
  <body>
    <div>This is an old div element</div>
  </body>
</html>
```
```js
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element';

const body = document.querySelector('body');
body.appendChild(newDiv);
```

**2. `insertBefore()`**

Inserts an element before a specified child of a parent.

*Example*
```html
<html>
  <head><title>Document</title></head>
  <body>
    <div>This is an old div element</div>
    <p>This is a paragraph</p>
  </body>
</html>
```
```js
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element';

const body = document.querySelector('body');
const referenceElement = document.querySelector('p');
body.insertBefore(newDiv, referenceElement);
```

**3. `append()`**

Adds one or more nodes or strings to the end of a parent’s children.

*Example*
```html
<html>
  <head><title>Document</title></head>
  <body>
    <div>This is an old div element</div>
  </body>
</html>
```
```js
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element';

const body = document.querySelector('body');
body.append(newDiv);
```

**4. `prepend()`**

Adds one or more nodes or strings to the beginning of a parent’s children.

*Example*
```html
<html>
  <head><title>Document</title></head>
  <body>
    <div>This is an old div element</div>
  </body>
</html>
```
```js
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element';

const body = document.querySelector('body');
body.prepend(newDiv);
```

#### 3.3 Cloning Elements

**`cloneNode()`**

Copies an element. `true` = deep clone (includes children); `false` = shallow clone (element only).

*Deep cloning*
```html
<html>
  <head>
    <style>
      div { padding: 5px; min-height: 50px; color: #fff; border-bottom: 1px solid lightblue; background: mediumpurple; }
    </style>
    <title>Document</title>
  </head>
  <body>
    <div>
      This is a div element
      <ul>
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
      </ul>
    </div>
  </body>
</html>
```
```js
const originalDiv = document.querySelector('div');
const clonedDiv = originalDiv.cloneNode(true);

document.body.appendChild(clonedDiv);
```

*Shallow cloning*
```html
<html>
  <head>
    <style>
      div { padding: 5px; min-height: 50px; color: #fff; border-bottom: 1px solid lightblue; background: mediumpurple; }
    </style>
    <title>Document</title>
  </head>
  <body>
    <div>
      This is a div element
      <ul>
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
      </ul>
    </div>
  </body>
</html>
```
```js
const originalDiv = document.querySelector('div');
const clonedDiv = originalDiv.cloneNode(false);

document.body.appendChild(clonedDiv);
```
The cloned `<div>` has the same styling but none of its children (the text node or the `<ul>`).

#### 3.4 Removing Elements

**1. `removeChild()`**

Removes a child from its parent.

*Example*
```html
<html>
  <head><title>Document</title></head>
  <body>
    <div>
      This is a div element
      <p>This is a paragraph</p>
    </div>
  </body>
</html>
```
```js
const parent = document.querySelector('div');
const child = document.querySelector('p');
parent.removeChild(child);
```

**2. `remove()`**

Removes the element directly.

*Example*
```html
<html>
  <head><title>Document</title></head>
  <body>
    <div>This is a div element</div>
    <p>This is a paragraph</p>
  </body>
</html>
```
```js
const element = document.querySelector('div');
element.remove();
```

**3. Clearing the Element’s Content**

Set `innerHTML` to an empty string.

*Example*
```html
<html>
  <head>
    <title>Document</title>
    <style>div { min-height: 200px; background: bisque; }</style>
  </head>
  <body>
    <div>
      This is a div element
      <p>This is a paragraph</p>
    </div>
  </body>
</html>
```
```js
const element = document.querySelector('div');
element.innerHTML = '';
```

**4. Removing All Child Elements**

Use a loop or `innerHTML = ''`.

*Loop example*
```html
<html>
  <head><title>Document</title></head>
  <style>div { min-height: 200px; background: bisque; }</style>
  <body>
    <div>
      This is a div element
      <p>This is a paragraph</p>
      <p>This is a paragraph</p>
      <p>This is a paragraph</p>
    </div>
  </body>
</html>
```
```js
const parent = document.querySelector('div');
while (parent.firstChild) {
  parent.removeChild(parent.firstChild);
}
```

*innerHTML example*
```html
<html>
  <head><title>Document</title>
    <style>div { min-height: 200px; background: bisque; }</style>
  </head>
  <body>
    <div>
      This is a div element
      <p>This is a paragraph</p>
      <p>This is a paragraph</p>
      <p>This is a paragraph</p>
      <ul>
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
      </ul>
    </div>
  </body>
</html>
```
```js
const parent = document.querySelector('div');
parent.innerHTML = '';
```

#### Exercises with Solutions

**Exercise 1 – New Paragraph**

*Requirements*
- Create a new `<p>` element.
- Set its text content to `"This is a new paragraph"`.
- Append it to the end of `document.body` using `appendChild`.

*Solution*
```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New Paragraph</title></head>
<body>
  <script>
    const newPara = document.createElement('p');
    newPara.textContent = 'This is a new paragraph';
    document.body.appendChild(newPara);
  </script>
</body>
</html>
```

**Exercise 2 – Insert Element**

*Requirements*
- Create a new `<div>` with the text `"This is a new element"`.
- Find the existing `<h1>` on the page.
- Insert the new `<div>` before the `<h1>` using `insertBefore`.

*Solution*
```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Insert Element</title></head>
<body>
  <h1>Existing Heading</h1>

  <script>
    const newDiv = document.createElement('div');
    newDiv.textContent = 'This is a new element';

    const heading = document.querySelector('h1');
    document.body.insertBefore(newDiv, heading);
  </script>
</body>
</html>
```

After the script runs, the page shows:
```
This is a new element
Existing Heading
```

---