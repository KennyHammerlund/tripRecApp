import React, { Component } from "react";
import { graphql } from "react-apollo";
import PageTitle from "../../components/pageTitle";
import Query from "../../graphQueries/trip";
import ActiveTrip from "./activeTrip";
import InActiveTrip from "./inActiveTrip";
import Token from "../../components/token";
export class index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      match,
      data: { userTrip, viewer }
    } = this.props;

    return userTrip ? (
      <div>
        <PageTitle className="page-header-custom">
          View Trip
          {viewer && (
            <span className="pull-right text-muted">
              {` Welcome ${viewer.firstName} ${viewer.lastName.charAt(0)}.!`}
            </span>
          )}
        </PageTitle>
        <div className="row row-center">
          {userTrip.isActive ? (
            <ActiveTrip userTrip={userTrip} viewer={viewer} />
          ) : (
            <InActiveTrip userTrip={userTrip} />
          )}
        </div>
      </div>
    ) : (
      <div>
        <h3>No Data Available</h3>
      </div>
    );
  }
}

export default graphql(Query, {
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.userTripId,
      viewer: Token.get()
    },
    pollInterval: 2500
  })
})(index);
