import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import Navigation from "../Navigation";
export class index extends Component {
  render() {
    const {
      match: { path }
    } = this.props;
    console.log("------PROPS------");
    console.log(this.props);
    return (
      <div>
      <div>
        <Navigation />
        <h2>This is the current trip page</h2>
        </div>
      
        {/* <Switch>
          Switches between login/logout and forgot passoword components
          <Route path={path} Component={test} />
        </Switch> */}
      
      </div>
    );
  }
}

export default index;