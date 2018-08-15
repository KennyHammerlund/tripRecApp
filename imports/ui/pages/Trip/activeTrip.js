import React, { Component } from "react";
import { Mutation } from "react-apollo";

import LargeCardBox from "../../components/largeCardBox";
import Notice from "../../components/errorBox";
import Moment from "moment";
import Stop from "../../components/stop.js";
import Button from "@material-ui/core/Button";
import EndTrip from "../../graphQueries/endTrip";
import SetLocationDialog from "../../components/setLocationDialog";
class activeTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationDialog: false,
      isUsersTrip: false
    };
  }

  //TODO ADD CANCEL BOX
  _confirm = async data => {
    console.log(data);
  };

  locationDialog = e => {
    this.setState({ locationDialog: !this.state.locationDialog });
  };

  render() {
    const { userTrip, viewer = {} } = this.props;
    const userTripId = userTrip.id;
    const { locationDialog } = this.state;
    const isMyTrip =
      viewer.id != null &&
      userTrip.user != null &&
      viewer.id === userTrip.user.id;
    console.log(this.props);
    return userTrip ? (
      <LargeCardBox size={8} receipt={"m-l-10 m-r-10"}>
        {locationDialog && (
          <SetLocationDialog
            userTrip={userTrip}
            open={locationDialog}
            toggle={e => this.locationDialog(e)}
          />
        )}
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
          <div className="tripview-custom">Trip Stops:</div>
          <div className={"m-b-10"}>
            {userTrip.trip &&
              userTrip.trip.stops.length > 0 &&
              userTrip.trip.stops.map(stop => (
                <Stop stop={stop} key={stop.id} />
              ))}
          </div>
        </div>
        {isMyTrip && (
          <div className={"text-center"}>
            <Button
              variant="contained"
              size="large"
              onClick={this.locationDialog}
              color="primary"
              className="m-r-15"
            >
              Add Stop
            </Button>

            <Mutation
              mutation={EndTrip}
              variables={{ userTripId }}
              onCompleted={data => this._confirm(data)}
            >
              {mutation => (
                <Button
                  variant="contained"
                  size="large"
                  onClick={mutation}
                  color="primary"
                >
                  End Trip
                </Button>
              )}
            </Mutation>
          </div>
        )}
      </LargeCardBox>
    ) : (
      <LargeCardBox size={12} receipt={"m-l-10 m-r-10"}>
        No Data Available
      </LargeCardBox>
    );
  }
}

export default activeTrip;
