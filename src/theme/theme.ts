import { createTheme } from '@shopify/restyle'

import { colors } from './colors'
import { lengths } from './lengths'

export const theme = createTheme({
    colors: {
        mainBackground: colors.white,
        mainText: colors.black,
        action: colors.purpleDark,
        error: colors.red,
        border: colors.gray, 
        secondaryBackground: colors.pureWhite,
        shadow: colors.black
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
            borderColor: 'border',
            shadowColor: 'shadow',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowRadius: 0,
            shadowOpacity: 0.3
        },
        error: {
            padding: 'input',
            borderWidth: 1,
            backgroundColor: 'mainBackground',
            borderColor: 'error',
            shadowColor: 'error',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowRadius: 0,
            shadowOpacity: 0.3
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
        secondaryBackground: colors.midnightGray,
        action: colors.purpleLight,
        border: colors.darkGray,
        shadow: colors.pureWhite
    },
}

export type Theme = typeof theme;
