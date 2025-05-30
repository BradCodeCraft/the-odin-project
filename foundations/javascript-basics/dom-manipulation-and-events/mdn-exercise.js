const LINK = document.querySelector("a");
LINK.textContent = "Mozilla Developer Network";
LINK.href = "https://developer.mozilla.org";

const SECTION = document.querySelector("section");

const PARAGRAPH = document.createElement("p");
PARAGRAPH.textContent = "We hope you enjoyed the ride.";
PARAGRAPH.setAttribute("class", "highlight");

SECTION.appendChild(PARAGRAPH);

// const TEXT = document.createTextNode(
//   " - the premier source for web development knowledge.",
// );

// const LINK_PARAGRAPH = document.querySelector("p");
// LINK_PARAGRAPH.appendChild(text);

// SECTION.appendChild(LINK_PARAGRAPH);
// LINK_PARAGRAPH.parentNode.removeChild(LINK_PARAGRAPH);

