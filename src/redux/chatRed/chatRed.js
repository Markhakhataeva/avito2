
const initialState = {
    chats:  [],
    loading: false,
}

export const chatRed = (state = initialState, action) => {
    switch(action.type){
        case "send/chat/start":
            return {
                ...state,
                loading: true
            }

        case "send/chat/success":
            return {
                ...state,
                loading: false,
                chats: action.payload
            }



        default:
            return state;
    }
}