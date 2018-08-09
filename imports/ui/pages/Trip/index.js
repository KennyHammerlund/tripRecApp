import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Moment from 'moment';
import Token from "../../components/token";
import PageTitle from "../../components/pageTitle";

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
      <PageTitle>
        View Trip
      {viewer && (
        <span className="pull-right text-muted">
          {` Welcome ${viewer.firstName} ${viewer.lastName}!`}
        </span>
      )}
      </PageTitle>

      <div className="flex flex-column m-b-20">
        <div className="col-lg-8">
          <div className="card-box">
              <div className = "table-responsive">
                <div className="row">
                      <div className="col-sm-3 trip-linkheader">Description</div>
                      <div className="col-sm-3 trip-linkheader">Created By</div>
                      <div className="col-sm-2 trip-linkheader">Date</div>
                      <div className="col-sm-4 trip-linkheader">Comments</div>
                </div>
            {userTrip.trip.description}
        </div>
        <div>
          {`${userTrip.user.firstName} ${userTrip.user.lastName.charAt(0)} ${Moment(userTrip.date).format("MMM Do")}`}
        </div>
        <div>
          <p>{userTrip.comments}</p>
        </div>
      </div>
      </div>
      </div>
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
