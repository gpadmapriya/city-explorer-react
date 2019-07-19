import React from 'react';
import '../App.css';
import Header from './Header.js';
import SearchForm from './SearchForm.js';
import Map from './Map.js';
import SearchResults from './SearchResults';
import superagent from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backEndUrl: '',
      STATIC_MAP_API_KEY: '',
      googleResults: {},
      apiResults: {
        weathers: [],
        yelp: [],
        hiking: [],
        events: [],
        movies: [],

      }
    }
  }

  getApiKey = (value) => {
    this.setState({ STATIC_MAP_API_KEY: value });
    localStorage.setItem('STATIC_MAP_API_KEY', value);

  }

  getBackendUrl = (value) => {
    this.setState({ backEndUrl: value });
  }


  getAllData = async (value) => {
    const googleResults = await superagent.get(this.state.backEndUrl + '/location').query({ data: value })
    this.setState({ googleResults: googleResults.body });

    const weathersResults = await superagent.get(this.state.backEndUrl + '/weather').query({ data: googleResults.body });
    const moviesResults = await superagent.get(this.state.backEndUrl + '/movies').query({ data: googleResults.body });
    const trailsResults = await superagent.get(this.state.backEndUrl + '/trails').query({ data: googleResults.body });
    const yelpResults = await superagent.get(this.state.backEndUrl + '/yelp').query({ data: googleResults.body });

    this.setState({
      apiResults: {
        weathers: weathersResults.body,
        movies: moviesResults.body,
        hiking: trailsResults.body,
        yelp: yelpResults.body
      }
    })

  }
  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.STATIC_MAP_API_KEY &&
          <SearchForm onClick={this.getApiKey} formName="Maps key"></SearchForm>}
        <SearchForm onClick={this.getBackendUrl} formName="Backend Url"></SearchForm>
        <SearchForm onClick={this.getAllData} formName="Search Location"></SearchForm>

        <Map googleResults={this.state.googleResults} apiKey={this.state.STATIC_MAP_API_KEY} />
        <section id="container">
          <SearchResults apiResults={this.state.apiResults} />
        </section>
      </div>


    )
  }
}

export default App;
