import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import Navigation from "./pages/Navigation";
import Main from "./mainRoutes";
import Viewer from "./graphQueries/viewer";
import Token from "./components/token";
export class AppLayout extends Component {
  render() {
    const { history } = this.props;

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

export default AppLayout;
