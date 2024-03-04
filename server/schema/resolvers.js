const user_resolvers = require('./lib/user_resolvers')
const project_resolvers = require('./lib/project_resolvers')


const resolvers = {
    Query: {
        ...user_resolvers.queries,
        ...project_resolvers.queries,
    },

    Mutation: {
        ...user_resolvers.mutations,
        ...project_resolvers.mutations,
    }
}

module.exports = resolvers