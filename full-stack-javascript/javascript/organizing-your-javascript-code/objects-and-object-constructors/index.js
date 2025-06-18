/**
 * Write a constructor for making “Book” objects. We will revisit this in the
 * next project. Your book objects should have the book’s title, author, the
 * number of pages, and whether or not you have read the book.
 */

/**
 * @param {string} title
 * @param {string} author
 * @param {number} numberOfPages
 * @param {boolean} haveRead
 */
function Book(title, author, numberOfPages, haveRead) {
  if (!new.target) {
    throw Error("You must use the `new` operator to call the constructor!");
  }

  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.haveRead = haveRead;

  this.info = function () {
    return `${this.title} by ${this.author}, ${numberOfPages > 1 ? numberOfPages + " pages" : numberOfPages + " page"}, ${haveRead ? "already read" : "not read yet"}`;
  };
}
