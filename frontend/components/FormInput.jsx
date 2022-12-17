import { FormControl, FormLabel, Input } from "@chakra-ui/react"

const FormInput = ({ onChange, placeholder, label, type, name, onBlur, value }) => {
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input placeholder={placeholder} type={type} onChange={onChange} name={name} onBlur={onBlur} value={value} />
        </FormControl>
    )
}

export default FormInput