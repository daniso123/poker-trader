import React, { useEffect, useState } from "react";
import "../styles/game.css";
import Jessie from "../img/jessie.png";
import Ash from "../img/ash.png";
import axios from 'axios';
import Cardpoket from "../components/Cardpoket";
import { CgPokemon } from "react-icons/cg";
function Game() {

  const [results, setResults] = useState();
  const [apiUrl] = useState("https://pokeapi.co/api/v2/pokemon");
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

  function cancelViolet(id) {
    let aux = false;
    let array = [];

    for (let i = 0; i < violetTeam.length; i++) {
      if (violetTeam[i].id === id && !aux) {
        aux = true;
      }
      else {
        array.push(violetTeam[i])
      }
    };
    setVioletTeam(array);
  }
  function cancelRed(id) {
    let aux = false;
    let array = [];

    for (let i = 0; i < redTeam.length; i++) {
      if (redTeam[i].id === id && !aux) {
        aux = true;
      }
      else {
        array.push(redTeam[i])
      }
    };
    setRedTeam(array);
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
      alert('Os lados precisam term pelo menos 1 card');
    }
    else {
      if (totalScore > 50) {

        alert('A troca não é justa, pois a quantidade de expêriencia sobre a quantidade de lutas em ambos os lados de todos os pokémons selecionados não são próximos!')
        setTrade({
          scoreViolet: violetScore,
          scoreRed: redScore,
          scoreTotal: totalScore,
          tradeStatus: 'Troca Injusta'
        });
      }
      else {

        alert('A troca é justa, pois a quantidade de expêriencia sobre a quantidade de lutas em ambos os lados de todos os pokémons selecionados são próximos!');
        setTrade({
          scoreViolet: violetScore,
          scoreRed: redScore,
          scoreTotal: totalScore,
          tradeStatus: 'Troca Justa '
        });
      }
    }

  }

  return (
    <div className="Container">
      <h1 className="header" > Vamos Jogar! </h1>
      <img src={Jessie}
        className="jessie" />
      <fieldset className="Team-jessie">
        <legend className="Team-tilte-jessie">JESSIE</legend>
        {violetTeam &&
          violetTeam.map((poke, idx) => (
            <Cardpoket
              type={'chosen'}
              pokemon={poke}
              key={idx}
              onClickCancel={() => cancelViolet(poke.id)}
            />
          ))}


      </fieldset>

      <img src={Ash}
        className="Ash" />
      <fieldset className="Team-ash">
        <legend className="Team-tilte-ash">ASH</legend>
        {redTeam &&
          redTeam.map((poke, idx) => (
            <Cardpoket
              type={'chosen'}
              pokemon={poke}
              key={idx}
              onClickCancel={() => cancelRed(poke.id)}
            />
          ))}
      </fieldset>

      <div  onClick={() => replacement()}>
        <CgPokemon className="icon"/>
      </div>




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