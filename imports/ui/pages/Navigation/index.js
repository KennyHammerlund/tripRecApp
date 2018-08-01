import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import AUTH_TOKEN from '../../constants';
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
    const authToken = localStorage.getItem(AUTH_TOKEN);
    console.log("------PROPS------");
    console.log(this.props);
    console.log(authToken);
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
          <div className="flex flex-fixed black">
            <div className="fw7 mr1">Hacker News</div>
            <Link to="/" className="ml1 no-underline black">
              new
            </Link>
            {authToken && (
              <div className="flex">
                <div className="ml1">|</div>
                <Link to="/create" className="ml1 no-underline black">
                  submit
                </Link>
              </div>
            )}
          </div>
          <div className="flex flex-fixed">
            {authToken ? (
              <div
                className="ml1 pointer black"
                onClick={() => {
                  localStorage.removeItem(AUTH_TOKEN)
                  this.props.history.push(`/`)
                }}
              >
                logout
              </div>
            ) : (
              <Link to="/login" className="ml1 no-underline black">
                login
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(navQuery)(index);


