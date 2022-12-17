const Category = require('../models/category');
const Product = require('../models/product');

const createCategory = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const newCategory = new Category({
        name
    })
    newCategory.save((err, category) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear la categoria" })
        }
        Product.findByIdAndUpdate(id, { $push: { category: category._id } }, { new: true }, (err, product) => {
            if (err) {
                return res.status(400).send({ message: "Error al actualizar el producto" })
            }
            return res.status(201).send(product)
        })
    })
}


module.exports = {
    createCategory
}