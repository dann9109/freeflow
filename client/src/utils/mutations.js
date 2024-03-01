import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_CLIENT = gql`
  mutation saveClient($clientData: ClientInput!) {
    saveClient(clientData: $clientData) {
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

export const REMOVE_CLIENT = gql`
  mutation removeClient($clientId: ID!) {
    removeClient(clientId: $clientId) {
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
