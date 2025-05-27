# HTML Boilerplate

## Creating an HTML file

We should always name the HTML file that will contain the homepage of our website
`index.html`. This is because web servers will by default look for an `index.html`
page when users land on our websites - and not having one will cause big problems.

### The DOCTYPE

The doctype's purpose is to tell the browser what version of HTML it should use
to render the document.

### HTML element

An `<html>` element is what's known as the root element of the document, meaning
that every other element in the document will be a descendant of it.

#### What is the lang attribute?

`lang` specifies the language of the text content in that element. This attribute
is primarily used for improving accessibility of the webpage.

### Head element

The `<head>` element is where we put important meta-information **about** our
webpages, and stuff required for our webpages to render correctly in the browser.

#### Meta element

We should always have the `<meta>` tag with the charset encoding of the webpage
in the `<head>` element: `<meta charset="UTF-8"`.

#### Title element

The `<title>` element is used to give webpages a human-readable title, which is
displayed in our webpage's browser tab.

### Body element

The `<body>` element is where all the content that will be displayed to users will
go - the text, images, lists, links, and so on.
