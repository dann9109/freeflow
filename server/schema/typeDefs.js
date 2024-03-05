const gql = String.raw;

const typeDefs = gql`
  type Task {
    _id: ID
    text: String
    rate: Int
    hours: Int
    project: Project
    createdAt: String
    updatedAt: String
  }

  type Invoice {
    _id: ID
    rate: Int
    hours: Int
    miscellaneous: String
    amountdue: Int
    project: Project
  }

  type Project {
    _id: ID
    title: String
    description: String
    client_name: String
    client_address: String
    client_phone_number: String
    tasks: [Task]
    user: User
  }

  

  type GuestProject {
    _id: ID
    title: String
    description: String
  }

  type User {
    _id: String
    username: String
    email: String
    projects: [Project]
  }

  type Success {
    message: String
  }

  type Query {
    getAllProjects: [GuestProject]
    getUserProjects: [Project]
    getTasksByProjectId(project_id: ID): Project
    authenticate: User
  }

  type Mutation {
    registerUser(username: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): User
    logoutUser: Success


    createProject(title: String, description: String, client_name: String, client_address: String, client_phone_number: String): Success
    editProject(title: String, description: String, client_name: String, client_address: String, client_phone_number: String): Success
    deleteProject(project_id: ID): Success
    createTask(project_id: ID, text: String,  rate: Int, hours: Int): Success
    editTask(text: String, rate: Int, hours: Int, task_id: ID): Success
    deleteTask(task_id: ID): Success
    createInvoice(project_id: ID, rate: Int, hours: Int, miscellaneous: String, amountdue: Int): Success
  }
`

module.exports = typeDefs