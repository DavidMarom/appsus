import { noteService } from "../../../services/note-service.js";
export class NoteCard extends React.Component {

    state = {
        notes: ''
    }

    componentDidMount() {
        this.setState({ notes: this.props.allNotes });
    }

    deleteCard = () => {

        var FILTERED = this.props.allNotes.filter((u) => u.id != this.props.content.id) 
        noteService.updateNotes(FILTERED);
        
        this.setState({ notes: FILTERED});
        this.props.ln();
        this.props.history.push(`/note`);

    }

    render() {
        const { note } = this.state
        return (

            <div className={`note-card ${this.props.content.bg}`}>
                <div className="upper-part">
                    <h3>{!note && this.props.content.title}</h3>
                    <p>{this.props.content.body}</p>
                    <img src={`${this.props.content.url}`}></img>
                </div>
                <div className="control">

                    <div className="btn" onClick={this.deleteCard}>
                        <i className="far fa-trash-alt"></i>
                    </div>
                </div>
            </div>

        )
    }
}
