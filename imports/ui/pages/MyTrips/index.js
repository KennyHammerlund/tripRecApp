import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";

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
        
        <h2>This is the my trips page</h2>
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