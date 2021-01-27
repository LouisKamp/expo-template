import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { object, SchemaOf, string } from 'yup'

import { Box } from '../atoms/Box'
import { FormButton } from '../atoms/FormButton'
import { FormInput } from '../atoms/FormInput'

type FormValues = {
    firstName: string
    lastName: string
}

const schema: SchemaOf<FormValues> = object().shape({
    firstName: string().required('First name is required'),
    lastName: string().required('Last name is required'),
})

export const AddForm: React.VFC = () => {
    const {
        handleSubmit, control, reset, errors 
    } = useForm<FormValues>({
        resolver: yupResolver(schema)
    })

    const onSubmit = handleSubmit((data) => console.log(data))
  
    return (
        <Box>
            <Controller
                control={control}
                render={({ onChange, onBlur, value, }) => (
                    <FormInput
                        label="First name"
                        errors={errors.firstName}
                        onBlur={onBlur}
                        onChangeText={(newVal) => onChange(newVal)}
                        placeholder="First name"
                        value={value}/>
                )}
                defaultValue=""
                name="firstName"/>
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <FormInput
                        label="Last name"
                        placeholder="Last name"
                        errors={errors.lastName}
                        onBlur={onBlur}
                        onChangeText={(newVal) => onChange(newVal)}
                        value={value}/>
                )}
                defaultValue=""
                name="lastName"/>

            <FormButton
                label="Reset"
                onPress={() => {
                    reset({
                        firstName: 'Bill',
                        lastName: 'Luo'
                    })
                }}/>

            <FormButton
                label="Submit"
                onPress={onSubmit}/>
        </Box>
    )
}
