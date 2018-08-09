import gql from "graphql-tag";

export default gql`
  query dashboard($token: String!) {
    viewer(token: $token) {
      lastName
      firstName
      displayName
      email
      profileImage {
        id
        link
      }
    }
  }
`;
