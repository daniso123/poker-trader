import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/home';
import Game from './pages/game';


export default function Routee() {
    return (
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Home/>} />
                <Route path="/game" element={<Game/>} />
               
            </Routes>

        </BrowserRouter>
    );

};