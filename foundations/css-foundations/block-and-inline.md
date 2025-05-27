# Block and Inline

## Block vs inline

By default, block elements will appear on the page stacked atop each other, each
new element starting on a new line.

Inline elements appear in line with whatever elements they are places beside.

### The middle ground inline-block

Inline-block elements behave like inline elements, but with block-style padding
and margin.

## Divs and spans

Div is a block-level element by default. It is commonly used as a container element
to group other elements. Divs allow us to _divide_ the page into different blocks
and apply styling to those blocks.

Span is an inline-level element by default. It can be used to group text content
and inline HTML elements for styling and should only be used when no other semantic
HTML element is appropriate.

## Assignment

### ["Normal Flow"](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Introduction)

#### Normal layout flow

Elements on a webpage lay out in **normal flow** if you haven't applied any CSS
to change the way they behave. Starting with a solid, well-structured document that's
readable in normal flow is the best way to begin any webpage. It ensures that your
content is readable even if the user's using a very limited browser or a device
such as a screen reader that reads out the content of the page.

#### How are element laid out by default?

The process begins as the boxes of individual elements are laid out in such a way
that any padding, border, or margin they happen to have is added to their content.
This is what we call the **box model**.

By default, a _block-level element_'s content fills the available inline space of
the parent element containing it, growing along the block dimension to accommodate
its content. The size of _inline-level elements_ is just the size of their content.

By default, block-level elements are laid out in the _block flow direction_, which
is based on the parent's writing mode. Each element will appear on a new line below
the last one, with each one separated by whatever margin that's been specified.

Inline elements don't appear on new lines; instead, they all sit on the same line
along with any adjacent (or wrapped) text content as long as long as their is space
for them to do so inside the width of the parent block level element.

If two vertically adjacent elements both have a margin set on them and their margins
touch, the larger of the two margins remains and the smaller one disappears. This
is known as **margin collapsing**.

##### Normal flow example

#### Overriding normal flow

The methods that can override normal flow and change how elements are laid out in
CSS, which we will cover in detail in this module, are:

- The `display` property: standard values can change how elements behave in normal
  flow, for example, by making a block-level element behave like an inline-level
  element.
- Floats cause block-level elements to wrap along one side of an element, like the
  way images sometimes have text floating around them in magazine layouts.
- Positioning allows you to precisely control the placement of boxes inside other
  boxes. `static` positioning is the default in normal flow, but you can cause
  elements to be laid out differently using other values.
- Specific layout systems accessed through `display`
- Responsive design refers to creating layouts that adapt to different devices the
  web page is rendered on. Responsive design doesn't provide any specific layout
  tools of its own; its most significant component is the `@media` at-rule, which
  allows you to apply different layouts depending on device attributes such as
  screen width or resolution.

##### Other layout techniques

Table layout

Multi-column layout
