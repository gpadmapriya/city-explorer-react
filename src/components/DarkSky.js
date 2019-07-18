import React from 'react';

export default class DarkSky extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <h3>Results from the Dark Sky API</h3>
        <ul>

          <li>The forecast for Mon Jan 01 2001 is Partly Cloudy until afternoon.</li>
        </ul>
      </React.Fragment>
    )
  }
}