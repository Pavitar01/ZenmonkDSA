import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function Auth() {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const getWetherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    console.log("value", e.target.value);
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWetherDetails(inputCity);
  };

  return (
    <div className="parent">
      <div className="container">
        <h1 className="heading">Weather App</h1>

        <div className="main">
          <input
            type="text"
            className="input"
            value={inputCity}
            onChange={handleChangeInput}
          />
          <button className="btn" type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
        {Object.keys(data).length > 0 && (
          <div className="main2">
            <div className="img">
           
              <h5 className="city">{data?.name}</h5>
              <h6 className="temp">
                {(data?.main?.temp - 273.15).toFixed(2)}°C
              </h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;
