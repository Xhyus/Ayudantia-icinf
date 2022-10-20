const User = require('../models/user');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    const password = await bcrypt.hash(req.body.password, 10);
    const { name, email } = req.body;
    const newUser = new User({ name, email, password });
    newUser.save((err, user) => {
        console.log(err)
        if (err) {
            return res.status(400).send({ message: 'Error al crear el usuario' });
        }
        return res.status(201).send(user);
    })
}

const login = async (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err) {
            return res.status(400).send({ message: 'Error al iniciar sesión' });
        }
        if (!user) {
            return res.status(404).send({ message: 'No se encontró el usuario' });
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(400).send({ message: 'Error al iniciar sesión' });
            }
            if (!result) {
                return res.status(404).send({ message: 'Contraseña incorrecta' });
            }
            return res.status(200).send(user);
        })
    })
}

const getUsers = async (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            return res.status(400).send({ message: 'Error al obtener los usuarios' });
        }
        return res.status(200).send(user);
    })
}

const getUser = (req, res) => {
    const { id } = req.params;
    User.findById(id, (err, user) => {
        if (err) {
            return res.status(400).send({ message: 'Error al obtener el usuario' });
        }
        if (!user) {
            return res.status(404).send({ message: 'No se encontró el usuario' });
        }
        return res.status(200).send(user);
    })
}

const updateUser = async (req, res) => {
    const { name, email, password } = req.body;
    const { id } = req.params;
    User.findOneAndUpdate(id, { name, email, password }, (err, user) => {
        if (err) {
            return res.status(400).send({ message: 'Error al actualizar el usuario' });
        }
        if (!user) {
            return res.status(404).send({ message: 'No se encontró el usuario' });
        }
        return res.status(200).send(user);
    })
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    User.findOneAndDelete(id, (err, user) => {
        if (err) {
            return res.status(400).send({ message: 'Error al eliminar el usuario' });
        }
        if (!user) {
            return res.status(404).send({ message: 'No se encontró el usuario' });
        }
        return res.status(200).send(user);
    })
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    login
}