import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { object, SchemaOf, string } from 'yup'

import { useGetForm } from '../../hooks/useGetForm'
import { usePostForm } from '../../hooks/usePostForm'
import { FormValues } from '../../types/FormTypes'
import { Box } from '../atoms/Box'
import { FormButton } from '../atoms/FormButton'
import { FormInput } from '../atoms/FormInput'
import { Text } from '../atoms/Text'

const schema: SchemaOf<FormValues> = object().shape({
    firstName: string().required('First name is required'),
    lastName: string().required('Last name is required'),
})

export const AddForm: React.VFC = () => {

    const { data: formData } = useGetForm()
    const postForm = usePostForm().mutate

    const {
        handleSubmit, control, reset, errors 
    } = useForm<FormValues>({
        resolver: yupResolver(schema)
    })

    const onSubmit = handleSubmit((data) => postForm(data))
  
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
            {formData && formData?.length > 0 && (
                <>
                    <Box backgroundColor="shadow" margin="s" padding="m">
                        <Text variant="subHeader" marginBottom="m">Results:</Text>
                        {formData.map((data) => (
                            <Text marginTop="s">{data.firstName}, {data.lastName}</Text>
                        ))}
                    </Box>
                </>
            )}
        </Box>
    )
}
