import React from "react";
import {withBookStoreServices} from "../index";

const BooksList = ({item: {author, title}}) => {
    return (
        <>
            <hr/>
            <span>{author}</span>
            <br/>
            {title}
            <hr/>
            <br/>
            <br/>
        </>
    )
}

export default withBookStoreServices()(BooksList)