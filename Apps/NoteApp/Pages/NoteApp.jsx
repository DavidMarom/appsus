const { NavLink, withRouter } = ReactRouterDOM

// **************  NOTE PAGE  **********

import { noteService } from "../../../services/note-service.js";
import { NoteCard } from "../Cmps/NoteCard.jsx";

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

    render() {
        return (
            <div className="notes-container">
                {this.state.notes.length && this.state.notes.map((note, iDx) => <NoteCard key={iDx} content={note} />)}

            </div>
        )
    }
}
