import {fetchOrder} from "./order-reducer";
import {fetchBooks} from "./books-reducers";

const reducer = (state, action) => {
    return {
        booksList: fetchBooks(state, action),
        order: fetchOrder(state, action)
    }
};

export default reducer