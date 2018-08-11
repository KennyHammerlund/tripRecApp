import gql from "graphql-tag";

export default gql`
  mutation CheckIn($locationId: Int!, $comments: String!, $userTripId: Int!) {
    CheckIn(
      locationId: $locationId
      comments: $comments
      userTripId: $userTripId
    )
  }
`;
