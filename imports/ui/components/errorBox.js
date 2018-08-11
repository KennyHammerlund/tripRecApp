import React, { Component, Children } from "react";

class errorBox extends Component {
  render() {
    const { content, children } = this.props;
    return (
      <div className="m-l-5 m-r-5 text-center alert alert-success">
        {content}
        {children}
      </div>
    );
  }
}

export default errorBox;
