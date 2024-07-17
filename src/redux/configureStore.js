import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from "redux-thunk";
import {createLogger} from "redux-logger/src";
import {homeAdvertisementReducer} from "./Reducers/homeAdvertisementReducer/homeAdvertisementReducer";
import {openAdvertisement} from "./Reducers/openAdvertisement/openAdvertisement";


const logger = createLogger({
    diff:true,
    collapsed:true,
})

const rootReducer = combineReducers({
    cards:homeAdvertisementReducer,
    openCards:openAdvertisement
})



export const store = createStore(rootReducer,applyMiddleware(thunk,logger));