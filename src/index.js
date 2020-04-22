import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import './index.css';

import {App, ErrorBoundry, BooksProvider} from './components/index'
import BookService from "./services/bookstore-services";
import store from "./store";

const bookService = new BookService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BooksProvider value={bookService}>
                <Router>
                    <App />
                </Router>
            </BooksProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);