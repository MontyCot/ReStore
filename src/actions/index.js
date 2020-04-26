

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksRequsted = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const onIncrease = (bookId) => {
    return {
        type: 'BOOKS_INCREASE',
        payload: bookId
    }
}

const onDecrease = (bookId) => {
    return {
        type: 'BOOKS_DECREASE',
        payload: bookId
    }
}

const onDelete = (bookId) => {
    return {
        type: 'BOOKS_DELETE',
        payload: bookId
    }
}

const fetchBooks = (bookstoreService, dispatch) => {
    dispatch(booksRequsted())
    bookstoreService.getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(error => dispatch(booksError(error)));
}

export {
    fetchBooks,
    onIncrease,
    onDecrease,
    onDelete
}