import React from "react";
import "../styles/game.css";
import Jessie from "../img/jessie.png";
import Ash from "../img/ash.png";

function game() {

    return (
        <div className="Container">
            <h1 className="header" > Vamos Jogar! </h1>
            <img src={Jessie}
                className="jessie" />
            <div className="Team-rocket">
            <h1 className="Team-tilte">Jessie</h1>


            </div>

            <img src={Ash}
                className="Ash" />
            <div className="Team-ash">
            <h1 className="Team-tilte">Ash</h1>
            </div>



        </div>


    );


}

export default game;