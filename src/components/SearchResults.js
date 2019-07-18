import React from 'react';
import Yelp from './Yelp';
import DarkSky from './DarkSky';
import MovieDB from './MovieDB';
import EventBrite from './EventBrite';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <DarkSky />
        <Yelp />
        <EventBrite />
        <MovieDB />
      </React.Fragment>
    )
  }
}
