import React, { Component } from "react";
import Navigation from "../Navigation";

import Image from "../../components/Image";

export class index extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Image />
        <h1>This is the Dashboard</h1>
        <h2>52.87.223.21</h2>
      </div>
    );
  }
}

export default index;
