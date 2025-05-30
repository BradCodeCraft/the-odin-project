# DOM Manipulation and Events

## Document Object Model

The DOM is a tree-like representation of the contents of a webpage - a tree of
"nodes" with different relationships depending on how they're arranged in the HTML
document.

## Targeting nodes with selectors

When working with DOM, you use "selectors" to target the nodes you want to work
with. You can use a combination of CSS-style selectors and relationships properties
to target the nodes you want.

## DOM Methods

One of the primary differences is that these nodes are JS objects that have many
properties and methods attached to them. These properties and methods are the
primary tools we are going to use to manipulate our webpage with JS.

### Query selector

`element.querySelector(selector)` returns a reference to the first match of _selector_.

`element.querySelectorAll(selectors)` returns a **NodeList** containing reference
to all of the matches of the _selectors_.

> When using querySelectorAll, the return value is **NOT** an array.

A solution, if problems arise, is to convert the NodeList into an array, using
`Array.from()` or the **spread operator**.

### Element creation

`document.createElement(tagName, [options])` creates a new element of tag type
tagName. `[options]` in this case means you can add some optional parameters to
the function.

This function does NOT put your new element into the DOM - it creates it in memory.
This is so that you can manipulate the element (by adding styles, classes, ids, text,
etc.) before placing it on the page.

### Append elements

`parentNode.appendChild(childNode)` appends _childNode_ as the last child of _parentNode_.

`parentNode.insertBefore(newNode, referenceNode)` inserts _newNode_ into _parentNode_
before _referenceNode_.

### Remove elements

`parentNode.removeChild(child)` removes _child_ from _parentNode_ on the DOM and
returns a reference to _child_.

### Altering elements

When you have a reference to an element, you can use that reference to alter the
element's own properties.

### Adding inline style

When accessing a kebab-cases CSS property with JS, you will need to either use camelCase
with dot notation or bracket notation.

### Editing attributes

`element.setAttribute(attribute, attributeValue)`

`element.getAttribute(attribute)`

`element.removeAttribute(attribute)`

### Working with classes

`element.classList.add(class)`

`element.classList.remove(class)`

`element.classList.toggle(class)`

### Adding text content

`element.textContent = "..."`

### Adding HTML content

`element.innerHTML = "..."`

> The JS does _not_ alter the HTML, but the DOM - the HTML file will look the same,
> but JS changes what the browser renders.
> Include your JS at the bottom of the HTML file so that it gets run after the DOM
> nodes are parsed and created.
> Alternatively, you can link the JS file in the head of your HTML document. Use
> the `<script>` tag with the `src` attribute containing the path to the JS file,
> and include the `defer` keyword to load the file after the HTML is parsed.

## Events

There are three primary ways to handle events:

- Specify function attributes directly on your HTML elements.
- Set properties in the form of `on<eventType>` on the DOM nodes in your JS.
- Attach event listeners to the DOM nodes in your JS.

### Method 1

This is less than ideal because we're clutter our HTML with JS. Also, we can only
set one "onclick" property per DOM element, so we're unable to run multiple separate
functions in response to a click event using this method.

### Method 2

This is a little better. But we still have the problem that a DOM element can only
have one "onclick" property.

### Method 3

This is much more flexible and powerful, though it is a bit more complex to set up.

Using named functions can clean up your code considerably, and is a _really_ good
idea if the function is something that you are going to want to do in multiple places.

### Attaching listeners to groups of nodes

Some useful events include:

- click
- dblclick
- keydown
- keyup

## Assignment

### [JavaScript events](https://www.javascripttutorial.net/javascript-dom/javascript-events/)

There are two main event models:

- Event bubbling: an events starts at the most specific element and then flows upward
  toward the least specific element.
- Event capturing: an event starts at the least specific element and flows downward
  toward the most specific element.

#### DOM Level 2 Event flow

DOM level 2 events specify that event flow has three phrases:

- First, event capturing occurs, which provides the opportunity to intercept the
  event.
- Then, the actual target receives the event.
- Finally, event bubbling occurs, which allows a final response to the event.

#### Event object

Most commonly used properties and methods of the `event` object:

- bubbles: true if the event bubbles
- cancelable: true if the default behavior of the event can be canceled
- currentTarget: the current element on which the event is firing
- defaultPrevented: return true if the preventDefault() has been called
- detail: more information about the event
- eventPhrase: 1 for capturing phrase, 2 for target, 3 for bubbling
- preventDefault(): cancel the default behavior for the event. It is only effective
  if the `cancelable` property is true
- stopPropagation(): cancel any further event capturing or bubbling. This method
  only used if the `bubbles` property is true
- target: the target element of the event
- type: the type of event that was fired

##### preventDefault

> The `preventDefault()` method does not stop the event from bubbling up the DOM.

##### stopPropagation()

The `stopPropagation()` method immediately stops the flow of an event through the
DOM tree.

### [Page load events](https://www.javascripttutorial.net/javascript-dom/javascript-page-load-events/)

#### Overview of JS page load events

When you open a page, the following events occur in sequence:

- `DOMContentLoaded` - the browser fully loaded HTML and completed building the
  DOM tree. However, it hasn't loaded external resources. In this event, you can
  start selecting DOM nodes or initialize the interface.
- `load` - the browser fully loaded the HTML and external resources.

When you leave the page, the following events fire in sequence:

- `beforeunload` - fires before the page and resources are unloaded. You can use
  this event to show a confirmation dialog to confirm if you want to leave the page.
- `unload` - fires when the page has completely unloaded.

#### Handling JS page load events

To handle the page events, you can call the `addEventListener()` method on the
`document` object.

### [Mouse Events](https://www.javascripttutorial.net/javascript-dom/javascript-mouse-events/)

