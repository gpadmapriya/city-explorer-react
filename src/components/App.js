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
      inputText: "",
      location: {}
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ inputText: e.target.value })

  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchForm handleClick={this.handleSubmit}></SearchForm>
        <Map loc={this.state.location} />
        <SearchResults />
      </React.Fragment>
    )
  }
}

export default App;
