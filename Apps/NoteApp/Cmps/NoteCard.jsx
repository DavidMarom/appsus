import { noteService } from "../../../services/note-service.js";
import { ListInput } from "../Cmps/ListInput.jsx";


// PROPS:
// ------------------------------------------------
// key={iDx}
// loadNotesFromStorage={this.loadNotesFromStorage}
// history={this.props.history}
// currentNoteId={iDx}
// content={note}
// allNotes={this.state.notes}

export class NoteCard extends React.Component {

    state = {
        notes: '',
        colorModal: 'color-hide',
        pinned: false
    }

    componentDidMount() {
        this.setState({ notes: this.props.allNotes });
    }

    updateCard = (newAllNotes) => {
        this.setState({notes: newAllNotes})
        noteService.updateNotes(newAllNotes);

        this.props.history.push(`/note`);

    }

    deleteCard = () => {
        var FILTERED = this.props.allNotes.filter((note) => note.id != this.props.content.id)
        noteService.updateNotes(FILTERED);
        this.setState({ notes: FILTERED });
        this.props.loadNotesFromStorage();
        this.props.history.push(`/note`);
    }

    pinCard = () => {
        var modifiedNotesArr = this.props.allNotes;
        modifiedNotesArr[this.props.currentNoteId].pinned = !modifiedNotesArr[this.props.currentNoteId].pinned;
        noteService.updateNotes(modifiedNotesArr);
        this.setState({ notes: modifiedNotesArr });
        this.setState({ pinned: modifiedNotesArr[this.props.currentNoteId].pinned });

        this.props.loadNotesFromStorage();
        this.props.history.push(`/note`);
    }

    removeListItem = (ev) => {
        var ALLNOTES = this.props.allNotes
        var tempList = this.props.content.list;

        tempList.splice(ev.target.getAttribute("data-id"), 1);
        ALLNOTES[this.props.currentNoteId].list = tempList;
        noteService.updateNotes(ALLNOTES);
        this.props.loadNotesFromStorage();
    }

    openColorSelect = () => {
        this.setState({ colorModal: 'color-show' });
    }

    updateColor = (ev) => {
        var ALLNOTES = this.props.allNotes

        ALLNOTES[this.props.currentNoteId].bg = ev.target.getAttribute('value');
        noteService.updateNotes(ALLNOTES);
        // this.props.loadNotesFromStorage();
        this.setState({ colorModal: 'color-hide' })
    }

    render() {
        const { note } = this.state;
        return (
            <div className={`note-card ${this.props.content.bg}`}>
                <div className="upper-part">

                    {this.props.content.type === 'text' ? <div>
                        <h3>{!note && this.props.content.title}</h3>
                        <p>{this.props.content.body}</p></div> : null}

                    {this.props.content.type === 'list' ? <div><h3>{!note && this.props.content.title}</h3></div> : null}

                    {this.props.content.type === 'list' ?
                        this.props.content.list.map((item, idx) => <div key={idx} className="list-in-card">
                            <div>{item}</div>
                            <div className="btn" data-id={idx} onClick={this.removeListItem}>X</div>
                        </div>) : null}

                    {this.props.content.type === 'list' ? <ListInput lll={this.props.loadNotesFromStorage} uuu={this.updateCard} allNotes={this.props.allNotes} currentNote={this.props.currentNoteId} history={this.props.history} /> : null}

                    {this.props.content.type === 'image' ? <div><h3>{this.props.content.title}</h3><img src={`${this.props.content.url}`}></img></div> : null}

                    {this.props.content.type === 'youtube' ? <iframe width="100%" src={`${this.props.content.video}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe> : null}


                </div>

                {/* *********  CONTROL BAR: Color, Trash  ************ */}
                <div className="control">
                    <div className={`${this.props.pin ? "pin-on" : "pin-off"}`} onClick={this.pinCard}><i className="fas fa-thumbtack"></i></div>
                    <div className="btn" onClick={this.deleteCard}><i className="far fa-trash-alt"></i></div>
                    <div className={`pick ${this.props.content.bg}`} onClick={this.openColorSelect}></div>
                </div>

                {/* ********** COLOR PICKER (hidden by default) ************************** */}
                <div className={`colorModal ${this.state.colorModal}`}>
                    <div className="pick aaa" value="aaa" onClick={this.updateColor}></div>
                    <div className="pick bbb" value="bbb" onClick={this.updateColor}></div>
                    <div className="pick ccc" value="ccc" onClick={this.updateColor}></div>
                    <div className="pick ddd" value="ddd" onClick={this.updateColor}></div>
                    <div className="pick eee" value="eee" onClick={this.updateColor}></div>
                </div>
            </div > // card
        )
    }
}
