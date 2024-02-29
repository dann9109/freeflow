const { Schema, model } = require('mongoose');



const taskSchema = new Schema(
    {
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

        miscillaneous: {
            type: String,
            required: true,
            unique: true,

        },
        client: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
            unique: true,

        },

    },
    // set this to use virtual below
    {
        toJSON: {
            virtuals: true,
        },
    }
);


// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
taskSchema.virtual('total').get(function () {
    return this.hours * this.rate;
});

const Task = model('Task', taskSchema);

module.exports = Task;