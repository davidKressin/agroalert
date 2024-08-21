import {Route, Routes } from "react-router-dom";

import React from 'react'
import { Home, AboutUs, Services } from "../pages";
import { Login} from "../pages/Login";
import { Record } from "../pages/Record";
// import { Home } from "../pages/Home";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="*" element={<Login/>} />
            <Route path="home" element={<Home />} />
            <Route path="record" element={<Record />} />
            {/* // <Route path="about" element={<AboutUs />} /> */}
            {/* // <Route path="services" element={<Services />} /> */}
            <Route path="login" element={<Login />} />
        </Routes>
    )
}
