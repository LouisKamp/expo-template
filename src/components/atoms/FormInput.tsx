import React from 'react'
import { FieldError } from 'react-hook-form'

import { Box } from './Box'
import { Text } from './Text'
import { TextInput } from './TextInput'

type Props = React.ComponentProps<typeof TextInput> & {label?: string, errors?: FieldError}

export const FormInput: React.FC<Props> = ({ label, errors, ...rest }) => {
    return (
        <Box marginTop="m">
            <Box flexDirection="row" marginBottom="s">
                {errors ? (
                    <Text variant="error">{errors.message}</Text>
                ) : (
                    <Text>{label}</Text>
                )}
            </Box>
            <TextInput variant="box" {...rest} />
        </Box>
    ) 
}
