const mongoose = require('mongoose');
const { Schema } = mongoose;

const partnerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
})
const Partner = mongoose.model('Partner', partnerSchema)

module.exports = Partner