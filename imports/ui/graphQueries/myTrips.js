import gql from "graphql-tag";

export default gql`
  query MyTrips($token: String!) {
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
          date
          title
          description
          createdBy {
            firstName
          }
        }
      }
    }
  }
`;
