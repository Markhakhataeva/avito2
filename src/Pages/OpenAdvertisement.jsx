import React from 'react';
import {Breadcrumbs} from "../components/Breadcrumbs";
import {TitleAndPrice} from "../components/TitleAndPrice";
import {AdvertisementButtons} from "../components/AdvertisementButtons";
import {Slider} from "../components/Slider";
import {Button} from "../components/Button/Button";
import Location from "../components/Location/Location";
import {Description} from "../components/Description";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";



export const OpenAdvertisement = (props) => {
    const id=parseInt(useParams().id)
    const desk=useSelector(state => state.openCards.desk);
    const title=useSelector(state => state.openCards.title);
    const slides=useSelector(state => state.openCards.slides);
    const phone=useSelector(state => state.openCards.phone);
    const addresses=useSelector(state => state.openCards.addresses);


    return (
        <div className="container">
            <Breadcrumbs/>
            {
                title.filter((elem)=>elem.id ===id).map((item)=><TitleAndPrice item={item} key={item.id}/>)
            }
            <AdvertisementButtons/>
            <div className="slider_button">
                <div className="slider_left">
                    {
                        slides.filter((elem)=>elem.id ===id).map((item)=><Slider item={item} key={item.id}/>)
                    }
                </div>
                <div className="slider_right">
                    {
                        phone.filter((elem)=>elem.id ===id).map((item)=> <Button text={item.phone} color={"white"} width="300px" padding="15px" fontSize="23px"/>)
                    }
                    <br/>
                    <Button text="Написать сообщение" color={"white"} width="300px" padding="15px" fontSize="23px"/>
                </div>

            </div>

            {
                desk.filter((elem)=>elem.advertisementId ===id).map((item)=><Description item={item} key={item.advertisementId}/>)
            }
            {
                addresses.filter((elem)=>elem.id ===id).map((item)=><Location item={item} key={item.id}/>)
            }
        </div>
    );
}
