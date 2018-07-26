import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const navQuery = gql`
  {
    user(id: 65) {
      lastName
      firstName
    }
  }
`;

export class index extends Component {
  render() {
    console.log("------PROPS------");
    console.log(this.props);
    const {
      data: { user }
    } = this.props;
    return (
      <div className="row top-nav bg-primary">
        <div className="col-xs-6 col-lg-5">
          <h3>TripRec: App</h3>
        </div>
        <div className="col-xs-1 col-lg-2">
          <h5>Create trip</h5>
          </div>
          <div className="col-xs-1 col-lg-2">
          <h5>Current Trip</h5>
          </div>
          <div className="col-xs-1 col-lg-1">
          <h5>My Trips</h5>
          </div>
          <div className="col-xs-1 col-lg-1">
          <h5>Browse trips</h5>
          </div>
          <div className="col-xs-2 col-lg-1">
          <h5>Users Portal</h5>
          <div>
            <h5>{user ? `${user.firstName} ${user.lastName}` : "Guest"}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(navQuery)(index);
