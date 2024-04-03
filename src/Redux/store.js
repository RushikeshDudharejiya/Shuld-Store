import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./Reducer"
import { preducer } from './Product/ProductReducer'
import thunk from "redux-thunk";


const mainreducer=combineReducers({
    reducer,
    preducer
});
export const store = legacy_createStore(mainreducer,applyMiddleware(thunk));