# MyReads Project Submission

This is my submission for the first assessment project for Udacity's 
React Fundamentals course.

To get started right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Overview of the app
```bash
BooksApp  # Holds the shelved books in state
├── ListBooks
│   └── BookShelf
│       └── BookItem
└── SearchBooks  # Holds the search qeury and results in state
    └── BookItem
```

## Development decisions & additional features

* All information regarding shelves is maintained in a single array 
named `shelves` inside the `BooksApp` component and is passed down to 
the relevant components. This makes it easy to add shelves if the need
arises: simply add an array element.
* The add (or search) page will display only those books that are not on 
any of the shelves yet. This also means that books that are added to 
shelves from this page, will be automatically removed from the search 
results.