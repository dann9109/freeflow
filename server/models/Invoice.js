const { Schema, model } = require('mongoose');



const invoiceSchema = new Schema(
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
        amountdue: {
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




const Task = model('Invoice', invoiceSchema);

module.exports = Invoice;