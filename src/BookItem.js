import React from 'react'
import PropTypes from 'prop-types'

const BookItem = (props) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${props.book.imageLinks.thumbnail})`
        }}/>
        <div className="book-shelf-changer">
          <select
            value={props.book.shelf}
            onChange={(event) => props.updateBook(props.book, event.target.value)}>

            <option value="disabled" disabled>Move to..</option>
            {props.shelves.map( (shelf) => (
              <option key={shelf.value} value={shelf.value}>{shelf.text}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      { /* Guard against undefined "authors" */ }
      <div className="book-authors">{props.book.authors ? props.book.authors.join(', ') : ''}</div>
    </div>
  </li>
);

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func.isRequired,
  shelves: PropTypes.array.isRequired
};

export default BookItem