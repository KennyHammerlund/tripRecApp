import gql from "graphql-tag";

export default gql`
  mutation CreateLocation(
    $name: String!
    $description: String!
    $lat: Float!
    $long: Float!
  ) {
    AddLocation(name: $name, description: $description, lat: $lat, long: $long)
  }
`;
