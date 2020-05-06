const { Schema, model } = require('mongoose');

const newSchema = new Schema({
    Body: {
        type: String,
        required: true
    },
    From: {
        type: String
    },
    To: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = model('sms', newSchema);