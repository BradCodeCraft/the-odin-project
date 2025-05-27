# The Box Model

## The box model

Every single thing on a webpage is a rectangular box. These boxes can have other
boxes in them and can sit alongside one another.

The only real complication here is that there are many ways to manipulate the size
of these boxes, and the space between them, using `padding`, `border`, and `margin`.

- `padding` increases the space between the border of a box and the content of the
  box.
- `border` adds space (even if it's only a pixel or two) between the margin and
  the padding
- `margin` increases the space between the borders of a box and the borders of
  adjacent boxes.

## [The box model MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model)

### Block and inline boxes

Boxes have an **inner display type** and an **outer display type**.

If a box has a display type of `block`, then:

- The box will break onto a new line.
- The `width` and `height` properties are respected.
- Padding, margin, and border will cause other elements to be pushed away from
  the box.
- If `width` is not specified, the box will extend in the inline direction to fill
  the space available in its container.

If the box has a display of `inline`, then:

- The box will not break into a new line.
- The `width` and `height` properties will not apply.
- Top and bottom padding, margins, and borders will apply but will not cause other
  inline boxes to move away from the box.
- Left and right padding, margins, and borders will apply and cause other inline
  boxes to move away from the box.

### Inner and Outer display types

`block` and `inline` display values are said to be **outer display** types - they
affect how the box is laid out in relation to other boxes around it. Boxes also
have an **inner display** type, which dictates how elements inside that box are
laid out.

### Examples of different display types

Changing the value of the `display` property can change whether the outer display
type of a box is block or inline.

### What is the CSS box model?

The CSS box model as a whole applies to block boxes and defines how the different
parts of a box - margin, border, padding, and content - work together to create a
box that you can see on a page.

#### Parts of a box

Making up a block box in CSS we have the:

- **Content box**: the area where your content is displayed; size it using properties
  like `width` and `height`.
- **Padding box**: the padding sits around the content as white space; size it
  using `padding` and related properties.
- **Border box**: the border box wraps the content and any padding; size it using
  `border` and related properties.
- **Margin box**: the margin is the outermost layer, wrapping the content, padding,
  and border as whitespace between this box and other elements; size it using
  `margin` and related properties.

#### The standard CSS box model

#### The alternative CSS box model

To turn on the alternative model for an element, set `box-sizing: border-box` on
it.

### Playing with box models

#### Use browser DevTools to view the box model

### Margins, padding, and borders

#### Margin

#### Margin collapsing

Depending on whether two elements whose margins touch have positive or negative margins,
the results will be different:

- Two positive margins will combine to become one margin. Its size will be equal
  to the largest individual margin.
- Two negative margins will collapse and the smallest value will be used.
- If one margin is negative, its value will be _subtracted_ from the total.

#### Borders

#### Padding

### The box model and inline boxes

The `span` tag ignore width and height properties.

### Using display:inline-block

`display: inline-block` is a special value of `display`, which provides a middle
ground between `inline` and `block`.

An element with `display: inline-block` does a subset of the block things we already
know about:

- The `width` and `height` properties are respected.
- `padding`, `margin`, and `border` will cause other elements to be pushed away from
  the box.

It does not, however, break onto a new line and will only become larger than its
content if you explicitly add `width` and `height` properties.
