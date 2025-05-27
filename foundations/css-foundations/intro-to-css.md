# Intro To CSS

## Basic syntax

At the most basic level, CSS is made up of various rules. These rules are made up
of a selector and a semicolon-separated list of declarations, with each of those
declarations being made up of a property-value pair.

## Selectors

Selectors refer to the HTML elements to which CSS rules apply; they're what is
actually being "selected" for each rule.

### Universal selector

The universal selector will select elements of every type, hence the name
"universal", and the syntax for it is a simple asterisk.

### Type selectors

A type selector (or element selector) will select all elements of the given element
type, and the syntax is just the name of the element.

### Class selectors

Class selectors will select all element with the given class, which is just an
attribute you place on an HTML element.

The syntax for class selector: a period immediately followed by the case-sensitive
value of the class attribute.

Another thing you can do with the class attribute is to add multiple classes to a
single element as a space-separated list.

### ID selectors

ID selectors select an element with the given ID, which is another attribute you
place on an HTML element. The major difference between classes and IDs is that an
element can only have **one** ID.

For IDs, instead of a period, we use a hashtag immediately followed by the case-sensitive
value of the ID attribute.

### The grouping selector

To cut down on the repetition, we can group selectors together as a comma-separated
list.

### Chaining selectors

What `.subsection.header` does is it selects any element that has both the
`subsection` _and_ `header` classes.

In general, you can't chain more than one type selector since an element can't be
two different types at once.

### Descendant combinator

Combinators allow us to combine multiple selectors differently than either grouping
or chaining them, as they show a relationship between the selectors. The **descendant
combinator**, which is represented in CSS by a single space between selectors, will
only cause elements that match the last selector to be selected if they also have
an ancestor that matches the previous selector.

So something like `.ancestor .child` would select an element with the class `child`
if it has an ancestor with the class `ancestor`.

## Properties to get started with

### Color and background-color

The `color` property sets an element's text color, while `background-color` sets
the background color of an element.

Both of these properties can accept one of several kinds of values. A common one
is a keyword. They also accept HEX, RGB, and HSL values.

### Typography basics and text-align

`font-family` can be a single value or a comma-separated list of values that determine
what font an element uses. Each font will fall into one of two categories, either
a "font family name" like `"Times New Roman"` or a "generic family name" like `serif`.

If a browser cannot find or does not support the first font in a list, it will use
the next one, then the next one, and so on until it finds a supported and valid font.

`font-size` will set the size of the font. When giving a value to this property,
the value should not contain any whitespace.

`font-weight` affects the boldness of text, assuming the font supports the specified
weight. This value can be a keyword or an umber between 1 and 1000/

`text-align` will align text horizontally within an element, and you can use the
common keywords you may have come across in word processors as the value for this
property.

### Image height and width

If you wanted to adjust the size of the image without causing it to lose its
proportions, you would use a value of "auto" for the `height` property and adjust
the `width` value.

## Adding CSS to HTML

### External CSS

External CSS is the most common method you will come across, and it involves creating
a separate file for the CSS and linking it inside of an HTML's `head` tag with a
void `<link>` element.

A couple of the pros to this method are:

1. It keeps our HTML and CSS separated, which results in the HTML file being smaller
   and making things look cleaner.
2. We only need to edit the CSS in _one_ place, which is especially handy for websites
   with many pages that all share similar styles.

### Internal CSS

Internal CSS (or embedded CSS) involves adding the CSS within the HTML file itself
instead of creating a completely separate file. With the internal method, you place
all the rules inside of a pair of `<style>` tags, which are then placed inside of
the `<head>` tags of your HTML file.

This method can be useful for adding unique style to a _single page_ of a website,
but it doesn't keep things separate like the external method, and depending on
how many rules and declarations there are it can cause the HTML to get pretty big.

### Inline CSS

If you need to add a _unique_ style for a _single_ element, this method can work
just fine. Generally, though, this isn't exactly a recommended way for adding CSS
to HTML.
