import React, { Component } from "react";

class errorBox extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="m-l-5 m-r-5 text-center alert alert-success">
        {content}
      </div>
    );
  }
}

export default errorBox;
