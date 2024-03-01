const user_resolvers = require('./lib/user_resolvers')
const task_resolvers = require('./lib/task_resolvers')


const resolvers = {
    Query: {
        ...user_resolvers.queries,
        ...task_resolvers.queries,
    },

    Mutation: {
        ...user_resolvers.mutations,
        ...task_resolvers.mutations,
    }
}

module.exports = resolvers