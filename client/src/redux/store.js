import {createStore, applyMiddleware} from "redux";
import {tickersReducer} from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


export const store = createStore(tickersReducer, composeWithDevTools(applyMiddleware(thunk)))