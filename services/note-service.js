import { Storage } from "./storage-service.js";

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
    title: 'Need to write a LOT of cards...',
    body: 'Lets start...'
  }, {
    title: 'Take Rexi out for a walk',
    body: 'Dont bump into cats this time'
  }, {
    title: 'Work on the project',
    body: 'Push commit etc..'
  }, {
    title: 'Donate blood',
    body: 'Lie about the unprotected questions this time...'
  }, {
    title: 'Rob a bank',
    body: 'We need cash...'
  }, {
    title: 'Escape the country',
    body: 'We dont want to go to prison, dont we?'
  }, {
    title: 'Keep filling out cards',
    body: 'no one will do it for you'
  }, {
    title: 'Last one',
    body: 'Hurrey!'
  }


]
  Storage.saveToStorage('notes', notes);
}

function getNotes() {
  return Promise.resolve(notes)
}