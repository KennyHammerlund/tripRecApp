import React, { Component } from "react";
import {geolocated} from 'react-geolocated';
export class CreateTrip extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <table>
            <tbody>
              <tr><td>latitude for your location</td><td>{this.props.coords.latitude}</td></tr>
              <tr><td>longitude for your location</td><td>{this.props.coords.longitude}</td></tr>
              <tr><td>would you like to enter your next location?</td></tr>
            </tbody>
          </table>
          : <div>Getting the location data&hellip; </div>;
  }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(CreateTrip);