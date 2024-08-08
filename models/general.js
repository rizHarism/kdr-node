const mongoose = require('mongoose');
const { Schema } = mongoose;

const characteristicSchema = new Schema({
    characteristicName: {
        type: String,
        required: true
    },
    characteristicDescription: {
        type: String,
        required: true
    },
    characteristicImage: {
        type: String,
        required: true
    },
})
const generalSchema = new Schema({
    logoImage: {
        type: String,
        required: true
    },
    heroImage: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    characteristic: [characteristicSchema],
})
const General = mongoose.model('General', generalSchema)

module.exports = General