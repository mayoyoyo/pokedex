import React, { useState } from "react";
import axios from "axios"; // import axios for handling HTTP requests
import "bootstrap/dist/css/bootstrap.min.css"; // import BootStrap
import backgroundImage from "./b01.png"; // import background image
import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState(""); // Pokemon name field
  const [data, setData] = useState([]); // Pokemon data obtained from PokeAPI

  // function updating the value of query
  const handleChange = (event) => {
    // API accepts Pokemon name in lowercase, so convert to lowercase
    setPokemon(event.target.value.toLowerCase());
  };

  // function obtaining the current value of query
  const handleSubmit = (event) => {
    event.preventDefault();
    getPokemon();
  };

  // function obtaining Pokemon data from query
  const getPokemon = async () => {
    const dataArray = []; // array storing data
    try {
      // make HTTP request to PokeAPI
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await axios.get(url);
      dataArray.push(response.data);
      setData(dataArray); // update global data field with new data
    } catch (error) {
      console.log(error);
    }
  };

  // function for obtaining data for random Pokemon
  const getRandom = async () => {
    const dataArray = [];
    try {
      // obtain total number of Pokemon in API
      const countUrl = "https://pokeapi.co/api/v2/pokemon-species/?limit=0";
      const countResponse = await axios.get(countUrl);
      const count = countResponse.data.count;

      // generate random number from 1 to count
      const index = Math.floor(Math.random() * count) + 1;
      // search and obtain relevant Pokemon data using index
      const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
      const response = await axios.get(url);
      dataArray.push(response.data);
      setData(dataArray);
    } catch (error) {
      console.log(error);
    }
  };

  // dictionary of Pokemon types mapped to hexcode color
  // (colors obtained using color picker on image from
  // https://bulbapedia.bulbagarden.net/wiki/Type)
  const TYPE_COLORS = {
    normal: "#a8a878",
    fighting: "#c03028",
    flying: "#a890f0",
    poison: "#a040a0",
    ground: "#e0c069",
    rock: "#b8a039",
    bug: "#a8b920",
    ghost: "#705899",
    steel: "#b8b8d0",
    fire: "#f08031",
    water: "#6890f0",
    grass: "#78c850",
    electric: "#f8d030",
    psychic: "#f95888",
    ice: "#98d8d8",
    dragon: "#7138f8",
    dark: "#715849",
    fairy: "#ee99ad",
  };

  return (
    // set background picture
    <div className="App" style={{ background: `url(${backgroundImage})` }}>
      <div className="header">
        <button type="button" className="btn-primary" onClick={getRandom}>
          Random Pokémon!
        </button>
        <img className="logo" src="https://i.ibb.co/Vq98tN8/logo.png" />
        <form className="searchbar" onSubmit={handleSubmit}>
          <label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              placeholder="Search Pokémon"
            />
          </label>
        </form>
      </div>

      {data.map((data) => {
        return (
          <div
            className="card"
            style={{ background: `url(${backgroundImage})` }}
          >
            <div
              className="name"
              style={{ borderColor: `${TYPE_COLORS[data.types[0].type.name]}` }}
            >
              #{data.id}. {data.species.name.toUpperCase()}
            </div>

            <div
              className="container"
              style={{
                backgroundColor: `${TYPE_COLORS[data.types[0].type.name]}`,
              }}
            >
              <div className="row">
                <div className="col-sm">
                  <div className="roundedBox">
                    <img id="sprite" src={data.sprites["front_default"]} />
                    <br></br>
                    {
                      // map for all Pokemon types
                      data.types.map((type) => (
                        <span
                          key={type.type.name}
                          className="badge"
                          style={{
                            // assign first type color as background color for badge
                            backgroundColor: `${TYPE_COLORS[type.type.name]}`,
                            color: "white",
                          }}
                        >
                          {type.type.name}
                        </span>
                      ))
                    }
                  </div>
                </div>

                <div className="col-sm">
                  <div className="roundedBox">
                    <div className="tableRow">
                      <div className="tableCell">HP</div>
                      <div className="tableCell">
                        {" "}
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${data.stats[0].base_stat}%`,
                            }}
                          >
                            <small>{data.stats[0].base_stat}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tableRow">
                      <div className="tableCell">ATT</div>
                      <div className="tableCell">
                        {" "}
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${data.stats[1].base_stat}%`,
                            }}
                          >
                            <small>{data.stats[1].base_stat}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tableRow">
                      <div className="tableCell">DEF</div>
                      <div className="tableCell">
                        {" "}
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${data.stats[2].base_stat}%`,
                            }}
                          >
                            <small>{data.stats[2].base_stat}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tableRow">
                      <div className="tableCell">S.ATT</div>
                      <div className="tableCell">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${data.stats[3].base_stat}%`,
                            }}
                          >
                            <small>{data.stats[3].base_stat}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tableRow">
                      <div className="tableCell">S.DEF</div>
                      <div className="tableCell">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${data.stats[4].base_stat}%`,
                            }}
                          >
                            <small>{data.stats[4].base_stat}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tableRow">
                      <div className="tableCell">SPD</div>
                      <div className="tableCell">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${data.stats[5].base_stat}%`,
                            }}
                          >
                            <small>{data.stats[5].base_stat}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="roundedBox">
                    <div className="tableRow">
                      <div className="tableCell">HEIGHT</div>
                      <div className="tableCell"> {data.height * 10}cm</div>
                    </div>
                    <div className="tableRow">
                      <div className="tableCell">WEIGHT</div>
                      <div className="tableCell"> {data.weight / 10}kg</div>
                    </div>
                    <div className="tableRow">
                      <div className="tableCell2"> BASE EXP</div>
                      <div className="tableCell"> {data.base_experience}</div>
                    </div>
                    <div className="tableRow">
                      <div className="tableCell2">ABILITIES</div>
                      <div className="tableCell2">
                        {" "}
                        {
                          // map for all abilities
                          data.abilities.map((ability) => (
                            <span>
                              ·{ability.ability.name} <br></br>
                            </span>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="card" style={{ background: `url(${backgroundImage})` }}>
        {" "}
        <div className="credits">
          <div className="col-sm">Developed by Hanson Kang </div>
          <div className="col-sm">
            Powered by{" "}
            <a href="https://reactjs.org/" target="_blank">
              React
            </a>{" "}
            and{" "}
            <a href="https://pokeapi.co/" target="_blank">
              PokéAPI
            </a>
          </div>
          <div className="col-sm">
            <a href="https://github.com/mayoyoyo/pokedex" target="_blank">
              Source code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
