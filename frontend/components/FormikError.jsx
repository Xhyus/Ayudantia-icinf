import { Stack, Text } from '@chakra-ui/react'

const FormikError = ({ error }) => {
    return (
        <Stack w="full">
            <Text color="red.500" fontSize="sm" fontWeight="semibold" mt={1} mb={2}>{error}</Text>
        </Stack>
    )
}

export default FormikError