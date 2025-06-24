(function practice(doc) {
  const form = doc.querySelector("form");
  const emailInput = doc.querySelector("#email");
  const countryInput = doc.querySelector("#country");
  const postalCodeInput = doc.querySelector("#postal-code");
  const passwordInput = doc.querySelector("#password");
  const passwordConfirmationInput = doc.querySelector("#password-confirmation");

  /**
   * @param {HTMLInputElement} input
   */
  function handlePasswordValidity(input) {
    if (input.validity.valueMissing) {
      input.setCustomValidity("Please fill in this field!");
    } else if (input.validity.tooShort) {
      input.setCustomValidity("Password must be at least 6 characters");
    } else if (input.validity.patternMismatch) {
      input.setCustomValidity(
        "Password must have at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character",
      );
    } else {
      input.setCustomValidity("");
    }

    input.reportValidity();
  }

  emailInput.addEventListener("input", () => {
    if (emailInput.validity.valueMissing) {
      emailInput.setCustomValidity("Please fill in this field!");
    } else if (emailInput.validity.typeMismatch) {
      emailInput.setCustomValidity("Please enter an email address!");
    } else {
      emailInput.setCustomValidity("");
    }

    emailInput.reportValidity();
  });

  countryInput.addEventListener("input", () => {
    if (countryInput.validity.valueMissing) {
      countryInput.setCustomValidity("Please fill in this field!");
    } else if (countryInput.validity.tooShort) {
      countryInput.setCustomValidity(
        "Please enter a country with at least 4 characters",
      );
    } else {
      countryInput.setCustomValidity("");
    }

    countryInput.reportValidity();
  });

  postalCodeInput.addEventListener("input", () => {
    if (postalCodeInput.validity.valueMissing) {
      postalCodeInput.setCustomValidity("Please fill in this field!");
    } else if (postalCodeInput.validity.tooShort) {
      postalCodeInput.setCustomValidity(
        "Please enter a postal code with at least 5 characters",
      );
    } else if (postalCodeInput.validity.patternMismatch) {
      postalCodeInput.setCustomValidity(
        "Please enter a postal code in this format: 00000-0000",
      );
    } else {
      postalCodeInput.setCustomValidity("");
    }

    postalCodeInput.reportValidity();
  });

  passwordInput.addEventListener("input", () => {
    handlePasswordValidity(passwordInput);
  });

  passwordConfirmationInput.addEventListener("input", () => {
    if (passwordConfirmationInput.value !== passwordInput.value) {
      passwordConfirmationInput.setCustomValidity("Passwords do not match!");
    } else {
      handlePasswordValidity(passwordConfirmationInput);
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    passwordConfirmationInput.reportValidity();
    passwordInput.reportValidity();
    postalCodeInput.reportValidity();
    countryInput.reportValidity();
    emailInput.reportValidity();
  });
})(document);
