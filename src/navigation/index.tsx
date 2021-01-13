import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { useColorScheme } from 'react-native-appearance'

import { NotFoundScreen } from '../screens/NotFoundScreen'
import { RootStackParamList } from '../types/navigationTypes'
import { DrawerNavigator } from './DrawerNavigator'
import { linkingConfiguration } from './linkingConfiguration'

export const Navigation = () => {

    const colorScheme = useColorScheme()

    return (
        <NavigationContainer
            linking={linkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    )

}

const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Root" component={DrawerNavigator} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </Stack.Navigator>
    )
}
