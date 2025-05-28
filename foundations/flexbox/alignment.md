# Alignment

## Alignment

`justify-content` aligns items across the **main axis**.

To change the placement of items along the **cross axis** use `align-items`.

`justify-content` and `align-items` change their behavior when you change the
flex-direction of a flex-container.

### Gap

Setting `gap` on a flex container adds a specified space between flex items, similar
to adding a margin to the items themselves.

## Assignment

### [Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)

#### Flex direction

Unlike `justify-content` and `align-items`, `align-self` is applied to the **_child
element_**, not the container.

#### Alignment

**When we're talking about alignment in the _cross_ axis, each item can do whatever
it wants. In the _primary_ axis, though, we can only think about how to distribute
the _group_**.

#### Hypothetical size

Core part of the Flexbox philosophy: things are fluid and flexible and can adjust
to the constraints of the world.

#### Growing and shrinking

##### flex-basis

**To put it simply**: In a flex row, `flex-basis` does the same thing as `width`,
and `height` for flex column.

##### flex-grow

We can specify how extra space should be consumed with `flex-grow`.

**What if _multiple_ children set `flex-grow`?** In this case, the extra space is
divided proportionally between children based on their `flex-grow` value.

##### flex-shrink

Note that the absolute values don't matter, **it's all about the ratio**.

#### The minimum size gotcha

In addition to the _hypothetical_ size, there's another important size that the Flexbox
algorithm cares about: **_the minimum size_**.

By setting `min-width: 0px` directly on the Flex child, we tell the Flexbox algorithm
to overwrite the "built-in" minimum width.

#### Gaps

##### Auto margins

**Auto margins will gobble up the extra space, and apply it to the element's margin**.

#### Wrapping

When we set `flex-wrap:wrap`, **items won't shrink below their hypothetical size**.
At least, not when wrapping onto the next row/column is an option!

With `flex-wrap:wrap`, we no longer have a single primary axis line that can skewer
each item. Effectively, **each row acts as its own mini flex container**.
