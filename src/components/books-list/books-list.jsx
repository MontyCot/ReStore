import React, {useEffect, useState} from "react";
import {withBookStoreServices, BookItem, Spinner} from "../index";


const BooksList = ({bookstoreService}) => {
    const [books, setBooks] = useState({
        books: [],
        loading: true
    });

    useEffect(() => {
        const respo = bookstoreService.getBooks();
        setBooks({
            books: respo,
            loading: false
        })
    },[])

    if (books.loading)
        return <Spinner/>

    return (
        <ul>
            {
                books.books.map(item => (
                    <li key={item.id}>
                        <BookItem item={item}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default withBookStoreServices()(BooksList)