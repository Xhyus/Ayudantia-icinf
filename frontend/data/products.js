import axios from 'axios';

const getProduct = async (id, email) => {
    const response = await axios.get(`${process.env.API_URL}/product/search/${id}`, { headers: { cookie: email } });
    return response
}

const createProduct = async (product) => {
    const response = await axios.post(`${process.env.API_URL}/product`, {
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        description: product.description
    });
    return response
}

module.exports = {
    getProduct,
    createProduct
}