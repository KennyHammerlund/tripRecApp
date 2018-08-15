import gql from "graphql-tag";

export default gql`
  query TripQuery($id: Int!, $viewer: String!) {
    viewer(token: $viewer) {
      id
      firstName
      lastName
    }
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
          order
          location {
            name
            lat
            long
          }
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
