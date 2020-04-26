import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import reducer from "./reducers";

const logMiddle = () => (next) => (action) => {
    console.log(action.type)
    return next(action)
}


const store = createStore(reducer, applyMiddleware(thunkMiddleware, logMiddle))

export default store