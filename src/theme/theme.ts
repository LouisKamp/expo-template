import { createTheme } from '@shopify/restyle'

import { colors } from './colors'

export const theme = createTheme({
    colors: {
        mainBackground: colors.white,
        mainText: colors.black,
        action: colors.purpleDark
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    textVariants: {
        defaults: {
            color: 'mainText'
        },
        buttonLabel: {
            color: 'action'
        }
    },
})

export const darkTheme: Theme = {
    ...theme,
    colors: {
        ...theme.colors,
        mainBackground: colors.black,
        mainText: colors.white,
        action: colors.purpleLight
    },
}

export type Theme = typeof theme;
