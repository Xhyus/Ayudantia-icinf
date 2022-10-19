const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statusSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        enum: [
            'Disponible',
            'Agotado'
        ]
    }
})

module.exports = mongoose.model('status', statusSchema);