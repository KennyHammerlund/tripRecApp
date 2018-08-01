import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { AUTH_TOKEN } from './constants';

import login from "./pages/Login";
import AppLayout from "../ui/AppLayout";


class App extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    const isLoggedIn = authToken ? authToken != '' ? true : false : false;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              if(!isLoggedIn){
                return <Redirect to="/login" />;
              }
              return <Redirect to="/dashboard" />;
            }}
          />
          <Route path="/login" component={login} />
          <Route component={AppLayout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
