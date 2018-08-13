import gql from "graphql-tag";

export default gql`
  mutation CheckIn(
    $locationId: Int!
    $comments: String!
    $userTripId: Int!
    $newTrip: Boolean!
    $tripId: Int!
  ) {
    CheckIn(
      locationId: $locationId
      comments: $comments
      userTripId: $userTripId
      tripId: $tripId
      newTrip: $newTrip
    )
  }
`;
