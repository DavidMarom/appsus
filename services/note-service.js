
export const noteService = {
  getNotes,
}

var notes=[];


function saveToStorage(key, val) {
  var str = JSON.stringify(val);
  localStorage.setItem(key, str)
}

function loadFromStorage(key) {
  var str = localStorage.getItem(key);
  var val = JSON.parse(str)
  return val;
}

if (!loadFromStorage('notes') || loadFromStorage('notes') == '') { // if nothing in storage
  loadDump();
} else {
  notes = loadFromStorage('notes');
}

function loadDump() {
  notes = [{
    title: 'Note 1',
    body: 'text text'
  }, {
    title: 'Note 2',
    body: 'text text'
  }]
  saveToStorage('notes', notes);
}

function getNotes() {
  return Promise.resolve(notes)
}