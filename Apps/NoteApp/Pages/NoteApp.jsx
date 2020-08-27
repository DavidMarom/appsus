const { NavLink, withRouter } = ReactRouterDOM

// **************  NOTE PAGE  **********

import { Storage } from "../../../services/storage-service.js";

import { noteService } from "../../../services/note-service.js";
import { NoteCard } from "../Cmps/NoteCard.jsx";
import { AddItemBar } from "../Cmps/AddItemBar.jsx";

export class NoteApp extends React.Component {
    state = {
        notes: ''
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes() {
        noteService.getNotes()
            .then(notes => {
                this.setState({ notes })
            })
    }

    loadNotes2 = () => {
        this.setState({ notes: Storage.loadFromStorage('notes') })
    }

    createItem = () => {
        console.log('creating item');

        var prepareNote = {
            id: '54345gg54',
            title: 'Need to write a LOT of cards...',
            body: 'Lets start...',
            bg: 'aaa',
            url: '',
            type: 'list',
            list: ['item 1', 'item2'],
            video: ''
        };

        this.state.notes({ notes: notes.push(prepareNote) })
    }

    render() {

        return (
            <div className="note-app-wrapper">
                <AddItemBar createItem={this.createItem} />

                <div className="notes-container">
                    {this.state.notes.length && this.state.notes.map((note, iDx) => <NoteCard
                        key={iDx}
                        ln={this.loadNotes2}
                        history={this.props.history}
                        currentNoteId={iDx}
                        content={note}
                        allNotes={this.state.notes}
                    />)}

                </div>
            </div>
        )
    }
}
