import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Maintrip from "../../components/maintrip";
import PageTitle from "../../components/pageTitle";
import Token from "../../components/token";

const tripsQuery = gql`
  {
    allTrips {
      id
      title
      date
      description
      stops {
        id
        name
      }
      userTrips {
        id
        comments
        trip {
          id
          title
          description
        }
      }
    }
  }
`;
const token = Token.get();
export class index extends Component {
  render() {
    console.log("------BROWSETRIPPROPS------");
    console.log(this.props);

    const { viewer } = this.props;
    const {
      data: { allTrips }
    } = this.props;

    return (
      <div>
        <PageTitle className="page-header-custom">
          Browse Trips
          {viewer && (
            <span className="pull-right text-muted">
              {` Welcome ${viewer.firstName} ${viewer.lastName}!`}
            </span>
          )}
        </PageTitle>
        <div className="flex flex-column m-b-20">
          <div className="flex flex-column m-b-20">
            <div className="card-box">
              {/* <h1 className ="text-dark header-title m-t-0 page-header">Browse Trips</h1> */}

              {allTrips ? allTrips.map(trip => <Maintrip trip={trip} />) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(tripsQuery)(index);
