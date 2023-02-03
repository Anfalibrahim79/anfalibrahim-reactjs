import { combineReducers } from "redux";
import NewsReducer from './news'
import CounterReducer from "./count";


export default combineReducers({
    NewsReducer,
    CounterReducer
})