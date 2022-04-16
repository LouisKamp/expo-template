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
    const { mutate, isLoading } = usePostForm()

    const {
        handleSubmit, control, reset 
    } = useForm<FormValues>({
        resolver: yupResolver(schema)
    })

    const onSubmit = handleSubmit((data) => mutate(data))
  
    return (
        <Box>
            <Controller
                control={control}
                defaultValue=""
                name="firstName"
                render={(props) => (
                    <FormInput
                        errors={props.fieldState.error}
                        label="First name"
                        placeholder="First name"
                        value={props.field.value}
                        onBlur={props.field.onBlur}
                        onChangeText={props.field.onChange}
                    />
                )}
            />

            <Controller
                control={control}
                defaultValue=""
                name="lastName"
                render={(props) => (
                    <FormInput
                        errors={props.fieldState.error}
                        label="Last name"
                        placeholder="Last name"
                        value={props.field.value}
                        onBlur={props.field.onBlur}
                        onChangeText={props.field.onChange}
                    />
                )}
            />

            <FormButton
                label="Reset"
                onPress={() => {
                    reset({
                        firstName: '',
                        lastName: ''
                    })
                }}
            />

            <FormButton
                label="Submit"
                onPress={onSubmit}
            />

            {isLoading && (
                <Text>Loading</Text>
            )}

            {formData && formData.length > 0 && (
                <Box backgroundColor="mainBackground" margin="s" padding="m">
                    <Text marginBottom="m" variant="subHeader">Results:</Text>

                    {formData.map((data) => (
                        <Text key={data.firstName+data.lastName} marginTop="s">
                            {`${data.firstName}, ${data.lastName}`}
                        </Text>
                    ))}
                </Box>
            )}
        </Box>
    )
}
