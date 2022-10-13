const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 100
    }
})

module.exports = mongoose.model('Category', productSchema);