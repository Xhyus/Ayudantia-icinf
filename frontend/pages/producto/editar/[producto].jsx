import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Container, Heading, Text, Button, Stack, Input, FormControl, FormLabel, Textarea } from '@chakra-ui/react'
import { getProducts } from '../../../data/products'

export async function getServerSideProps(context) {
    try {
        const response = await getProduct(context.query.producto, context.req.headers.cookie)
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


const producto = ({ data }) => {

    const router = useRouter()
    const { producto } = router.query
    const [product] = useState(data)


    return (
        <Container maxW="container.md">
            <Heading >{product.name}</Heading>
            <Heading> Editar</Heading>
        </Container>

    )
}

export default producto