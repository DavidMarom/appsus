import { noteService } from "../../../services/note-service.js";
import { MainService } from "../../../services/main-service.js";

export class AddItemBar extends React.Component {

    state = {
        type: 'text',
        field: '',
        notes:''
    }

    componentDidMount() {
    }

    updateField = (ev) => {
        this.setState({ field: ev.target.value });
    }

    keyPressed = (ev) => {
        if (ev.keyCode === 13 ) this.createItem();
    }

    createItem = () => {
        var prepareNote = {
            id: MainService.makeId(5),
            title: this.state.field,
            body: '<Click to edit>',
            bg: 'aaa',
            url: '',
            type: this.state.type ,
            list: ['item 1', 'item2'],
            video: ''
        };

        var prepareNewAllNotes = this.props.allNotes;
        prepareNewAllNotes.push(prepareNote);

        noteService.updateNotes(prepareNewAllNotes);
        
        this.setState({ notes: prepareNewAllNotes});
        this.props.ln();
        this.state.field='';
        this.props.history.push(`/note`);
    }
    
    render() {
        // const { itemType } = this.state
        return (
            <div className="add-item-bar">
                <input placeholder="Add a new note" value={this.state.field} onKeyUp={this.keyPressed} onChange={this.updateField} ></input>
                <i className="fab fa-youtube create-type"></i>
                <i className="fas fa-list-ul create-type"></i>
                <i className="far fa-image create-type"></i>
                <i className="far fa-file-alt create-type"></i>
            </div>
        )
    }
}
