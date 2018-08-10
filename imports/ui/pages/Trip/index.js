import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Moment from 'moment';
import Token from "../../components/token";
import PageTitle from "../../components/pageTitle";
import largeCardBox from "../../components/largeCardBox";

const query =  gql`
query TripQuery($id: Int!) {
  userTrip(id: $id) {
    id
    date
    images {
      id
      link
    }
    comments
    trip {
      id
      description
      stops {
        id
        name
        lat
        long
      }
    }
    user {
      firstName
      lastName
      email
      profileImage {
        link
      }
    }
  }
}
`
const token =Token.get();
export class index extends Component {
  constructor(props){
    super(props); 
  }

  render() {
    const { match, data:{ userTrip } } = this.props;
    const {
      params: { userTripId }
    } = match;
    console.log("-----TRIPPROPS-----");
    console.log(this.props);


    const{viewer, data} = this.props;
    const {user}=data;

    return userTrip ? (
      <div>
        <PageTitle className="page-header-custom">
            View Trip
          {viewer && (
            <span className="pull-right text-muted">
              {` Welcome ${viewer.firstName} ${viewer.lastName}!`}
            </span>
          )}
      </PageTitle>

      <LargeCardBox>
      <div className="tripview-spacer">
                      <div className="tripview-custom">Description:</div>
                      <div className="tripview-indent">{userTrip.trip.description}</div>
                </div>

                <div className="tripview-spacer">
                      <div className="tripview-custom">Created By:</div>
                      <div className="tripview-indent">{`${userTrip.user.firstName} ${userTrip.user.lastName.charAt(0)}`}</div>
                </div>

                <div className="tripview-spacer">
                      <div className="tripview-custom">Date:</div>
                      <div className="tripview-indent">{Moment(userTrip.date).format("MMM Do")}</div>
                </div>

                <div className="tripview-spacer">
                      <div className="tripview-custom">Comments:</div>
                      <div className="tripview-indent">{userTrip.comments}</div>
                </div>

{/*           {`${userTrip.trip.description} ${userTrip.user.firstName} ${userTrip.user.lastName.charAt(0)} ${Moment(userTrip.date).format("MMM Do")} ${userTrip.comments}`}
 */}
        </LargeCardBox>
        </div>
    ) : (
      <div>
        <h3>No Data Available</h3>
      </div>
  
    );
  }
}

export default graphql(query, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.userTripId
    }
  })
})(index);
