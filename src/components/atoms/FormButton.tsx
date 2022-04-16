import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle'

import { Theme } from '../../theme'
import { Button } from './Button'

export const FormButton = createRestyleComponent<
VariantProps<Theme, 'formButtonVariants'> & React.ComponentProps<typeof Button>,
Theme
>([createVariant({ themeKey: 'formButtonVariants' })], Button)
