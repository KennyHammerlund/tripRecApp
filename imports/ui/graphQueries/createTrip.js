import gql from "graphql-tag";

export default gql`
mutation($title: String!, $comment: String!, $userId: Int!, $description: String!) {
    CreateTrip(title:$title, comment: $comment, userId: $userId, description: $description )
  }`;		