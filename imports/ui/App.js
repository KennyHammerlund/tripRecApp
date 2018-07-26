import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import login from "./pages/Login";
import AppLayout from "../ui/AppLayout";

//use MainRoutes.js to store pages inside the navigation container

class App extends Component {
  render() {
    console.log("------PROPS------");
    console.log(this.props);

    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Redirect to="/dashboard" />}
          />
          <Route path="/login" component={login} />
          <Route component={AppLayout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
