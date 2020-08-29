// *************************************
// *            NOTES PAGE             *
// *************************************

const { NavLink, withRouter } = ReactRouterDOM

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

    loadNotesFromStorage = () => {
        this.setState({ notes: Storage.loadFromStorage('notes') })
    }

    render() {

        return (
            <div className="note-app-wrapper">
                <AddItemBar allNotes={this.state.notes} ln={this.loadNotesFromStorage} history={this.props.history}  />

                <div className="notes-container">
                    {this.state.notes.length && this.state.notes.map((note, iDx) => <NoteCard
                        key={iDx}
                        loadNotesFromStorage={this.loadNotesFromStorage}
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
