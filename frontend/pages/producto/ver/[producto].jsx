import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Container, Heading, Text, Button, Stack, Input, FormControl, FormLabel, Textarea, HStack } from '@chakra-ui/react'
import { getProduct } from '../../../data/products'
import ShowInfo from '../../../components/ShowInfo'


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
    console.log(product)
    console.log(`/producto/editar/${product._id}`)

    const handleDelete = async () => {
        console.log("Se borro el producto")
    }

    return (
        <Container maxW="container.xl" centerContent>
            <Heading my={10}> Producto: {product.name}</Heading>
            <Stack w={"full"}>
                <ShowInfo tag="Nombre" data={product.name} color="blue.500" />
                <HStack>
                    <ShowInfo tag="Precio" data={product.price} color="yellow.500" />
                    <ShowInfo tag="Cantidad" data={product.quantity} color="green.500" />
                </HStack>
                <ShowInfo tag="Descripción" data={product.description} color="red.500" />
            </Stack>
            <HStack w={"full"} py={10}>
                <Button w={"full"} colorScheme={"cyan"} onClick={() => router.push(`/producto/editar/${product._id}`)}>Editar</Button>
                <Button w={"full"} colorScheme={"green"} onClick={() => handleDelete()}>Eliminar</Button>
                <Button w={"full"} colorScheme={"orange"} onClick={() => router.push('/productos')}>Volver</Button>
            </HStack>
        </Container>
    )
}

export default producto