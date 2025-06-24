# Form Validation with JavaScript

## Introduction

## Assignment

### [Validating forms using JS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript)

#### The Constraint Validation API

The Constraint Validation API consists of a set of methods and properties
available on the following form element DOM interfaces:

- HTMLButtonElement
- HTMLFieldSetElement
- HTMLInputElement
- HTMLOutputElement
- HTMLSelectElement
- HTMLTextAreaElement

The Constraint Validation API makes the following properties available on the
above elements.

- `validationMessage`: returns a localized message describing the validation
  constraints that the control doesn't satisfy (if any). If the control is not
  a candidate for constraint validation or the element's value satisfies its
  constraints (is valid), this will return an empty string.
- `validity`: returns a `ValidityState` object that contains several properties
  describing the validity state of the element.

The Constraint Validation API also makes the following methods available on the
above elements and the `form` elements.

- `checkValidity()`: returns `true` if the element's value has no validity
  problems; `false` otherwise.
- `reportValidity()`: return/wreports invalid field(s) using events. This
  method is useful in combination with `preventDefault()` in an `onSubmit`
  event handler.
- `setCustomValidity(message)`: adds a custom error message to the element; if
  you set a custom error message, the element is considered to be invalid, and
  the specified error is displayed. This lets you use JS code to establish a
  validation failure other than those offered by the standard HTML validation
  constraints.

#### Validating forms without a built-in API

### [Using HTML form validation and the Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation)
