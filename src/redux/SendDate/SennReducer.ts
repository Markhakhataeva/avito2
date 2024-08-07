import {ActionTypes, initialStateSen, TodoActions} from "../../types/types";

const initialState:initialStateSen = {
    sendDate:  [],
    loading: false,
}

export const sendDateReducer = (state = initialState, action:TodoActions) => {
    switch(action.type){
        case ActionTypes.FETCH_SENDDATE:
            return {
                ...state,
                loading: true
            }

        case ActionTypes.FETCH_SENDDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                sendDate: action.payload
            }



        default:
            return state;
    }
}