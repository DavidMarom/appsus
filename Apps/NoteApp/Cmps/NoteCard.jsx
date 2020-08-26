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

            <div className={`note-card ${this.props.content.bg}`}>
                <h3>{!note && this.props.content.title}</h3>
                <p>{this.props.content.body}</p>
                <img src={`${this.props.content.url}`}></img>

            </div>

        )
    }
}
