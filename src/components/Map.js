import React from 'react';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googleResults: {},
      apiKey: ''
    }
  }

  render() {
    return (
      <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.googleResults.latitude}%2c%20${this.props.googleResults.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${this.props.apiKey}`}></img>
    )
  }
}
