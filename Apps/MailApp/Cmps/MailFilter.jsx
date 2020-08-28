export class MailFilter extends React.Component {

    state = {
        filterBy: ''
    }

    componentDidMount() {
        const filterBy = new URLSearchParams(this.props.location.search).get('filterBy') || ''
        this.setState({ filterBy }, () => this.props.onFilter(this.state.filterBy))
    }

    handleChange = ({ target }) => {
        this.setState({ filterBy: target.value }, () => this.props.onFilter(this.state.filterBy))
    }

    render() {
        return <section className="flex space-between">
            <h2>search</h2>
            <input value={ this.state.filterBy } type="text" placeholder="Filter by Name"
                onChange={ this.handleChange } />
        </section >
    }
}