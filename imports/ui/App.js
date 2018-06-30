import React, { Component } from "react";
import login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { Route, Switch, Redirect } from "react-router-dom";

//use MainRoutes.js to store pages inside the navigation container

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          // component-{() => (if token redirect to login or dashboard)}
          component={Dashboard}
        />
        <Route path="/login" component={login} />
      </Switch>
    );
  }
}

export default App;
