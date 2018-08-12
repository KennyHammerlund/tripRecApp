import React, { Component } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import GoogleMapReact from "google-map-react";
import { Query, Mutation } from "react-apollo";

import MAP_TOKEN from "../../constants";
import CheckIn from "../../graphQueries/checkIn";
import locationQuery from "../../graphQueries/searchLocation";
import { Fetching, Error } from "../gqlState";
import LocationList from "./locationList";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

{
  /* <LocationList
  locations={data.findNearbyLocations}
  setLocationId={this.setLocationId}
/>; */
}

class oldLocation extends Component {
  render() {
    return (
      <div>Old Location Here</div>
      // <div>
      //   <Query query={locationQuery} variables={{ lat, long }}>
      //     {({ loading, error, data }) => {
      //       if (error) return <Error />;
      //       if (loading || !data) return <Fetching />;
      //       return (
      //         <LocationList
      //           locations={data.findNearbyLocations}
      //           setLocationId={this.setLocationId}
      //         />
      //       );
      //     }}
      //   </Query>

      //   <div className="map-container">
      //     <GoogleMapReact
      //       bootstrapURLKeys={{ key: MAP_TOKEN }}
      //       defaultCenter={mapOptions.center}
      //       defaultZoom={mapOptions.zoom}
      //     >
      //       <AnyReactComponent
      //         lat={coords.latitude}
      //         lng={coords.longitude}
      //         text={"Check In Here"}
      //       />
      //     </GoogleMapReact>
      //   </div>
      //   <DialogActions>
      //     <Mutation
      //       mutation={CheckIn}
      //       variables={{ locationId, comments, userTripId }}
      //       onCompleted={data => this._confirm(data)}
      //     >
      //       {mutation => (
      //         <Button
      //           variant="contained"
      //           size="small"
      //           onClick={mutation}
      //           color="primary"
      //         >
      //           Check In
      //         </Button>
      //       )}
      //     </Mutation>
      //     <Button onClick={close} color="primary">
      //       Dismiss
      //     </Button>
      //   </DialogActions>
      // </div>
    );
  }
}

export default oldLocation;
