import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedClients {
        clientname
        email
        phone
        address
      }
    }
  }
`;
