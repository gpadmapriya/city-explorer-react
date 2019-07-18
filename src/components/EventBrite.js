import React from 'react';

export default class EventBrite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <h3>Results from the Eventbrite API</h3>
        <ul>

          <li>

            <a href="">Click here</a>
            <p>Event Date: 01/01/01</p>
            <p>Event summary goes here</p>
          </li>
        </ul>
      </React.Fragment>
    )
  }
}