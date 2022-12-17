import axios from 'axios';

const getProduct = async (id, email) => {
    const response = await axios.get(`${process.env.API_URL}/product/search/${id}`, { headers: { cookie: email } });
    return response
}

const createProduct = async (product) => {
    const response = await axios.post(`${process.env.API_URL}/product`, product);
    return response
}

module.exports = {
    getProduct,
    createProduct
}