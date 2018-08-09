import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import CreateTrip from "./pages/CreateTrip";
import CurrentTrip from "./pages/Trip";
import MyTrips from "./pages/MyTrips";
import Dashboard from "./pages/Dashboard";
import BrowseTrips from "./pages/BrowseTrips";

//This class gets enclosed inside the navigation to change the content pages while leaving navigation.
//Add content pages to this list. when navigated to they will be included with the navigation

export class mainRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/createtrip" component={CreateTrip} />
        {/* <Route path="/currenttrip" component={CurrentTrip} /> */}
        <Route exact path="/mytrips" component={MyTrips} />
        <Route exact path="/browsetrips" component={BrowseTrips} />
        <Route path="/trip/:userTripId" 
        render={(props) => {
        console.log(props);
        return <CurrentTrip {...props} />} } 
         />
      </Switch>
    );
  }
}

export default mainRoutes;
