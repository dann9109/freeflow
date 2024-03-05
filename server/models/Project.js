const { Schema, model } = require('mongoose');


const projectSchema = new Schema({

  title: {
    type: String,
    required: true,
    unique: true,

  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  client_name: {
    type: String,
    required: true,
    unique: true,
  },
  client_address: {
    type: String,
    required: true,
    unique: true,
  },
  client_phone_number: {
    type: String,
    required: true,
    unique: true,
  },
  tasks: [{
    type: String,
    required: true,
    ref: 'Task',
    unique: true,
  }],
  user: {
    type: String,
    required: true,
    ref: 'User',
    unique: true,
  },
  invoice: {
    type: Schema.Types.ObjectId,
    ref: 'Invoice'
  }

})

const Project = model('Project', projectSchema);

module.exports = Project;