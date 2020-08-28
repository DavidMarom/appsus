// const { Link } = ReactRouterDOM
const { NavLink, withRouter } = ReactRouterDOM

import { bookService } from "../services/book-service.js";
import { Review } from "../cmps/Review.jsx";

// THIS IS THE BOOK ** PAGE **

export class BookDetails extends React.Component {
    state = {
        book: null
    }

    componentDidMount() {
        const bookId = this.props.match.params.bookId
        bookService.getById(bookId)
            .then(book => this.setState({ book }))
    }

    render() {
        const { book } = this.state
        if (!book) return <div>Loading....</div>
        return (
            <div className='book-page'>

                <div className="img-detail-container">
                    <div className="left">
                        <img src={book.thumbnail} className="" />
                    </div>

                    <div className="book-d-right">
                        <h1>{book.title}</h1><p>{book.publishedDate}</p>
                        <p>{book.description}</p>
                        <div className="h-space"></div>
                        <div className="new-book">{book.publishedDate <= 2015 ? '' : '*New Book'}</div>
                        <h2>Reviews:</h2>
                        {book.review.map((rrr, idx) => { return <p key={idx}>   {rrr}</p> })}
                        <Review history={this.props.history} book={book} />
                    </div>
                </div>



            </div>
        )
    }
}
