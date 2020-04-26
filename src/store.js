import {createStore} from "redux";
import reducer from "./reducers";

const enhancer = (createStore) => (...args) => {
    const store = createStore(...args);
    const originDispatch = store.dispatch;
    store.dispatch = (action) => {
        console.log(action.type);
        return originDispatch(action)
    }

    return store
}


const store = createStore(reducer, enhancer)

export default store