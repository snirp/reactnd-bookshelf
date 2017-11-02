import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

export default class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);

    book.shelf = shelf;
    this.setState((state) => ({
      books: (state.books.filter((b) => b.id !== book.id).concat(book))
    }));

  };

  render() {
    // User can add more shelves here
    const shelves = [
      {value: 'none', text: 'none'},
      {value: 'currentlyReading', text: 'Currently Reading'},
      {value: 'wantToRead', text: 'Want to Read'},
      {value: 'read', text: 'Read'}
    ];

    return (
      <div className="app">
        <Route exact path={process.env.PUBLIC_URL + '/'} render={ () => (
          <ListBooks
            books={this.state.books}
            updateBook={this.updateBook}
            shelves={shelves}
          />
        )} />
        <Route path={process.env.PUBLIC_URL + '/search'} render={ () => (
          <SearchBooks
            books={this.state.books}
            updateBook={this.updateBook}
            shelves={shelves}
          />
        )} />
      </div>
    )
  }
}
