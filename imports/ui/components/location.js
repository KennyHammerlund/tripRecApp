import React, { Component } from "react";
import LargeCardBox from "./largeCardBox";

class location extends Component {
  render() {
    return (
      <LargeCardBox size={10}>
        <PageTitle className="nav-bg">Geo Not Supported</PageTitle>
        <div className="text-center">
          Your Browser Does Not Support Geolocation
        </div>
      </LargeCardBox>
    );
  }
}

export default location;
