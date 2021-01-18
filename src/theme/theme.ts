import { createTheme } from '@shopify/restyle'

import { colors } from './colors'
import { lengths } from './lengths'

export const theme = createTheme({
    colors: {
        mainBackground: colors.white,
        mainText: colors.black,
        action: colors.purpleDark,
        error: colors.red,
        gray: colors.gray, 
        secondaryBackground: colors.lightGray
    },
    spacing: {
        s: lengths.small,
        input: lengths.input,
        m: lengths.medium,
        l: lengths.large,
        xl: lengths.extraLarge,
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
        },
        error: {
            color: 'error'
        },
        link: {
            color: 'action',
            fontWeight: 'bold'
        },
        subHeader: {
            fontSize: 20,
            fontWeight: 'bold'
        }
    },
    inputVariants: {
        defaults: {
            color: 'mainText',
            borderRadius: lengths.border,
            width: {
                phone: '100%',
                tablet: lengths.largeBox
            }
        },
        box: {
            padding: 'input',
            borderWidth: 1,
            backgroundColor: 'mainBackground',
            borderColor: 'gray',
        }
    },
    formButtonVariants: {
        defaults: {
            justifyContent: 'center',
            alignItems: 'center',
            padding: 'input',
            borderWidth: 1,
            borderColor: 'action',
            marginTop: 'm',
            borderRadius: lengths.border,
            width: {
                phone: '100%',
                tablet: lengths.mediumBox
            }
        },
        expand: {
            width: '100%'
        }
    }
})

export const darkTheme: Theme = {
    ...theme,
    colors: {
        ...theme.colors,
        mainBackground: colors.black,
        mainText: colors.white,
        action: colors.purpleLight,
        // gray: colors.darkGray,
        secondaryBackground: colors.darkGray
    },
}

export type Theme = typeof theme;
