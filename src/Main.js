import React from 'react';
import Search from './Search';
import Map from './Map';
import Results from './Results';

function Main() {
  return (
    <React.Fragment>
      <Search />
      <Map />
      <Results />
    </React.Fragment>
  )
}

export default Main;