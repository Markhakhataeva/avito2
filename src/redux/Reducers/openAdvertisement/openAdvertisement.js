
const initialState = {
    desk: [],
    title:[],
    slides:[],
    phone:[],
    addresses:[],
    loading: false,
}

export const openAdvertisement = (state = initialState, action) => {
    switch(action.type){
        case "load/desk/start":
            return {
                ...state,
                loading: true
            }

            case "load/desk/success":
                return {
                    ...state,
                    loading: false,
                    desk: action.payload
                }

        case "load/title/start":
          return {
              ...state,
              loading: true
          }

        case "load/title/success":
            return {
                ...state,
                loading: false,
                title: action.payload
            }

        case"load/sliderImage/start":
            return {
                ...state,
                loading: true
            }

        case "load/sliderImage/success":
            return {
                ...state,
                loading: false,
                slides: action.payload
            }
        case "load/phone/start":
            return {
                ...state,
                loading: true
            }

        case "load/phone/success":
            return {
                ...state,
                loading: false,
                phone: action.payload
            }
        case "load/addresses/start":
            return {
                ...state,
                loading: true
            }

        case "load/addresses/success":
            return {
                ...state,
                loading: false,
                addresses: action.payload
            }


        default:


            return state;
    }
}