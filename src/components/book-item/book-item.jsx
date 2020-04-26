import React from "react";
import {Link} from "react-router-dom";
import './book-list.css'
import {useDispatch} from "react-redux";
import {onIncrease} from "../../actions";

const BooksList = ({item}) => {
    const dispatch = useDispatch()
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={item.coverImage} alt="cover" />
            </div>
            <div className="book-details">
                <Link to="#" className="book-title">{item.title}</Link>
                <div className="book-author">{item.author}</div>
                <div className="book-price">${item.price}</div>
                <button className="btn btn-info add-to-cart" onClick={() => {dispatch(onIncrease(item.id))}}>Add to cart</button>
            </div>
        </div>
    )
}

export default BooksList