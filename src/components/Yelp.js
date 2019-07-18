import React from 'react';

export default class Yelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <h3>Results from the Yelp API</h3>
        <ul>

          <li>
            <a href="">Click here</a>
            <p>The average rating is 4 out of 5 and the average cost is ** out of 4</p>
            <img src="https://placehold.it/75x50"></img>
          </li>
        </ul>
      </React.Fragment>
    )
  }
}