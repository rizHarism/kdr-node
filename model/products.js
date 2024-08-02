const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
const Product = mongoose.model('Product', productSchema)
module.exports = Product;