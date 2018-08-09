import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class newTripStop extends Component {
  render() {
    return (
      <div>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="name"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Description"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="comments"
          label="Comments"
          type="text"
          fullWidth
        />
      </div>
    );
  }
}

export default newTripStop;
