# The Cascade

## The cascade of CSS

If you end up with some unexpected behavior like this, it's either because of these
default styles, not understanding how a property works, or not understanding this
little thing called the cascade.

The cascade is what determines which rules actually get applied to our HTML. There
are different factors that the cascade uses to determine this.

### Specificity

A CSS declaration that is more specific will take precedence over less specific ones.
Inline styles have the highest specificity compared to selectors, while each type
of selector has its own specificity level that contributes to how specific a declaration
is.

1. ID selectors
2. Class selectors
3. Type selectors

Specificity will only be taken into account when an element has multiple, conflicting
declarations targeting it.

> When comparing selectors, you may come across special symbols for the universal
> selector (`*`) as well as combinators (`+`, `~`, `>`, and an empty space). These
> symbols do not add any specificity in and of themselves.

### Inheritance

Inheritance refers to certain CSS properties that, when applied to an element, are
inherited by that element's descendants, even if we don't explicitly write a rule
for those descendants.

### Rule order

Whichever rule was the _last_ defined is the winner.
