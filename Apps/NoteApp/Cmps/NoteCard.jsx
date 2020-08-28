import { noteService } from "../../../services/note-service.js";
export class NoteCard extends React.Component {

    state = {
        notes: '',
        colorModal: 'hide',
        selectedColor: 'fff'
    }

    componentDidMount() {
        this.setState({ notes: this.props.allNotes });
    }

    deleteCard = () => {
        var FILTERED = this.props.allNotes.filter((u) => u.id != this.props.content.id)
        noteService.updateNotes(FILTERED);
        this.setState({ notes: FILTERED });
        this.props.ln();
        this.props.history.push(`/note`);
    }

    removeListItem = (ev) =>{
        var ALLNOTES = this.props.allNotes

        var tempList = ALLNOTES[this.props.currentNoteId].list;
        tempList.splice(ev.target.getAttribute("data-id"),1);

        var ALLNOTES = this.props.allNotes
        ALLNOTES[this.props.currentNoteId].list = tempList;
        noteService.updateNotes(ALLNOTES);
        this.setState({ notes: ALLNOTES });
        this.props.ln();
        this.setState({ colorModal: 'hide' })
        this.props.history.push(`/note`);

    }

    openColorSelect = () => {
        if (this.state.colorModal === 'show') { this.setState({ colorModal: 'hide' }) };
        if (this.state.colorModal === 'hide') { this.setState({ colorModal: 'show' }) };
    }

    updateColor = (ev) => {
        var ALLNOTES = this.props.allNotes
        ALLNOTES[this.props.currentNoteId].bg = ev.target.getAttribute('value');
        noteService.updateNotes(ALLNOTES);
        this.setState({ notes: ALLNOTES });
        this.props.ln();
        this.setState({ colorModal: 'hide' })
        this.props.history.push(`/note`);
    }

    render() {
        const { note } = this.state;
        return (
            <div className={`note-card ${this.props.content.bg}`}>
                <div className="upper-part">
                    <h3>{!note && this.props.content.title}</h3>
                    <p>{this.props.content.body}</p>
                    <img src={`${this.props.content.url}`}></img>

                    {this.props.content.type === 'list' ?
                        this.props.content.list.map((item, idx) =>
                            <div key={idx} className="list-in-card">
                                <div >{item}</div>
                                <div className="btn" data-id={idx} onClick={this.removeListItem}>X</div>
                            </div>

                        ) : null}
                        <div className="space"></div>
                </div>

                {/* *********  CONTROL BAR: Color, Trash  ************ */}
                <div className="control">
                    <div className="btn" onClick={this.deleteCard}><i className="far fa-trash-alt"></i></div>
                    {/* <div className="btn" onClick={this.openColorSelect}><i className="fas fa-palette"></i></div> */}
                    <div className={`pick ${this.props.content.bg}`} onClick={this.openColorSelect}></div>
                </div>
                <div className={`colorModal ${this.state.colorModal}`}>
                    <div className="pick aaa" value="aaa" onClick={this.updateColor}></div>
                    <div className="pick bbb" value="bbb" onClick={this.updateColor}></div>
                    <div className="pick ccc" value="ccc" onClick={this.updateColor}></div>
                    <div className="pick ddd" value="ddd" onClick={this.updateColor}></div>
                    <div className="pick eee" value="eee" onClick={this.updateColor}></div>
                </div>
            </div> // card
        )
    }
}
