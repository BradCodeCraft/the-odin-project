(function asyncAndAwait(doc) {
  /** @type {HTMLImageElement} */
  const gifImage = doc.querySelector("#gif");

  async function fetchAndSetCatImage() {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=Wi42MXQvq3ECXxEFDyGiLRBsFEHQ6Iew&s=cats&weirdness=10",
    );
    const catData = await response.json();
    gifImage.setAttribute("src", catData.data.images.original.url);
  }

  fetchAndSetCatImage();
})(document);
