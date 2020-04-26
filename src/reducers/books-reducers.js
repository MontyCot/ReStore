const initialState = {
    booksList: {
        error: null,
        loading: true,
        books: [],
    }
}

export const fetchBooks = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state.booksList,
                loading: false,
                books: action.payload
            }

        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state.booksList,
                loading: true,
                books: []
            }

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state.booksList,
                loading: false,
                error: action.payload,
            }

        default:
            return state.booksList
    }
}