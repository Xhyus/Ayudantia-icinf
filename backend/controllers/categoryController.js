const Category = require('../models/category');
const Product = require('../models/product');

const createCategory = (req, res) => {
    const { name } = req.body // ["Hola","Mundo"]
    const { id } = req.params
    name.map((nameCategory) => {

    })
}


module.exports = {
    createCategory
}