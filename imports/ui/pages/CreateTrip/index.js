import React, { Component } from "react";
import { geolocated } from "react-geolocated";
import gql from "graphql-tag";

import LargeCardBox from "../../components/largeCardBox";
import PageTitle from "../../components/pageTitle";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
export class CreateTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geoAvail: this.props.isGeolocationAvailable,
      comment: "",
      title: "",
      description: ""
    };
  }

  render() {
    const { geoAvail, comment, title, description } = this.state;
    const { coords } = this.props;

    // const START_TRIP_MUTATION = gql`
    //   mutation($title: String!, $comments: String!) {
    //     StartTrip(title: $title, : $password)
    //   }
    // `;

    return (
      <div>
        <PageTitle>Start new trip</PageTitle>

        {!geoAvail && (
          <LargeCardBox size={10}>
            <PageTitle className="nav-bg">Geo Not Supported</PageTitle>
            <div className="text-center">
              Your Browser Does Not Support Geolocation
            </div>
          </LargeCardBox>
        )}

        {geoAvail && !coords ? (
          <LargeCardBox>
            <div className="text-center">
              <h3>Don't Move!</h3>
              We are gathering your location data. . .
            </div>
          </LargeCardBox>
        ) : (
          <LargeCardBox>
            <PageTitle className="nav-bg">New Trip Details</PageTitle>
            <FormControl className="Block form-default full-width">
              <InputLabel htmlFor="title">Title</InputLabel>
              <Input
                id="title"
                value={title}
                type="text"
                className={"full-width"}
                onChange={e => this.setState({ title: e.target.value })}
                label="title"
              />
            </FormControl>

            <FormControl className="Block form-default full-width">
              <InputLabel htmlFor="description">Description</InputLabel>
              <Input
                id="description"
                value={description}
                type="text"
                className={"full-width"}
                multiline={true}
                rows={2}
                onChange={e => this.setState({ description: e.target.value })}
                label="description"
              />
            </FormControl>

            <FormControl className="Block form-default full-width">
              <InputLabel htmlFor="comment">Comments</InputLabel>
              <Input
                id="comment"
                value={comment}
                type="text"
                className={"full-width"}
                multiline={true}
                rows={4}
                onChange={e => this.setState({ comment: e.target.value })}
                label="comment"
              />
            </FormControl>
            {/* <Mutation> */}
            <Button
              variant="contained"
              color="primary"
              // onClick={mutation}
              className="m-t-20"
            >
              Start Trip
            </Button>
            {/* </Mutation> */}
          </LargeCardBox>
        )}
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(CreateTrip);
