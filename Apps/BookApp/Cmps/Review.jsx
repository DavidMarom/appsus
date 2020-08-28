const { Link, withRouter } = ReactRouterDOM
// THIS IS CALLED FROM THE BOOK PAGE
import { bookService } from "../services/book-service.js";
export class Review extends React.Component {
    state = {
        book: '',
        review: ''
    }

    onInputChange = (ev) => {
        this.setState({ review: ev.target.value })
    }

    updateBookReview = () => {
        var tmpBook = this.state.book;
        tmpBook['review'].push(this.state.review);
        this.setState({ book: tmpBook });
        bookService.save(tmpBook);
        this.setState({ review: '' });
        this.props.history.push(`/book/${this.state.book.id}`)
    }

    componentDidMount() {
        this.setState({ book: this.props.book });
    }

    render() {
        return <div>
            <input name="book" value={this.state.review} placeholder="Review" type="text" onChange={this.onInputChange} />
            <button onClick={this.updateBookReview}>Update</button>
        </div>
    }
}