#### Introduction to JS mouse events

##### mousedown, mouseup, and click events

When you `click` an element, there are no less than three mouse events fire in the
following sequence:

1. The `mousedown` fires when you pres the mouse button on the element.
2. The `mouseup` fires when you release the mouse button on the element.
3. The `click` fires when one `mousedown` and one `mouseup` detected on the element.

##### dblclick event

In practice, you rarely use the `dblclick` event. The `dblclick` event fires when
you double-click over an element.

It takes two click events to cause a `dblclick` event to fire. The `dblclick` event
has four distinct events fired in the following order:

1. `mousedown`
2. `mouseup`
3. `click`
4. `mousedown`
5. `mouseup`
6. `click`
7. `dblclick`

If you register both `click` and `dblclick` event handlers on the same element,
you will not know whether the user has clicked or double-clicked the element.

##### mousemove

The `mousemove` event fires repeatedly whenever you move the mouse cursor around
an element. This `mousemove` event fires many times per second as the mouse is
moved around, even if it is just by one pixel.

To avoid the performance issue, it is a good practice to add `mousemove` event
handler only when you need it and remove it as soon as it is no longer needed.

##### mouseover/mouseout

The `mouseover` fires when the mouse cursor is outside of the element and then moves
inside the boundaries of the element.

The `mouseout` fires when the mouse cursor is over an element and then moves another
element.

##### mouseenter/mouseleave

The `mouseenter` fires when the mouse cursor is outside of an element and then
moves inside the boundaries of the element.

The `mouseleave` fires when the mouse cursor is over an element and then moves
to the outside of the element’s boundaries.

Both `mouseenter` and `mouseleave` does not bubble and does not fire when the
mouse cursor moves over descendant elements.

#### Registering mouse event handlers

To register a mouse event, you use these steps:

- First, select the element
- Second, register the mouse event using the `addEventListener()` method

It is a good practice to use the `addEventListener()` to register a mouse event handler.

#### Detecting mouse buttons

The `event` object passed to the mouse event handler has a property called `button`
that indicates which mouse button was pressed on the mouse to trigger the event.

The mouse button is represented by a number:

- 0: the main mouse button is pressed, usually the left button.
- 1: the auxiliary button is pressed, usually the middle button or the wheel button.
- 2: the secondary button is pressed, usually the right button.
- 3: the fourth button is pressed, usually the Browser Back button.
- 4: the fifth button is pressed, usually the Browser Forward button.

#### Modifier keys

The `event` object has four Boolean properties (`<key>Key`), where each is set to
`true` if the key is being held down or `false` if the key is not pressed.

#### Getting Screen Coordinates

The `screenX` and `screenY` properties of the event passed to the mouse event handler
return the screen coordinates of the location of the mouse in relation to the
entire screen.

On the other hand, the `clientX` and `clientY` properties provide the horizontal
and vertical coordinates within the application's client area at which the
mouse event occurred.

### [Keyboard Events](https://www.javascripttutorial.net/javascript-dom/javascript-keyboard-events/)

#### Introduction to JS keyboard events

There are three main keyboard events:

- `keydown`
- `keyup`
- `keypress` - fires when you press character keyboard. It fires repeatedly while
  holding down the key.

When you press a character key once on the keyboard, three keyboard events are
fired in the following order:

1. `keydown`
2. `keypress`
3. `keyup`

Both `keydown` and `keypress` events are fired before any change is made to the
text box, whereas the keyup event fires after the changes have been made to the
text box.

#### Handling keyboard events

To handle a keyboard event, you follow these steps:

- First, select the element on which the keyboard event will fire. Typically, it
  is a text box.
- Then, use the `addEventListener()` method to register an event handler.

#### The keyboard event properties

The keyboard event has two important properties: `key` and `code`. The `key`
property returns the character that has been pressed whereas `code` returns
the physical key code.

### [Event Delegation](https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/)

In JS, if you have a large number of event handlers on a page, they will directly
impact the performance.

To solve this issue, you can leverage the **event bubbling**, i.e., handling it
at the parent element.

#### JS event delegation benefits

When it is possible, you can have a single event handler on the `document` that
will handle all the events of a particular type. By doing this, you gain the
following benefits:

- Less memory usage, better performance.
- Less time is required to set up event handlers on the page.
- The `document` object is available immediately. As long as the element is
  rendered, it can start functioning correctly without delay. You don’t need
  to wait for the `DOMContentLoaded` or `load` events.

### [dispatchEvent](https://www.javascripttutorial.net/javascript-dom/javascript-dispatchevent/)

To generate an event programmatically:

- First, create a new `Event` object using `Event` constructor.
- Then trigger the event using `element.dispatchEvent()` method.

#### Event constructor

`let event = new Event(type, [, optional]);`

`type` is a string that specifies the event type

`options` is an object with two optional properties:

- `bubbles` is a boolean value that determines if the event bubbles or not.
- `cancelable` is a boolean value that determines if the event is cancelable.

By default, the `options` object is: `{ bubbles: false, cancelable: false }`

#### dispatchEvent method

After creating an event, you can fire it on a target element using the
`dispatchEvent()` method.

### [Custom Events](https://www.javascripttutorial.net/javascript-dom/javascript-custom-events/)

#### Introduction to JS custom events

##### Creating JS custom events

`let event = new CustomEvent(eventType, options);`

The `CustomEvent()` has two parameters

- The `eventType` is a string that represents the name of the event.
- the `options` is an object has the `detail` property that contains any custom
  information about the event.

##### Dispatching JS custom events

After creating a custom event, you need to attach the event to a DOM element and
trigger it by using the `dispatchEvent()` method

#### JS custom event

#### Why use custom events

They allow you to decouple code execution, allowing one piece of code to run
after another completes.
