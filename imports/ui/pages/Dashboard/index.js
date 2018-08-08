import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import PageTitle from "../../components/pageTitle";
import Image from "../../components/Image";
import Navigation from "../Navigation";
import Token from "../../components/token";
import Query from "../../graphQueries/dashboard";

const token = Token.get();
export class index extends Component {
  render() {
    const {
      data: { viewer }
    } = this.props;
    return (
      <div>
        <PageTitle>
          Dashboard
          {viewer && (
            <span className="pull-right text-muted">
              {` Welcome ${viewer.firstName} ${viewer.lastName}!`}
            </span>
          )}
        </PageTitle>
        <h1>This is the Dashboard</h1>
        <h2>52.87.223.21</h2>
      </div>
    );
  }
}

export default graphql(Query, {
  options: () => ({
    variables: {
      token
    }
  })
})(index);
