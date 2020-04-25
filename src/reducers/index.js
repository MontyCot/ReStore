const initialState = {
    error: null,
    loading: true,
    books: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                loading: false,
                books: action.payload
            }

        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                loading: true,
                books: []
            }

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state
    }
};

export default reducer