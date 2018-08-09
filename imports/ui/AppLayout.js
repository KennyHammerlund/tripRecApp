import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import Navigation from "./pages/Navigation";
import Main from "./mainRoutes";
import Viewer from "./graphQueries/viewer";
import Token from "./components/token";

const token = Token.get();
export class AppLayout extends Component {
  render() {
    const { history, data } = this.props;
    const { viewer } = data;
    return (
      <div className="ui">
        <Navigation history={history} viewer={viewer} />
        <div className="content">
          <Main viewer={viewer} />
        </div>
      </div>
    );
  }
}

export default graphql(Viewer, {
  options: () => ({
    variables: {
      token
    }
  })
})(AppLayout);
