import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
const currentTripQuery = gql`
  query currentTripQuery($id: Int!) {
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
`;

export class index extends Component {
  render() {
    const { match } = this.props;
    const {
      params: { userTripId }
    } = match;
    return (
      <div>
        <div>
          <h2>-This is the current trip page</h2>
        </div>
      </div>
    );
  }
}

export default graphql(currentTripQuery, {
  options: () => ({
    variables: {
      userTripId
    }
  })
})(index);
