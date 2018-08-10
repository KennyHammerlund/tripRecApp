import React, { Component } from "react";
import { graphql } from "react-apollo";
import moment from "moment";

import LargeCardBox from "./largeCardBox";
import PageTitle from "./pageTitle";
import Token from "./token";
import Query from "../graphQueries/currentTrips";
import { Link } from "react-router-dom";
class currentTripBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshComp: true
    };
  }
  // componentDidMount() {
  //   const { refresh } = this.props;
  //   const { refreshComp } = this.state;
  //   console.log(`${refresh} !== ${refreshComp}`);
  //   if (refresh !== refreshComp) {
  //     this.props.data.refetch();
  //     this.setState({ refreshComp: refresh });
  //   }
  // }
  render() {
    const { size, data } = this.props;
    const { viewer } = data;
    console.log(data);
    return (
      <LargeCardBox receipt="p-0 p-b-10" size={size}>
        {!viewer ? (
          <div className="text-center m-t-20 m-b-20">
            You have no current active trips
          </div>
        ) : (
          <div>
            <PageTitle centered={true} className={"m-b-10"}>
              Active Trips
            </PageTitle>
            <div className="currentTrip-header row">
              <div className="col-xs-8 text-center text-700">Title</div>
              <div className="col-xs-4 text-center text-700">Date</div>
            </div>
          </div>
        )}
        {data.viewer &&
          !!viewer.currentTrips &&
          viewer.currentTrips.map(trip => {
            return (
              <Link to={`/trip/${trip.id}`} key={trip.id}>
                {!trip.trip ? (
                  "Data Error"
                ) : (
                  <div className="trip-title row">
                    <div className="col-xs-8 p-l-5">{trip.trip.title}</div>
                    <div className="col-xs-4 p-r-5">
                      {moment.utc(trip.date).format("MMM Mo")}
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
      </LargeCardBox>
    );
  }
}

export default graphql(Query, {
  options: () => ({
    variables: {
      token: Token.get()
    }
  })
})(currentTripBox);
