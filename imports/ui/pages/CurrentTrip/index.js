import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const query =  gql`
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
`

export class index extends Component {
  constructor(props){
    super(props);
    
  }
  

  render() {
    const { match } = this.props;
    const {
      params: { userTripId }
    } = match;
    
    return (
      <div>
        <div>
          <h2>This is the current trip page</h2>
          <h3>{userTripId}</h3>
        </div>
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
