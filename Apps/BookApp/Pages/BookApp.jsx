// *************************************
// *            NOTES PAGE             *
// *************************************
// const Router = ReactRouterDOM.HashRouter
const { Link, Switch, Route, NavLink, withRouter } = ReactRouterDOM



import { bookService } from '../../../services/book-service.js'
import { BookList } from "../cmps/BookList.jsx";
import { Filter } from "../cmps/Filter.jsx";

export class BookApp extends React.Component {
    state = {
        books: [],
        filter: null,
        filterBy: '',
        selectedBook: null
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks() {
        bookService.getBooks()
            .then(books => {
                this.setState({ books })
            })
    }

    onInputChange = (ev) => {
        this.setState(
            {
                bookToAdd: { ...this.state.petToAdd, [ev.target.name]: ev.target.value }
            }
        )
    }

    onSelectBook = (key) => {
        this.setState({ selectedBook: key })
    }

    setFilter = (filterBy) => {
        this.setState({ filterBy })
    }

    booksToShow() {
        const books = this.state.books.filter(book => book.title.toLowerCase().includes(this.state.filterBy.toLowerCase()))
        return books;
    }

    render() {
        const { selectedBook } = this.state
        const books = this.booksToShow();
        return (
            <section>
                <div className="row">
                   

                            {!selectedBook && <Filter onSetFilter={this.setFilter} />}
                            <NavLink activeClassName='active-nav' className="nav-btn" to="/book/add">OR: Add a book from the on-line library</NavLink>
                       

                </div>
                {this.state.books.length && <BookList onSelectBook={this.onSelectBook} books={books} />}
            </section>
        )
    }
}