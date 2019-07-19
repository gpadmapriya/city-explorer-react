import React from 'react';
import Yelp from './Yelp';
import DarkSky from './DarkSky';
import MovieDB from './MovieDB';
import EventBrite from './EventBrite';
import Trails from './Trails';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResults: {}
    }
  }

  render() {
    return (
      <React.Fragment>
        <DarkSky apiResults={this.props.apiResults} />

        <Yelp apiResults={this.props.apiResults} />
        {/*<EventBrite apiResults={this.props.apiResults} />*/}
        <MovieDB apiResults={this.props.apiResults} />
        <Trails apiResults={this.props.apiResults} />
      </React.Fragment>
    )
  }
}
