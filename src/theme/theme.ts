import { createTheme } from '@shopify/restyle'

import { colors } from './colors'
import { lengths } from './lengths'

export const theme = createTheme({
    colors: {
        mainBackground: colors.pureWhite,
        mainText: colors.richBlack,
        secondaryText: colors.davysGray,
        action: colors.eerieBlack,
        error: colors.imperialRed,
        border: colors.davysGray, 
        shadow: colors.lightGray
    },
    spacing: {
        s: lengths.small,
        input: lengths.input,
        m: lengths.medium,
        l: lengths.large,
        xl: lengths.extraLarge,
    },
    breakpoints: {
        phone: lengths.phone,
        tablet: lengths.tablet,
    },
    textVariants: {
        defaults: {
            color: 'mainText',
        },
        header: {
            fontSize: 25,
            fontWeight: 'bold',
        },
        subHeader: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        info: {
            color: 'secondaryText'
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
            shadowOpacity: 0.5
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
            marginVertical: 's',
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
        mainBackground: colors.eerieBlack,
        mainText: colors.pureWhite,
        action: colors.cultured,
        border: colors.davysGray,
        shadow: colors.pureWhite
    },
}

export type Theme = typeof theme
