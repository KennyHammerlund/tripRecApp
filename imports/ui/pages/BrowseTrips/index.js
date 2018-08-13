import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Maintrip from "../../components/maintrip";
import PageTitle from "../../components/pageTitle";
import Token from "../../components/token";
import Query from "../../graphQueries/browseTrips";

const token = Token.get();
export class index extends Component {
  render() {
    console.log("------BROWSETRIPPROPS------");
    console.log(this.props);
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
        {allTrips ? (
          <div className="flex flex-column m-15">
            <div className="card-box m-l-15 m-r-15">
              {allTrips
                ? allTrips.map(trip => (
                    <Maintrip trip={trip} key={`T${trip.id}`} />
                  ))
                : null}
            </div>
          </div>
        ) : (
          <div className="m-l-20 cardBox">Loading . . .</div>
        )}
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
