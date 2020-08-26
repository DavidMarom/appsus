export class NoteCard extends React.Component {
    state = {
        note: null,
    }

    componentDidMount() {
        // const { title, body } = this.props.content;
    }



    render() {
        const { note } = this.state
        return (
            // <p>{this.props.content.title}</p>
            <div className="note-card">
                <p>{!note && this.props.content.title}</p>
            </div>

        )
    }
}
