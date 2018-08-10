import gql from "graphql-tag";

export default gql`
  query currentTrips($token: String!) {
    viewer(token: $token) {
      lastName
      firstName
      currentTrips {
        id
        comments
        trip {
          description
          title
          stops {
            id
            name
            lat
            long
          }
        }
      }
    }
  }
`;
