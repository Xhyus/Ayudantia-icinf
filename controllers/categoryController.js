const Category = require('../models/category');

const createCategory = (req, res) => {
    const { name } = req.body
    const newCategory = new Category({
        name
    })
    newCategory.save((error, category) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear la categoria" })
        }
        return res.status(201).send(category)
    })
}

module.exports = {
    createCategory
}