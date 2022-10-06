const Product = require('../models/product');

const createProduct = (req, res) => {
    const { name, price, quantity, description } = req.body
    const newProduct = new Product({
        name,
        price,
        quantity,
        description
    })
    newProduct.save((error, product) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear el producto" })
        }
        return res.status(201).send(product)
    })
}

module.exports = {
    createProduct
}