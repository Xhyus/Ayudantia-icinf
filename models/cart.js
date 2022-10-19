const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema = new Schema({
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'product',
        default: []
    }]
})

module.exports = mongoose.model('cart', cartSchema);