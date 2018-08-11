import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { AUTH_TOKEN } from "./constants";

import login from "./pages/Login";
import AppLayout from "../ui/AppLayout";
import Token from "./components/token";

// sass.render(
//   {
//     file: "/stylesheets/responsive.sass"
//   },
//   (err, result) => {
//     console.log(`Err: ${err}`);
//     console.log(`result: ${result}`);
//     console.log(result);
//   }
// );

class App extends Component {
  render() {
    const authToken = Token.get();
    const isLoggedIn = authToken ? (authToken != "" ? true : false) : false;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              if (!isLoggedIn) {
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
