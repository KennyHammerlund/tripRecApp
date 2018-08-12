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

  changeLocation = () => {
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
    const selectClasses = {
      marginTop: "10px",
      marginBottom: "20px",
      minWidth: "100px"
    };

    return locations ? (
      <div>
        <DialogContentText>
          We have found locations near you. Please select from the dropdown or
          set a new location.
        </DialogContentText>
        <Select
          value={this.state.previousLocation}
          onChange={this.changeLocation}
          // classes={selectClasses}
          displayEmpty={true}
        >
          <MenuItem value="new">New Location</MenuItem>
          {locations.map(location => (
            <MenuItem value={location.id} key={`MI-${location.id}`}>
              {location.name}
            </MenuItem>
          ))}
        </Select>
      </div>
    ) : null;
  }
}

export default locationList;
