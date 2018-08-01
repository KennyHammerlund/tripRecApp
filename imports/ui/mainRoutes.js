import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import CreateTrip from "./pages/CreateTrip";
import CurrentTrip from "./pages/CurrentTrip";
import MyTrips from "./pages/MyTrips";
import Dashboard from "./pages/Dashboard";

//This class gets enclosed inside the navigation to change the content pages while leaving navigation.
//Add content pages to this list. when navigated to they will be included with the navigation

export class mainRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/createtrip" component={CreateTrip} />
        <Route exact path="/currenttrip" component={CurrentTrip} />
        <Route exact path="/mytrips" component={MyTrips} />
      </Switch>
    );
  }
}

export default mainRoutes;
