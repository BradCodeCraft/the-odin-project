# Links and Images

## Preparation

## Anchor elements

To create a link in HTML, we use the anchor element.

By default, any text wrapped with an anchor tag without an `href` attribute will
look like plain text. If the `href` attribute is present, the browser will give
the text a blue color and underline it to signify it as a link.

## Opening links in a new tab

The `target` specifies where the linked resource will be opened. If it is not
present, then, by default, it will take on the `_self` value which opens the
link in the current tab.

The `rel` attribute is used to describe the relation between the current page
and the linked document.

The `noopener` value of the `rel` attribute ensures that a link opened in a new
tab or window cannot interact with or access the original page.

Without `noopener`, the new tab could use JS to interact with the original page.

The `noreferrer` value of the `rel` attribute provides both privacy and security.
It prevents the new page from knowing where the user came from (hiding the
referrer) and also includes the behavior of `noopener`, preventing the new page
from accessing the original page.

The prevention of access that is caused by `noopener` prevents **phishing attacks**
where the opened link may change the original webpage to a different one to trick
users.

**It is recommended to always pair a `target=_blank` with a `rel=noopener noreferrer`**.

## Absolute and relative links

### Absolute links

Links to pages on other websites on the internet are called **absolute links**.
A typical absolute link will be made up of the following parts: `scheme://domain/path`.
An absolute link will always contain the **scheme and domain** of the destination.

### Relative links

Links to other pages within our own website are called relative links. They do
not include the domain name, since it is another page on the same site, it assumes
the domain name will be the same as the page we created the link on.

## Images

Instead of wrapping content with an opening and closing tag, it embeds an image
into the page using a `src` attribute which tells the browser where the image file
is located.

## Parent directories

## Alt attribute

The `alt` attribute is used to describe an image. It will be used in place of the
image if it cannot be loaded.

## Image size attributes

## [Links and Images](https://internetingishard.netlify.app/html-and-css/links-and-images/)
