// *************************************
// *            ADD BOOK               *
// *************************************

import eventBus from "../../../services/event-bus-service.js";
import { bookService } from "../../../services/book-service.js";
// import { axios } from "../../../lib/axios.js";

export class BookAdd extends React.Component {
    state = {
        searchStr: '',
        results: []
    }

    componentDidMount() {
    }

    onInputChange = (ev) => {
        this.setState({ searchStr: ev.target.value })
        axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${ev.target.value}`)
            .then(res => res.data)
            .then(books => { this.setState({ results: books.items }) })
    }

    onClick = (ev) => {
        // event.preventDefault();
        const ID = ev.target.getAttribute("id");
        const CB = this.state.results[ID];
        var newBook =
        {
            id: null,
            title: CB.volumeInfo.title,
            subtitle: '',
            authors: CB.volumeInfo.authors,
            publishedDate: CB.volumeInfo.publishedDate,
            description: CB.volumeInfo.description,
            pageCount: CB.volumeInfo.pageCount,
            review: [],
            categories: [],
            thumbnail: CB.volumeInfo.imageLinks.thumbnail,
            language: CB.volumeInfo.language,
            listPrice: {
                amount: 100,
                currencyCode: 'AAA',
                isOnSale: true
            }
        }

        bookService.save(newBook);
        eventBus.emit('notify', { msg: 'Book was added', type: 'good' })


    }

    render() {
        return (
            <section>
                <p>Add Book</p>
                <input name="search" value={this.state.searchStr} onChange={this.onInputChange}></input>

                {this.state.results.map((result, idx) => <div className="add-books-list" key={idx}>
                    <p >{result.volumeInfo.title}</p>
                    <button id={idx} onClick={this.onClick}> + </button>
                </div>)}

            </section>
        )
    }
}