import React, {FC} from 'react';
import {Services} from "./Services/Services";
import {Recommended} from "./Recommended/Recommended";



export const Lincode:FC = () => {
    return (
        <div>
            <Services/>
            <Recommended/>
        </div>
    );
}
