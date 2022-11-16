const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const sendmail = (req, res) => {
    const { message } = req.body
    const token = process.env.PW
    const mail = 'igonzalez@ubiobio.cl'
    if (!token) {
        return res.status(400).send({ message: "No se ha entregado la contraseña de aplicación para el correo" })
    }
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'igonzalez@ubiobio.cl',
            pass: token
        }
    })
    let directory = [
        'mitchell.hidalgo1801@alumnos.ubiobio.cl',
        'ignacio.gonzalez1901@alumnos.ubiobio.cl'
    ]
    const mailOptions = {
        from: `Administrador <Prueba de texto>`,
        to: directory,
        subject: 'Prueba de correos',
        text: `Hola, se ha realizado de forma correcta el envio de los correos, el mensaje era ${message}`
        // html: `
        //     <h1>Felicitaciones, has enviado un correo</h1>
        //     <p>${message}</p>
        // `
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return res.status(400).send({ message: 'Error al enviar el correo' })
        }
        return res.status(200).send({ message: 'Mensaje enviado' })
    })

    transporter.verify().then(() => {
        console.log('Servidor de correos habilitado')
    }).catch(err => {
        console.log('Error al utilizar servidor de correos')
    })
}

module.exports = sendmail