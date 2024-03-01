const { Schema, model } = require('mongoose');



const clientSchema = new Schema(
    {
        clientname: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        phone: {
            type: String,
            required: true,
            unique: true
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



// when we query a user, we'll also get another field called `clientCount` with the number of saved clients we have
userSchema.virtual('clientCount').get(function () {
    return this.savedClients.length;
});

const Client = model('Client', clientSchema);

module.exports = Client;