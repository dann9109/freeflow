const { Schema, model } = require('mongoose');


const projectSchema = new Schema({

  title: {
    type: String,
    required: true,

  },
  description: {
    type: String,
    required: true,
  },
  client_name: {
    type: String,
    required: true,
  },
  client_address: {
    type: String,
    required: true,
  },
  client_phone_number: {
    type: String,
    required: true,
  },
  tasks: [{
    type: String,
    required: true,
    ref: 'Task',
  }],
  user: {
    type: String,
    required: true,
    ref: 'User',
  },
  invoice: {
    type: Schema.Types.ObjectId,
    ref: 'Invoice'
  }

},
  {
    toJSON: {
      virtuals: true,
    },
  })

const Project = model('Project', projectSchema);

module.exports = Project;