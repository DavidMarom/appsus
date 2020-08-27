import { noteService } from "../../../services/note-service.js";
export class AddItemBar extends React.Component {

    state = {
        type: 'text',
        field: ''
    }

    componentDidMount() {
    }


    updateField = (ev) => {
        this.setState({ field: ev.target.value });
    }

    keyPressed = (ev) => {
        if (ev.keyCode === 13 ) this.props.createItem();

    }


    render() {
        // const { itemType } = this.state
        return (

            <div className="add-item-bar">
                <input placeholder="Tite" value={this.state.field} onKeyUp={this.keyPressed} onChange={this.updateField} ></input>

                <i className="fab fa-youtube create-type"></i>
                <i className="fas fa-list-ul create-type"></i>
                <i className="far fa-image create-type"></i>
                <i className="far fa-file-alt create-type"></i>
            </div>

        )
    }
}
