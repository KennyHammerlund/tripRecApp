import React, { Component } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import GoogleMapReact from "google-map-react";
import DialogContentText from "@material-ui/core/DialogContentText";
import { Mutation } from "react-apollo";
import TextField from "@material-ui/core/TextField";

import MAP_TOKEN from "../../constants";
import CreateLocation from "../../graphQueries/createLocation";
import { Fetching, Error } from "../gqlState";
import LocationList from "./locationList";
import CheckInMutation from "./checkIn";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class oldLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      name: "",
      comments: "",
      checkin: false
    };
  }

  _confirm = data => {
    console.log(`location Stored ${data.AddLocation}`);
    if (!data.AddLocation) {
      console.log("Error Storing Primary Location");
    }

    this.setState({
      locationId: data.AddLocation,
      checkin: true && data.AddLocation,
      success: false
    });
  };

  end = () => {
    console.log("this is the end");
    this.setState({
      checkin: false,
      success: true
    });
  };

  render() {
    const { swap, coords, userTrip } = this.props;
    const payload = {
      lat: coords ? coords.latitude : 0,
      long: coords ? coords.longitude : 0,
      name: this.state.name,
      description: this.state.description
    };

    const checkinPayload = {
      userTripId: userTrip.id,
      comments: this.state.comments,
      locationId: this.state.locationId,
      tripId: userTrip.trip ? userTrip.trip.id : null,
      newTrip: true
    };

    const mapOptions = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };
    return (
      <div>
        {this.state.checkin && (
          <CheckInMutation {...checkinPayload} end={this.end} />
        )}
        {this.state.success && (
          <div className="alert text-center alert-danger">
            You have saved this stop
          </div>
        )}
        {coords && (
          <div className="map-container">
            <GoogleMapReact
              bootstrapURLKeys={{ key: MAP_TOKEN }}
              defaultCenter={mapOptions.center}
              defaultZoom={mapOptions.zoom}
            >
              <AnyReactComponent
                lat={coords.latitude}
                lng={coords.longitude}
                text={"Check In Here"}
              />
            </GoogleMapReact>
          </div>
        )}

        <TextField
          id="locationName"
          label="Name"
          value={this.state.name}
          placeholder="Add Location Name"
          onChange={e => this.setState({ name: e.target.value })}
          margin="normal"
          fullWidth={true}
        />
        <TextField
          id="description"
          label="Description"
          value={this.state.description}
          placeholder="Add Location Description"
          onChange={e => this.setState({ description: e.target.value })}
          margin="normal"
          fullWidth={true}
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
          {
            <Button onClick={swap} color="primary">
              Nearby Locations
            </Button>
          }
          <Mutation
            mutation={CreateLocation}
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
                {`Create & Check In`}
              </Button>
            )}
          </Mutation>
        </DialogActions>
      </div>
    );
  }
}

export default oldLocation;
