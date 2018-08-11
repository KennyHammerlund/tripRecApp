import gql from "graphql-tag";

export default gql`
  mutation EndTrip($userTripId: Int) {
    EndTrip(userTripId: $userTripId)
  }
`;
