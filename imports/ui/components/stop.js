import React, { Component } from "react";

class stop extends Component {
  render() {
    const {
      stop: { name, lat, long, comments }
    } = this.props;
    return <div>{name}</div>;
  }
}

export default stop;
