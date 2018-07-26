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
          <h3><a href="/">TripRec: App</a></h3>
        </div>
        <div className="col-xs-1 col-lg-2">
          <h5><a href="#">Create trip</a></h5>
          </div>
          <div className="col-xs-1 col-lg-2">
          <h5><a href="#">Current Trip</a></h5>
          </div>
          <div className="col-xs-1 col-lg-1">
          <h5><a href="#">My Trips</a></h5>
          </div>
          <div className="col-xs-1 col-lg-1">
          <h5><a href="#">Browse trips</a></h5>
          </div>
          <div className="col-xs-2 col-lg-1">
          <h5><a href="/login">Users Portal</a></h5>
          <div>
            <h5>{user ? `${user.firstName} ${user.lastName}` : "Guest"}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(navQuery)(index);
