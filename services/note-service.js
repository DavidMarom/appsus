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

function updateNotes(noteArr) {
  Storage.saveToStorage('notes', noteArr);
  notes = noteArr;
}

function loadDump() {
  notes = [{
      id: '54gg54',
      title: 'Nevo\'s black list:',
      body: '',
      bg: 'aaa',
      url: '',
      type: 'list',
      list: ['David Marom', 'Chen Edri','Another guy','and another'],
      video: '',
      pinned:false

    }, {
      id: 's4gf54',
      title: 'Take Rexi out for a walk',
      body: 'Dont bump into cats this time',
      bg: 'bbb',
      url: '',
      type: 'youtube',
      list: [],
      video: 'https://www.youtube.com/embed/XrHqQcwSjtE',
      pinned:false

    },
    {
      id: '55g454',
      title: 'Work on the project',
      body: 'Push commit etc..',
      bg: 'ccc',
      url: '',
      type: 'text',
      list: [],
      video: '',
      pinned:false

    },
    {
      id: '54sdfgf4y',
      title: 'Donate blood',
      body: 'Lie about the unprotected sex questions this time...',
      bg: 'ddd',
      url: '',
      type: 'text',
      list: [],
      video: '',
      pinned:false

    }, {
      id: '54fsdf3d4',
      title: 'Rob a bank',
      body: 'We need cash...',
      bg: 'eee',
      url: 'https://media.giphy.com/media/kclGU7Fgztb9HtcHRI/giphy.gif',
      type: 'image',
      list: [],
      video: '',
      pinned:false

    }, {
      id: '5jdjerg44',
      title: 'Escape the country',
      body: 'We dont want to go to prison, dont we?',
      bg: 'ccc',
      url: '',
      type: 'text',
      list: [],
      video: '',
      pinned:false

    }
  ]

  Storage.saveToStorage('notes', notes);
}

function getNotes() {
  return Promise.resolve(notes)
}