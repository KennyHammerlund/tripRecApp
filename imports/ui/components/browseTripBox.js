import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Maintrip from "../../components/maintrip";
import PageTitle from "../../components/pageTitle";
import Token from "../../components/token";
import largeCardBox from "./largeCardBox";

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
    
        <LargeCardBox receipt="p-0 p-b-10" size={size}>
            <PageTitle centered={true} className={"m-b-10"}>
              Trips to Browse
            </PageTitle>

            <div className="currentTrip-header row">
                <div className="col-xs-8 text-center text-700">Title</div>
                <div>{userTrip.trip.title}</div>

                <div className="col-xs-4 text-center text-700">Created By</div>
                <div>{`${userTrip.user.firstName} ${userTrip.user.lastName.charAt(0)}`}</div>

                {allTrips ? allTrips.map(trip => <Maintrip trip={trip} />) : null}
            </div>
        

            </LargeCardBox>
    );
  }
}

export default graphql(tripsQuery)(index);
