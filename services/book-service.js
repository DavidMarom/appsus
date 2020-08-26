export const bookService = {
  getBooks,
  getById,
  save,
  getEmpty,
  makeId
}

var notes = [{
  title: '',
  body: ''
}]

function getEmpty() {
  return {
    name: '',
    power: 0
  };
}

function getBooks() {
  //check if local storage is empty
  // if empty: load from books var
  return Promise.resolve(books)

}

function getById(bookId) {
  const book = books.find(book => book.id === bookId)
  return Promise.resolve(book)
}

function save(bookToSave) {
  bookToSave.id ? _update(bookToSave) : _add(bookToSave)
}

function _add(book) {
  const bookToAdd = {
    ...book,
    id: makeId()
  }
  books = [bookToAdd, ...books]
  window.theBooks = books
}

function _update(bookToSave) {
  // const petIdx = pets.findIndex(pet => pet.id === petToSave.id)
  // pets.splice(petIdx, 1, petToSave)
  books = books.map(book => book.id === bookToSave.id ? bookToSave : book)
  return bookToSave
}

function makeId(length = 5) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}