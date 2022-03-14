import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/home';
import Game from './pages/game';

export default function Routee() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>} exact />
                <Route element={<Game/>} path="/game" />
            </Routes>

        </BrowserRouter>
    );

};