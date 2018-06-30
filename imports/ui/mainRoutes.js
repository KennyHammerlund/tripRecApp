import React, { Component } from "react";
//This class gets enclosed inside the navigation to change the content pages while leaving navigation.
//Add content pages to this list. when navigated to they will be included with the navigation
class mainRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="somePath" component="someComponent" />
          <Route path="somePath" component="someComponent" />
          <Route path="somePath" component="someComponent" />
          <Route path="somePath" component="someComponent" />
          <Route path="somePath" component="someComponent" />
        </Switch>
      </div>
    );
  }
}

export default mainRoutes;
