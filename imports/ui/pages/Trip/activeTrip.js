import React, { Component } from "react";
import LargeCardBox from "../../components/largeCardBox";
import Notice from "../../components/errorBox";
import Moment from "moment";
import Stop from "../../components/stop.js";
import Button from "@material-ui/core/Button";

class activeTrip extends Component {
  render() {
    const { userTrip } = this.props;
    return userTrip ? (
      <LargeCardBox size={12} receipt={"m-l-10 m-r-10"}>
        <Notice>
          <h3 className="text-danger m-t-5">Active Trip</h3>
        </Notice>

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
        <div>
          Trip Stops:
          <div>
            {userTrip.trip &&
              userTrip.trip.stops.length > 0 &&
              userTrip.trip.stops.map(stop => <Stop stop={stop} />)}
          </div>
        </div>
        <div className={"text-center"}>
          <Button
            variant="contained"
            size="large"
            // onClick={mutation}
            color="primary"
          >
            End Trip
          </Button>
        </div>
      </LargeCardBox>
    ) : (
      <LargeCardBox size={12} receipt={"m-l-10 m-r-10"}>
        No Data Available
      </LargeCardBox>
    );
  }
}

export default activeTrip;
