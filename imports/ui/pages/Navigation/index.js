import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import {AUTH_TOKEN} from '../../constants';
import jwt_decode from 'jwt-decode';

const navQuery = gql`
  {
    user(id: 65) {
      lastName
      firstName
      displayName
    }
  }
`;

export class index extends Component {
  constructor(props){
    super(props)
    this.state ={
      displayName: ''
    }
  }

  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    let firstName, lastName;
    if(authToken && authToken != ''){
      var decoded = jwt_decode(authToken);
       firstName = decoded.firstName;
       lastName = decoded.lastName;
    }

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
          <div className="flex flex-fixed black">
            {authToken && (
              <div className="flex">
              {firstName && lastName ? 
                `Logged in as ${firstName} ${lastName}`
               : "Guest View"
              }
              </div>
            )}
          </div>
          <div className="flex flex-fixed">
            {authToken ? (
              <div
                className="ml1 pointer black"
                onClick={() => {
                  localStorage.removeItem(AUTH_TOKEN)
                  this.props.history.push(`/login`)
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


