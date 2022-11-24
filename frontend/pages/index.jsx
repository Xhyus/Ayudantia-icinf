import { useState, useEffect } from 'react'
import { Button, Container, Input, Stack, Text, HStack, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Heading, } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Home() {

	const [products, setProducts] = useState([])
	const router = useRouter()

	const getProducts = async () => {
		const response = await axios.get(`${process.env.API_URL}/products`)
		setProducts(response.data)
	}

	useEffect(() => {
		getProducts()
	}, [])


	const showProducts = () => {
		return products.map(product => {
			return (
				<Tr key={product._id}>
					<Td>{product.name}</Td>
					<Td>{product.price}</Td>
					<Td>{product.quantity}</Td>
					<Td><Button onClick={() => router.push(`/producto/${product._id}`)}>Ver mas</Button></Td>
				</Tr>
			)
		})
	}

	return (
		<Container maxW="container.xl" centerContent>
			<Heading textAlign={"center"} my={10}>Productos</Heading>
			<Button colorScheme="teal" onClick={() => router.push('/productos')}>Crear Producto</Button>
			<Table variant="simple">
				<Thead>
					<Tr>
						<Td>Nombre</Td>
						<Td>Precio</Td>
						<Td>Stock</Td>
					</Tr>
				</Thead>
				<Tbody>
					{showProducts()}
				</Tbody>
			</Table>
		</Container>
	)
}
