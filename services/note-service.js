export const noteService = {
  getNotes,

}


var notes = [{
  title: 'Note 1',
  body: 'text text'
}, {
  title: 'Note 2',
  body: 'text text'
}]


function getNotes() {
  
  //check if local storage is empty
  // if empty: load from books var
  return Promise.resolve(notes)

}