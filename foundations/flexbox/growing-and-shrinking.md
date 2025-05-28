# Growing and Shrinking

## The flex shorthand

The `flex` declaration is actually a shorthand for 3 properties that you can set
on a flex item.

In this case, `flex` is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.

### Flex-grow

`flex-grow` expects a single number as its value, and that number is used as the
flex item's "growth factor". When we applied `flex:1` to every div inside our container,
we were telling every div to grow the same amount.

### Flex-shrink

`flex-shrink` sets the "shrink factor" of a flex item. `flex-shrink` only ends up
being applied if the size of all flex items is larger than their parent container.

The default shrink factor is `flex-shrink:1`, which means all items will shrink evenly.

When you specify `flex-grow` or `flex-shrink`, flex items do not necessarily respect
your given values for `width`.

### Flex-basis

`flex-basis` sets the initial size of a flex item, so any sort of `flex-grow`ing
or `flex-shrink`ing starts from that baseline size. Using `auto` as a flex-basis
tells the item to check for a width declaration.

### What is flex auto?

When `auto` is defined as a flex keyword, it is equivalent to `flex: 1 1 auto`.
Note that `flex:auto` is not the default value when using the flex shorthand.

### In practice

Generally, you're most likely to use declarations like `flex:1;` to make divs grow
evenly and `flex-shrink:0` to keep certain divs from shrinking.

It _is_ possible to get fancy, and set up layouts where some columns relate to each
other in a specific ratio, so it's useful to know that you can use other values,
but those are relatively rare.

## Assignment

### [W3C's flex](https://www.w3.org/TR/css-flexbox-1/#flex-common)

`flex-grow` specifies **_flex grow factor_**.

`flex-shrink` specifies **_flex shrink factor_**.

`flex-basis` specifies **_flex basis_**, the initial main size of the flex item.

`none` expands to `0 0 auto`.

#### The `flex` shorthand

##### Basic Values of `flex`

`flex:initial` equivalent to `flex: 0 1 auto`.

`flex:auto` equivalent to `flex: 1 1 auto`.

`flex: none` equivalent to `flex: 0 0 auto`.

`flex: <positive-number>` equivalent to `flex: <positive-number> 1 0`.

By default, flex items won't shrink below their minimum content size. To change this,
set the `min-width` or `min-height` property.

#### Components of Flexibility

##### The `flex-grow` property

##### The `flex-shrink` property

##### The `flex-basis` property

### [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
