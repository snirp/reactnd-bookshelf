import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import BookItem from './BookItem'
import * as BooksAPI from './BooksAPI'


export default class SearchBooks extends React.Component {
  state = {
    results: [],
    query: ''
  };

  static propTypes = {
    books: PropTypes.array,
    updateBook: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired
  };

  updateQuery = (query) => {
    this.setState({ query: query });

    const q = query.trim();
    // Prevent empty query from being sent
    if (q) {
      BooksAPI.search(q, 20).then((reply) => {
        if (reply.error) {
          // No results
          this.setState({ results: [] })
        } else {
          this.setState({
            // User expects to add a new book, so only show books not yet on shelves
            results: reply.filter(r => !(this.props.books.map(b => b.id)).includes(r.id))
          })
        }
      })
    } else {
      this.setState({ results: [] })
    }
  };

  // Catch the updateBook method and remove the book that changed:
  // it has been added and should not longer be shown in the add page
  updateBookSearch = (book, shelf) => {
    this.setState( prev => ({
      results: prev.results.filter( b => b.id !== book.id )
    }));
    this.props.updateBook(book, shelf);
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.length > 0 && (this.state.results.map((book) => (
              <BookItem
                key={book.id}
                book={book}
                updateBook={this.updateBookSearch}
                shelves={this.props.shelves}
              />
            )))}
          </ol>
        </div>
      </div>
    )
  }
}
