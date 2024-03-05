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
    loginUser(email: $email, password: $password) {
      username 
      
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation CreateProject($title: String!, $description: String!, $client_name: String!, $client_address: String!, $client_phone_number: String!) {
    createProject(title: $title, description: $description, client_name: $client_name, client_address: $client_address, client_phone_number: $client_phone_number) {
      message
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
