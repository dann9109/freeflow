const { Schema, model } = require('mongoose');



const taskSchema = new Schema(
    {
        _id: {
            type: Number,
            required: true,
            unique: true,
        },
        taskname: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
            unique: true,
        },
        rate: {
            type: Number,
            required: true,
        },
        hours: {
            type: Number,
            required: true,
        },

        Project_id: {
            type: Number,
            required: true,
        },

    },
    // set this to use virtual below
    {
        toJSON: {
            virtuals: true,
        },
    }
);


// when we query a user, we'll also get another field called `taskCount` with the number of saved tasks we have
taskSchema.virtual('total').get(function () {
    return this.hours * this.rate;
});

const Task = model('Task', taskSchema);

module.exports = Task;