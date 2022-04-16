import { ThemeProvider as RestyleThemeProvider } from '@shopify/restyle'
import React from 'react'
import { useColorScheme } from 'react-native-appearance'

import { darkTheme, theme } from '../../theme'

type ThemeProviderProps = unknown
/**
 * A FC that handles dark mode switching
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const colorScheme = useColorScheme()

    return (
        <RestyleThemeProvider theme={colorScheme === 'dark' ? darkTheme : theme}>
            {children}
        </RestyleThemeProvider>
    )
}
