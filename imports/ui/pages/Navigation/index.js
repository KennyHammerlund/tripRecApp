import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import Token from "../../components/token";
import jwt_decode from "jwt-decode";
import { LinkContainer } from "react-router-bootstrap";
import { ButtonToolbar, MenuItem, DropdownButton } from "react-bootstrap";

import Image from "../../components/Image";

export class index extends Component {
  constructor(props) {
    super(props);
    const authToken = Token.get();
    this.state = {
      displayName: "",
      loggedIn: authToken && authToken != ""
    };
  }

  render() {
    console.log(this.props);

    const { loggedIn } = this.state;
    const { history, viewer } = this.props;

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
                viewer
                  ? `${viewer.firstName} ${viewer.lastName.charAt(0)}.`
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

export default index;
