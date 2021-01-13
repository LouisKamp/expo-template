import { useTheme } from '@shopify/restyle'
import { useWindowDimensions } from 'react-native'

import { Theme } from '../theme'

export const useIsLarge = () => {
    const dimensions = useWindowDimensions()
    const theme = useTheme<Theme>()

    return dimensions.width >= theme.breakpoints.tablet
}
