import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'

export default class ListBooks extends React.Component {

  static propTypes = {
    books: PropTypes.array,
    updateBook: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Bookshelves - Roy Prins</h1>
        </div>
        <div className="list-books-content">
          <div>
            { /* Iterate over all the shelves except the 'none' shelf */ }
            {(this.props.shelves.filter((s) => s.value !== 'none' )).map( (shelf, index) =>
              <BookShelf
                key={index}
                shelf={shelf}
                books={this.props.books}
                shelves={this.props.shelves}
                updateBook={this.props.updateBook}
              />
            )}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }

}