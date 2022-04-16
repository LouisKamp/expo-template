import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle'
import * as React from 'react'
import {
    TextInput as BaseTextInput 
} from 'react-native'

import { Theme } from '../../theme'

export const TextInput = createRestyleComponent<
VariantProps<Theme, 'inputVariants'> & React.ComponentProps<typeof BaseTextInput>,
Theme
>([createVariant({ themeKey: 'inputVariants' })], BaseTextInput)
