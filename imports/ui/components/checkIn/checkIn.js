import React, { Component } from "react";
import { graphql } from "react-apollo";
import CheckInMutation from "../../graphQueries/checkIn";

class checkIn extends Component {
  componentDidMount() {
    this.props.end();
  }
  render() {
    console.log("------MutationPROPS------");
    console.log(this.props);
    this.props.mutate();
    return <div className="success-notice">You have saved this stop</div>;
  }
}

export default graphql(CheckInMutation, {
  options: props => ({
    variables: {
      userTripId: props.userTripId,
      comments: props.comments,
      locationId: props.locationId,
      tripId: props.tripId,
      newTrip: props.newTrip
    }
  })
})(checkIn);
