import React, { Component } from "react";

class stop extends Component {
  render() {
    const {
      stop: {
        location: { name, lat, long },
        order
      }
    } = this.props;
    return <div>{name}</div>;
  }
}

export default stop;
