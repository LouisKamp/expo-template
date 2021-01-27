import {
    DarkTheme, DefaultTheme, NavigationContainer,  
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { useColorScheme } from 'react-native-appearance'

import { NotFoundScreen } from '../screens/NotFoundScreen'
import { PushScreen } from '../screens/PushScreen'
import { RootStackParamList } from '../types/navigationTypes'
import { DrawerNavigator } from './DrawerNavigator'
import { linkingConfiguration } from './linkingConfiguration'

export const Navigation:React.FC = ({ children }) => {

    const colorScheme = useColorScheme()

    return (
        <NavigationContainer
            linking={linkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            {children}
        </NavigationContainer>
    )

}

const Stack = createStackNavigator<RootStackParamList>()

export const RootNavigator:React.VFC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Root" component={DrawerNavigator} />
            <Stack.Screen name="Push" component={PushScreen} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </Stack.Navigator>
    )
}
