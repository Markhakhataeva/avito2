import {ActionTypes, initialStateHome, TodoActions} from "../../../types/types";

const initialState:initialStateHome = {
    cards: [],
    loadingCards: false,
}

export const homeAdvertisementReducer = (state = initialState, action:TodoActions) => {
    switch(action.type){
        case ActionTypes.FETCH_CARDS:
            return {
                ...state,
                loadingCards: true
            }

        case ActionTypes.FETCH_CARDS_SUCCESS:
            return {
                ...state,
                loadingCards: false,
                cards: action.payload
            }



        default:
            return state;
    }
}