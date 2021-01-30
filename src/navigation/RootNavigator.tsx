import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import { NotFoundScreen } from '../screens/NotFoundScreen'
import { PushScreen } from '../screens/PushScreen'
import { RootStackParamList } from '../types/navigationTypes'
import { DrawerNavigator } from './DrawerNavigator'

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
