import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "./b01.png";
import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState("bulbasaur");
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setPokemon(event.target.value.toLowerCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getPokemon();
  };

  const getRandom = async () => {
    const dataArray = [];
    try {
      const countUrl = "https://pokeapi.co/api/v2/pokemon-species/?limit=0";
      const countResponse = await axios.get(countUrl);
      const count = countResponse.data.count;
      const index = Math.floor(Math.random() * count) + 1;
      const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
      const response = await axios.get(url);
      dataArray.push(response.data);
      setData(dataArray);
    } catch (error) {
      console.log(error);
    }

    console.log(data);
  };

  const getPokemon = async () => {
    const dataArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await axios.get(url);
      dataArray.push(response.data);
      setData(dataArray);
    } catch (error) {
      console.log(error);
    }

    console.log(data);
  };

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
              placeholder="Enter Pokémon"
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
                  <div className="portrait">
                    <img id="sprite" src={data.sprites["front_default"]} />
                    <br></br>
                    {data.types.map((type) => (
                      <span
                        key={type.type.name}
                        className="badge"
                        style={{
                          backgroundColor: `${TYPE_COLORS[type.type.name]}`,
                          color: "white",
                        }}
                      >
                        {type.type.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-sm">
                  <div className="divTableRow">
                    <div className="divTableCell">HP</div>
                    <div className="divTableCell">
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
                  <div className="divTableRow">
                    <div className="divTableCell">ATT</div>
                    <div className="divTableCell">
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
                  <div className="divTableRow">
                    <div className="divTableCell">DEF</div>
                    <div className="divTableCell">
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
                  <div className="divTableRow">
                    <div className="divTableCell">S.ATT</div>
                    <div className="divTableCell">
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
                  <div className="divTableRow">
                    <div className="divTableCell">S.DEF</div>
                    <div className="divTableCell">
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
                  <div className="divTableRow">
                    <div className="divTableCell">SPD</div>
                    <div className="divTableCell">
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
                <div className="col-sm">
                  <div className="divTableRow">
                    <div className="divTableCell">HEIGHT:</div>
                    <div className="divTableCell"> {data.height * 10}cm</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">WEIGHT:</div>
                    <div className="divTableCell"> {data.weight / 10}kg</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">BASE EXP:</div>
                    <div className="divTableCell"> {data.base_experience}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">ABILITIES:</div>
                    <div className="divTableCell">
                      {" "}
                      {data.abilities.map((ability) => (
                        <span>
                          {ability.ability.name} <br></br>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
