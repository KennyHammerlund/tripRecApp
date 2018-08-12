import gql from "graphql-tag";

export default gql`
  query FindLocations($lat: Float!, $long: Float!) {
    findNearbyLocations(lat: $lat, long: $long) {
      lat
      long
      name
      id
    }
  }
`;
