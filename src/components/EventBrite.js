import React from 'react';

export default class EventBrite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResults: {}
    }
  }

  render() {
    return (
      <React.Fragment>
        <h3>Results from the Eventbrite API</h3>
        <ul>
          {this.props.apiResults.events.map(data => {
            return (
              <li>
                <a href={data.link}>{data.name}</a>
                <p>Event Date: {data.event_date}</p>
                <p>{data.summary}</p>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    )
  }
}