import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Moment from 'moment';

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

export class index extends Component {
  constructor(props){
    super(props); 
  }

  render() {
    const { match, data:{ userTrip } } = this.props;
    const {
      params: { userTripId }
    } = match;

    return userTrip ? (
      <div>
        <div>
            <h1>Trip Title</h1>
            {userTrip.trip.description}
        </div>
        <div>
          {`Created by: ${userTrip.user.firstName} ${userTrip.user.lastName.charAt(0)}. on ${Moment(userTrip.date).format("MMM Do")}`}
        </div>
        <div>
          <p>{userTrip.comments}</p>
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
