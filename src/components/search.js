import React from "react";
import './style.css';

class Search extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" className="form-control search" name="city" placeholder="Enter city name..." />
                    <button className="btn btn-lg btn-primary button">Search</button>
                </form>
            </div>
        );
    }
}

export default Search;