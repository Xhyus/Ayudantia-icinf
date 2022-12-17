import { useState, useEffect } from 'react'
import { Button, Container, Input, Heading, Stack, } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Home() {

	const [email, setEmail] = useState('')
	const router = useRouter()

	const handleChange = (e) => {
		setEmail(e.target.value)
	}

	const onsubmit = async (e) => {
		e.preventDefault()
		router.push('/productos')
	}

	return (
		<Container maxW="container.xl" centerContent>
			<Heading textAlign={"center"} my={10}>Ingrese el usuario</Heading>
			<Stack>
				<Input onChange={handleChange} type={"email"} />
				<Button colorScheme="teal" onClick={onsubmit}>Crear Producto</Button>
			</Stack>
		</Container>
	)
}
