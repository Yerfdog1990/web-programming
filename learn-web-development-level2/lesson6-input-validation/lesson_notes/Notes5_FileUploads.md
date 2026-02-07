
---

# File Uploads

Web applications often require users to upload files to the server. This can be useful for uploading documents, images, videos, and other data types. HTML provides the `<input type="file">` element to create file upload interfaces. In this lesson, we explore how to use this element and its attributes, including `multiple` and `accept`.

---

## 11.1 The `<input type="file">` Element

The `<input type="file">` element creates an interface element that lets users select files from their device to upload to the server. It is one of the key form elements in HTML, allowing the integration of file upload functionality in web applications.

### Main Attributes of the `<input type="file">` Element

* `type="file"`

    * Defines that the element is meant for file selection.

* `name`

    * Sets the name of the element, which will be used when form data is sent to the server.

* `multiple`

    * Allows the user to select multiple files at once.

* `accept`

    * Specifies the types of files that can be selected using MIME types or file extensions.

---

### Simple Example

The simplest example of a file upload element without additional attributes:

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <label for="file">Choose a file:</label>
  <input type="file" id="file" name="file">
  <button type="submit">Upload</button>
</form>
```

---

## 11.2 The `multiple` Attribute

The `<input type="file">` element supports several attributes that enhance its functionality. One of these is the `multiple` attribute.

The `multiple` attribute allows users to select more than one file for upload. When this attribute is added, users can pick multiple files in the file selection dialog.

### Example Usage

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <label for="files">Choose files:</label>
  <input type="file" id="files" name="files" multiple>
  <button type="submit">Upload</button>
</form>
```

### Why This Is Useful

* Users can select and upload multiple files at the same time.
* Multiple file selection can be done by holding:

    * **Ctrl** (or **Cmd** on Mac)
    * **Shift** key

---

## 11.3 The `accept` Attribute

The `accept` attribute restricts the types of files that can be selected by the user. This is useful for ensuring that users upload only allowed file types, such as images or documents.

### Example Usage

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <label for="image">Choose an image:</label>
  <input type="file" id="image" name="image" accept="image/*">
  <button type="submit">Upload</button>
</form>
```

The `accept` attribute restricts the types of files that can be selected. This restriction can be applied using MIME types or file extensions.

---

### Examples of `accept` Attribute Values

#### Restricting by File Type

* `accept="image/*"`: any image files
* `accept="video/*"`: any video files
* `accept="audio/*"`: any audio files

#### Restricting by File Extension

* `accept=".jpg,.jpeg,.png"`: only JPEG and PNG images
* `accept=".pdf,.doc,.docx"`: only PDF and Word documents


---

## **Restricting by File Extension**

### Example 1: Allow Only JPEG and PNG Images

```html
<form action="/upload-image" method="post" enctype="multipart/form-data">
  <label for="photo">Choose an image:</label>
  <input
    type="file"
    id="photo"
    name="photo"
    accept=".jpg,.jpeg,.png"
  >
  <button type="submit">Upload</button>
</form>
```

**Explanation**

* `accept=".jpg,.jpeg,.png"` restricts the file picker to:

    * `.jpg`
    * `.jpeg`
    * `.png`
* Users will only be able to select JPEG and PNG image files.

---

### Example 2: Allow Only PDF and Word Documents

```html
<form action="/upload-document" method="post" enctype="multipart/form-data">
  <label for="document">Choose a document:</label>
  <input
    type="file"
    id="document"
    name="document"
    accept=".pdf,.doc,.docx"
  >
  <button type="submit">Upload</button>
</form>
```

**Explanation**

* `accept=".pdf,.doc,.docx"` restricts the file picker to:

    * `.pdf`
    * `.doc`
    * `.docx`
* This ensures that only PDF and Microsoft Word documents can be selected.

---

## 11.4 Client-Side File Processing

In some cases, files need to be processed on the client side before being sent to the server. For example, you might want to display an image preview or check the file size. JavaScript is commonly used for these tasks.

### Example: Image Preview

**HTML**

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <label for="image">Choose an image:</label>
  <input type="file" id="image" name="image" accept="image/*">
  <div id="preview"></div>
  <button type="submit">Upload</button>
</form>
```

**JavaScript**

```javascript
document.getElementById('image').addEventListener('change', function(event) {
  const preview = document.getElementById('preview');
  preview.innerHTML = '';

  const files = event.target.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.maxWidth = '200px';
      preview.appendChild(img);
    };

    reader.readAsDataURL(file);
  }
});
```

### Explanation

* **FileReader**

    * Used for reading the contents of files on the client side.

* **reader.onload**

    * An event that triggers when a file is fully read.

* **reader.readAsDataURL(file)**

    * Reads the file and encodes it as a Data URL, allowing it to be displayed inside an `<img>` tag.

---

# Exercise 1: File Upload

Create an HTML form that allows users to upload a file to the server. The form should contain an `<input type="file">` element, a form submission button, and a label for describing the upload field.

### Requirements

* The document must include a `<form>` tag, which serves as a container for form elements.
* The form must contain an `<input type="file">` element allowing users to select a file for upload.
* The form must include a button to submit data to the server, implemented using a `<button>` tag or `<input type="submit">`.
* The form must contain a `<label>` element to describe the file upload field.
* The `<form>` tag must include `method` and `action` attributes.

### Solution

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <label for="file">Upload a file:</label>
  <input type="file" id="file" name="file">
  <button type="submit">Submit</button>
</form>
```

---

# Exercise 2: Image Upload

Create an HTML form that allows users to upload images only. The form should include an `<input type="file">` element with an `accept` attribute that restricts uploads to image files.

### Requirements

* The document must include a `<form>` tag which acts as a container for form elements.
* The form must contain an `<input type="file">` element.
* The `<input type="file">` element must have `accept="image/*"`.
* The form must include a `<label>` describing the upload field.
* The form must contain a submit button.

### Solution

```html
<form action="/upload-image" method="post" enctype="multipart/form-data">
  <label for="image">Upload an image:</label>
  <input type="file" id="image" name="image" accept="image/*">
  <button type="submit">Upload</button>
</form>
```

---

