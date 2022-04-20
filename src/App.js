import React from "react";

import Title from "./components/title";
import Search from "./components/search";
import Weather from "./components/weather";

import "./components/style.css";

const api_key = "dbda406cdea79ca91fd53f4c6642cc58";

class App extends React.Component {
  state = {
    city: undefined,
    temperature: undefined,
    description: undefined,
    humidity: undefined,
    windSpeed: undefined,
    error: undefined,
  };

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
    );
    const data = await url.json();
    console.log(data);
    this.setState({
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      error: "",
    });
  };

  render() {
    return (
      <div>
        <br />
        <Title />
        <Search getWeather={this.getWeather} />
        <br />
        <br />
        <Weather
          city={this.state.city}
          temperature={this.state.temperature}
          description={this.state.description}
          humidity={this.state.humidity}
          windSpeed={this.state.windSpeed}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
