import { Button, Container, Stack, Heading } from '@chakra-ui/react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import { createProduct } from '../../data/products'
import { Formik } from 'formik'
import FormInput from '../../components/FormInput'
import productValidation from '../../validations/productValidation'
import FormikError from '../../components/FormikError'

const productos = () => {
	const router = useRouter()
	return (
		<Container maxW="container.md">
			<Heading textAlign={"center"} my={10}>Crear Productos</Heading>
			<Formik
				initialValues={{
					name: '',
					price: '',
					quantity: '',
					description: ''
				}}
				validationSchema={productValidation}
				onSubmit={async (values) => {
					try {
						const response = await createProduct(values)
						if (response.status === 201) {
							Swal.fire({
								icon: 'success',
								title: 'Producto creado',
								text: 'El producto se creo correctamente!',
							}).then(() => {
								router.push('/productos')
							})
						}
					} catch (error) {
						Swal.fire({
							icon: 'error',
							title: 'Oops...',
							text: 'Algo salió mal!',
						})
					}
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit
				}) => (
					<form onSubmit={handleSubmit} id="form">
						<Stack>
							<FormInput onChange={handleChange} placeholder="Nombre" label="Nombre" type={"text"} name={"name"} onBlur={handleBlur} value={values.name} />
							{touched.name && errors.name && <FormikError error={errors.name} />}
							<FormInput onChange={handleChange} placeholder="Precio" label="Precio" type={"number"} name={"price"} onBlur={handleBlur} value={values.price} />
							{touched.price && errors.price && <FormikError error={errors.price} />}
							<FormInput onChange={handleChange} placeholder="Stock" label="Stock" type={"number"} name={"quantity"} onBlur={handleBlur} value={values.quantity} />
							{touched.quantity && errors.quantity && <FormikError error={errors.quantity} />}
							<FormInput onChange={handleChange} placeholder="Descripción" label="Descripción" type={"text"} name={"description"} onBlur={handleBlur} value={values.description} />
							{touched.description && errors.description && <FormikError error={errors.description} />}
						</Stack>
						<Button colorScheme="teal" size="md" type="submit" my={5} onClick={handleSubmit}> Crear Producto </Button>
					</form>
				)}
			</Formik>
		</Container>
	)
}

export default productos