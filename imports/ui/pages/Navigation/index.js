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
        <div className="col-xs-8 col-lg-10">
          <h3>TripRec: App</h3>
        </div>
        <div className="col-xs-4 col-lg-2">
          <h4>Users Portal</h4>
          <div>
            <h5>{user ? `${user.firstName} ${user.lastName}` : "Guest"}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(navQuery)(index);
