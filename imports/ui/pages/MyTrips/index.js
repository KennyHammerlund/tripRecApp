import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Trip from "../../components/trip";
import Token from "../../components/token";
import PageTitle from "../../components/pageTitle";
import Query from "../../graphQueries/myTrips";

export class index extends Component {
  render() {
    const {
      match: { path }
    } = this.props;
    console.log("------MYTRIPROPS------");
    console.log(this.props);

    const { data } = this.props;
    const { viewer } = data;

    return (
      <div>
        <PageTitle className="page-header-custom">
          My Trips
          {viewer && (
            <span className="pull-right text-muted">
              {` Welcome ${viewer.firstName} ${viewer.lastName.charAt(0)}!`}
            </span>
          )}
        </PageTitle>

        <div className="flex flex-column m-b-20">
          <div className="col-lg-8">
            <div className="card-box">
              {/* <h1 className ="text-dark header-title m-t-0 page-header">Your Trips</h1> */}

              <div className="">
                <div className="row">
                  <div className="col-xs-2 trip-linkheader">ID</div>
                  <div className="col-xs-3 trip-linkheader">Title</div>
                  <div className="col-xs-3 trip-linkheader">Comments</div>
                  <div className="col-xs-4 trip-linkheader">Description</div>
                </div>

                {viewer && viewer.trips
                  ? viewer.trips.map(trip => <Trip trip={trip} key={trip.id} />)
                  : null}
              </div>
            </div>
          </div>
        </div>
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
