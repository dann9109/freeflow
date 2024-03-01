const gql = String.raw;

const typeDefs = gql`
  type Task {
    _id: ID
    text: String
    createdAt: String
    updatedAt: String
    user: User
  }

  type User {
    _id: String
    username: String
    email: String
  }

  type Success {
    message: String
  }

  type Query {
    getAllTasks: [Task]
    getUserTasks: [Task]
    authenticate: User
  }

  type Mutation {
    registerUser(username: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): User
    logoutUser: Success

    createTask(text: String!): Task
    editTask(text: String, task_id: ID): Success
    deleteTask(task_id: ID): Success
  }
`

module.exports = typeDefs