import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Maintrip from "../../components/maintrip";
import PageTitle from "../../components/pageTitle";
import Token from "../../components/token";
import Query from "../../graphQueries/browseTrips";
import LargeCardBox from "../../components/largeCardBox";
const token = Token.get();
export class index extends Component {
  render() {
    const {
      viewer,
      data: { allTrips }
    } = this.props;

    return (
      <div>
        <PageTitle className="page-header-custom">
          Browse Trips
          {viewer && (
            <span className="pull-right text-muted">
              {` Welcome ${viewer.firstName} ${viewer.lastName.charAt(0)}.`}
            </span>
          )}
        </PageTitle>
        <LargeCardBox padding={0} margin={15} size={12}>
          {allTrips ? (
            allTrips.map(trip => <Maintrip trip={trip} key={`T${trip.id}`} />)
          ) : (
            <div className="p-20">Loading . . .</div>
          )}
        </LargeCardBox>
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
