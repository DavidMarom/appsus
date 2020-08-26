import { Storage } from "./storage-service";

export const noteService = {
  getNotes,
}

var notes=[];

if (!Storage.loadFromStorage('notes') || Storage.loadFromStorage('notes') == '') { // if nothing in storage
  loadDump();
} else {
  notes = Storage.loadFromStorage('notes');
}

function loadDump() {
  notes = [{
    title: 'Note 1',
    body: 'text text'
  }, {
    title: 'Note 2',
    body: 'text text'
  }]
  Storage.saveToStorage('notes', notes);
}


function getNotes() {
  return Promise.resolve(notes)
}