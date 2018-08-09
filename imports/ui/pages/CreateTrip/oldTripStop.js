import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { selectSeries } from "../../../../node_modules/@types/async";
class oldTripStop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stop
    };
  }

  render() {
    const { selectChange } = this.props;
    return (
      <div>
        <Select
          value={this.state.stop}
          onChange={selectChange(this.state.stop)}
          inputProps={{
            name: "Location",
            id: "location"
          }}
        >
          <MenuItem value="">
            <em>Select a Location</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
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

export default oldTripStop;
