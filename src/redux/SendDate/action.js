export const SendDate = (nameOfAdvertisement,image,description,price,location) =>{
    return dispatch => {
        dispatch({
            type: "send/data/start",
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
            .then((data)=>{
                dispatch({type: "send/data/success", payload:data});
            })
    }
}