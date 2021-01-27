import { ThemeProvider } from '@shopify/restyle'
import React from 'react'
import { useColorScheme } from 'react-native-appearance'

import { darkTheme, theme } from '../../theme'

type DarkModeHandlerProps = {

}

export const DarkModeHandler: React.FC<DarkModeHandlerProps> = ({ children }) => {
    const colorScheme = useColorScheme()

    return (
        <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : theme}>
            {children}
        </ThemeProvider>
    )
}