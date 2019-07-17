import React from 'react';

function Results() {
  return (
    <React.Fragment>
      <section>
        <h3>Results from the Dark Sky API</h3>
        <li>The forecast for Mon Jan 01 2001 is Partly Cloudy until afternoon.</li>
      </section>
      <section>
        <h3>Results from the Yelp API</h3>
        <li>
          <a href="">Click here</a>
          <p>The average rating is 4 out of 5 and the average cost is ** out of 4</p>
          <img src="https://placehold.it/75x50"></img>
        </li>
      </section>
      <section>
        <li>
          <h3>Results from the Eventbrite API</h3>
          <a href="">Click here</a>
          <p>Event Date: 01/01/01</p>
          <p>Event summary goes here</p>
        </li>
      </section>
      <section>
        <h3>Results from the Movie DB API</h3>
        <li>
          <p>Sleepless in Seattle was released on 06/24/1993. Out if 881 votes, it has an average of 6.6 and a popularity score of 8.234</p>
          <img src="https://placehold.it/75x50"></img>
          <p>Lorem ipsum text goes here</p>
        </li>
      </section>
      <section>
        <h3>Results from the Hiking Project API</h3>
        <li>
          <p>Hike name, location and distance goes here</p>
          <p>Trail Condition</p>
          <p>Trail Rating</p>
          <p>Summary</p>
        </li>
      </section>
    </React.Fragment>
  )
}

export default Results;