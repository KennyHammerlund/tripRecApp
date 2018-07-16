import React, { Component } from "react";
import Image from "../../components/Image";
// import { Switch, Route } from "react-router-dom";
import test from "./test";
export class index extends Component {
  render() {
    const {
      match: { path }
    } = this.props;
    console.log("------PROPS------");
    console.log(this.props);
    return (
      <div className="form-login text-center">
        <div>
          <Image
            src="./img/2x/Circle_Logo_1200.png"
            width={200}
            height={200}
            className="m-lr-auto"
          />
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
