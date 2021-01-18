import {
    backgroundColor,
    BackgroundColorProps,
    border,
    BorderProps,
    color,
    ColorProps,
    layout,
    LayoutProps,
    spacing,
    SpacingProps,
    typography,
    TypographyProps,
    useRestyle,
} from '@shopify/restyle'
import * as React from 'react'
import { TouchableOpacity } from 'react-native'

import { Theme } from '../../theme'
import { Text } from './Text'

const restyleFunctions = [spacing, layout, border, backgroundColor, color, typography]
type Props = SpacingProps<Theme> & LayoutProps<Theme> & BorderProps<Theme> & BackgroundColorProps<Theme> & {
        onPress: () => void
        label: string
        textStyle?: ColorProps<Theme> & TypographyProps<Theme>
    }

export const Button = ({
    onPress, label, textStyle, ...rest 
}: Props) => {
    const props = useRestyle(restyleFunctions, rest)
    const propsText = useRestyle(restyleFunctions, textStyle || {})
    return (
        <TouchableOpacity onPress={onPress} {...props}>
            <Text variant="buttonLabel" {...propsText}>{label}</Text>
        </TouchableOpacity>
    )
}
