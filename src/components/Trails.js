import React from 'react';

export default class Trails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResults: {}
    }
  }

  render() {
    return (
      <React.Fragment>
        <section id="trails">
          <h3>Results from the Hiking Project API</h3>
          <ul className="trails-results">
            {this.props.apiResults.hiking.map((data, idx) => {
              return (
                <li key={idx}>
                  <p>
                    Hike Name: <a href={data.trail_url}>{data.name}</a>, Location:{" "}
                    {data.location}, Distance: {data.length} miles
                </p>
                  <p>
                    On {data.condition_date} at {data.condition_time}, trail
                  conditions were reported as: {data.conditions}
                  </p>
                  <p>
                    This trail has a rating of {data.stars} stars (out of{" "}
                    {data.star_votes} votes)
                </p>
                  <p>{data.summary}</p>
                </li>
              );
            })}
          </ul>

        </section>
      </React.Fragment>
    )
  }
}