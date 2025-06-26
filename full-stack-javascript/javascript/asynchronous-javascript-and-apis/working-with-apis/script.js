(function api(doc) {
  /** @type {HTMLImageElement} */
  const gifImage = doc.querySelector("img");
  /** @type {HTMLButtonElement} */
  const newGifButton = doc.querySelector("#new-gif-button");
  /** @type {HTMLButtonElement} */
  const searchButton = doc.querySelector("#search-button");
  /** @type {HTMLInputElement} */
  const searchInput = doc.querySelector("#search");
  /** @type {HTMLSpanElement} */
  const errorSpan = doc.querySelector("#error");

  function fetchAndSetRandomImage() {
    fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=Wi42MXQvq3ECXxEFDyGiLRBsFEHQ6Iew&tag=&rating=g",
      {
        mode: "cors",
      },
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        gifImage.setAttribute("src", response.data.images.original.url);
      });
  }

  /** @param {String} text  */
  function fetchAndSetSearchImage(text) {
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=Wi42MXQvq3ECXxEFDyGiLRBsFEHQ6Iew&s=${text}&weirdness=10`,
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.data.images.original.url) {
          gifImage.setAttribute("src", response.data.images.original.url);
        } else {
          errorSpan.textContent = `There is no ${text} GIFs`;
        }
      });
  }

  doc.addEventListener("DOMContentLoaded", () => {
    fetchAndSetRandomImage();
  });

  newGifButton.addEventListener("click", () => {
    fetchAndSetRandomImage();
  });

  searchButton.addEventListener("click", () => {
    if (searchInput.validity.valueMissing) {
      searchInput.setCustomValidity("Please fill in values to search!");
      searchInput.reportValidity();
    } else {
      searchInput.setCustomValidity("");
      fetchAndSetSearchImage(searchInput.value);
    }
  });
})(document);
