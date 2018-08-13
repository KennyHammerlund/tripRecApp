import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import PageTitle from "../../components/pageTitle";
import Image from "../../components/Image";
import Navigation from "../Navigation";
import Token from "../../components/token";
import Query from "../../graphQueries/dashboard";
import CurrentTrips from "../../components/currentTripBox";

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
              {` Welcome ${viewer.firstName} ${viewer.lastName.charAt(0)}!`}
            </span>
          )}
        </PageTitle>
        <CurrentTrips size={4} />
      </div>
    );
  }
}

export default graphql(Query, {
  options: () => ({
    variables: {
      token: Token.get()
    }
  })
})(index);
