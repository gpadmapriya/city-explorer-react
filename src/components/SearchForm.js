import React from 'react';
import superagent from 'superagent';
require('dotenv').config();

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      location: {}
    }
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ inputText: e.target.value })

    /*superagent.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.inputText}&key=${process.env.REACT_APP_GEOCODE_API_KEY}`).then(response => {
      console.log(response.body.results);
      this.setState({ results: response.body.results })
    })*/
    superagent
      .get("https://city-explorer-backend.herokuapp.com/location")
      .query({ data: this.state.inputText })
      .then(response => {
        console.log(response.body);
        this.setState({ location: response.body })
      })

  }

  render() {
    return (
      <form>
        <input
          value={this.state.inputText}
          onChange={event => {
            this.setState({ inputText: event.target.value });
          }}
        />
        <button onClick={this.handleClick}>Explore!</button>
      </form>
    )
  }
}
export default SearchForm;