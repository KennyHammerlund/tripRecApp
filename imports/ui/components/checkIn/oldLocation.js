import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { Mutation } from "react-apollo";

import CheckIn from "../../graphQueries/checkIn";
import LocationList from "./locationList";

class oldLocation extends Component {
  _confirm = data => {
    console.log("complete");
  };

  render() {
    const {
      data: { findNearbyLocations },
      swap
    } = this.props;
    console.log("------PROPS------");
    console.log(this.props);
    return (
      <div>
        <LocationList locations={findNearbyLocations} />

        <DialogActions>
          <Button onClick={swap} color="primary">
            Set New Location
          </Button>
          <Mutation
            mutation={CheckIn}
            // variables={{ locationId, comments, userTripId }}
            onCompleted={data => this._confirm(data)}
          >
            {mutation => (
              <Button
                variant="contained"
                size="small"
                onClick={mutation}
                color="primary"
              >
                Check In
              </Button>
            )}
          </Mutation>
        </DialogActions>
      </div>
    );
  }
}

export default oldLocation;
