import React, { Component } from "react";
import { geolocated } from "react-geolocated";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import LargeCardBox from "../../components/largeCardBox";
import PageTitle from "../../components/pageTitle";
import CreateTrip from "../../graphQueries/createTrip";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import NotListedLocation from "@material-ui/icons/NotListedLocation";
export class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geoAvail: this.props.isGeolocationAvailable,
      comment: "",
      title: "",
      description: "",
      newTrip: 0
    };
  }
  swap = e => {
    e.preventDefault();
    const newState = this.state.newTrip === 1 ? 0 : 1;
    this.setState({ newTrip: newState });
  };

  render() {
    const {
      geoAvail,
      comment,
      title,
      description,
      newTrip,
      viewer
    } = this.state;
    const { coords } = this.props;
    const userId = 55;
    return (
      <div>
        <PageTitle>
          Welcome {viewer ? viewer.firstName : "Guest"}
          <span className="pull-right text-muted">Start A Trip</span>
        </PageTitle>
        <LargeCardBox receipt="p-0" size={4}>
          <AppBar position="static">
            <Tabs
              value={newTrip}
              onChange={this.swap}
              centered
              textcolor="secondary"
            >
              <Tab label="New Trip" icon={<PersonPinIcon />} />
              <Tab label="Follow a trip" icon={<NotListedLocation />} />
            </Tabs>
          </AppBar>
          {newTrip === 0 ? (
            <div className="pad-20">
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
              <Mutation
                mutation={CreateTrip}
                variables={{ description, comment, title, userId }}
                onCompleted={data => this._confirm(data)}
              >
                {mutation => (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={mutation}
                    className="m-t-20"
                  >
                    Start Trip
                  </Button>
                )}
              </Mutation>
            </div>
          ) : (
            <div className="pad-20">
              <h2>Grab an old trip and start</h2>
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
              <Mutation
                mutation={CreateTrip}
                variables={{ description, comment, title, userId }}
                onCompleted={data => this._confirm(data)}
              >
                {mutation => (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={mutation}
                    className="m-t-20"
                  >
                    Start Trip
                  </Button>
                )}
              </Mutation>
            </div>
          )}
        </LargeCardBox>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(index);
