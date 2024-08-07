import {ActionTypes, initialStateChatRed, TodoActions} from "../../types/types";

const initialState:initialStateChatRed = {
    chats:[],
    loading: false,
}

export const chatRed = (state = initialState, action:TodoActions) => {
    switch(action.type){
        case ActionTypes.FETCH_CHATS:
            return {
                ...state,
                loading: true
            }

        case ActionTypes.FETCH_CHATS_SUCCESS:
            return {
                ...state,
                loading: false,
                chats: action.payload
            }



        default:
            return state;
    }
}