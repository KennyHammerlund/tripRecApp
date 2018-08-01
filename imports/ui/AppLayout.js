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
    console.log(`...`);
    console.log(this.props);
    const {history} = this.props;
    return (
      <div className="ui">
        <Navigation history={history} />
        <div className="content">
          <Main />
        </div>
      </div>
    );
  }
}

export default graphql(dashQuery)(AppLayout);
