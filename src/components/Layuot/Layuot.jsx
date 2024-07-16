import React from 'react';
import {Header} from "../Header/Header";
import {Logo} from "../Content/Logo/Logo";
import {Search} from "../Content/Search/Search";
import {Footer} from "../Footer";
import {Outlet} from "react-router-dom";

function Layuot(props) {
    return (
        <div>
            <Header/>
            <div className="container_head">
                <Logo/>
                <Search/>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layuot;