import gql from "graphql-tag";

export default gql`
  query SmallViewer($token: String!) {
    viewer(token: $token) {
      id
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
