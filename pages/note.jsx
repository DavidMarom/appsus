const { NavLink, withRouter } = ReactRouterDOM

import { noteService } from "../services/note-service.js";

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
            <div className="note-container">
                {this.state.notes.length && this.state.notes.map(note => note.title)}
                {/* console.log(this.state.notes); */}
sdfds
            </div>
        )
    }
}
