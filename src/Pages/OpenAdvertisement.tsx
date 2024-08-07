import React, {FC} from 'react';
import {Breadcrumbs} from "../components/Breadcrumbs";
import {TitleAndPrice} from "../components/TitleAndPrice";
import {AdvertisementButtons} from "../components/AdvertisementButtons";
import {Slider} from "../components/Slider";
import {Button} from "../components/Button/Button";
import {Location} from "../components/Location";
import {Description} from "../components/Description";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface OpenAdvertisementTypes{
    desk:string ,
    title:string,
    price:number,
    slides:string,
    phone:number,
    addresses:string,
    loading: boolean,
    id:number,
    advertisementId:number,
    largeImage:string,
    image_1:string,
    image_2:string,
    image_3:string,
    image_4:string,
    description:string,
    address:any,
    text?:string | number



}

export const OpenAdvertisement:FC = () => {
    const id:number = parseInt(useParams().id as string)
    const desk=useTypedSelector(state => state.openCards.desk);
    const title=useTypedSelector(state => state.openCards.title);
    const slides=useTypedSelector(state => state.openCards.slides);
    const phone=useTypedSelector(state => state.openCards.phone);
    const addresses=useTypedSelector(state => state.openCards.addresses);


    return (
        <div className="container">
            <Breadcrumbs/>
            {
                title.filter((elem:OpenAdvertisementTypes)=>elem.id ===id).map((item:OpenAdvertisementTypes)=><TitleAndPrice item={item} key={item.id}/>)
            }
            <AdvertisementButtons/>
            <div className="slider_button">
                <div className="slider_left">
                    {
                        slides.filter((elem:OpenAdvertisementTypes)=>elem.id ===id).map((item:OpenAdvertisementTypes)=><Slider item={item} key={item.id}/>)
                    }
                </div>
                <div className="slider_right">
                    {
                        phone.filter((elem:OpenAdvertisementTypes)=>elem.id ===id).map((item:OpenAdvertisementTypes)=> <Button text={item.phone} color={"white"} width="300px" padding="15px" fontSize="23px"/>)
                    }
                    <br/>
                    <Button text="Написать сообщение" color={"white"} width="300px" padding="15px" fontSize="23px" />
                </div>

            </div>

            {
                desk.filter((elem:OpenAdvertisementTypes)=>elem.advertisementId ===id).map((item:OpenAdvertisementTypes)=><Description item={item} key={item.advertisementId}/>)
            }
            {
                addresses.filter((elem:OpenAdvertisementTypes)=>elem.id ===id).map((item:OpenAdvertisementTypes)=><Location item={item} key={item.id}/>)
            }
        </div>
    );
}
