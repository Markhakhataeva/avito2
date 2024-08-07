
export interface initialStateChatRed {
    chats: any [],
    loading: boolean,
}
export interface initialStateHome {
    cards:any [],
    loadingCards: boolean,
}
export interface initialStateOpen{
    desk: any[],
    title: any[],
    slides:any[],
    phone:any[],
    addresses: any[],
    loading: boolean,
}

export interface initialStateSen{
    sendDate: any [],
    loading: boolean,
}

export enum ActionTypes{
    FETCH_CHATS = "FETCH_CHATS",
    FETCH_CHATS_SUCCESS="FETCH_CHATS_SUCCESS",
    FETCH_CARDS= "FETCH_CARDS",
    FETCH_CARDS_SUCCESS="FETCH_CARDS_SUCCESS",
    FETCH_DESK="FETCH_DESK",
    FETCH_DESK_SUCCESS="FETCH_DESK_SUCCESS",
    FETCH_TITLE="FETCH_TITLE",
    FETCH_TITLE_SUCCESS="FETCH_TITLE_SUCCESS",
    FETCH_SLIDER="FETCH_SLIDER",
    FETCH_SLIDER_SUCCESS="FETCH_SLIDER_SUCCESS",
    FETCH_PHONE="FETCH_PHONE",
    FETCH_PHONE_SUCCESS="FETCH_PHONE_SUCCESS",
    FETCH_ADDRESS="FETCH_ADDRESS",
    FETCH_ADDRESS_SUCCESS="FETCH_ADDRESS_SUCCESS",
    FETCH_SENDDATE="FETCH_SENDDATE",
    FETCH_SENDDATE_SUCCESS="FETCH_SENDDATE_SUCCESS",
}
interface ChatsActionType{
    type:ActionTypes.FETCH_CHATS

}
interface ChatsSuccess{
    type:ActionTypes.FETCH_CHATS_SUCCESS
    payload:any
}

interface CARDSActionType{
    type:ActionTypes.FETCH_CARDS

}
interface CARDSSuccess{
    type:ActionTypes.FETCH_CARDS_SUCCESS
    payload:any
}

interface DESKActionType{
    type:ActionTypes.FETCH_DESK


}
interface DESKSuccess{
    type:ActionTypes.FETCH_DESK_SUCCESS
    payload:any
}

interface TitleActionType{
    type:ActionTypes.FETCH_TITLE


}
interface TitlleSuccess{
    type:ActionTypes.FETCH_TITLE_SUCCESS
    payload:any
}

interface SliserActionType{
    type:ActionTypes.FETCH_SLIDER


}
interface SliserSuccess{
    type:ActionTypes.FETCH_SLIDER_SUCCESS
    payload:any
}

interface PhoneActionType{
    type:ActionTypes.FETCH_PHONE


}
interface PhoneSuccess{
    type:ActionTypes.FETCH_PHONE_SUCCESS
    payload:any
}


interface AddressActionType{
    type:ActionTypes.FETCH_ADDRESS


}
interface AddressSuccess{
    type:ActionTypes.FETCH_ADDRESS_SUCCESS
    payload:any
}


interface SendDateActionType{
    type:ActionTypes.FETCH_SENDDATE


}
interface SendDateSuccess{
    type:ActionTypes.FETCH_SENDDATE_SUCCESS
    payload:any
}
export type TodoActions =
    ChatsActionType
    |ChatsSuccess
    |CARDSActionType
    |CARDSSuccess
    |DESKActionType
    |DESKSuccess
    |TitleActionType
    |TitlleSuccess
    |SliserActionType
    |SliserSuccess
    |PhoneActionType
    |PhoneSuccess
    |AddressActionType
    |AddressSuccess
    |SendDateActionType
    |SendDateSuccess
