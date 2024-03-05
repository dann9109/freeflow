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

export const AUTHENTICATE = gql`
  query {
    authenticate {
      _id
      username
    }
  }
`
export const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    getAllProjects {
      _id
      title
      description
    }
  }

`

export const GET_USER_PROJECTS = gql`

  query GetUserProjects {
    getUserProjects {
      _id
      title
      description
      client_name
      client_address
      client_phone_number
      tasks {
        _id
        text
        rate
        hours
        createdAt
        updatedAt
      }
    }
  }
`

export const GET_TASKS_BY_PROJECT_ID = gql`
 query Query($project_id: ID) {
  getTasksByProjectId(project_id: $project_id) {
    _id
    title
    description
    client_name
    client_address
    client_phone_number
    tasks {
      _id
      text
      rate
      hours
      createdAt
      updatedAt
    }
  }
}`


