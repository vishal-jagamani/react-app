import React from "react";
import './style.css';

class Weather extends React.Component {
    render() {
        return (
            <div className="card-body">
            <h2 className="card-title city h1">Weather in {this.props.city} </h2>
            <hr/><div className="temp text-light h4">Temperature: <span>{this.props.temperature}</span> °C</div>
            <div className="description text-light h4">Description: <span>{this.props.description}</span></div>
            <div className="humudity text-light h4">Humidity: <span>{this.props.humidity}%</span></div>    
            <div className="wind text-light h4">Wind Speed: <span>{this.props.windSpeed}</span> km/hr</div>
            </div>
        );
    }
}

export default Weather;