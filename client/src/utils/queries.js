import { gql } from "@apollo/client";

export const GET_ME = gql`
  query getme {
    me {
      _id
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
