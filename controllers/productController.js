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

const getProducts = (req, res) => {
    Product.find({}, (error, products) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo realizar la busqueda" })
        }
        if (products.length === 0) {
            return res.status(404).send({ message: "No se encontraron productos" })
        }
        return res.status(200).send(products)
    })
}

module.exports = {
    createProduct,
    getProducts
}