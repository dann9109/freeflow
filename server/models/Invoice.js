const { Schema, model } = require('mongoose');



const invoiceSchema = new Schema(
    {
        rate: {
            type: Number,
            required: true,
        },
        hours: {
            type: Number,
            required: true,
        },

        miscellaneous: {
            type: String,
            required: true,
            unique: true,

        },
        amountdue: {
            type: Number,
            required: true,
        },
        project: {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }

    },
    // set this to use virtual below
    {
        toJSON: {
            virtuals: true,
        },
    }
);




const Invoice = model('Invoice', invoiceSchema);

module.exports = Invoice;