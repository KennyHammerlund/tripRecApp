import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import Image from "../../components/Image";
import Navigation from "../Navigation";

const dashQuery = gql`
  {
    user(id: 55) {
      firstName
      lastName
    }
  }
`;

export class index extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1>This is the Dashboard</h1>
        <h2>52.87.223.21</h2>
      </div>
    );
  }
}

export default graphql(dashQuery)(index);
