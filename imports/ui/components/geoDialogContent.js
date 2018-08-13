import React, { Component } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import { graphql } from "react-apollo";

import OldLocation from "./checkIn/oldLocation";
import NewLocation from "./checkIn/newLocation";
import locationQuery from "../graphQueries/searchLocation";
import { Fetching, Error } from "./gqlState";

class geoDialogContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationNearby: true
    };
  }
  swap = () => {
    this.setState({
      locationNearby: !this.state.locationNearby
    });
  };

  render() {
    const { data, coords } = this.props;
    const { locationNearby } = this.state;
    const isData =
      data && data.findNearbyLocations && data.findNearbyLocations.length > 0;

    return (
      <DialogContent>
        {locationNearby && isData ? (
          <OldLocation data={data} swap={this.swap} {...this.props} />
        ) : (
          <NewLocation swap={this.swap} {...this.props} />
        )}
      </DialogContent>
    );
  }
}

export default graphql(locationQuery, {
  options: props => {
    return {
      variables: {
        lat: props.coords ? props.coords.latitude : 0,
        long: props.coords ? props.coords.longitude : 0
      }
    };
  }
})(geoDialogContent);
