import {
  Storage
} from "./storage-service.js";

export const noteService = {
  getNotes,
}

var notes = [];



if (!Storage.loadFromStorage('notes') || Storage.loadFromStorage('notes') == '') { // if nothing in storage
  loadDump();
} else {
  notes = Storage.loadFromStorage('notes');
}

function loadDump() {
  notes = [{
      title: 'Need to write a LOT of cards...',
      body: 'Lets start...',
      bg: 'aaa',
      url: 'https://media.giphy.com/media/kclGU7Fgztb9HtcHRI/giphy.gif'
    }, {
      title: 'Take Rexi out for a walk',
      body: 'Dont bump into cats this time',
      bg: 'eee',
      url: ''

    }, {
      title: 'Work on the project',
      body: 'Push commit etc..',
      bg: 'ccc',
      url: ''

    }, {
      title: 'Donate blood',
      body: 'Lie about the unprotected sex questions this time...',
      bg: 'ddd',
      url: ''

    }, {
      title: 'Rob a bank',
      body: 'We need cash...',
      bg: 'aaa',
      url: 'https://media.giphy.com/media/BemKqR9RDK4V2/giphy.gif'

    }, {
      title: 'Escape the country',
      body: 'We dont want to go to prison, dont we?',
      bg: 'bbb',
      url: ''

    }, {
      title: 'Keep filling out cards',
      body: 'no one will do it for you',
      bg: 'aaa',
      url: ''

    }, {
      title: 'Last one',
      body: 'Hurrey!',
      bg: 'ddd',
      url: ''

    }

  ]
  Storage.saveToStorage('notes', notes);
}

function getNotes() {
  return Promise.resolve(notes)
}