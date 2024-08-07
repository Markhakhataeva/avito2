import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from "redux-thunk";
import {createLogger} from 'redux-logger';
import {homeAdvertisementReducer} from "./Reducers/homeAdvertisementReducer/homeAdvertisementReducer";
import {openAdvertisement} from "./Reducers/openAdvertisement/openAdvertisement";
import {sendDateReducer} from "./SendDate/SennReducer";
import {chatRed} from "./chatRed/chatRed";


const logger = createLogger({
    diff:true,
    collapsed:true,
})

const rootReducer = combineReducers({
    cards:homeAdvertisementReducer,
    openCards:openAdvertisement,
    sendDateReducer:sendDateReducer,
    chats:chatRed
})



export const store = createStore(rootReducer,applyMiddleware(thunk,logger));

export type RootState = ReturnType<typeof store.getState>
