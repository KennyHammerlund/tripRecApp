import gql from "graphql-tag";

export default gql`
  query UserTrips($token: String!) {
    viewer(token: $token) {
      id
      lastName
      firstName
      trips {
        id
        date
        comments
        trip {
          id
          description
        }
      }
    }
    allTrips {
      id
      title
    }
  }
`;
