import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setPokemon(event.target.value.toLowerCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getPokemon();
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
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={handleChange}
            placeholder="enter pokemon name"
          />
        </label>
      </form>
      {data.map((data) => {
        return (
          <div>
            <div className="name">
              #{data.id}. {data.species.name.toUpperCase()}
            </div>
            <div className="imageCell" key="sprite.id">
              <img className="sprite" src={data.sprites["front_default"]} />
            </div>
            <div className="statsCell">
              <div className="row align-items-center">
                <div className={`col-12 col-md-9`}>HP</div>
                <div className={`col-12 col-md-9`}>
                  <div className="progress">
                    <div
                      className="progress-bar "
                      role="progressbar"
                      style={{
                        width: `${data.stats[0].base_stat}%`,
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>{data.stats[0].base_stat}</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className={`col-12 col-md-9`}>Attack</div>
                <div className={`col-12 col-md-9`}>
                  <div className="progress">
                    <div
                      className="progress-bar "
                      role="progressbar"
                      style={{
                        width: `${data.stats[1].base_stat}%`,
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>{data.stats[1].base_stat}</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className={`col-12 col-md-9`}>Defense</div>
                <div className={`col-12 col-md-9`}>
                  <div className="progress">
                    <div
                      className="progress-bar "
                      role="progressbar"
                      style={{
                        width: `${data.stats[2].base_stat}%`,
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>{data.stats[2].base_stat}</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className={`col-12 col-md-9`}>Special Attack</div>
                <div className={`col-12 col-md-9`}>
                  <div className="progress">
                    <div
                      className="progress-bar "
                      role="progressbar"
                      style={{
                        width: `${data.stats[3].base_stat}%`,
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>{data.stats[3].base_stat}</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className={`col-12 col-md-9`}>Special Defense</div>
                <div className={`col-12 col-md-9`}>
                  <div className="progress">
                    <div
                      className="progress-bar "
                      role="progressbar"
                      style={{
                        width: `${data.stats[4].base_stat}%`,
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>{data.stats[4].base_stat}</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className={`col-12 col-md-9`}>Speed</div>
                <div className={`col-12 col-md-9`}>
                  <div className="progress">
                    <div
                      className="progress-bar "
                      role="progressbar"
                      style={{
                        width: `${data.stats[5].base_stat}%`,
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>{data.stats[5].base_stat}</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stat">type: {data.types[0].type.name}</div>
              <div className="stat">height: {data.height * 10}cm</div>
              <div className="stat">weight: {data.weight / 10}kg</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
