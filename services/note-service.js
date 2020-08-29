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
      list: ['David Marom', 'Chen Edri','DONT PUT .git FOLDERS','IN DROPBOX!!'],
      video: '',
      pinned:false

    },
    {
      id: '55g454',
      title: 'Work on the project',
      body: 'Push commit etc..',
      bg: 'bbb',
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
      bg: 'ccc',
      url: '',
      type: 'text',
      list: [],
      video: '',
      pinned:false

    }, {
      id: '54fsdf3d4',
      title: 'Rob a bank',
      body: '',
      bg: 'ddd',
      url: 'https://media.giphy.com/media/kclGU7Fgztb9HtcHRI/giphy.gif',
      type: 'image',
      list: [],
      video: '',
      pinned:false

    }, {
      id: '5jdjerg44',
      title: 'Escape the country',
      body: 'We dont want to go to prison, dont we?',
      bg: 'eee',
      url: '',
      type: 'text',
      list: [],
      video: '',
      pinned:false

    },
    {
      id: 's4gf54',
      title: '',
      body: '',
      bg: 'ggg',
      url: '',
      type: 'youtube',
      list: [],
      video: 'https://www.youtube.com/embed/XrHqQcwSjtE',
      pinned:false

    }
  ]

  Storage.saveToStorage('notes', notes);
}

function getNotes() {
  return Promise.resolve(notes)
}