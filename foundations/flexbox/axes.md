# Axes

## Axes

The default direction for a flex container is horizontal, or `row`, but you can
change the direction to vertical, or `column`.

No matter which direction you're using, you need to think of your flex-containers
as having 2 axes: the main axis and the cross axis. It is the direction of these
axes that changes when the `flex-direction` is changed.

`flex-direction:column` would not work as expected if we used the shorthand `flex:1`.

The reason for this is that the flex shorthand expands `flex-basis` to `0`, which
means that all `flex-grow`ing and `flex-shrink`ing would begin their calculations
from `0`.

Another detail to notice: when we changed the flex-direction to `column`, `flex-basis`
refers to `height` instead of `width`.

Changing things to vertical using `flex-direction:column` adds complexity because
block-level elements default to the height of their content, and in this case there
_is_ no content.
