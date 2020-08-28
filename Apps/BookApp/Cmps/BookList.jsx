import { BookCard } from "./BookCard.jsx";

export function BookList(props) {

    return <section className="book-list">
        {props.books.map((book) => <BookCard click={props.onSelectBook} key={book.id} book={book} />)}
    </section>
}