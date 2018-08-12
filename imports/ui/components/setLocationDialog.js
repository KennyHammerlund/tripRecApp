import React, { Component } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { geolocated } from "react-geolocated";
import GeoDialogContent from "./geoDialogContent";
import DialogActions from "@material-ui/core/DialogActions";

class setLocationDialog extends Component {
  toggleOpen = e => {
    const { toggle } = this.props;
    toggle();
  };
  render() {
    const {
      toggle,
      open,
      isGeolocationAvailable,
      isGeolocationEnabled,
      coords,
      userTrip
    } = this.props;

    return (
      <div>
        <Dialog onClose={this.toggleOpen} open={open}>
          <DialogTitle id="simple-dialog-title">
            Check In{" "}
            <span
              onClick={this.toggleOpen}
              className="glyphicons glyphicons-remove close-glyph"
            />
          </DialogTitle>

          {isGeolocationAvailable ? (
            isGeolocationEnabled ? (
              <GeoDialogContent
                coords={coords}
                userTrip={userTrip}
                close={this.toggleOpen}
              />
            ) : (
              <DialogContent>
                <DialogContentText>
                  Your Geolocation is availble but you have disabled it. Please
                  enable location services to continue
                </DialogContentText>
                <DialogActions>
                  <Button onClick={this.toggleOpen} color="primary">
                    Dismiss
                  </Button>
                </DialogActions>
              </DialogContent>
            )
          ) : (
            <DialogContent>
              <DialogContentText>
                Geolocation services are not availible on this device. Please
                find a different device to continue your trip.
              </DialogContentText>
              <DialogActions>
                <Button onClick={this.toggleOpen} color="primary">
                  Dismiss
                </Button>
              </DialogActions>
            </DialogContent>
          )}
        </Dialog>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 10000
})(setLocationDialog);
