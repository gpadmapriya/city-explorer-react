import React from 'react';

export default class MovieDB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResults: {}
    }
  }

  render() {
    return (
      <React.Fragment>
        <section id="movies">
          <h3>Results from The Movie DB API</h3>
          <ul className="movies-results">
            {this.props.apiResults.movies.map((data, idx) => {
              return (
                <li key={idx}>
                  <p>
                    <span>{data.title}</span> was relased on {data.released_on}.
                  Out of {data.total_votes} total votes, {data.title} has an
                  average vote of {data.average_votes} and a popularity score of{" "}
                    {data.popularity}.
                </p>
                  <img src={data.image_url} alt="" />
                  <p>{data.overview}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </React.Fragment>
    )
  }
}