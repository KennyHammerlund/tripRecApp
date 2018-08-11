import gql from "graphql-tag";

export default gql`
  query TripQuery($id: Int!) {
    userTrip(id: $id) {
      id
      isActive
      date
      images {
        id
        link
      }
      comments
      trip {
        id
        description
        stops {
          id
          name
          lat
          long
        }
      }
      user {
        id
        firstName
        lastName
        email
        profileImage {
          link
        }
      }
    }
  }
`;
