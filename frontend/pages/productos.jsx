import { useState } from 'react'
import { Textarea, Button, Container, Input, Stack, Text, HStack, Heading, FormControl, FormLabel } from '@chakra-ui/react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

const productos = () => {

	const [values, setValues] = useState({
		name: '',
		price: '',
		quantity: '',
		description: ''
	})
	const router = useRouter()

	const onSubmit = async (e) => {
		e.preventDefault()
		console.log(values)
		try {
			const response = await axios.post(`${process.env.API_URL}/product`, values)
			console.log(response)
			if (response.status === 201) {
				Swal.fire({
					title: 'Producto creado',
					text: 'El producto se ha creado correctamente',
					icon: 'success',
					confirmButtonText: 'Ok'
				}).then((result) => {
					router.push('/')
				})

			} else {
				Swal.fire({
					title: 'Error',
					text: 'Ha ocurrido un error',
					icon: 'error',
					confirmButtonText: 'Ok'
				})
			}
		} catch (err) {
			Swal.fire({
				title: 'Error',
				text: 'Ha ocurrido un error',
				icon: 'error',
				confirmButtonText: 'Ok'
			})
		}
	}

	const onChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		})
	}

	return (
		<Container maxW="container.md">
			<Heading textAlign={"center"} my={10}>Crear Productos</Heading>
			<Stack>
				<FormControl>
					<FormLabel>Nombre producto</FormLabel>
					<Input placeholder="Nombre producto" type={"text"} onChange={onChange} name={"name"} />
				</FormControl>
				<FormControl>
					<FormLabel>Precio</FormLabel>
					<Input placeholder="Precio" type={"number"} onChange={onChange} name={"price"} />
				</FormControl>
				<FormControl>
					<FormLabel>Stock</FormLabel>
					<Input placeholder="Stock" type={"number"} onChange={onChange} name={"quantity"} />
				</FormControl>
				<FormControl>
					<FormLabel>Descripción</FormLabel>
					<Textarea placeholder="Descripción" onChange={onChange} name={"description"} />
				</FormControl>
			</Stack>
			<Button colorScheme="teal" size="md" type="submit" my={5} onClick={onSubmit}> Crear Producto </Button>
		</Container>
	)
}

export default productos