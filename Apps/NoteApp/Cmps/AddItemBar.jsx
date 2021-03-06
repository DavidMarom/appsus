import { noteService } from "../../../services/note-service.js";
import { MainService } from "../../../services/main-service.js";

export class AddItemBar extends React.Component {

    state = {
        type: 'text',
        field: '',
        placeholder: 'Enter a text note',
        notes: ''
    }

    componentDidMount() {
    }

    updateField = (ev) => {
        this.setState({ field: ev.target.value });
    }

    keyPressed = (ev) => {
        if (ev.keyCode === 13) this.createItem();
    }

    createItem = () => {
        var prepareNote = {
            id: MainService.makeId(5),
            title: this.state.field,
            body: '<Click to edit>',
            bg: 'aaa',
            url: this.state.field,
            type: this.state.type,
            list: ['Item 1', 'Item 2'],
            video: this.state.field
        };

        var prepareNewAllNotes = this.props.allNotes;
        prepareNewAllNotes.unshift(prepareNote);

        noteService.updateNotes(prepareNewAllNotes);

        this.setState({ notes: prepareNewAllNotes });
        this.props.ln();
        this.state.field = '';
        this.props.history.push(`/note`);
    }


    setNoteType = (ev) => {
        this.setState({ type: ev.target.getAttribute('data-id') })
        // this.setState({ field: ev.target.getAttribute('data-id') })

        this.setState({ placeholder: ev.target.getAttribute('data-id') })


        console.log(this.state.type)
    }

    render() {
        // const { itemType } = this.state
        return (
            <div className="add-item-bar">
                <input placeholder={this.state.placeholder} value={this.state.field} onKeyUp={this.keyPressed} onChange={this.updateField} ></input>

                <button className={`${this.state.type==='youtube' ? "type-on" : "type-off"}`}  onClick={this.setNoteType}><i className="fab fa-youtube create-type" data-id="youtube"></i></button>
                <button className={`${this.state.type==='list' ? "type-on" : "type-off"}`}  onClick={this.setNoteType}><i className="fas fa-list-ul create-type" data-id="list"></i></button>
                <button className={`${this.state.type==='image' ? "type-on" : "type-off"}`}  onClick={this.setNoteType}><i className="far fa-image create-type" data-id="image"></i></button>
                <button className={`${this.state.type==='text' ? "type-on" : "type-off"}`}  onClick={this.setNoteType}><i className="far fa-file-alt create-type" data-id="text"></i></button>
            </div>
        )
    }
}
