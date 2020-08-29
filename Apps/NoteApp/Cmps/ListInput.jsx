import { noteService } from "../../../services/note-service.js";
import { MainService } from "../../../services/main-service.js";
import { Storage } from "../../../services/storage-service.js";

export class ListInput extends React.Component {

    state = {
        field: '',
        placeholder: '',
        allNotes: ''
    }

    componentDidMount() {
        // this.setState({ allNotes: this.props.allNotes });
    }

    updateField = (ev) => {
        this.setState({ field: ev.target.value });
    }

    keyPressed = (ev) => {
        if (ev.keyCode === 13) this.createItem();
    }

    createItem = () => {
        this.state.allNotes = Storage.loadFromStorage('notes');
        this.state.allNotes[this.props.currentNote].list.push(this.state.field);
        // noteService.updateNotes(this.state.allNotes);
        this.setState({ field: '' })
        this.props.uuu(this.state.allNotes);
        this.props.lll();
        // this.props.history.push(`/note`);

    }

    render() {
        return (
            <div className="list-input">
                <input placeholder={this.state.placeholder} value={this.state.field} onKeyUp={this.keyPressed} onChange={this.updateField} ></input>
            </div>
        )
    }
}    