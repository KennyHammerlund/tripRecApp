import React, { Component } from "react";
import { graphql } from "../../../../node_modules/@types/graphql";
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
          <h2>This is the current trip page</h2>
        </div>
      </div>
    );
  }
}

export default graphql(queryname, {
  options: () => ({
    variables: {
      userTripId
    }
  })
})(index);
