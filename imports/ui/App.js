import React, { Component } from "react";
import login from "./pages/Login";
import Dashboard from "../ui/pages/Dashboard";
import CreateTrip from "../ui/pages/CreateTrip";
import CurrentTrip from "../ui/pages/CurrentTrip";
import MyTrips from "../ui/pages/MyTrips";
import { Route, Switch, Redirect } from "react-router-dom";

//use MainRoutes.js to store pages inside the navigation container

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={login} />
        <Route path="/createtrip" component={CreateTrip} />
        <Route path="/currenttrip" component={CurrentTrip} />
        <Route path="/mytrips" component={MyTrips} />
      </Switch>
    );
  }
}

export default App;
