import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { Mutation } from "react-apollo";
import TextField from "@material-ui/core/TextField";

import CheckIn from "../../graphQueries/checkIn";
import LocationList from "./locationList";
import Confirmation from "./checkIn";
class oldLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationId: null,
      comments: "",
      tripId: null,
      confirmation: false
    };
  }

  _confirm = data => {
    console.log(`Mutation Complete ${data}`);
    this.setState({
      confirmation: data
    });
  };
  setLocationId = id => {
    this.setState({ locationId: id });
  };
  render() {
    const { confirmation } = this.state;
    const {
      data: { findNearbyLocations },
      swap,
      userTrip
    } = this.props;
    let tripId = userTrip && userTrip.trip ? userTrip.trip.id : null;

    const payload = {
      ...this.state,
      userTripId: userTrip && userTrip.id ? userTrip.id : null,
      tripId: tripId,
      newTrip: false
    };

    return (
      <div>
        {confirmation && <div>You have saved the trip</div>}
        <LocationList
          locations={findNearbyLocations}
          setLocationId={this.setLocationId}
        />

        <TextField
          id="comments"
          label="Comments"
          value={this.state.comments}
          placeholder="Tell us a bit about your experience at this location"
          onChange={e => this.setState({ comments: e.target.value })}
          margin="normal"
          fullWidth={true}
        />

        <DialogActions>
          <Button onClick={swap} color="primary">
            Set New Location
          </Button>

          <Mutation
            mutation={CheckIn}
            variables={payload}
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
