import {
  Storage
} from "./storage-service.js";

export const noteService = {
  getNotes,
  updateNotes
}

var notes = [];


if (!Storage.loadFromStorage('notes') || Storage.loadFromStorage('notes') == '') { // if nothing in storage
  loadDump();
} else {
  notes = Storage.loadFromStorage('notes');
}

function updateNotes(noteArr){
  Storage.saveToStorage('notes',noteArr);
  // notes = noteArr;
}

function loadDump() {
  notes = [{
    // id: '54gg54',
    title: 'Need to write a LOT of cards...',
      body: 'Lets start...',
      bg: 'aaa',
      url: ''
    }, {
      // id: 's4gf54',
      title: 'Take Rexi out for a walk',
      body: 'Dont bump into cats this time',
      bg: 'eee',
      url: ''

    }
  //  {
  //     id: '55g454',
  //     title: 'Work on the project',
  //     body: 'Push commit etc..',
  //     bg: 'ccc',
  //     url: ''

  //   }, {
  //     id: '54gf4y',
  //     title: 'Donate blood',
  //     body: 'Lie about the unprotected sex questions this time...',
  //     bg: 'ddd',
  //     url: ''

  //   }, {
  //     id: '54f3d4',
  //     title: 'Rob a bank',
  //     body: 'We need cash...',
  //     bg: 'aaa',
  //     url: ''

  //   }, {
  //     id: '5jdj44',
  //     title: 'Escape the country',
  //     body: 'We dont want to go to prison, dont we?',
  //     bg: 'bbb',
  //     url: ''

  //   }, {
  //     id: '54gsw4',
  //     title: 'Keep filling out cards',
  //     body: 'no one will do it for you',
  //     bg: 'aaa',
  //     url: ''

  //   }, {
  //     id: 'jjjg54',
  //     title: 'Last one',
  //     body: 'Hurrey!',
  //     bg: 'ddd',
  //     url: ''
  //   }
  ]


  Storage.saveToStorage('notes', notes);
}

function getNotes() {
  return Promise.resolve(notes)
}