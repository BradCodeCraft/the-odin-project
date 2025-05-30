// Translate border-left-width to borderLeftWidth
function camelize(string = "") {
  string.split("-")
    .map((currentString, index) => {
      return index === 0 ? currentString : currentString.charAt(0).toUpperCase() + currentString.substring(1);
    })
    .join("");
}


// Filter out number < min and number > max
function filterRange(array = [], min = 0, max = 0) {
  return array.filter((currentNumber) => {
    return currentNumber >= min && currentNumber <= max;
  });
}

// Modify preexisting array by filtering out number outside of the [min, max] range
function filterRangeInPlace(array = [], min = 0, max = 0) {
  for (let i = 0; i < array.length; i++) {
    let value = array[i];

    // Remove value if outside the range
    if (value < min || value > max) {
      array.splice(i, 1);
      i--;
    }
  }
}

function sortInDescendingOrder(array = []) {
  return array.sort((a, b) => b - a);
}

function copyAndSortArray(array = []) {
  return array.splice().sort();
}
