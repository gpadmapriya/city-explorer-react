import React from 'react';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      location: {}
    }
  }

  render() {
    return (
      < img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.location.latitude},${this.state.location.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`
      } ></img >
    )
  }
}
