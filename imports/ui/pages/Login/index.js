import React, { Component } from "react";
import Image from "../../components/Image";
export class index extends Component {
  render() {
    return (
      <div className="main wrapper-page form-login text-center">
        <div className="m-t-15">
          <Image
            src="./img/2x/Circle_Logo_1200.png"
            width={200}
            height={200}
            className="m-lr-auto"
          />
        </div>
        <h3> The best is yet to come</h3>
      </div>
    );
  }
}

export default index;
