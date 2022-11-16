const Cart = require('../models/cart');

const createCart = (req, res) => {
    const { products } = req.body;
    const newCart = new Cart({ products });
    newCart.save((err, cart) => {
        if (err) {
            return res.status(400).send({ message: 'Error al crear el carrito' });
        }
        return res.status(201).send(cart);
    })
}
const getCarts = (req, res) => {
    Cart.find({}, (err, cart) => {
        if (err) {
            return res.status(400).send({ message: 'Error al obtener los carritos' });
        }
        return res.status(200).send(cart);
    })
}

const updateCart = (req, res) => {
    const { products } = req.body;
    const { id } = req.params;
    Cart.findOneAndUpdate(id, { products }, (err, cart) => {
        if (err) {
            return res.status(400).send({ message: 'Error al actualizar el carrito' });
        }
        if (!cart) {
            return res.status(404).send({ message: 'No se encontró el carrito' });
        }
        return res.status(200).send(cart);
    })
}

const deleteCart = (req, res) => {
    const { id } = req.params;
    Cart.findOneAndDelete(id, (err, cart) => {
        if (err) {
            return res.status(400).send({ message: 'Error al eliminar el carrito' });
        }
        if (!cart) {
            return res.status(404).send({ message: 'No se encontró el carrito' });
        }
        return res.status(200).send(cart);
    })
}

const getCart = (req, res) => {
    const { id } = req.params;
    Cart.findById(id, (err, cart) => {
        if (err) {
            return res.status(400).send({ message: 'Error al obtener el carrito' });
        }
        if (!cart) {
            return res.status(404).send({ message: 'No se encontró el carrito' });
        }
        return res.status(200).send(cart);
    })
}

module.exports = {
    createCart,
    getCarts,
    updateCart,
    deleteCart,
    getCart
}