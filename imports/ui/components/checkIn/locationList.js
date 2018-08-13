import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DialogContentText from "@material-ui/core/DialogContentText";

class locationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousLocation: ""
    };
  }

  changeLocation = event => {
    const { setLocationId } = this.props;
    console.log(`Changed: ${this.state.previousLocation}`);
    setLocationId(event.target.value);
    this.setState({
      previousLocation: event.target.value
    });
  };
  render() {
    console.log(this.props);
    const { locations } = this.props;
    return locations ? (
      <div>
        <DialogContentText>
          We have found locations near you. Please select from the dropdown or
          set a new location.
        </DialogContentText>
        <div className="m-t-10">
          <Select
            value={this.state.previousLocation}
            onChange={this.changeLocation}
            // classes={selectClasses}
            displayEmpty={true}
            autoWidth={true}
            value={"new"}
          >
            <MenuItem value="new">New Location</MenuItem>
            {locations.map(location => (
              <MenuItem value={location.id} key={`MI-${location.id}`}>
                {location.name}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    ) : null;
  }
}

export default locationList;
