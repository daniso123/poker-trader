import React, { useEffect, useState } from "react";
import "../styles/game.css";
import Jessie from "../img/jessie.png";
import Ash from "../img/ash.png";

import axios from 'axios';
import Cardpoket from "../components/Cardpoket";
import { CgPokemon } from "react-icons/cg";

function Game() {

  const [results, setResults] = useState();
  const [apiUrl, setApiUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [fairTrade, setFairTrade] = useState();
  const [unfairTrade, setUnFairTrade] = useState();
  const [violetTeam, setVioletTeam] = useState([]);
  const [redTeam, setRedTeam] = useState([]);
  const [trade, setTrade] = useState({
    scoreViolet: 0,
    scoreRed: 0,
    scoreTotal: 0,
    tradeStatus: 'Status'
  });

  useEffect(() => {
    axios.get(apiUrl).then((res) => {
      setResults(res.data.results);
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
    });
  }, [apiUrl]);

  function handleViolet(pokemon) {
    if (violetTeam.length === 6) {
      alert('Só é possível adicionar até 6 pokemons')
    }
    else {
      setVioletTeam([...violetTeam, pokemon])
    }
  }
  function handleRed(pokemon) {
    if (redTeam.length === 6) {
      alert('Só é possível adicionar até 6 pokemons')
    }
    else {
      setRedTeam([...redTeam, pokemon])
    }
  }
  function replacement() {
    let violetScore = 0;
    let redScore = 0;
    for (let i = 0; i < violetTeam.length; i++) {
      violetScore = violetScore + violetTeam[i].base_experience
    };
    for (let i = 0; i < redTeam.length; i++) {
      redScore = redScore + redTeam[i].base_experience
    };

    let totalScore = Math.abs(violetScore - redScore);
    if (violetScore === 0 || redScore === 0) {
      alert('Os lados precisam term pelo menos 1 card')
    }
    else {
      if (totalScore > 50) {
        setUnFairTrade('A troca não é justa, pois a quantidade de expêriencia sobre a quantidade de lutas em ambos os lados de todos os pokémons selecionados não são próximos!');
        setTrade({
          scoreBlue: violetScore,
          scoreRed: redScore,
          scoreTotal: totalScore,
          tradeStatus: 'A troca não é justa, pois a quantidade de expêriencia sobre a quantidade de lutas em ambos os lados de todos os pokémons selecionados não são próximos!'
        });
      }
      else {
        setFairTrade('A troca é justa, pois a quantidade de expêriencia sobre a quantidade de lutas em ambos os lados de todos os pokémons selecionados são próximos!');
        setTrade({
          scoreBlue: violetScore,
          scoreRed: redScore,
          scoreTotal: totalScore,
          tradeStatus: 'A troca é justa, pois a quantidade de expêriencia sobre a quantidade de lutas em ambos os lados de todos os pokémons selecionados são próximos!'
        });
      }
    }

  }

  return (
    <div className="Container">
      <h1 className="header" > Vamos Jogar! </h1>
      <img src={Jessie}
        className="jessie" />
      <div className="Team-rocket">
        <h1 className="Team-tilte">Jessie</h1>
        {violetTeam &&
          violetTeam.map((poke, idx) => (
            <Cardpoket
              type={'chosen'}
              pokemon={poke}
              key={idx}
              
            />
          ))}


      </div>

      <img src={Ash}
        className="Ash" />
      <div className="Team-ash">
        <h1 className="Team-tilte">Ash</h1>
        {redTeam &&
          redTeam.map((poke, idx) => (
            <Cardpoket
              type={'chosen'}
              pokemon={poke}
              key={idx}
              
            />
          ))}
      </div>


      <CgPokemon className="exchanges" onClick={() => replacement()} />

      <div className="Pokedex">
        {results &&
          results.map((pokemon, index) => (
            <Cardpoket
              type={'default'}
              url={pokemon.url}
              key={index}
              onClickLeft={handleViolet}
              onClickRight={handleRed}
            />
          ))}
      </div>




    </div>


  );


}

export default Game;