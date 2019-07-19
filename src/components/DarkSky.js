import React from 'react';

export default class DarkSky extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResults: {}
    }
  }

  render() {
    return (
      <React.Fragment>
        <section id="weather">
          <h3>Results from the Dark Sky API</h3>
          <ul>
            {this.props.apiResults.weathers.map(data => {
              return (
                <li>
                  The forecast for {data.time} is: {data.forecast}
                </li>
              );
            })}
          </ul>
        </section>
      </React.Fragment>
    )
  }
}