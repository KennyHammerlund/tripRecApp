import React, { Component } from "react";
import Moment from "moment";
import Stop from "../../components/stop.js";
import LargeCardBox from "../../components/largeCardBox";

class inActiveTrip extends Component {
  render() {
    const { userTrip } = this.props;
    return (
      <LargeCardBox>
        <div className="tripview-spacer">
          <div className="tripview-custom">Description:</div>
          <div className="tripview-indent">{userTrip.trip.description}</div>
        </div>
        <div className="tripview-spacer">
          <div className="tripview-custom">Created By:</div>
          <div className="tripview-indent">{`${
            userTrip.user.firstName
          } ${userTrip.user.lastName.charAt(0)}`}</div>
        </div>
        <div className="tripview-spacer">
          <div className="tripview-custom">Date:</div>
          <div className="tripview-indent">
            {Moment(userTrip.date).format("MMM Do")}
          </div>
        </div>
        <div className="tripview-spacer">
          <div className="tripview-custom">Comments:</div>
          <div className="tripview-indent">{userTrip.comments}</div>
        </div>
        Trip Stops:
        <div>
          {userTrip.trip &&
            userTrip.trip.stops.length > 0 &&
            userTrip.trip.stops.map(stop => <Stop stop={stop} key={stop.id} />)}
        </div>
      </LargeCardBox>
    );
  }
}

export default inActiveTrip;
