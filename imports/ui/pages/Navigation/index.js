import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { ButtonToolbar, MenuItem, DropdownButton } from "react-bootstrap";

import Token from "../../components/token";
import Query from "../../graphQueries/viewer";
export class index extends Component {
  constructor(props) {
    super(props);
    const authToken = Token.get();
    this.state = {
      displayName: "",
      loggedIn: authToken && authToken != "",
      navOpen: false
    };
  }

  navSwitch = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  };
  render() {
    const { loggedIn, navOpen } = this.state;
    const { history, data } = this.props;
    const { viewer } = data;
    console.log(this.state);
    return (
      <div className="row top-nav nav-bg">
        <div className="col-xs-6 col-lg-8">
          <Link to="/" className="m-l-15 banner-name">
            TripRec
          </Link>
        </div>
        {/* <div className="col-xs-3 col-lg-3">
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
        </div> */}
        <div className="col-xs-6 col-lg-4 text-right">
          <ButtonToolbar>
            <DropdownButton
              bsSize="large"
              title="Login button"
              id="dropdown-size-large"
              open={navOpen}
              onToggle={this.navSwitch}
              onSelect={this.navSwitch}
              pullRight={true}
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
                  <LinkContainer to="/browsetrips">
                    <MenuItem eventKey="6">Browse Trips</MenuItem>
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
                  <LinkContainer to="/browsetrips">
                    <MenuItem eventKey="7">Browse Trips</MenuItem>
                  </LinkContainer>
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

export default graphql(Query, {
  options: () => ({
    variables: {
      token: Token.get()
    }
  })
})(index);
