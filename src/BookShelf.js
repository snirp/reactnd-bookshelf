import React from 'react'
import PropTypes from 'prop-types'

import BookItem from './BookItem'

const BookShelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelf.text}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        { /* Show only the books on the current shelf */ }
        {(props.books.filter((b) => b.shelf === props.shelf.value)).map((book) => (
          <BookItem
            key={book.id}
            book={book}
            updateBook={props.updateBook}
            shelves={props.shelves}
          />
        ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
  shelves: PropTypes.array.isRequired,
  shelf: PropTypes.object.isRequired
};

export default BookShelf
