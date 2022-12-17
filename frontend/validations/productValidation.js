import * as yup from 'yup';

const productValidation = yup.object({
    name: yup.string()
        .required('Name is required')
        .matches(/^[aA-zZ\s]+$/, 'El nombre debe contener caracteres validos'),
    price: yup.number()
        .required('Price is required')
        .positive('Price must be positive')
        .integer('Price must be an integer'),
    quantity: yup.number()
        .required('Quantity is required')
        .positive('Quantity must be positive')
        .integer('Quantity must be an integer'),
    description: yup.string()
        .required('Description is required')
        .matches(/^[aA-zZ\s]+$/, 'La descripción debe contener caracteres validos')
        .required('Description is required')
})

export default productValidation;