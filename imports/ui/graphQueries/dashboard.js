import gql from "graphql-tag";

export default gql`
  query dashboard($token: String!) {
    viewer(token: $token) {
      id
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
        id
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
