export const desk = () => {
    return(dispatch) => {
        dispatch({type: "load/desk/start"})

        fetch("http://localhost:8080/descriptionAdvertisement")

            .then(r => r.json())
            .then((data)=>{
                dispatch({type: "load/desk/success", payload:data})
            })
    }
}
export const loadTitle = () => {
    return(dispatch) => {
        dispatch({type: "load/title/start"})


        fetch("http://localhost:8080/title")

            .then(r => r.json())
            .then((data)=>{
                dispatch({type: "load/title/success", payload:data})
            })
    }
}
export const sliderImage = () => {
    return(dispatch) => {
        dispatch({type: "load/sliderImage/start"})


        fetch("http://localhost:8080/sliderImage")

            .then(r => r.json())
            .then((data)=>{
                dispatch({type: "load/sliderImage/success", payload:data})
            })
    }
}
export const phone = () => {
    return(dispatch) => {
        dispatch({type: "load/phone/start"})


        fetch("http://localhost:8080/phone")
            .then(r => r.json())
            .then((data)=>{
                dispatch({type: "load/phone/success", payload:data})
            })
    }
}
export const addresses = () => {
    return(dispatch) => {
        dispatch({type: "load/addresses/start"})

        fetch("http://localhost:8080/addresses")
            .then(r => r.json())
            .then((data)=>{
                dispatch({type: "load/addresses/success", payload:data})
            })
    }
}
