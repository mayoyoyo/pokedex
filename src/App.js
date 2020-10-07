import React, { useEffect, useState } from "react";
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

  return (
    <div className="App" style={{ background: `url(${backgroundImage})` }}>
      <div className="header">
        <img className="logo" src="https://i.ibb.co/Vq98tN8/logo.png" />
        <form className="searchbar" onSubmit={handleSubmit}>
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
      </div>

      {data.map((data) => {
        return (
          <div
            className="card"
            style={{ background: `url(${backgroundImage})` }}
          >
            <div className="name">
              #{data.id}. {data.species.name.toUpperCase()}
            </div>

            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <img src={data.sprites["front_default"]} />
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
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
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
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
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
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
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
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
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
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
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
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
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
                    <div className="divTableCell">HEIGHT:</div>
                    <div className="divTableCell"> {data.height * 10}cm</div>
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
