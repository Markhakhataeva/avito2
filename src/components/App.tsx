import { Lincode } from "./Content/Lincode";
import { OpenAdvertisement } from "../Pages/OpenAdvertisement";
import {Message} from "../Pages/Message";
import { Route, Routes } from "react-router-dom";
import {Layuot} from "./Layuot/Layuot";
import {AddAdvertisement} from "../Pages/add-advertisement";
import {Myadvertisement} from "../Pages/Myadvertisement";
import {FC, useEffect} from "react";
import {useActions} from "../hooks/useActions";

export const App:FC = () => {
    const {loadCards,desk,loadTitle,sliderImage,addresses,chat,phone} = useActions()

    useEffect(():void => {
        loadCards();
        desk();
        (loadTitle());
        (sliderImage());
        (phone());
        (addresses());
        (chat())
    }, []);


    return (
    <Routes>
      <Route path="/" element={<Layuot />}>
          <Route path="/" element={<Lincode />} />
          <Route path="/advertisement/:id?" element={<OpenAdvertisement />} />
          <Route path="/message" element={<Message />} />
          <Route path="/add/advertisement" element={<AddAdvertisement />} />
          <Route path="/my/advertisement" element={<Myadvertisement />} />
      </Route>
    </Routes>
  );
};
