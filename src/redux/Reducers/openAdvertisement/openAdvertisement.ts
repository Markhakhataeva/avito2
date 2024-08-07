import {ActionTypes, initialStateOpen, TodoActions} from "../../../types/types";

const initialState:initialStateOpen = {
    desk: [],
    title:[],
    slides:[],
    phone:[],
    addresses:[],
    loading: false,
}

export const openAdvertisement = (state = initialState, action:TodoActions) => {
    switch(action.type){
        case ActionTypes.FETCH_DESK:
            return {
                ...state,
                loading: true
            }

            case ActionTypes.FETCH_DESK_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    desk: action.payload
                }

        case ActionTypes.FETCH_TITLE:
          return {
              ...state,
              loading: true
          }

        case ActionTypes.FETCH_TITLE_SUCCESS:
            return {
                ...state,
                loading: false,
                title: action.payload
            }

        case ActionTypes.FETCH_SLIDER:
            return {
                ...state,
                loading: true
            }

        case ActionTypes.FETCH_SLIDER_SUCCESS:
            return {
                ...state,
                loading: false,
                slides: action.payload
            }
        case ActionTypes.FETCH_PHONE:
            return {
                ...state,
                loading: true
            }

        case ActionTypes.FETCH_PHONE_SUCCESS:
            return {
                ...state,
                loading: false,
                phone: action.payload
            }
        case ActionTypes.FETCH_ADDRESS:
            return {
                ...state,
                loading: true
            }

        case ActionTypes.FETCH_ADDRESS_SUCCESS:
            return {
                ...state,
                loading: false,
                addresses: action.payload
            }


        default:


            return state;
    }
}