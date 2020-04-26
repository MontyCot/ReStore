
const initialState = {
    order: {
        cart: [],
        total: 0,
        totalCount: 0
    }
}

const updateCartItem = (cartItem = {}, book , reduce) => {
    const {id = book.id, price = book.price, title = book.title, count = 0} = cartItem;

    return {
        id,
        title,
        count: count + reduce,
        total:  price * (count + reduce)
    }
}

const updateCartItems = (state, book, idx) => {

    if(idx === -1) {
        return [...state, book]
    }

    if(book.count === 0) {
        return [
            ...state.slice(0, idx),
            ...state.slice(idx + 1)
        ]
    }

    return [
        ...state.slice(0, idx),
        book,
        ...state.slice(idx + 1)
    ]

}

const updateOrder = (state, action, reduce) => {
    const book = state.booksList.books.find(item => item.id === action.payload);
    const cartBookIndex = state.order.cart.findIndex( item => item.id === action.payload);
    const cartBook = state.order.cart[cartBookIndex]
    const newBook = updateCartItem(cartBook, book, reduce);

    return {
        ...state.order,
        cart: updateCartItems(state.order.cart, newBook, cartBookIndex),
        total: state.order.total + (book.price * reduce),
        totalCount: state.order.totalCount + reduce
    }
}

export const fetchOrder = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_INCREASE':
            return  updateOrder(state, action, +1)

        case 'BOOKS_DECREASE':
            return  updateOrder(state, action, -1)

        case 'BOOKS_DELETE':
            const cartBookIndex = state.order.cart.findIndex( item => item.id === action.payload);
            const cartBook = state.order.cart[cartBookIndex]
            return  updateOrder(state, action, -cartBook.count)

        default:
            return state.order
    }
}

