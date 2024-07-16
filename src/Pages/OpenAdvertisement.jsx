import React from 'react';
import {Breadcrumbs} from "../components/Breadcrumbs";
import {TitleAndPrice} from "../components/TitleAndPrice";
import {AdvertisementButtons} from "../components/AdvertisementButtons";
import {Slider} from "../components/Slider";
import {Button} from "../components/Button/Button";
import {Information} from "../components/information";
import Location from "../components/Location/Location";
import {Description} from "../components/Description";
import {AboutHouse} from "../components/AboutHouse";




export const OpenAdvertisement = (props) => {
    return (
        <div className="container">
            <Breadcrumbs/>
            <TitleAndPrice/>
            <AdvertisementButtons/>
            <div className="slider_button">
                <div className="slider_left">
                    <Slider/>
                </div>
               <div className="slider_right">
                   <Button text="8 938 173 03 50" color={"white"} width="300px" padding="15px" fontSize="23px"/>
                   <br/>
                   <Button text="Написать сообщение" color={"white"} width="300px" padding="15px" fontSize="23px"/>
               </div>
                
            </div>
            <Information/>
            <Location/>
            <Description/>
            <AboutHouse/>


        </div>
    );
}
