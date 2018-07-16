import React, { Component } from "react";
import login from "./pages/Login";
import Dashboard from "../ui/pages/Dashboard";
import Test from "../ui/pages/Login/test";

import { Route, Switch, Redirect } from "react-router-dom";

//use MainRoutes.js to store pages inside the navigation container

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={login} />
      </Switch>
    );
  }
}

export default App;
