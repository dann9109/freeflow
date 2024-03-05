import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation RegisterUser($username: String!, $email: String!, $password: String!) {
    registerUser(username: $username, email: $email, password: $password) {
      _id
      email
      username
    }
  }
`


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

// export const ADD_USER = gql`
//   mutation addUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

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
`
export const CREATE_TASK = gql`
  mutation CreateTask($text: String!) {
    createNote(text: $text) {
      _id
      text
    }
  }
`

export const LOGOUT_USER = gql`
  mutation LogoutUser {
    logoutUser {
      message
    }
  }
`

export const EDIT_TASK = gql`
  mutation EditTask($text: String!, $task_id: ID) {
    editNote(text: $text, note_id: $task_id) {
      message
    }
  }
`

export const DELETE_TASK = gql`
  mutation DeleteNote($task_id: ID) {
    deleteTask(note_id: $task_id) {
      message
    }
  }
`
