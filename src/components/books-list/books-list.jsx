import React, {useContext, useEffect} from "react";
import './books-list.css'
import {BooksProvider, BookItem, Spinner, ErrorIndicator} from "../index";
import {useSelector, useDispatch} from "react-redux";
import {fetchBooks} from "../../actions";


const BooksListContainer = () => {
    const bookstoreService = useContext(BooksProvider);
    const state = useSelector(s => ({
        books: s.books,
        error: s.error,
        loading: s.loading
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        fetchBooks(bookstoreService, dispatch);
    }, [bookstoreService, dispatch])

    if (state.loading)
        return <Spinner/>

    if (state.error)
        return <ErrorIndicator/>

    return <BooksList books={state.books}/>
}

const BooksList = ({books}) => {
    return (
        <ul className="books-list">
            {
                books.map(item => (
                    <li key={item.id}>
                        <BookItem item={item}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default BooksListContainer