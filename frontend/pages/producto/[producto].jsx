import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Container, Heading, Text, Button, Stack, Input, FormControl, FormLabel, Textarea } from '@chakra-ui/react'

export async function getServerSideProps(context) {
    try {
        const response = await axios.get(`${process.env.API_URL}/product/search/${context.params.producto}`)
        return {
            props: {
                data: response.data
            }
        }
    } catch (err) {
        return {
            redirect: {
                destination: '/productos',
                permanent: true
            }
        }
    }
}


const producto = (data) => {

    const router = useRouter()
    const { producto } = router.query
    const [product] = useState(data)
    console.log(product)

    const [contador, setContador] = useState(1)

    return (
        <Container maxW="container.md">
            <Button onClick={() => setContador(0)}>Contador a 0</Button>
            <Button onClick={() => setContador(1)}>Contador a 1</Button>
            {contador === 1 ? <Text>Soy admin</Text> : <Text>Soy usuario</Text>}
        </Container>

    )
}

export default producto