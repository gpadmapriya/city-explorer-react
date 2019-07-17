import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

//import superagent from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    )
  }
}

export default App;
