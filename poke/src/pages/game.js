import React, {useEffect, useState} from "react";
import "../styles/game.css";
import Jessie from "../img/jessie.png";
import Ash from "../img/ash.png";

import axios from 'axios';
import Cardpoket from "../components/Cardpoket";

function Game() {

    const [results, setResults] = useState();
  const [apiUrl, setApiUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [blueTeam, setBlueTeam] = useState([]);
  const [redTeam, setRedTeam] = useState([]);
 
    useEffect(() => {
        axios.get(apiUrl).then((res) => {
          setResults(res.data.results);
          setNextPage(res.data.next);
          setPrevPage(res.data.previous);
        });
      }, [apiUrl]);

      function handleBlue(pokemon) {
        if (blueTeam.length === 6){
          alert('Só é possível adicionar até 6 pokemons')
        }
        else{
          setBlueTeam([...blueTeam, pokemon])
        }
      }
      function handleRed(pokemon) {
        if (redTeam.length === 6){
          alert('Só é possível adicionar até 6 pokemons')
        }
        else{
          setRedTeam([...redTeam, pokemon])
        }
      }

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
            <div className="Pokedex">
                {results &&
                    results.map((pokemon, idx) => (
                        <Cardpoket
                            type={'default'}
                            url={pokemon.url}
                            key={idx}
                            onClickLeft={handleBlue}
                            onClickRight={handleRed}
                        />
                    ))}
            </div>
            



        </div>


    );


}

export default Game;