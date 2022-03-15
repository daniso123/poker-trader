import React from "react";
import "../styles/home.css";
import Photo from "../img/ash.png";
import Pikachu from "../img/pika.png";
import ButtonBar from "../components/buttonBar";
import { Link } from 'react-router-dom';

function home() {
    return (

        <div className="App_bar" >
            <h1 className="form-header" > Pocket Trader </h1>
            <img src={Photo}
                className="photo" />
            <img src={Pikachu}
                className="pikachu" />
            <div className="App_body" >
                <h1 className="font" >
                    Hello player, Pocket Trader é um game baseado em pokémons e o seu objetivo é fazer com que dois jogadores troquei pokémons entre si, cada jogador pode selecionar até 6 pokémons de cada lado.Cada jogador pode fazer qualquer combinação de pokémons!
                </h1>
                <Link style={{ textDecoration: "none" }} to={{ pathname: "/game" }}>
                    <ButtonBar
                        label={'▶ Vamos começar!'}
                    />
                </Link>
            </div>

        </div>

    );
}

export default home;