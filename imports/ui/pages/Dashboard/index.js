import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import Image from "../../components/Image";
import Navigation from "../Navigation";

export class index extends Component {
  render() {
    return (
      <div>
      <h1>This is the Dashboard</h1>
        <h2>52.87.223.21</h2>
      </div>
    );
  }
}

export default index;
