import React from "react";
import {BooksConsumer} from '../../index'

export default () => (Wrapped) => {
    return (props) => {
        return (
            <BooksConsumer>
                {
                    (service) => {
                        return (
                            <Wrapped {...props}
                                     bookstoreService = {service} />
                        )
                    }
                }
            </BooksConsumer>
        )
    }
}

