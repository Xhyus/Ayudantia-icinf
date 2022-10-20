const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 100
    }
})

module.exports = mongoose.model('category', categorySchema);