import React, { Component } from "react";
import { Link } from "react-router-dom";

class trip extends Component {
  prepComments = c =>
    c ? (c.length > 50 ? `${c.substring(0, 50)}...` : c) : "";
  render() {
    const {
      id,
      comments = "",
      trip: { description = "", title = "" }
    } = this.props.trip;

    return (
      <div className="row trip-title">
        <Link to={`/trip/${id}`}>
          <div className="col-md-1 col-xs-3">{id}</div>
          <div className="col-md-3 col-xs-9">{title}</div>
          <div className="col-md-3 hidden-sm hidden-xs">
            {this.prepComments(comments)}
          </div>
          <div className="col-md-5  hidden-sm hidden-xs">
            {this.prepComments(description)}
          </div>
        </Link>
      </div>
    );
  }
}

export default trip;
