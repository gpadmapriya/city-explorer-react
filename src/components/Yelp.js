import React from 'react';

export default class Yelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResults: {}
    }
  }

  render() {
    return (
      <React.Fragment>
        <section id="yelp">
          <h3>Results from the Yelp API</h3>
          <ul className="yelp-results">
            {this.props.apiResults.yelp.map((data, idx) => {
              return (
                <li key={idx}>
                  <a href={data.url}>{data.name}</a>
                  <p>
                    The average rating is {data.rating} out of 5 and the average
                  cost is {data.price} out of 4
                </p>
                  <img src={data.image_url} alt="" />
                </li>
              );
            })}
          </ul>
        </section>
      </React.Fragment>
    )
  }
}