import {
    DarkTheme, DefaultTheme, NavigationContainer,  
} from '@react-navigation/native'
import * as React from 'react'
import { useColorScheme } from 'react-native-appearance'

import { linkingConfiguration } from './linkingConfiguration'

export const NavigationProvider: React.FC = ({ children }) => {

    const colorScheme = useColorScheme()

    return (
        <NavigationContainer
            linking={linkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            {children}
        </NavigationContainer>
    )

}
