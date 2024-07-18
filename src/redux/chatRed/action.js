export const chat = () =>{
    return dispatch => {
        dispatch({
            type: "send/chat/start",
        })
        fetch("http://localhost:8080/chats")
            .then(response => response.json())
            .then((data)=>{
                dispatch({type: "send/chat/success", payload:data});
            })
    }
}