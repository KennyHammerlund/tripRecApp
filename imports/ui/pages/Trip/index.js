import React, { Component } from "react";
import { graphql } from "react-apollo";
import PageTitle from "../../components/pageTitle";
import Query from "../../graphQueries/trip";
import ActiveTrip from "./activeTrip";
import InActiveTrip from "./inActiveTrip";
export class index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      match,
      data: { userTrip }
    } = this.props;
    const {
      params: { userTripId }
    } = match;

    const { viewer, data } = this.props;
    const { user } = data;

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
            <ActiveTrip userTrip={userTrip} />
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
      id: ownProps.match.params.userTripId
    },
    pollInterval: 2500
  })
})(index);
