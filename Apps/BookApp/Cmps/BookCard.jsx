const { Link } = ReactRouterDOM

// THE CARDS ARE LOADED FROM THE BOOKLIST PAGE

export function BookCard({ click, book }) {
    var symbol = ' ';
    if (book.listPrice.currencyCode === 'EUR') { symbol = '€' }
    if (book.listPrice.currencyCode === 'USD') { symbol = '$' }
    if (book.listPrice.currencyCode === 'ILS') { symbol = '₪' }

    return <Link to={`/book/${book.id}`}>
        <section className="book-preview">
            <h3>{book.title}</h3>
            <p> {book.listPrice.amount} {symbol}</p>
            <img src={book.thumbnail} className="th" />
            <div className="new-book">{book.publishedDate <= 2015 ? '' : 'New Book'}</div>
        </section>
    </Link>
}

