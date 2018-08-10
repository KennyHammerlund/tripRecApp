import gql from "graphql-tag";

export default gql`
  query currentTrips($token: String!) {
    viewer(token: $token) {
      id
      currentTrips {
        id
        comments
        trip {
          id
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
