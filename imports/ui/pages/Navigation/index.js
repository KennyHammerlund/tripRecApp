import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

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
          <h3>
            <Link to="/">TripRec: App</Link>
          </h3>
        </div>
        <div className="col-xs-1 col-lg-2">
          <h5>
            <Link to="/createtrip">Create trip</Link>
          </h5>
        </div>
        <div className="col-xs-1 col-lg-2">
          <h5>
            <Link to="/currenttrip">Current Trip</Link>
          </h5>
        </div>
        <div className="col-xs-1 col-lg-1">
          <h5>
            <Link to="/mytrips">My Trips</Link>
          </h5>
        </div>
        <div className="col-xs-1 col-lg-1">
          <h5>
            <Link to="#">Browse trips</Link>
          </h5>
        </div>
        <div className="col-xs-2 col-lg-1">
          <h5>
            <Link to="/login">Users Portal</Link>
          </h5>
          <div>
            <h5>{user ? `${user.firstName} ${user.lastName}` : "Guest"}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(navQuery)(index);
