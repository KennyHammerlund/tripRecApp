import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import Navigation from "./pages/Navigation";
import Main from "./mainRoutes";

const dashQuery = gql`
  {
    user(id: 55) {
      firstName
      lastName
    }
  }
`;
export class AppLayout extends Component {
  render() {
    return (
      <div className="ui">
        <Navigation />
        <div className="content">
          <Main />
        </div>
      </div>
    );
  }
}

export default graphql(dashQuery)(AppLayout);
