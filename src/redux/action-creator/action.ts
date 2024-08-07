import {ActionTypes, TodoActions} from "../../types/types";
import {Dispatch} from "react";

export const chat = () => {
    return (dispatch:Dispatch<TodoActions>):void => {
        dispatch({
            type: ActionTypes.FETCH_CHATS,
        })
        fetch("http://localhost:8080/chats")
            .then(response => response.json())
            .then((json):void=>{
                dispatch({type: ActionTypes.FETCH_CHATS_SUCCESS, payload:json});
            })
    }
}


export const loadCards = () => {
    return( dispatch:Dispatch<TodoActions>):void => {
        dispatch({type: ActionTypes.FETCH_CARDS});


        fetch("http://localhost:8080/advertisement")
            .then(response => response.json())
            .then((data):void=>{
                dispatch({type:ActionTypes.FETCH_CARDS_SUCCESS, payload:data});
            })
    }
}

export const desk = () => {
    return(dispatch:Dispatch<TodoActions>):void => {
        dispatch({type: ActionTypes.FETCH_DESK})

        fetch("http://localhost:8080/descriptionAdvertisement")

            .then(r => r.json())
            .then((data):void=>{
                dispatch({type: ActionTypes.FETCH_DESK_SUCCESS, payload:data})
            })
    }
}
export const loadTitle = () => {
    return(dispatch:Dispatch<TodoActions>):void => {
        dispatch({type: ActionTypes.FETCH_TITLE})


        fetch("http://localhost:8080/title")

            .then(r => r.json())
            .then((data):void=>{
                dispatch({type:ActionTypes.FETCH_TITLE_SUCCESS, payload:data})
            })
    }
}
export const sliderImage = () => {
    return(dispatch:Dispatch<TodoActions>):void => {
        dispatch({type: ActionTypes.FETCH_SLIDER})


        fetch("http://localhost:8080/sliderImage")

            .then(r => r.json())
            .then((data):void=>{
                dispatch({type: ActionTypes.FETCH_SLIDER_SUCCESS, payload:data})
            })
    }
}
export const phone = () => {
    return(dispatch:Dispatch<TodoActions>):void => {
        dispatch({type:ActionTypes.FETCH_PHONE})


        fetch("http://localhost:8080/phone")
            .then(r => r.json())
            .then((data):void=>{
                dispatch({type: ActionTypes.FETCH_PHONE_SUCCESS, payload:data})
            })
    }
}
export const addresses = () => {
    return(dispatch:Dispatch<TodoActions>) => {
        dispatch({type: ActionTypes.FETCH_ADDRESS})

        fetch("http://localhost:8080/addresses")
            .then(r => r.json())
            .then((data):void=>{
                dispatch({type: ActionTypes.FETCH_ADDRESS_SUCCESS, payload:data})
            })
    }
}
export const SendDate = (nameOfAdvertisement: string, image: string, description: string, price: string, location: string) =>{
    return (dispatch:Dispatch<TodoActions>):void => {
        dispatch({
            type: ActionTypes.FETCH_SENDDATE,
        })
        fetch("http://localhost:8080/advertisement",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    title:nameOfAdvertisement,
                    price:price,
                    image:image,
                    description:description,
                    date:"19.08.24",
                    location:location
                })
            }
        )
            .then(response => response.json())
            .then((data):void=>{
                dispatch({type: ActionTypes.FETCH_SENDDATE_SUCCESS, payload:data});
            })
    }
}