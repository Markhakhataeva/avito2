import { Lincode } from "./Content/Lincode";
import { OpenAdvertisement } from "../Pages/OpenAdvertisement";
import Message from "../Pages/Message";
import { Route, Routes } from "react-router-dom";
import Layuot from "./Layuot/Layuot";
import AddAdvertisement from "../Pages/add-advertisement";
import Myadvertisement from "../Pages/Myadvertisement";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadCards} from "../redux/Reducers/homeAdvertisementReducer/ action";
import {addresses, desk, loadTitle, phone, sliderImage} from "../redux/Reducers/openAdvertisement/action";
import {chat} from "../redux/chatRed/action"

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCards())
        dispatch(desk())
        dispatch(loadTitle())
        dispatch(sliderImage())
        dispatch(phone())
        dispatch(addresses())
        dispatch(chat())
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
