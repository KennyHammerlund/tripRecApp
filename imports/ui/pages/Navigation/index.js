import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import Token from "../../components/token";
import jwt_decode from "jwt-decode";
import { LinkContainer } from "react-router-bootstrap";
import { ButtonToolbar, MenuItem, DropdownButton } from "react-bootstrap";

import Image from "../../components/Image";

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
  constructor(props) {
    super(props);
    const authToken = Token.get();
    var decoded = authToken && authToken != "" ? jwt_decode(authToken) : null;
    const firstName = decoded ? decoded.firstName : null;
    const lastName = decoded ? decoded.lastName : null;
    this.state = {
      displayName: "",
      loggedIn: authToken && authToken != "",
      firstName,
      lastName
    };
  }

  render() {
    const {
      data: { user },
      history
    } = this.props;

    const { loggedIn, firstName, lastName } = this.state;
    return (
      <div className="row top-nav nav-bg">
        <div className="col-xs-6 col-lg-5">
          <Link to="/" className="m-l-15 banner-name">
            TripRec
          </Link>
        </div>
        <div className="col-xs-3 col-lg-3">
          <h5>
            <Link to="/browsetrips">
              <button
                type="buttonName"
                className="btn btn-warning btn-rounded w-md waves-effect waves-light m-b-5"
              >
                Browse Trips
              </button>
            </Link>
          </h5>
        </div>
        <div className="col-xs-1 col-lg-3">
          <ButtonToolbar>
            <DropdownButton
              bsSize="small"
              title="Login button"
              id="dropdown-size-large"
              title={
                firstName && lastName
                  ? `${firstName} ${lastName.charAt(0)}.`
                  : "Guest"
              }
            >
              {loggedIn && (
                <div>
                  <LinkContainer to="/mytrips">
                    <MenuItem eventKey="1">My Trips</MenuItem>
                  </LinkContainer>
                  <LinkContainer to="/createtrip">
                    <MenuItem eventKey="2">Create Trip</MenuItem>
                  </LinkContainer>
                  <MenuItem divider />
                  <MenuItem eventKey="4">
                    <span
                      onClick={() => {
                        Token.clear();
                        this.props.history.push(`/login`);
                      }}
                    >
                      Logout
                    </span>
                  </MenuItem>
                </div>
              )}
              {!loggedIn && (
                <div>
                  <LinkContainer to="/login">
                    <MenuItem eventKey="5">Login</MenuItem>
                  </LinkContainer>
                </div>
              )}
            </DropdownButton>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default graphql(navQuery)(index);
