import gql from "graphql-tag";

export default gql`
  query BrowseTrips($token: String!) {
    viewer(token: $token) {
      id
      firstName
      lastName
    }
    allTrips {
      id
      title
      date
      description
      stops {
        id
        order
        location {
          name
          lat
          long
        }
        __typename
      }
      userTrips {
        id
        comments
        trip {
          id
          title
          description
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
