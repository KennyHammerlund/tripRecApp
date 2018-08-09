import gql from "graphql-tag";

export default gql`
  query dashboard($token: String!) {
    viewer(token: $token) {
      id
      lastName
      firstName
      trips {
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
