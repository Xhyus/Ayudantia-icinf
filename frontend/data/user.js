import axios from 'axios'

const login = async (email) => {
    const response = await axios.post(`${process.env.API_URL}/user/login`, { email });
    return response
}

module.exports = {
    login
}