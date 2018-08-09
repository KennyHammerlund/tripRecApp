import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import NewStop from "./newTripStop";
import OldStop from "./oldTripStop";

class stop extends Component {
  state = {
    locationId: null,
    oldTrip: false,
    newTrip: false
  };

  render() {
    const { close, title, startEnd } = this.props;
    const { oldTrip, newTrip } = this.state;
    return (
      <div>
        <Dialog
          open={close}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please use the following fields to set the{" "}
              {startEnd ? startEnd : "next"} stop of your trip
            </DialogContentText>
            {newTrip && <NewStop title="Set a New Stop" />}
            {!oldTrip && <OldStop title="Set a New Stop" />}}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default stop;
// geolocated({
//   positionOptions: {
//     enableHighAccuracy: false
//   },
//   userDecisionTimeout: 5000
// })(index)
