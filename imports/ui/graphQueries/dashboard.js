import gql from "graphql-tag";

export default gql`
  query dashboard($token: String!) {
    viewer(token: $token) {
      lastName
      firstName
      displayName
      email
      password
      profileImage {
        id
        link
      }
      images {
        id
        link
      }
      trips {
        date
        comments
        trip {
          id
          description
        }
      }
    }
  }
`;
