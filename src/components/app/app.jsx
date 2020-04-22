import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import {CartPage, HomePage} from "../index";


const App = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/card">Card</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/card">
                    <CartPage />
                </Route>
            </Switch>
        </>
    )
}

export default App