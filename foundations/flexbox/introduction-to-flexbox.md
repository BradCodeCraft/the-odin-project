# Introduction to Flexbox

## Before we get started

## Let's flex

Flexbox is a way to arrange items into rows or columns. Theses items will flex based
on some rules that you can define.

### Flex containers and flex items

A _flex container_ is any element that has `display:flex` on it. A _flex item_ is
any element that lives directly inside of a flex container.

Somewhat confusingly, any element can be both a flex container _and_ a flex item.
Said another way, you can also put `display:flex` on a flex item and then use flexbox
to arrange _its_ children.

Creating and nesting multiple flex containers and items is the primary way we will
be building up complex layouts.
