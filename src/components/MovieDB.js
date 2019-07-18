import React from 'react';

export default class MovieDB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <h3>Results from the Movie DB API</h3>
        <ul>

          <li>
            <p>Sleepless in Seattle was released on 06/24/1993. Out if 881 votes, it has an average of 6.6 and a popularity score of 8.234</p>
            <img src="https://placehold.it/75x50"></img>
            <p>Lorem ipsum text goes here</p>
          </li>
        </ul>
      </React.Fragment>
    )
  }
}