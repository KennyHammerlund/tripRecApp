import React, { Component } from "react";
import Trip from "./trip";

class Maintrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true
    };
    this.hide = this.hide.bind(this);
  }
  hide(e) {
    e.preventDefault();
    this.setState({
      hide: !this.state.hide
    });
  }

  render() {
    const { userTrips, title } = this.props.trip;
    const { hide } = this.state;

    return (
      <div>
        <div
          className={`browse-trip-header  bt-border-${hide ? "light" : "dark"}`}
        >
          {title}
          <i
            className={`glyphicons glyphicons-circle-arrow-${
              hide ? "down" : "top"
            } pull-right`}
            onClick={this.hide}
          />
        </div>
        <div className={`${hide ? "hide" : "block"} trip-details `}>
          <div className="row text-center">
            <div className="col-md-1 col-xs-3 trip-linkheader">ID</div>
            <div className="col-md-3 col-xs-9 trip-linkheader">Title</div>
            <div className="col-md-3 hidden-sm hidden-xs trip-linkheader">
              Comments
            </div>
            <div className="col-md-5  hidden-sm hidden-xs trip-linkheader">
              Description
            </div>
          </div>
          {userTrips
            ? userTrips.map(trip => <Trip key={trip.id} trip={trip} />)
            : null}
        </div>
      </div>
    );
  }
}

export default Maintrip;
