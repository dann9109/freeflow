const { createToken, verifyToken, protect } = require('../../config/auth')
const { GraphQLError } = require('graphql')
const { User, Project, Task, Invoice } = require('../../models')


module.exports = {
  queries: {
    async getAllProjects() {
      const projects = await Project.find()

      return projects
    },
    async getUserProjects(_, __, { user }) {
      if (!user)
        throw new GraphQLError('Not Authorized')

      const projects = await Project.find({ user: user._id }).populate('tasks')

      return projects
    },

    async getTasksByProjectId(_, args, { user }) {
      if (!user)
        throw new GraphQLError('Not Authorized')
        console.log(args)
      const project = await Project.findById(
        args.project_id
      ).populate('tasks')

      return project
    }
  },



  mutations: {
    async createProject(_, args, { user }) {
      if (!user)
        throw new GraphQLError('Not Authorized')

      try {
        const project = await Project.create({
          ...args, user: user._id
        })

        user.projects.push(project._id)

        user.save()

        return { message: 'Project created successfully!' }
      } catch (error) {
        console.log(error)
      }

    },


    async createTask(_, args, { user }) {
      if (!user)
        throw new GraphQLError('Not Authorized')

      try {
        const task = await Task.create(args)
        console.log(args)

        await Project.findByIdAndUpdate(args.project_id, {
          $push: {
            tasks: task._id
          }
        })

        return { message: 'Task created successfully!' }
      } catch (error) {
        console.log(error)
      }

    }
  }
}