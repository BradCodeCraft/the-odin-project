(function dynamicUserInterfaceInteractions(doc) {
  /**
   * @param {string} title
   * @param {string[]} contentArray
   * @returns {HTMLDivElement}
   */
  function makeClickDropdownMenu(title, contentArray) {
    const dropdownMenuContent = doc.createElement("div");
    dropdownMenuContent.setAttribute("class", "dropdown-menu-content hidden");
    contentArray.forEach((element) => {
      const item = doc.createElement("p");
      item.textContent = element;
      dropdownMenuContent.append(item);
    });

    const showButton = doc.createElement("button");
    showButton.setAttribute("type", "button");
    showButton.textContent = title;
    showButton.addEventListener("click", () => {
      if (
        dropdownMenuContent
          .getAttribute("class")
          .split(" ")
          .indexOf("hidden") !== -1
      ) {
        dropdownMenuContent.setAttribute(
          "class",
          "dropdown-menu-content visible",
        );
      } else {
        dropdownMenuContent.setAttribute(
          "class",
          "dropdown-menu-content hidden",
        );
      }
    });

    const dropdownMenuContainer = doc.createElement("div");
    dropdownMenuContainer.setAttribute("class", "dropdown-menu-container");
    dropdownMenuContainer.append(showButton, dropdownMenuContent);

    return dropdownMenuContainer;
  }

  /**
   * @param {String[]} imagesSource
   */
  function imageCarousel(imagesSource) {
    /**
     * @param {String} imageSource
     * @returns {HTMLImageElement}
     */
    function makeImage(imageSource) {
      const image = doc.createElement("img");
      image.setAttribute("src", imageSource);
      image.style.width = 300;

      return image;
    }

    /**
     * @param {Number} index
     * @returns {HTMLDivElement}
     */
    function makeNavigationDot(index) {
      const dot = doc.createElement("div");
      dot.style.width = "10px";
      dot.style.height = "10px";
      dot.style.borderRadius = "10px";
      dot.style.backgroundColor = "gray";
      dot.style.cursor = "pointer";
      dot.style.transition = "all 150ms ease-in-out";
      dot.addEventListener("mouseenter", () => {
        dot.style.scale = 1.4;
      });
      dot.addEventListener("mouseleave", () => {
        if (index !== currentImageIndex) dot.style.scale = 1;
      });
      dot.addEventListener("click", () => {
        currentImageIndex = index;
        renderNewImage();
      });

      if (index === currentImageIndex) dot.style.scale = 1.4;

      return dot;
    }

    function renderNewImage() {
      imagesContainer.innerHTML = "";
      navigationContainer.innerHTML = "";

      imagesContainer.append(makeImage(imagesSource[currentImageIndex]));
      navigationContainer.append(leftNavigationButton);
      imagesSource.forEach((image, index) => {
        navigationContainer.append(makeNavigationDot(index));
      });
      navigationContainer.append(rightNavigationButton);
    }

    function autoAdvanceImage() {
      setTimeout(autoAdvanceImage, 5000);

      renderNewImage();

      currentImageIndex =
        currentImageIndex === imagesSource.length - 1
          ? 0
          : (currentImageIndex += 1);
    }

    let currentImageIndex = 0;

    const imagesContainer = doc.createElement("div");
    imagesContainer.style.display = "flex";
    imagesContainer.style.justifyContent = "center";
    imagesContainer.style.height = "300px";
    imagesContainer.style.maxHeight = "300px";
    imagesContainer.style.overflowX = "hidden";
    imagesContainer.append(makeImage(imagesSource[currentImageIndex]));

    const leftNavigationButton = doc.createElement("button");
    leftNavigationButton.textContent = "left";
    leftNavigationButton.style.flex = 1;
    leftNavigationButton.style.cursor = "pointer";
    leftNavigationButton.style.appearance = "none";
    leftNavigationButton.style.borderRadius = "20px";
    leftNavigationButton.addEventListener("click", () => {
      currentImageIndex =
        currentImageIndex === 0
          ? imagesSource.length - 1
          : (currentImageIndex -= 1);

      renderNewImage();
    });
    const rightNavigationButton = doc.createElement("button");
    rightNavigationButton.textContent = "right";
    rightNavigationButton.style.flex = 1;
    rightNavigationButton.style.cursor = "pointer";
    rightNavigationButton.style.appearance = "none";
    rightNavigationButton.style.borderRadius = "20px";
    rightNavigationButton.addEventListener("click", () => {
      currentImageIndex =
        currentImageIndex === imagesSource.length - 1
          ? 0
          : (currentImageIndex += 1);

      renderNewImage();
    });

    const navigationContainer = doc.createElement("div");
    navigationContainer.style.display = "flex";
    navigationContainer.style.alignItems = "center";
    navigationContainer.style.gap = "5px";
    navigationContainer.style.marginTop = "5px";
    navigationContainer.append(leftNavigationButton);
    imagesSource.forEach((image, index) => {
      navigationContainer.append(makeNavigationDot(index));
    });
    navigationContainer.append(rightNavigationButton);

    const frame = doc.createElement("div");
    frame.style.display = "flex";
    frame.style.flexDirection = "column";
    frame.style.width = "300px";
    frame.style.maxWidth = "300px";
    frame.append(imagesContainer, navigationContainer);
    autoAdvanceImage();

    return frame;
  }

  doc
    .querySelector(".dropdown-menu")
    .append(
      makeClickDropdownMenu("Click Me", [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
      ]),
    );

  doc
    .querySelector(".image-carousel")
    .append(
      imageCarousel([
        "https://picsum.photos/300",
        "https://picsum.photos/300/400",
        "https://picsum.photos/300/200",
        "https://picsum.photos/300",
      ]),
    );
})(document);
